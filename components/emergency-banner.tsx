"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, X, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 650) {
        setIsHidden(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [isAnimating, setIsAnimating] = useState(false)

  if (!isVisible || isHidden) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-destructive text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-destructive via-destructive/95 to-destructive/90 opacity-50" />

        <div className="container mx-auto px-4 py-4 relative z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <motion.div
                animate={{ scale: isAnimating ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className="p-2 rounded-full bg-white/20 flex-shrink-0"
              >
                <AlertTriangle className="h-5 w-5" />
              </motion.div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <p className="font-semibold text-sm sm:text-base">Emergency Storm Damage?</p>
                <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>

            <Button
              asChild
              size="default"
              className="bg-white text-destructive hover:bg-white/90 font-semibold shadow-lg flex-shrink-0"
            >
              <a href="tel:1-800-737-8673" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Call Now:</span>
                <span>1-800-RESTORE</span>
              </a>
            </Button>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 p-1 rounded-full hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label="Close emergency banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
