"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import ParallaxBackground from "./parallax-background"
import ParallaxElement from "./parallax-element"

interface ParallaxCtaProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundSrc: string
  title: string
  description?: string
  buttonText?: string
  buttonHref?: string
  height?: string
}

export default function ParallaxCta({
  backgroundSrc,
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "#",
  height = "50vh",
  className,
  ...props
}: ParallaxCtaProps) {
  return (
    <ParallaxBackground
      src={backgroundSrc}
      height={height}
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div className="container px-4 mx-auto text-center text-white">
        <ParallaxElement speed={0.1} direction="up">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h2>
        </ParallaxElement>

        {description && (
          <ParallaxElement speed={0.15} direction="up">
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{description}</p>
          </ParallaxElement>
        )}

        <ParallaxElement speed={0.2} direction="up">
          <a
            href={buttonHref}
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            {buttonText}
          </a>
        </ParallaxElement>
      </div>
    </ParallaxBackground>
  )
}
