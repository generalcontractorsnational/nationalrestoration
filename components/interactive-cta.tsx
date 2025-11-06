"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function InteractiveCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition > (documentHeight - windowHeight) * 0.7) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_A_diverse_home_restoration_team_standing_proudly__1-Hssr8WBfI0qmncqHXUpXavnGqsoQ7x.jpg"
          alt="National Restoration professional team"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-primary/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact us today for a free inspection and estimate. Our team is ready to help with your restoration
              needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
              <Button
                asChild
                size="lg"
                className="font-semibold text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
              >
                <Link href="/contact">Get Free Inspection</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="font-semibold text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform"
              >
                <Link href="tel:+18005551234">Call Us Now</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="mt-16 bg-white/15 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20 shadow-2xl"
          >
            <p className="text-white text-lg font-medium mb-4 leading-relaxed">
              "National Restoration made the entire process seamless from start to finish. Their team was professional,
              efficient, and the quality of work exceeded our expectations."
            </p>
            <p className="text-white/90 text-base">— James Wilson, Homeowner</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
