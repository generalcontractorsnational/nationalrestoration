"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import ParallaxBackground from "./parallax-background"
import ParallaxDecorative from "./parallax-decorative"

interface ParallaxHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundSrc: string
  title: string
  subtitle?: string
  height?: string
  overlayColor?: string
  overlayOpacity?: number
  decorativeElements?: boolean
}

export default function ParallaxHero({
  backgroundSrc,
  title,
  subtitle,
  height = "70vh",
  overlayColor = "rgba(0, 0, 0, 0.5)",
  overlayOpacity = 0.5,
  decorativeElements = true,
  className,
  children,
  ...props
}: ParallaxHeroProps) {
  return (
    <ParallaxBackground
      src={backgroundSrc}
      height={height}
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div className="container px-4 py-12 mx-auto text-center text-white">
        {decorativeElements && (
          <>
            <ParallaxDecorative
              className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/20 blur-xl"
              speed={0.2}
              direction="left"
            />
            <ParallaxDecorative
              className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
              speed={0.3}
              direction="right"
            />
          </>
        )}

        <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">{subtitle}</p>}
        {children}
      </div>
    </ParallaxBackground>
  )
}
