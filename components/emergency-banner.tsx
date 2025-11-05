"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <p className="font-medium">
              <span className="hidden sm:inline">Storm damage? We offer 24/7 emergency response. </span>
              <span className="font-bold">Call 1-800-RESTORE now</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="bg-transparent border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10"
            >
              <Link href="/services/storm-damage">Learn More</Link>
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-destructive-foreground/80 hover:text-destructive-foreground"
              aria-label="Close emergency banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
