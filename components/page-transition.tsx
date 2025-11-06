"use client"

import type React from "react"

import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)
  const prefersReducedMotion = useReducedMotion()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    setIsTransitioning(true)
    setDisplayChildren(children)

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, children, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      {displayChildren}
    </div>
  )
}
