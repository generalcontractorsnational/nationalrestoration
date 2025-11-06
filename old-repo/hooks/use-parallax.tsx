"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "./use-reduced-motion"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  easing?: number
  startOffset?: number
  maxTranslate?: number
  disabled?: boolean
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.2,
  direction = "up",
  easing = 1,
  startOffset = 0,
  maxTranslate = 100,
  disabled = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)
  const frameRef = useRef<number>(0)
  const scrollY = useRef(0)
  const prefersReducedMotion = useReducedMotion()

  // Don't apply parallax if user prefers reduced motion
  const shouldApplyParallax = !prefersReducedMotion && !disabled

  useEffect(() => {
    if (!shouldApplyParallax) return

    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    const updateParallax = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const scrollPosition = scrollY.current

      // Calculate how far the element is from the top of the viewport
      const elementTop = rect.top + scrollPosition
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate when the element is in view
      const isInView =
        scrollPosition + windowHeight > elementTop && scrollPosition < elementTop + elementHeight + windowHeight

      if (isInView) {
        // Calculate how far the element is through the viewport
        const distanceFromTop = scrollPosition + windowHeight - elementTop
        const percentageScrolled = Math.min(Math.max(distanceFromTop / (elementHeight + windowHeight), 0), 1)

        // Apply easing
        const easedPercentage = Math.pow(percentageScrolled, easing)

        // Calculate the offset based on direction and speed
        let newOffset = startOffset + easedPercentage * maxTranslate * speed

        // Limit the maximum translation
        newOffset = Math.min(Math.max(newOffset, -maxTranslate), maxTranslate)

        setOffset(newOffset)
      }

      frameRef.current = requestAnimationFrame(updateParallax)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    frameRef.current = requestAnimationFrame(updateParallax)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(frameRef.current)
    }
  }, [speed, direction, easing, startOffset, maxTranslate, shouldApplyParallax])

  // Calculate transform style based on direction
  const getTransform = () => {
    if (!shouldApplyParallax) return {}

    switch (direction) {
      case "up":
        return { transform: `translateY(${-offset}px)` }
      case "down":
        return { transform: `translateY(${offset}px)` }
      case "left":
        return { transform: `translateX(${-offset}px)` }
      case "right":
        return { transform: `translateX(${offset}px)` }
      default:
        return { transform: `translateY(${-offset}px)` }
    }
  }

  return { ref, style: getTransform(), offset }
}
