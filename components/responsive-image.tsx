"use client"

import { CldImage } from "next-cloudinary"
import { useResponsive } from "@/hooks/use-responsive"
import { cn } from "@/lib/utils"
import { getCloudinaryPublicId } from "@/lib/image-utils"

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
  const publicId = getCloudinaryPublicId(imageSrc)

  // Fallback cloud name in case environment variable is not set
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dhegnhnyn"

  if (fill) {
    return (
      <div className={cn("relative", className)}>
        <CldImage
          src={publicId}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          quality={quality}
          className="object-cover"
          config={{ cloud: { cloudName } }}
        />
      </div>
    )
  }

  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
      config={{ cloud: { cloudName } }}
    />
  )
}
