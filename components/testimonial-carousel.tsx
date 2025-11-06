"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John D.",
    location: "Los Angeles, CA",
    text: "National Restoration replaced our roof after significant storm damage. Their team was professional, efficient, and the quality of work was outstanding. They handled the insurance claim process seamlessly, making a stressful situation much easier.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah M.",
    location: "Bethesda, MD",
    text: "We hired National Restoration for window replacement throughout our home. The difference in energy efficiency and noise reduction is remarkable. Their attention to detail and clean installation process impressed us. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert T.",
    location: "Dallas, TX",
    text: "After a severe hailstorm damaged our office building, National Restoration handled the entire restoration process. Their commercial team worked efficiently to minimize disruption to our business. The roof, siding, and windows look better than before the storm.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jennifer K.",
    location: "Cleveland, OH",
    text: "National Restoration installed new siding and gutters on our home. The transformation is incredible! Their team was knowledgeable, respectful, and completed the work on schedule. We've received so many compliments from neighbors.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
              <Card className="h-full">
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <div className="flex mb-2 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg italic mb-4 sm:mb-6">{`"${testimonial.text}"`}</p>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            prev()
            setAutoplay(false)
          }}
          className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Previous testimonial</span>
        </Button>

        {testimonials.map((_, i) => (
          <Button
            key={i}
            variant="ghost"
            size="sm"
            onClick={() => {
              setCurrent(i)
              setAutoplay(false)
            }}
            className={`w-2 h-2 p-0 rounded-full ${i === current ? "bg-primary" : "bg-muted-foreground/20"}`}
          >
            <span className="sr-only">Go to testimonial {i + 1}</span>
          </Button>
        ))}

        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            next()
            setAutoplay(false)
          }}
          className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}
