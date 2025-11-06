"use client"

import type React from "react"
import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface ParallaxElementProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  easing?: number
  startOffset?: number
  maxTranslate?: number
  disabled?: boolean
  as?: React.ElementType
  children: React.ReactNode
}

export default function ParallaxElement({
  speed = 0.2,
  direction = "up",
  easing = 1,
  startOffset = 0,
  maxTranslate = 100,
  disabled = false,
  as: Component = "div",
  className,
  children,
  ...props
}: ParallaxElementProps) {
  const { ref, style } = useParallax({
    speed,
    direction,
    easing,
    startOffset,
    maxTranslate,
    disabled,
  })

  return (
    <Component ref={ref} className={cn("will-change-transform", className)} style={style} {...props}>
      {children}
    </Component>
  )
}
