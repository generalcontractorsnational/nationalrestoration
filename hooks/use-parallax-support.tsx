"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "./use-reduced-motion"

export function useParallaxSupport() {
  const [isSupported, setIsSupported] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Check if the device has a gyroscope (for mobile parallax)
    const hasDeviceMotion = "DeviceMotionEvent" in window

    // Check if the device is low-powered
    const isLowPowered = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false

    // Check if the browser supports IntersectionObserver
    const hasIntersectionObserver = "IntersectionObserver" in window

    // Disable parallax on low-powered devices or if reduced motion is preferred
    setIsSupported(hasIntersectionObserver && !prefersReducedMotion && !(isLowPowered && !hasDeviceMotion))
  }, [prefersReducedMotion])

  return isSupported
}
