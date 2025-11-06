"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import ParallaxElement from "./parallax-element"
import { useParallaxSupport } from "@/hooks/use-parallax-support"

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  bgClassName?: string
  contentClassName?: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundSize?: string
  parallaxSpeed?: number
}

export default function ParallaxSection({
  children,
  className,
  bgClassName,
  contentClassName,
  backgroundImage,
  backgroundPosition = "center",
  backgroundSize = "cover",
  parallaxSpeed = 0.15,
  ...props
}: ParallaxSectionProps) {
  const isParallaxSupported = useParallaxSupport()

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {backgroundImage && (
        <ParallaxElement
          className={cn("absolute inset-0 w-full h-[120%] -top-[10%]", bgClassName)}
          speed={isParallaxSupported ? parallaxSpeed : 0}
          direction="up"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition,
            backgroundSize,
          }}
        />
      )}
      <div className={cn("relative z-10", contentClassName)}>{children}</div>
    </div>
  )
}
