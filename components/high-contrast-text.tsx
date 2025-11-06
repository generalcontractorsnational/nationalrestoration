import { cn } from "@/lib/utils"
import type React from "react"

interface HighContrastTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "light" | "dark" | "gradient" | "outline" | "shadow"
  as?: keyof JSX.IntrinsicElements
}

export default function HighContrastText({
  children,
  variant = "light",
  as: Component = "div",
  className,
  ...props
}: HighContrastTextProps) {
  const variantClasses = {
    light: "bg-white/90 text-gray-900 p-3 rounded-md shadow-sm",
    dark: "bg-gray-900/90 text-white p-3 rounded-md shadow-sm",
    gradient: "bg-gradient-to-r from-white/90 to-white/70 p-3 rounded-md shadow-sm text-gray-900",
    outline: "text-white border-2 border-white p-3 rounded-md shadow-sm",
    shadow: "text-white text-shadow-lg",
  }

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  )
}
