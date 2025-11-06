"use client"

import type React from "react"
import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface ParallaxDecorativeProps extends React.HTMLAttributes<HTMLDivElement> {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  offset?: number
  rotation?: number
  scale?: number
  opacity?: number
  blur?: number
}

export default function ParallaxDecorative({
  speed = 0.3,
  direction = "up",
  offset = 0,
  rotation = 0,
  scale = 1,
  opacity = 1,
  blur = 0,
  className,
  children,
  ...props
}: ParallaxDecorativeProps) {
  const {
    ref,
    style,
    offset: scrollOffset,
  } = useParallax({
    speed,
    direction,
    startOffset: offset,
  })

  // Calculate additional transforms based on scroll
  const combinedStyle = {
    ...style,
    transform: `${style.transform || ""} rotate(${rotation + scrollOffset * 0.05}deg) scale(${scale})`,
    opacity: opacity,
    filter: blur > 0 ? `blur(${blur}px)` : undefined,
  }

  return (
    <div ref={ref} className={cn("will-change-transform", className)} style={combinedStyle} {...props}>
      {children}
    </div>
  )
}
