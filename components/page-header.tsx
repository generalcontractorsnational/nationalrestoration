import { cn } from "@/lib/utils"
import type React from "react"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  backgroundImage?: string
  align?: "left" | "center" | "right"
  withShadow?: boolean
}

export default function PageHeader({
  title,
  description,
  backgroundImage,
  align = "left",
  withShadow = true,
  className,
  ...props
}: PageHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const hasBackground = !!backgroundImage

  return (
    <div
      className={cn(
        "relative py-8 sm:py-12 md:py-16",
        hasBackground ? "bg-cover bg-center text-white" : "bg-muted",
        className,
      )}
      style={hasBackground ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      {...props}
    >
      {hasBackground && <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />}
      <div className={cn("container mx-auto px-4 relative z-10", alignClasses[align])}>
        <h1
          className={cn(
            "text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4",
            hasBackground && "drop-shadow-lg",
            !hasBackground && "text-foreground",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "text-base sm:text-lg max-w-3xl",
              hasBackground ? "text-white drop-shadow-md" : "text-muted-foreground",
              align === "center" && "mx-auto",
              align === "right" && "ml-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
