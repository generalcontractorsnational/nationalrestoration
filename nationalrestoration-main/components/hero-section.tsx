"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Shield, Clock, CheckCircle } from "lucide-react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const video = videoRef.current
    if (video) {
      const playVideo = async () => {
        try {
          await video.play()
          console.log("[v0] Video playing successfully")
        } catch (error) {
          console.log("[v0] Video autoplay blocked:", error)
          const playOnInteraction = () => {
            video.play().catch((e) => console.log("[v0] Play failed:", e))
            document.removeEventListener("click", playOnInteraction)
            document.removeEventListener("touchstart", playOnInteraction)
          }
          document.addEventListener("click", playOnInteraction)
          document.addEventListener("touchstart", playOnInteraction)
        }
      }

      if (video.readyState >= 3) {
        playVideo()
      } else {
        video.addEventListener("loadeddata", playVideo, { once: true })
      }
    }
  }, [])

  return (
    <section className="relative h-[85vh] sm:h-[80vh] md:h-[85vh] min-h-[500px] sm:min-h-[600px] max-h-[900px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          poster="/video-poster.jpg"
          disablePictureInPicture
          disableRemotePlayback
          onLoadedData={() => setIsVideoReady(true)}
          onError={(e) => console.log("[v0] Video error:", e)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
          aria-label="Background video showing home restoration"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/motion2Fast_Slowly_pan_the_camera_towards_the_suburban_home_sh_0-yhby7rGJkLcRzIGpsCF3zYzpwctbwG.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-4xl space-y-4 sm:space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance"
          >
            Your One-Stop
            <br />
            <span className="text-white/90">Contracting Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed font-light text-pretty"
          >
            From roof to foundation, we keep your property in prime condition with comprehensive restoration services.
            We work directly with insurance companies to ensure your claims are handled smoothly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
          >
            <Button
              asChild
              size="lg"
              className="font-medium text-sm sm:text-base group h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 w-full sm:w-auto"
            >
              <Link href="/contact">
                Get Free Inspection
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50 font-medium text-sm sm:text-base h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 transition-all w-full sm:w-auto"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-6 sm:pt-8 md:pt-12 mt-6 sm:mt-8 md:mt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-start gap-2 sm:gap-3 group">
                <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm sm:text-sm md:text-base">Licensed & Insured</div>
                  <div className="text-white/50 text-xs sm:text-xs md:text-sm mt-0.5">
                    Fully certified professionals
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 group">
                <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm sm:text-sm md:text-base">24/7 Emergency</div>
                  <div className="text-white/50 text-xs sm:text-xs md:text-sm mt-0.5">Always here when you need us</div>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3 group">
                <div className="mt-0.5 sm:mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-medium text-sm sm:text-sm md:text-base">Satisfaction Guaranteed</div>
                  <div className="text-white/50 text-xs sm:text-xs md:text-sm mt-0.5">Quality you can trust</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
