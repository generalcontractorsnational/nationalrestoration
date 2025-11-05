"use client"

import { useEffect, useState } from "react"

export function useTabletDetection() {
  const [isTablet, setIsTablet] = useState(false)
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait")

  useEffect(() => {
    // Function to check if device is a tablet
    const checkIfTablet = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const width = window.innerWidth
      const height = window.innerHeight

      // Check if device is between typical tablet sizes (600-1024px)
      const isTabletSize = width >= 641 && width <= 1024

      // Check orientation
      const isLandscape = width > height
      setOrientation(isLandscape ? "landscape" : "portrait")

      // Check for tablet-specific user agents
      const isTabletDevice =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent,
        )

      setIsTablet(isTabletSize || isTabletDevice)
    }

    // Initial check
    checkIfTablet()

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", checkIfTablet)
    window.addEventListener("orientationchange", checkIfTablet)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfTablet)
      window.removeEventListener("orientationchange", checkIfTablet)
    }
  }, [])

  return { isTablet, orientation }
}
