"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ParallaxLayer {
  src: string
  speed: number
  zIndex?: number
}

interface ParallaxLayersProps extends React.HTMLAttributes<HTMLDivElement> {
  layers: ParallaxLayer[]
  height?: string
  className?: string
}

export default function ParallaxLayers({
  layers,
  height = "60vh",
  className,
  children,
  ...props
}: ParallaxLayersProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} style={{ height }} {...props}>
      {layers.map((layer, index) => (
        <ParallaxLayerImage key={index} src={layer.src} speed={layer.speed} zIndex={layer.zIndex || index} />
      ))}
      <div className="relative z-50 h-full">{children}</div>
    </div>
  )
}

interface ParallaxLayerImageProps {
  src: string
  speed: number
  zIndex: number
}

function ParallaxLayerImage({ src, speed, zIndex }: ParallaxLayerImageProps) {
  const [offset, setOffset] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const rect = ref.current.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const windowHeight = window.innerHeight

      // Only calculate parallax when element is in view
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + rect.height) {
        const newOffset = (scrollY - elementTop) * speed
        setOffset(newOffset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full will-change-transform"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${offset}px)`,
        zIndex,
      }}
    />
  )
}
