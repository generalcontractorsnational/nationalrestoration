"use client"

import { useState, useEffect } from "react"

type Orientation = "portrait" | "landscape" | undefined

export function useOrientation() {
  const [orientation, setOrientation] = useState<Orientation>(undefined)

  useEffect(() => {
    // Function to update orientation
    const updateOrientation = () => {
      if (typeof window !== "undefined" && window.screen && window.screen.orientation) {
        const type = window.screen.orientation.type
        if (type.includes("portrait")) {
          setOrientation("portrait")
        } else if (type.includes("landscape")) {
          setOrientation("landscape")
        }
      } else if (typeof window !== "undefined") {
        // Fallback for browsers that don't support screen.orientation
        if (window.innerHeight > window.innerWidth) {
          setOrientation("portrait")
        } else {
          setOrientation("landscape")
        }
      }
    }

    // Set initial orientation
    updateOrientation()

    // Add event listeners
    if (typeof window !== "undefined") {
      if (window.screen && window.screen.orientation) {
        window.addEventListener("orientationchange", updateOrientation)
      } else {
        window.addEventListener("resize", updateOrientation)
      }
    }

    // Clean up
    return () => {
      if (typeof window !== "undefined") {
        if (window.screen && window.screen.orientation) {
          window.removeEventListener("orientationchange", updateOrientation)
        } else {
          window.removeEventListener("resize", updateOrientation)
        }
      }
    }
  }, [])

  return orientation
}

export function useIsPortrait() {
  const orientation = useOrientation()
  return orientation === "portrait"
}

export function useIsLandscape() {
  const orientation = useOrientation()
  return orientation === "landscape"
}
