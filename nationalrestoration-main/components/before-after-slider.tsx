"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  height?: number
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  height = 500,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Ensure we have valid image sources
  const beforeSrc = beforeImage && beforeImage.trim() !== "" ? beforeImage : "/damaged-house-exterior.png"

  const afterSrc = afterImage && afterImage.trim() !== "" ? afterImage : "/restored-historic-home.png"

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    let clientX: number

    if ("touches" in e) {
      // Touch event
      clientX = e.touches[0].clientX
    } else {
      // Mouse event
      clientX = e.clientX
    }

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchend", handleMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchend", handleMouseUp)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl shadow-xl"
      style={{ height: `${height}px` }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
      {/* Before image (full width) */}
      <div className="absolute inset-0">
        <Image src={beforeSrc || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-8 bg-black/70 text-white px-4 py-2 rounded-lg font-bold">BEFORE</div>
      </div>

      {/* After image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <div className="absolute inset-0" style={{ width: "100vw" }}>
          <Image
            src={afterSrc || "/placeholder.svg"}
            alt={afterAlt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-8 left-8 bg-primary text-white px-4 py-2 rounded-lg font-bold">AFTER</div>
      </div>

      {/* Slider control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <motion.div
            animate={{ rotate: isDragging ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary font-bold text-xs"
          >
            ⟷
          </motion.div>
        </div>
      </div>
    </div>
  )
}
