"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Camera, FileText, MapPin, AlertTriangle, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function MobileNav() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 767px)")

  // Determine which pages should show the mobile nav
  const assessmentPages = [
    "/storm-damage-assessment",
    "/storm-damage-assessment/new",
    "/storm-damage-assessment/properties",
  ]

  const shouldShow = assessmentPages.some((page) => pathname?.startsWith(page)) || pathname === "/storm-preparation"

  // Handle back button for nested assessment pages
  const showBackButton =
    pathname?.includes("/storm-damage-assessment/") && !pathname?.endsWith("/storm-damage-assessment/")

  useEffect(() => {
    if (!shouldShow || !isMobile) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY, shouldShow, isMobile])

  // Set active tab based on hash or default to first tab
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "")
      if (hash && ["type", "location", "documentation", "report"].includes(hash)) {
        setActiveTab(hash)
      } else if (shouldShow) {
        setActiveTab("type")
      }
    }
  }, [pathname, shouldShow])

  if (!shouldShow || !isMobile) return null

  // Get previous page for back button
  const getPreviousPage = () => {
    if (pathname?.includes("/properties/")) {
      return "/storm-damage-assessment/properties"
    }
    return "/storm-damage-assessment"
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-background border-t z-50 transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      {showBackButton && (
        <div className="absolute -top-12 left-4">
          <Button variant="secondary" size="sm" className="h-10 shadow-md flex items-center gap-1" asChild>
            <Link href={getPreviousPage()}>
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>
          </Button>
        </div>
      )}

      <div className="flex justify-around items-center h-16">
        <Link
          href="#type"
          onClick={() => setActiveTab("type")}
          className={cn(
            "flex flex-col items-center justify-center w-1/4 h-full py-2 transition-colors",
            activeTab === "type" ? "text-primary bg-primary/10" : "active:bg-accent/50",
          )}
        >
          <AlertTriangle className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium">Types</span>
        </Link>
        <Link
          href="#location"
          onClick={() => setActiveTab("location")}
          className={cn(
            "flex flex-col items-center justify-center w-1/4 h-full py-2 transition-colors",
            activeTab === "location" ? "text-primary bg-primary/10" : "active:bg-accent/50",
          )}
        >
          <MapPin className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium">Location</span>
        </Link>
        <Link
          href="#documentation"
          onClick={() => setActiveTab("documentation")}
          className={cn(
            "flex flex-col items-center justify-center w-1/4 h-full py-2 transition-colors",
            activeTab === "documentation" ? "text-primary bg-primary/10" : "active:bg-accent/50",
          )}
        >
          <Camera className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium">Photos</span>
        </Link>
        <Link
          href="#report"
          onClick={() => setActiveTab("report")}
          className={cn(
            "flex flex-col items-center justify-center w-1/4 h-full py-2 transition-colors",
            activeTab === "report" ? "text-primary bg-primary/10" : "active:bg-accent/50",
          )}
        >
          <FileText className="h-6 w-6 mb-1" />
          <span className="text-xs font-medium">Report</span>
        </Link>
      </div>
    </div>
  )
}
