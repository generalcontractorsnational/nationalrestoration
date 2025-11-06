import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import type React from "react"

interface AccessibleButtonProps extends ButtonProps {
  highContrast?: boolean
  withShadow?: boolean
  withOutline?: boolean
  children: React.ReactNode
}

export default function AccessibleButton({
  highContrast = false,
  withShadow = false,
  withOutline = false,
  className,
  children,
  ...props
}: AccessibleButtonProps) {
  return (
    <Button
      className={cn(
        "focus-visible",
        highContrast && "font-medium",
        withShadow && "shadow-md",
        withOutline && "border-2",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
