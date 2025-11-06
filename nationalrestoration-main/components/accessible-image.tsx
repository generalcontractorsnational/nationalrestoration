import Image from "next/image"
import { cn } from "@/lib/utils"
import type React from "react"

interface AccessibleImageProps extends Omit<React.ComponentProps<typeof Image>, "alt"> {
  alt: string
  caption?: string
  withBorder?: boolean
  withShadow?: boolean
  rounded?: boolean | "sm" | "md" | "lg" | "full"
}

export default function AccessibleImage({
  alt,
  caption,
  withBorder = false,
  withShadow = false,
  rounded = false,
  className,
  ...props
}: AccessibleImageProps) {
  const roundedClasses = {
    true: "rounded-md",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
    false: "",
  }

  const roundedClass =
    typeof rounded === "boolean" ? roundedClasses[String(rounded) as "true" | "false"] : roundedClasses[rounded]

  return (
    <figure className={cn("relative", className)}>
      <div className={cn(roundedClass, withBorder && "border", withShadow && "shadow-md", "overflow-hidden")}>
        <Image alt={alt} {...props} className={cn(roundedClass, props.className)} />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  )
}
