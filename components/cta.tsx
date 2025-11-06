import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react"

interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  align?: "left" | "center" | "right"
  variant?: "primary" | "secondary" | "outline"
  withBackground?: boolean
  withShadow?: boolean
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonLink,
  align = "center",
  variant = "primary",
  withBackground = true,
  withShadow = true,
  className,
  ...props
}: CTAProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  const buttonVariant = variant === "primary" ? "default" : variant === "secondary" ? "secondary" : "outline"

  return (
    <section
      className={cn(
        "py-12 md:py-16 lg:py-24",
        withBackground ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className={cn("flex flex-col", alignClasses[align])}>
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
              withShadow && withBackground && "text-shadow-sm",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg max-w-2xl mb-6 sm:mb-8",
              withBackground ? "text-primary-foreground/90" : "text-muted-foreground",
              align === "center" && "mx-auto",
              align === "right" && "ml-auto",
            )}
          >
            {description}
          </p>
          <Button
            asChild
            size="lg"
            variant={buttonVariant}
            className={cn("font-medium w-full sm:w-auto", withShadow && "shadow-md")}
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
