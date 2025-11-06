import { cn } from "@/lib/utils"
import type React from "react"

interface TextOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "light" | "dark" | "gradient" | "blur"
  opacity?: "low" | "medium" | "high"
}

export default function TextOverlay({
  children,
  variant = "light",
  opacity = "medium",
  className,
  ...props
}: TextOverlayProps) {
  const variantClasses = {
    light: "bg-white text-foreground",
    dark: "bg-black text-white",
    gradient: "bg-gradient-to-r from-white/90 to-white/70 text-foreground",
    blur: "backdrop-blur-md bg-white/30 text-foreground",
  }

  const opacityClasses = {
    low: variant === "light" ? "bg-opacity-50" : "bg-opacity-50",
    medium: variant === "light" ? "bg-opacity-75" : "bg-opacity-75",
    high: variant === "light" ? "bg-opacity-90" : "bg-opacity-90",
  }

  return (
    <div
      className={cn("p-4 rounded shadow-sm", variantClasses[variant], opacityClasses[opacity], className)}
      {...props}
    >
      {children}
    </div>
  )
}
