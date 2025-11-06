"use client"

import type React from "react"
import { useParallax } from "@/hooks/use-parallax"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  speed?: number
  overlayColor?: string
  overlayOpacity?: number
  height?: string
  backgroundPosition?: string
  backgroundSize?: string
}

export default function ParallaxBackground({
  src,
  speed = 0.15,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  overlayOpacity = 0.4,
  height = "50vh",
  backgroundPosition = "center",
  backgroundSize = "cover",
  className,
  children,
  ...props
}: ParallaxBackgroundProps) {
  const { ref, style } = useParallax({
    speed,
    direction: "up",
    maxTranslate: 150,
  })

  // If src is empty, use a default or return without background image
  const backgroundImage = src && src.trim() !== "" ? `url(${src})` : "none"

  return (
    <div className={cn("relative overflow-hidden", className)} style={{ height }} {...props}>
      <div
        ref={ref}
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{
          ...style,
          backgroundImage,
          backgroundPosition,
          backgroundSize,
          // Make the background image a bit larger to prevent white edges during parallax movement
          height: "calc(100% + 100px)",
          top: "-50px",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity,
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
