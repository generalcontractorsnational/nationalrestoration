"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { AssessmentData } from "./storm-damage-assessment-tool"
import { Mail, Phone, Send, Wifi, WifiOff, Sparkles, Download, Mic, Play, Pause } from "lucide-react"
import { format } from "date-fns"
import { formatDuration } from "@/lib/utils"

interface DamageReportProps {
  assessmentData: AssessmentData
  onSubmit?: () => void
}

export default function DamageReport({ assessmentData, onSubmit }: DamageReportProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null)
  const audioRefs = useRef<Map<string, HTMLAudioElement>>(new Map())

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    // Set initial state
    setIsOnline(navigator.onLine)

    // Add event listeners
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Clean up
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  // Get damage type labels
  const getDamageTypeLabels = () => {
    const damageTypeMap: Record<string, string> = {
      roof: "Roof Damage",
      siding: "Siding Damage",
      windows: "Window Damage",
      gutters: "Gutter Damage",
      structural: "Structural Damage",
      water: "Water Damage",
      other: "Other Damage",
    }

    return assessmentData.damageTypes.map((type) => damageTypeMap[type] || type)
  }

  // Get area labels
  const getAreaLabel = (area: string) => {
    const areaMap: Record<string, string> = {
      exterior: "Exterior",
      roof: "Roof",
      interior: "Interior",
      basement: "Basement",
      garage: "Garage",
      yard: "Yard/Property",
    }

    return areaMap[area] || area
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

  // Submit the report
  const submitReport = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit()
    }
  }

  // Download the report
  const downloadReport = () => {
    // In a real implementation, you would generate a PDF
    // For this demo, we'll create a JSON file
    const reportData = {
      ...assessmentData,
      generatedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `storm-damage-report-${format(new Date(), "yyyy-MM-dd")}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Add this function inside the DamageReport component
  const getOverallSeverity = () => {
    // Get all analysis results
    const analysisResults = assessmentData.documentation
      .filter((item) => item.type === "photo" && item.analysis)
      .map((item) => item.analysis?.severityScore || 0)

    if (analysisResults.length === 0) return null

    // Calculate average severity score
    const averageScore = analysisResults.reduce((sum, score) => sum + score, 0) / analysisResults.length

    // Determine overall severity
    let severity: "low" | "medium" | "high"
    if (averageScore <= 3) {
      severity = "low"
    } else if (averageScore <= 6) {
      severity = "medium"
    } else {
      severity = "high"
    }

    return {
      severity,
      score: Math.round(averageScore * 10) / 10,
    }
  }

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        audio.pause()
        audio.src = ""
      })
      audioRefs.current.clear()
    }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Storm Damage Assessment Report</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Review your assessment report and submit it to our team for professional assistance.
        </p>

        {/* Network status indicator */}
        <div className={`flex items-center gap-2 mt-2 text-sm ${isOnline ? "text-green-600" : "text-amber-600"}`}>
          {isOnline ? (
            <>
              <Wifi className="h-4 w-4" />
              <span>Online - All features available</span>
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4" />
              <span>Offline - Report will be submitted when connection is restored</span>
            </>
          )}
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Storm Damage Assessment Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium">Contact Information</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="text-sm">{assessmentData.contactInfo.name || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm">{assessmentData.contactInfo.email || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm">{assessmentData.contactInfo.phone || "Not provided"}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="text-sm">{assessmentData.contactInfo.address || "Not provided"}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium">Damage Types</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {getDamageTypeLabels().map((label, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium">Damage Locations</h4>
              {assessmentData.damageLocations.length > 0 ? (
                <div className="space-y-2 mt-2">
                  {assessmentData.damageLocations.map((location, index) => (
                    <div key={index} className="text-sm border rounded-md p-2">
                      <p className="font-medium">{getAreaLabel(location.area)}</p>
                      <p className="text-muted-foreground text-xs mt-1">{location.notes}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">No damage locations marked</p>
              )}
            </div>

            <div>
              <h4 className="text-sm font-medium">Documentation</h4>
              {assessmentData.documentation.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {assessmentData.documentation.map((item, index) => (
                    <div key={index} className="text-sm border rounded-md p-2">
                      {item.type === "photo" ? (
                        <div>
                          <p className="font-medium">Photo</p>
                          <div className="mt-1 h-20 overflow-hidden rounded">
                            <img
                              src={item.content || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
                              alt="Damage documentation"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ) : item.type === "voice" ? (
                        <div>
                          <div className="flex items-center gap-2">
                            <Mic className="h-4 w-4 text-muted-foreground" />
                            <p className="font-medium">Voice Note</p>
                            <span className="text-xs text-muted-foreground">
                              {item.duration ? formatDuration(item.duration) : ""}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8"
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
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p className="font-medium">Note</p>
                          <p className="text-muted-foreground text-xs mt-1">{item.content}</p>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {format(item.timestamp, "MMM d, yyyy h:mm a")}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">No documentation added</p>
              )}
            </div>

            <div>
              <h4 className="text-sm font-medium">AI Damage Analysis</h4>
              {assessmentData.documentation.some((item) => item.type === "photo" && item.analysis) ? (
                <div className="space-y-2 mt-2">
                  {getOverallSeverity() && (
                    <div className="text-sm border rounded-md p-2 bg-muted/30">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <p className="font-medium">Overall Severity Assessment</p>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            getOverallSeverity()?.severity === "high"
                              ? "bg-red-100 text-red-800"
                              : getOverallSeverity()?.severity === "medium"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-green-100 text-green-800"
                          }`}
                        >
                          {getOverallSeverity()?.severity === "high"
                            ? "High"
                            : getOverallSeverity()?.severity === "medium"
                              ? "Medium"
                              : "Low"}{" "}
                          Severity
                        </span>
                        <span className="text-xs text-muted-foreground">Score: {getOverallSeverity()?.score}/10</span>
                      </div>
                    </div>
                  )}

                  {assessmentData.documentation
                    .filter((item) => item.type === "photo" && item.analysis)
                    .map((item, index) => (
                      <div key={index} className="text-sm border rounded-md p-2">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Analysis #{index + 1}</p>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                              item.analysis?.severity === "high"
                                ? "bg-red-100 text-red-800"
                                : item.analysis?.severity === "medium"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {item.analysis?.severity === "high"
                              ? "High"
                              : item.analysis?.severity === "medium"
                                ? "Medium"
                                : "Low"}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-xs mt-1">{item.analysis?.details}</p>
                        <p className="text-primary text-xs mt-1 font-medium">
                          Recommendation: {item.analysis?.recommendations}
                        </p>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground mt-2">No AI analysis performed</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <Button onClick={downloadReport} variant="outline" className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
        <Button onClick={submitReport} disabled={isSubmitting || isSubmitted} className="w-full">
          {isSubmitting ? (
            "Submitting..."
          ) : isSubmitted ? (
            "Submitted Successfully"
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Submit for Professional Help
            </>
          )}
        </Button>
      </div>

      {isSubmitted && (
        <Card className="bg-primary/10 border-primary">
          <CardContent className="p-4">
            <h4 className="font-medium text-primary">Thank you for your submission!</h4>
            <p className="text-sm mt-2">
              Our team will review your assessment and contact you shortly to discuss next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="sm" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call Us Now: 1-800-RESTORE
              </Button>
              <Button size="sm" variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email: help@nationalrestoration.com
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
