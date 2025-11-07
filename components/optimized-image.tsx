"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useIsMobile, useIsTablet } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  mobileSrc?: string
  tabletSrc?: string
  desktopSrc?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  className,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  fill = false,
  width,
  height,
  priority = false,
  quality = 80,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: OptimizedImageProps) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const [imageSrc, setImageSrc] = useState<string | null>(src || null)

  useEffect(() => {
    if (!src && !mobileSrc && !tabletSrc && !desktopSrc) {
      setImageSrc(null)
      return
    }

    if (isMobile && mobileSrc) {
      setImageSrc(mobileSrc)
    } else if (isTablet && tabletSrc) {
      setImageSrc(tabletSrc)
    } else if (desktopSrc) {
      setImageSrc(desktopSrc)
    } else {
      setImageSrc(src || null)
    }
  }, [isMobile, isTablet, mobileSrc, tabletSrc, desktopSrc, src])

  // If no image source is available, don't render anything
  if (!imageSrc) {
    return null
  }

  if (fill) {
    return (
      <div className={cn("relative", className)}>
        <Image
          src={imageSrc || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
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
      src={imageSrc || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
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
