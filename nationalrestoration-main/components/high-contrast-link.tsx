import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react"

interface HighContrastLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
  underline?: boolean
  bold?: boolean
  withIcon?: React.ReactNode
}

export default function HighContrastLink({
  children,
  underline = true,
  bold = true,
  withIcon,
  className,
  ...props
}: HighContrastLinkProps) {
  return (
    <Link
      className={cn(
        "text-primary focus-visible inline-flex items-center gap-1",
        underline && "underline underline-offset-4 hover:underline-offset-2 transition-all",
        bold && "font-medium",
        className,
      )}
      {...props}
    >
      {withIcon && withIcon}
      {children}
    </Link>
  )
}
