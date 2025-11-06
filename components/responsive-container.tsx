import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  fluid?: boolean
  narrow?: boolean
  wide?: boolean
  noPadding?: boolean
}

export default function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  fluid = false,
  narrow = false,
  wide = false,
  noPadding = false,
}: ResponsiveContainerProps) {
  return (
    <Component
      className={cn(
        noPadding ? "" : "px-4 sm:px-6 md:px-8",
        fluid ? "w-full" : "container mx-auto",
        narrow ? "max-w-4xl" : "",
        wide ? "max-w-7xl" : "",
        className,
      )}
    >
      {children}
    </Component>
  )
}
