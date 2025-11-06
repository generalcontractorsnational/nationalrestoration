"use client"

import React from "react"
import { cn } from "@/lib/utils"
import ParallaxElement from "./parallax-element"
import { useParallaxSupport } from "@/hooks/use-parallax-support"

interface Image {
  src: string
  alt: string
  speed?: number
}

interface ParallaxImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: Image[]
  columns?: number
  gap?: number
  className?: string
}

export default function ParallaxImageGallery({
  images,
  columns = 3,
  gap = 16,
  className,
  ...props
}: ParallaxImageGalleryProps) {
  const isParallaxSupported = useParallaxSupport()

  // Split images into columns
  const imageColumns = React.useMemo(() => {
    const cols: Image[][] = Array.from({ length: columns }, () => [])

    images.forEach((image, index) => {
      cols[index % columns].push(image)
    })

    return cols
  }, [images, columns])

  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-2": columns === 2,
          "grid-cols-3": columns === 3,
          "grid-cols-4": columns === 4,
        },
        className,
      )}
      style={{ gap: `${gap}px` }}
      {...props}
    >
      {imageColumns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4 md:gap-6" style={{ gap: `${gap}px` }}>
          {column.map((image, imgIndex) => (
            <ParallaxElement
              key={imgIndex}
              speed={isParallaxSupported ? image.speed || 0.1 : 0}
              direction="up"
              className="relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </ParallaxElement>
          ))}
        </div>
      ))}
    </div>
  )
}
