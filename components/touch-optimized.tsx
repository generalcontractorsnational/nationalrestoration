"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useIsTouchDevice } from "@/hooks/use-media-query"

interface TouchOptimizedProps {
  children: React.ReactNode
  className?: string
  activeClassName?: string
  disableOnDesktop?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  onLongPress?: () => void
  longPressDelay?: number
  ripple?: boolean
  rippleColor?: string
  rippleDuration?: number
  disabled?: boolean
  as?: React.ElementType
}

export default function TouchOptimized({
  children,
  className,
  activeClassName = "bg-accent/50",
  disableOnDesktop = true,
  onClick,
  onLongPress,
  longPressDelay = 500,
  ripple = true,
  rippleColor = "rgba(0, 0, 0, 0.1)",
  rippleDuration = 600,
  disabled = false,
  as: Component = "div",
}: TouchOptimizedProps) {
  const [isActive, setIsActive] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])
  const elementRef = useRef<HTMLDivElement>(null)
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isTouchDevice = useIsTouchDevice()
  const rippleIdRef = useRef(0)

  // Clear the long press timer
  const clearLongPressTimer = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
      longPressTimerRef.current = null
    }
  }

  // Handle touch/mouse start
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return
    if (disableOnDesktop && !isTouchDevice && "touches" in e) return

    setIsActive(true)

    // Start long press timer
    if (onLongPress) {
      clearLongPressTimer()
      longPressTimerRef.current = setTimeout(() => {
        onLongPress()
        setIsActive(false)
      }, longPressDelay)
    }

    // Create ripple effect
    if (ripple && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()

      let x, y
      if ("touches" in e && e.touches[0]) {
        x = e.touches[0].clientX - rect.left
        y = e.touches[0].clientY - rect.top
      } else if ("clientX" in e) {
        x = e.clientX - rect.left
        y = e.clientY - rect.top
      } else {
        x = rect.width / 2
        y = rect.height / 2
      }

      // Calculate ripple size (diagonal of the element)
      const size = Math.max(rect.width, rect.height) * 2

      const newRipple = {
        id: rippleIdRef.current++,
        x,
        y,
        size,
      }

      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
      }, rippleDuration)
    }
  }

  // Handle touch/mouse end
  const handleEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (disabled) return
    if (disableOnDesktop && !isTouchDevice && "touches" in e) return

    setIsActive(false)
    clearLongPressTimer()
  }

  // Handle click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    if (onClick) onClick(e)
  }

  // Clean up on unmount
  useEffect(() => {
    return () => {
      clearLongPressTimer()
    }
  }, [])

  return (
    <Component
      ref={elementRef}
      className={cn(
        "relative overflow-hidden touch-action-manipulation",
        isActive && !disabled ? activeClassName : "",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        className,
      )}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      onMouseDown={isTouchDevice ? undefined : handleStart}
      onMouseUp={isTouchDevice ? undefined : handleEnd}
      onMouseLeave={isTouchDevice ? undefined : handleEnd}
      onClick={handleClick}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {children}

      {/* Ripple effects */}
      {ripple &&
        ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none opacity-70"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: rippleColor,
              transform: "scale(0)",
              animation: `ripple ${rippleDuration}ms ease-out forwards`,
            }}
          />
        ))}

      {/* Add ripple animation */}
      <style jsx global>{`
        @keyframes ripple {
          to {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .touch-action-manipulation {
          touch-action: manipulation;
        }
      `}</style>
    </Component>
  )
}
