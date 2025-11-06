"use client"

import React from "react"
import { cn } from "@/lib/utils"
import ParallaxDecorative from "./parallax-decorative"
import { useParallaxSupport } from "@/hooks/use-parallax-support"

interface ParallaxShapesProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  minBlur?: number
  maxBlur?: number
  minOpacity?: number
  maxOpacity?: number
}

export default function ParallaxShapes({
  count = 5,
  colors = ["bg-primary", "bg-blue-500", "bg-indigo-500", "bg-sky-500"],
  minSize = 40,
  maxSize = 120,
  minBlur = 2,
  maxBlur = 20,
  minOpacity = 0.1,
  maxOpacity = 0.3,
  className,
  ...props
}: ParallaxShapesProps) {
  const isParallaxSupported = useParallaxSupport()

  // Generate random shapes
  const shapes = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.floor(Math.random() * (maxSize - minSize) + minSize)
      const blur = Math.floor(Math.random() * (maxBlur - minBlur) + minBlur)
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity
      const color = colors[Math.floor(Math.random() * colors.length)]
      const isCircle = Math.random() > 0.5
      const top = `${Math.random() * 100}%`
      const left = `${Math.random() * 100}%`
      const speed = Math.random() * 0.2 + 0.1
      const direction = Math.random() > 0.5 ? "up" : "down"

      return {
        id: i,
        size,
        blur,
        opacity,
        color,
        isCircle,
        top,
        left,
        speed,
        direction,
      }
    })
  }, [count, colors, minSize, maxSize, minBlur, maxBlur, minOpacity, maxOpacity])

  if (!isParallaxSupported) return null

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)} {...props}>
      {shapes.map((shape) => (
        <ParallaxDecorative
          key={shape.id}
          className={cn("absolute", shape.color, shape.isCircle ? "rounded-full" : "rounded-md")}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            opacity: shape.opacity,
            filter: `blur(${shape.blur}px)`,
          }}
          speed={shape.speed}
          direction={shape.direction as "up" | "down"}
        />
      ))}
    </div>
  )
}
