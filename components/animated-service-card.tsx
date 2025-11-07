"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TouchRipple } from "./touch-ripple"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { useState } from "react"

interface AnimatedServiceCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  linkHref: string
  linkText?: string
}

export function AnimatedServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  linkHref,
  linkText = "Learn More",
}: AnimatedServiceCardProps) {
  const prefersReducedMotion = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  // Handle touch events for tablets
  const handleTouchStart = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true)
    }
  }

  const handleTouchEnd = () => {
    if (!prefersReducedMotion) {
      setTimeout(() => setIsHovered(false), 300)
    }
  }

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow"
      } sm:hover:shadow-lg sm:hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
          alt={imageAlt}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <CardHeader className="absolute bottom-0 text-white">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </div>

      <CardContent className="pt-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>

      <CardFooter>
        <TouchRipple>
          <Button asChild variant="ghost" className="group p-0 hover:bg-transparent">
            <Link href={linkHref} className="flex items-center">
              {linkText}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                  isHovered ? "transform translate-x-1" : ""
                }`}
              />
            </Link>
          </Button>
        </TouchRipple>
      </CardFooter>
    </Card>
  )
}
