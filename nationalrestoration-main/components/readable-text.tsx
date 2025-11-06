import { cn } from "@/lib/utils"
import type React from "react"

interface ReadableTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: "default" | "light" | "dark" | "outlined" | "background" | "gradient"
  size?: "sm" | "md" | "lg"
  contrast?: "low" | "medium" | "high"
}

export default function ReadableText({
  children,
  variant = "default",
  size = "md",
  contrast = "medium",
  className,
  ...props
}: ReadableTextProps) {
  // Use Tailwind classes directly instead of custom classes
  const variantClasses = {
    default: "",
    light: "text-white text-shadow-md",
    dark: "text-foreground text-shadow-sm",
    outlined: size === "sm" ? "text-outline-sm" : "text-outline-md",
    background: "text-with-bg",
    gradient: "text-gradient-bg",
  }

  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  const contrastClasses = {
    low: "font-normal",
    medium: "font-medium",
    high: "font-semibold",
  }

  return (
    <div
      className={cn(
        "text-rendering-optimizeLegibility antialiased leading-relaxed",
        variantClasses[variant],
        sizeClasses[size],
        contrastClasses[contrast],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
