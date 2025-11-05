import { cn } from "@/lib/utils"
import Image from "next/image"
import type React from "react"

interface ImageWithTextProps {
  src: string
  alt: string
  children: React.ReactNode
  overlayType?: "dark" | "light" | "gradient" | "none"
  overlayOpacity?: "low" | "medium" | "high"
  textPosition?: "top" | "center" | "bottom" | "top-left" | "top-right" | "bottom-left" | "bottom-right"
  height?: number
  width?: number
  className?: string
}

export default function ImageWithText({
  src,
  alt,
  children,
  overlayType = "dark",
  overlayOpacity = "medium",
  textPosition = "center",
  height = 400,
  width = 800,
  className,
}: ImageWithTextProps) {
  const overlayClasses = {
    dark: "bg-black",
    light: "bg-white",
    gradient: "bg-gradient-to-t from-black to-transparent",
    none: "",
  }

  const opacityClasses = {
    low: overlayType !== "none" ? "bg-opacity-30" : "",
    medium: overlayType !== "none" ? "bg-opacity-50" : "",
    high: overlayType !== "none" ? "bg-opacity-70" : "",
  }

  const positionClasses = {
    top: "items-start justify-center pt-6",
    center: "items-center justify-center",
    bottom: "items-end justify-center pb-6",
    "top-left": "items-start justify-start p-6",
    "top-right": "items-start justify-end p-6",
    "bottom-left": "items-end justify-start p-6",
    "bottom-right": "items-end justify-end p-6",
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        height={height}
        width={width}
        className="object-cover w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 flex",
          overlayClasses[overlayType],
          opacityClasses[overlayOpacity],
          positionClasses[textPosition],
        )}
      >
        <div className="px-4 py-2 text-white text-shadow-md">{children}</div>
      </div>
    </div>
  )
}
