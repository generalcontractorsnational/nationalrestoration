"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TouchRippleProps {
  children: React.ReactNode
  color?: string
  className?: string
  disabled?: boolean
}

export function TouchRipple({
  children,
  color = "rgba(255, 255, 255, 0.7)",
  className,
  disabled = false,
}: TouchRippleProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const nextId = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Clean up ripples after animation completes
  useEffect(() => {
    if (ripples.length === 0) return

    const timeoutId = setTimeout(() => {
      setRipples([])
    }, 1000) // Slightly longer than animation duration

    return () => clearTimeout(timeoutId)
  }, [ripples])

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return

    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const touch = e.touches[0]

    // Calculate position relative to container
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top

    // Calculate ripple size (diagonal of container for full coverage)
    const size = Math.max(rect.width, rect.height) * 2

    // Add new ripple
    setRipples([...ripples, { id: nextId.current, x, y, size }])
    nextId.current += 1
  }

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)} onTouchStart={handleTouchStart}>
      {children}

      {/* Render ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            position: "absolute",
            top: ripple.y - ripple.size / 2,
            left: ripple.x - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderRadius: "50%",
            backgroundColor: color,
            opacity: 0,
            transform: "scale(0)",
            animation: "ripple 0.8s ease-out",
            pointerEvents: "none",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
