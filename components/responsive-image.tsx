"use client"

import Image from "next/image"
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

  // Handle empty src values
  const imageSrc = src.trim() !== "" ? src : "/abstract-geometric-placeholder.png"

  // If it's a placeholder image, adjust the query for mobile
  let mobileOptimizedSrc = imageSrc
  if (imageSrc.includes("/placeholder.svg") && isMobile) {
    // Extract the query parameter
    const queryMatch = imageSrc.match(/query=([^&]+)/)
    if (queryMatch && queryMatch[1]) {
      // Add "mobile version" to the query for smaller images
      const originalQuery = decodeURIComponent(queryMatch[1])
      const mobileQuery = `mobile version of ${originalQuery}`
      mobileOptimizedSrc = imageSrc.replace(`query=${queryMatch[1]}`, `query=${encodeURIComponent(mobileQuery)}`)
    }
  }

  if (fill) {
    return (
      <div className={cn("relative", className)}>
        <Image
          src={mobileOptimizedSrc || "/placeholder.svg"}
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
    <Image
      src={mobileOptimizedSrc || "/placeholder.svg"}
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
