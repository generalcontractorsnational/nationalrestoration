"use client"

import type React from "react"

import { useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileNav from "@/components/mobile-nav"
import { PropertyProvider } from "@/contexts/property-context"
import { AssessmentProvider } from "@/contexts/assessment-context"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAssessmentTool = pathname?.includes("/storm-damage-assessment")

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Register service worker for PWA functionality with error handling
  useEffect(() => {
    // Only attempt to register service worker in production environment
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.location.hostname !== "localhost" &&
      !window.location.hostname.includes("vusercontent.net")
    ) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope)
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error)
          // Service worker failed, but we can continue without it
        })
    }
  }, [])

  return (
    <PropertyProvider>
      <AssessmentProvider>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
            <Header />
          </header>
          <main className="flex-1 min-h-[calc(100vh-64px)]">{children}</main>
          <Footer />
          {isAssessmentTool && <MobileNav />}
        </div>
        <Toaster />
      </AssessmentProvider>
    </PropertyProvider>
  )
}
