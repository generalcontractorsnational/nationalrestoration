"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mic, Square, Play, Pause } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { formatDuration } from "@/lib/utils"

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob, duration: number) => void
  maxDuration?: number // in seconds
}

export default function VoiceRecorder({ onRecordingComplete, maxDuration = 60 }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Clean up function
  const cleanup = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
  }

  // Clean up on unmount
  useEffect(() => {
    return cleanup
  }, [])

  // Handle audio playback ended
  useEffect(() => {
    const handleEnded = () => setIsPlaying(false)

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded)
      }
    }
  }, [audioUrl])

  // Start recording
  const startRecording = async () => {
    try {
      cleanup()

      audioChunksRef.current = []
      setRecordingDuration(0)
      setAudioUrl(null)

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data)
        }
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        onRecordingComplete(audioBlob, recordingDuration)
      }

      // Start the timer
      timerRef.current = setInterval(() => {
        setRecordingDuration((prev) => {
          const newDuration = prev + 1
          if (newDuration >= maxDuration) {
            stopRecording()
            return maxDuration
          }
          return newDuration
        })
      }, 1000)

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error("Error starting recording:", error)
    }
  }

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop()
    }

    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
    }

    setIsRecording(false)
  }

  // Toggle audio playback
  const togglePlayback = () => {
    if (!audioRef.current || !audioUrl) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <Card className="border-dashed">
      <CardContent className="p-4 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center space-y-4">
          {/* Recording status */}
          <div className="text-center">
            {isRecording ? (
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-sm font-medium">Recording: {formatDuration(recordingDuration)}</span>
              </div>
            ) : audioUrl ? (
              <span className="text-sm font-medium">Recording complete: {formatDuration(recordingDuration)}</span>
            ) : (
              <span className="text-sm text-muted-foreground">Ready to record</span>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center space-x-2">
            {!isRecording && !audioUrl && (
              <Button onClick={startRecording} size="sm" className="flex items-center">
                <Mic className="mr-2 h-4 w-4" />
                Start Recording
              </Button>
            )}

            {isRecording && (
              <Button onClick={stopRecording} size="sm" variant="destructive" className="flex items-center">
                <Square className="mr-2 h-4 w-4" />
                Stop Recording
              </Button>
            )}

            {audioUrl && !isRecording && (
              <Button onClick={togglePlayback} size="sm" variant="outline" className="flex items-center">
                {isPlaying ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Play
                  </>
                )}
              </Button>
            )}

            {audioUrl && !isRecording && (
              <Button onClick={startRecording} size="sm" variant="outline" className="flex items-center">
                <Mic className="mr-2 h-4 w-4" />
                Record New
              </Button>
            )}
          </div>

          {/* Hidden audio element for playback */}
          {audioUrl && <audio ref={audioRef} src={audioUrl} className="hidden" />}
        </div>
      </CardContent>
    </Card>
  )
}
