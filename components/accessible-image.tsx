import { CldImage } from "next-cloudinary"
import { cn } from "@/lib/utils"
import type React from "react"

interface AccessibleImageProps extends Omit<React.ComponentProps<typeof CldImage>, "alt"> {
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

  // Fallback cloud name in case environment variable is not set
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dhegnhnyn"

  return (
    <figure className={cn("relative", className)}>
      <div className={cn(roundedClass, withBorder && "border", withShadow && "shadow-md", "overflow-hidden")}>
        <CldImage alt={alt} {...props} cloudName={cloudName} className={cn(roundedClass, props.className)} />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-muted-foreground text-center">{caption}</figcaption>}
    </figure>
  )
}
