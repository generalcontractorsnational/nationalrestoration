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
import EmergencyBanner from "@/components/emergency-banner"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAssessmentTool = pathname?.includes("/storm-damage-assessment")
  const isHomePage = pathname === "/"

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Register service worker for PWA functionality with error handling
  useEffect(() => {
    // Only attempt to register service worker in production environment
    // Skip registration in StackBlitz and other development environments
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.location.hostname !== "localhost" &&
      !window.location.hostname.includes("vusercontent.net") &&
      !window.location.hostname.includes("stackblitz.io") &&
      !window.location.hostname.includes("webcontainer")
    ) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope)
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error)
        })
    }
  }, [])

  return (
    <PropertyProvider>
      <AssessmentProvider>
        <div className="flex flex-col min-h-screen">
          {isHomePage && <EmergencyBanner />}
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
