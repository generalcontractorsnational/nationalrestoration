"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type AnimationType =
  | "fade-in"
  | "slide-in-up"
  | "slide-in-down"
  | "slide-in-left"
  | "slide-in-right"
  | "scale-in"
  | "none"

interface AnimatedElementProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  triggerOnce?: boolean
  threshold?: number
}

export function AnimatedElement({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 0.6,
  className,
  triggerOnce = true,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    triggerOnce,
  })

  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  const animationClass = animation !== "none" ? animation : ""

  const style = {
    opacity: animation !== "none" && !isVisible ? 0 : 1,
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
  }

  return (
    <div ref={ref} className={cn(className, isVisible && animationClass)} style={style}>
      {children}
    </div>
  )
}
