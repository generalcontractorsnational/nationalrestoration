"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { DamageDocumentationItem } from "./storm-damage-assessment-tool"
import { Camera, FileText, Plus, Trash, Upload, X, Sparkles, Mic, Play, Pause } from "lucide-react"
import { generateId, formatDuration } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { analyzeDamagePhoto } from "@/app/actions/analyze-damage"
import DamageAnalysisResult from "./damage-analysis-result"
import VoiceRecorder from "./voice-recorder"

interface DamageDocumentationProps {
  documentation: DamageDocumentationItem[]
  onDocumentationChange: (documentation: DamageDocumentationItem[]) => void
  contactInfo: {
    name: string
    email: string
    phone: string
    address: string
  }
  onContactInfoChange: (contactInfo: {
    name: string
    email: string
    phone: string
    address: string
  }) => void
}

export default function DamageDocumentation({
  documentation,
  onDocumentationChange,
  contactInfo,
  onContactInfoChange,
}: DamageDocumentationProps) {
  const [note, setNote] = useState("")
  const [isCameraOpen, setIsCameraOpen] = useState(false)
  const [isVoiceRecorderOpen, setIsVoiceRecorderOpen] = useState(false)
  const [hasGeolocation, setHasGeolocation] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map())
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null)

  // Add these state variables inside the DamageDocumentation component
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [currentAnalysisId, setCurrentAnalysisId] = useState<string | null>(null)
  const [selectedDamageType, setSelectedDamageType] = useState<string>("roof")

  // Add this function inside the DamageDocumentation component
  const analyzePhoto = async (id: string, imageData: string) => {
    setIsAnalyzing(true)
    setCurrentAnalysisId(id)

    try {
      const result = await analyzeDamagePhoto(imageData, selectedDamageType)

      // Update the documentation item with the analysis result
      const updatedDocs = documentation.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            analysis: result,
          }
        }
        return item
      })

      onDocumentationChange(updatedDocs)
    } catch (error) {
      console.error("Error analyzing photo:", error)
    } finally {
      setIsAnalyzing(false)
      setCurrentAnalysisId(null)
    }
  }

  // Add a photo
  const addPhoto = async (file: File) => {
    // In a real implementation, you would upload the file to a server
    // For this demo, we'll create a placeholder URL
    const reader = new FileReader()
    reader.onload = async (e) => {
      if (e.target?.result) {
        const photoData = e.target.result as string
        // Call the action to analyze the damage photo
        // const analysisResult = await analyzeDamagePhoto(photoData)

        const newPhoto: DamageDocumentationItem = {
          id: generateId(),
          type: "photo",
          content: photoData,
          timestamp: new Date(),
          // analysis: analysisResult || undefined, // Include analysis result
        }
        onDocumentationChange([...documentation, newPhoto])
        await analyzePhoto(newPhoto.id, photoData)
      }
    }
    reader.readAsDataURL(file)
  }

  // Add a note
  const addNote = () => {
    if (note.trim()) {
      const newNote: DamageDocumentationItem = {
        id: generateId(),
        type: "note",
        content: note,
        timestamp: new Date(),
      }
      onDocumentationChange([...documentation, newNote])
      setNote("")
    }
  }

  // Add a voice note
  const addVoiceNote = (audioBlob: Blob, duration: number) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      if (e.target?.result) {
        const audioData = e.target.result as string
        const newVoiceNote: DamageDocumentationItem = {
          id: generateId(),
          type: "voice",
          content: audioData,
          timestamp: new Date(),
          duration: duration,
        }
        onDocumentationChange([...documentation, newVoiceNote])
        setIsVoiceRecorderOpen(false)
      }
    }
    reader.readAsDataURL(audioBlob)
  }

  // Play/pause voice note
  const toggleVoiceNote = (id: string, audioData: string) => {
    // If we're already playing this audio, pause it
    if (playingAudioId === id) {
      const audio = audioRefs.current.get(id)
      if (audio) {
        audio.pause()
        setPlayingAudioId(null)
      }
      return
    }

    // If we're playing a different audio, stop it
    if (playingAudioId) {
      const currentAudio = audioRefs.current.get(playingAudioId)
      if (currentAudio) {
        currentAudio.pause()
      }
    }

    // Play the new audio
    let audio = audioRefs.current.get(id)
    if (!audio) {
      audio = new Audio(audioData)
      audio.addEventListener("ended", () => setPlayingAudioId(null))
      audioRefs.current.set(id, audio)
    }

    audio.play()
    setPlayingAudioId(id)
  }

  // Remove a documentation item
  const removeItem = (id: string) => {
    // If we're removing an audio that's playing, stop it
    if (playingAudioId === id) {
      const audio = audioRefs.current.get(id)
      if (audio) {
        audio.pause()
      }
      setPlayingAudioId(null)
      audioRefs.current.delete(id)
    }

    onDocumentationChange(documentation.filter((item) => item.id !== id))
  }

  // Handle contact info change
  const handleContactInfoChange = (field: keyof typeof contactInfo, value: string) => {
    onContactInfoChange({
      ...contactInfo,
      [field]: value,
    })
  }

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addPhoto(e.target.files[0])
      // Reset the input
      e.target.value = ""
    }
  }

  // Check if geolocation is available
  useEffect(() => {
    if ("geolocation" in navigator) {
      setHasGeolocation(true)
    }
  }, [])

  // Handle opening the camera
  const handleCapturePhoto = () => {
    setIsCameraOpen(true)
    setTimeout(() => {
      if (videoRef.current) {
        navigator.mediaDevices
          .getUserMedia({ video: { facingMode: "environment" }, audio: false })
          .then((stream) => {
            if (videoRef.current) {
              videoRef.current.srcObject = stream
            }
          })
          .catch((err) => {
            console.error("Error accessing camera:", err)
          })
      }
    }, 100)
  }

  // Handle taking a photo
  const takePhoto = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      // Draw the current video frame to the canvas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height)

      // Convert canvas to data URL
      const photoData = canvas.toDataURL("image/jpeg")

      // Add geolocation if available
      if (hasGeolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const newPhoto: DamageDocumentationItem = {
              id: generateId(),
              type: "photo",
              content: photoData,
              timestamp: new Date(),
              location: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
              // analysis: analysisResult || undefined,
            }
            onDocumentationChange([...documentation, newPhoto])
            await analyzePhoto(newPhoto.id, photoData)
          },
          async (error) => {
            // If geolocation fails, still save the photo without coordinates
            const newPhoto: DamageDocumentationItem = {
              id: generateId(),
              type: "photo",
              content: photoData,
              timestamp: new Date(),
              // analysis: analysisResult || undefined,
            }
            onDocumentationChange([...documentation, newPhoto])
            await analyzePhoto(newPhoto.id, photoData)
          },
        )
      } else {
        const newPhoto: DamageDocumentationItem = {
          id: generateId(),
          type: "photo",
          content: photoData,
          timestamp: new Date(),
          // analysis: analysisResult || undefined,
        }
        onDocumentationChange([...documentation, newPhoto])
        await analyzePhoto(newPhoto.id, photoData)
      }

      // Close the camera
      closeCamera()
    }
  }

  // Close the camera
  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
    }
    setIsCameraOpen(false)
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium">Document the Damage</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Add photos, notes, and voice recordings to document the storm damage to your property.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-4">Add Photos</h4>
          <Card className="border-dashed">
            <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px]">
              <Camera className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm text-center text-muted-foreground mb-4">
                Take photos or upload images of the damage
              </p>
              <div className="w-full mb-4">
                <Label htmlFor="damage-type" className="text-sm mb-1 block">
                  Damage Type (for AI Analysis)
                </Label>
                <select
                  id="damage-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={selectedDamageType}
                  onChange={(e) => setSelectedDamageType(e.target.value)}
                >
                  <option value="roof">Roof Damage</option>
                  <option value="siding">Siding/Exterior Damage</option>
                  <option value="window">Window Damage</option>
                  <option value="water">Water Damage</option>
                  <option value="structural">Structural Damage</option>
                  <option value="other">Other Damage</option>
                </select>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                <Input type="file" accept="image/*" className="hidden" id="photo-upload" onChange={handleFileChange} />
                <Label
                  htmlFor="photo-upload"
                  className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 w-full sm:w-auto"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Photo
                </Label>
                <Button onClick={handleCapturePhoto} className="w-full sm:w-auto" type="button">
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-4">Add Notes</h4>
            <div className="space-y-4">
              <Textarea
                placeholder="Add notes about the damage..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="min-h-[120px]"
              />
              <Button onClick={addNote} disabled={!note.trim()} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Note
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Add Voice Notes</h4>
            <Button onClick={() => setIsVoiceRecorderOpen(true)} className="w-full" variant="outline">
              <Mic className="mr-2 h-4 w-4" /> Record Voice Note
            </Button>
          </div>
        </div>
      </div>

      {documentation.length > 0 && (
        <div>
          <h4 className="font-medium mb-4">Documentation Items</h4>
          <div className="grid grid-cols-1 gap-4">
            {documentation.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                {item.type === "photo" ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={item.content || "/placeholder.svg"}
                        alt="Damage documentation"
                        className="w-full h-40 object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>

                    {!item.analysis && (
                      <div className="p-4 pt-0">
                        <Button
                          onClick={() => analyzePhoto(item.id, item.content)}
                          disabled={isAnalyzing && currentAnalysisId === item.id}
                          className="w-full"
                          variant="outline"
                        >
                          {isAnalyzing && currentAnalysisId === item.id ? (
                            <>Analyzing...</>
                          ) : (
                            <>
                              <Sparkles className="mr-2 h-4 w-4" />
                              Analyze with AI
                            </>
                          )}
                        </Button>
                      </div>
                    )}

                    {item.analysis && (
                      <div className="p-4 pt-0">
                        <DamageAnalysisResult result={item.analysis} />
                      </div>
                    )}

                    {isAnalyzing && currentAnalysisId === item.id && (
                      <div className="p-4 pt-0">
                        <DamageAnalysisResult
                          isLoading={true}
                          result={{
                            severity: "low",
                            severityScore: 0,
                            details: "",
                            recommendations: "",
                            timestamp: "",
                          }}
                        />
                      </div>
                    )}
                  </div>
                ) : item.type === "voice" ? (
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <Mic className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Voice Note</span>
                        <span className="text-xs text-muted-foreground">
                          {item.duration ? formatDuration(item.duration) : ""}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeItem(item.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 bg-transparent"
                        onClick={() => toggleVoiceNote(item.id, item.content)}
                      >
                        {playingAudioId === item.id ? (
                          <>
                            <Pause className="h-4 w-4 mr-2" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4 mr-2" />
                            Play
                          </>
                        )}
                      </Button>
                      <div
                        className={`h-1 flex-1 rounded-full ${playingAudioId === item.id ? "bg-primary" : "bg-muted"}`}
                      ></div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2">{item.timestamp.toLocaleString()}</p>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Note</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeItem(item.id)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm mt-2">{item.content}</p>
                    <p className="text-xs text-muted-foreground mt-2">{item.timestamp.toLocaleString()}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      <div>
        <h4 className="font-medium mb-4">Your Contact Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={contactInfo.name}
              onChange={(e) => handleContactInfoChange("name", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={contactInfo.email}
              onChange={(e) => handleContactInfoChange("email", e.target.value)}
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={contactInfo.phone}
              onChange={(e) => handleContactInfoChange("phone", e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Property Address</Label>
            <Input
              id="address"
              value={contactInfo.address}
              onChange={(e) => handleContactInfoChange("address", e.target.value)}
              placeholder="123 Main St, City, State, ZIP"
            />
          </div>
        </div>
      </div>

      {/* Camera Dialog */}
      <Dialog open={isCameraOpen} onOpenChange={(open) => !open && closeCamera()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Take a Photo</DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video bg-black rounded-md overflow-hidden">
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
            <canvas ref={canvasRef} className="hidden" />
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={closeCamera}>
              Cancel
            </Button>
            <Button onClick={takePhoto}>
              <Camera className="mr-2 h-4 w-4" />
              Capture
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Voice Recorder Dialog */}
      <Dialog open={isVoiceRecorderOpen} onOpenChange={setIsVoiceRecorderOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Record Voice Note</DialogTitle>
          </DialogHeader>
          <VoiceRecorder onRecordingComplete={addVoiceNote} maxDuration={120} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
