import { cn } from "@/lib/utils"
import type React from "react"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  withShadow?: boolean
  withBackground?: boolean
}

export default function SectionHeading({
  children,
  level = 2,
  withShadow = false,
  withBackground = false,
  className,
  ...props
}: SectionHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  const shadowClass = withShadow ? "text-shadow-md" : ""
  const backgroundClass = withBackground ? "px-3 py-1 bg-white/90 inline-block rounded" : ""

  return (
    <HeadingTag className={cn("font-bold tracking-tight", shadowClass, backgroundClass, className)} {...props}>
      {children}
    </HeadingTag>
  )
}
