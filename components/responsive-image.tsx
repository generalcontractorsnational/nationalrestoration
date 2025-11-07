"use client"

import { CldImage } from "next-cloudinary"
import { useResponsive } from "@/hooks/use-responsive"
import { cn } from "@/lib/utils"

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
  quality?: number
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  fill = false,
  width,
  height,
  quality = 85,
}: ResponsiveImageProps) {
  const { isMobile } = useResponsive()

  // If src is empty, return null
  if (!src || src.trim() === "") {
    return null
  }

  const imageSrc = src.trim() !== "" ? src : "placeholder"

  if (fill) {
    return (
      <div className={cn("relative", className)}>
        <CldImage
          src={imageSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <CldImage
      src={imageSrc}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
    />
  )
}
