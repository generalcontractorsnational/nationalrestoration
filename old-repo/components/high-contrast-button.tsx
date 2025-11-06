import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@/components/ui/button"
import type React from "react"

interface HighContrastButtonProps extends ButtonProps {
  children: React.ReactNode
}

export default function HighContrastButton({ className, children, ...props }: HighContrastButtonProps) {
  // Determine which variant we're using to apply appropriate high-contrast styles
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary shadow-sm font-medium",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-destructive shadow-sm font-medium",
    outline: "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm font-medium",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-2 border-secondary shadow-sm font-medium",
    ghost: "hover:bg-accent hover:text-accent-foreground font-medium",
    link: "text-primary underline-offset-4 hover:underline font-medium",
  }

  const variant = (props.variant || "default") as keyof typeof variantStyles

  return (
    <Button className={cn(variantStyles[variant], className)} {...props}>
      {children}
    </Button>
  )
}
