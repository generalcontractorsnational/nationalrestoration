"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  AlertTriangle,
  Users,
  Building2,
  Briefcase,
  ChevronDown,
  Info,
  MapPin,
  LayoutDashboard,
  UserCircle,
  HardHat,
  Handshake,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useResponsive } from "@/hooks/use-responsive"
import Image from "next/image"

// Custom styles for dropdown alignment
const navStyles = `
  :global(.navigation-menu-viewport) {
    position: absolute !important;
    width: var(--radix-navigation-menu-viewport-width) !important;
    transform-origin: top right !important;
    right: 0 !important;
    left: auto !important;
  }

  :global([data-state="open"] > .navigation-menu-content) {
    animation: none !important;
  }
`

// Add custom CSS for dropdown alignment
const alignRight = {
  position: "relative",
  ".navigation-menu-content": {
    position: "absolute",
    right: 0,
    top: "100%",
    animation: "none",
    transformOrigin: "top right",
  },
}

function GlobalStyles() {
  return (
    <style jsx global>{`
      .NavigationMenuContent {
        --radix-navigation-menu-viewport-width: var(--radix-navigation-menu-trigger-width);
        --radix-navigation-menu-viewport-height: var(--radix-navigation-menu-trigger-height);
      }

      [data-side=right] {
        transform-origin: top right !important;
      }

      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }

      .tablet-menu-container {
        position: relative;
      }

      .tablet-menu {
        z-index: 50;
        animation: slideDown 0.2s ease;
        padding: 1rem 0;
      }

      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}</style>
  )
}

function NavigationStyles() {
  return (
    <style jsx global>{`
      .navigation-menu-content {
        position: absolute !important;
        right: 0 !important;
        left: auto !important;
        transform-origin: top right !important;
      }
    `}</style>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { breakpoint, isMobile, isTablet } = useResponsive()
  const [tabletMenuOpen, setTabletMenuOpen] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname?.startsWith(path + "/")
  }

  // Close tablet menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isTablet && tabletMenuOpen && !(event.target as Element).closest(".tablet-menu-container")) {
        setTabletMenuOpen(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isTablet, tabletMenuOpen])

  // Reset tablet menu when resizing out of tablet range
  useEffect(() => {
    if (!isTablet) {
      setTabletMenuOpen(null)
    }
  }, [isTablet])

  // Handle tablet menu toggle
  const toggleTabletMenu = (menuName: string) => {
    setTabletMenuOpen((prev) => (prev === menuName ? null : menuName))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="National Restoration"
            width={220}
            height={60}
            className="h-10 w-auto object-contain"
            style={{ aspectRatio: "220/60" }}
            priority
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Menu (visible only on small screens) - moved to right side */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden flex-shrink-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-background z-10">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="National Restoration"
                      width={220}
                      height={60}
                      className="h-10 w-auto object-contain"
                      style={{ aspectRatio: "220/60" }}
                      priority
                    />
                  </Link>
                </div>

                {/* Navigation content with improved spacing and hierarchy */}
                <nav className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-4">
                    <MobileNavSection
                      title="Services"
                      icon={<Briefcase className="h-5 w-5" />}
                      defaultOpen={isActive("/services")}
                      animationDuration={250}
                    >
                      <MobileNavLink
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services") && !isActive("/services/")}
                      >
                        All Services
                      </MobileNavLink>
                      <MobileNavLink
                        href="/services/roofing"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services/roofing")}
                      >
                        Roofing
                      </MobileNavLink>
                      <MobileNavLink
                        href="/services/windows"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services/windows")}
                      >
                        Windows
                      </MobileNavLink>
                      <MobileNavLink
                        href="/services/siding"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services/siding")}
                      >
                        Siding
                      </MobileNavLink>
                      <MobileNavLink
                        href="/services/gutters"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services/gutters")}
                      >
                        Gutters
                      </MobileNavLink>
                      <MobileNavLink
                        href="/services/commercial"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/services/commercial")}
                      >
                        Commercial
                      </MobileNavLink>
                    </MobileNavSection>

                    <MobileNavSection
                      title="About"
                      icon={<Info className="h-5 w-5" />}
                      defaultOpen={isActive("/about")}
                      animationDuration={250}
                    >
                      <MobileNavLink
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/about") && !isActive("/about/")}
                      >
                        About Us
                      </MobileNavLink>
                      <MobileNavLink
                        href="/about/process"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/about/process")}
                      >
                        Our Process
                      </MobileNavLink>
                    </MobileNavSection>

                    <MobileNavSection
                      title="Locations"
                      icon={<MapPin className="h-5 w-5" />}
                      defaultOpen={isActive("/locations")}
                      animationDuration={250}
                    >
                      <MobileNavLink
                        href="/locations"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations") && !isActive("/locations/")}
                      >
                        All Locations
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/atlanta"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/atlanta")}
                      >
                        Atlanta
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/dc-metro"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/dc-metro")}
                      >
                        Washington D.C. Metro
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/ohio"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/ohio")}
                      >
                        Ohio
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/texas"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/texas")}
                      >
                        Dallas-Fort Worth
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/st-louis"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/st-louis")}
                      >
                        St. Louis Metro
                      </MobileNavLink>
                      <MobileNavLink
                        href="/locations/pittsburgh"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/locations/pittsburgh")}
                      >
                        Pittsburgh
                      </MobileNavLink>
                    </MobileNavSection>

                    {/* REMOVED Partners link */}

                    {/* ADDED Work With Us link */}
                    <div className="py-1">
                      <MobileNavLink
                        href="/careers"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/careers")}
                        className="flex items-center gap-3 p-3"
                      >
                        <Users className="h-5 w-5 flex-shrink-0" />
                        <span>Work With Us</span>
                      </MobileNavLink>
                    </div>

                    {/* Portals dropdown section */}
                    <MobileNavSection
                      title="Portals"
                      icon={<LayoutDashboard className="h-5 w-5" />}
                      defaultOpen={isActive("/portals")}
                      animationDuration={250}
                    >
                      <MobileNavLink
                        href="/portals/client"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/portals/client")}
                      >
                        Client Portal
                      </MobileNavLink>
                      <MobileNavLink
                        href="/portals/subcontractor"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/portals/subcontractor")}
                      >
                        Subcontractor Portal
                      </MobileNavLink>
                      <MobileNavLink
                        href="/portals/employee"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/portals/employee")}
                      >
                        Employee Portal
                      </MobileNavLink>
                      <MobileNavLink
                        href="/portals/affiliate"
                        onClick={() => setIsOpen(false)}
                        active={isActive("/portals/affiliate")}
                      >
                        Affiliate Portal
                      </MobileNavLink>
                    </MobileNavSection>
                  </div>
                </nav>

                {/* Footer with CTA */}
                <div className="p-4 border-t sticky bottom-0 bg-background z-10">
                  <Button asChild className="w-full active-press">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Free Inspection
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {isTablet && (
            <nav className="flex-1 flex justify-center">
              <div className="flex items-center gap-1 overflow-x-auto px-2 max-w-full hide-scrollbar">
                {/* Services Link */}
                <TabletMenuItem
                  label="Services"
                  active={isActive("/services")}
                  isOpen={tabletMenuOpen === "services"}
                  onClick={() => toggleTabletMenu("services")}
                >
                  <div className="grid grid-cols-2 gap-2 p-4 w-[500px]">
                    <Link
                      href="/services"
                      className="col-span-2 flex items-center gap-2 p-3 rounded-md hover:bg-accent"
                    >
                      <Briefcase className="h-4 w-4 text-primary" />
                      <span className="font-medium">All Services</span>
                    </Link>
                    <TabletMenuLink href="/services/roofing" active={isActive("/services/roofing")}>
                      Roofing
                    </TabletMenuLink>
                    <TabletMenuLink href="/services/windows" active={isActive("/services/windows")}>
                      Windows
                    </TabletMenuLink>
                    <TabletMenuLink href="/services/siding" active={isActive("/services/siding")}>
                      Siding
                    </TabletMenuLink>
                    <TabletMenuLink href="/services/gutters" active={isActive("/services/gutters")}>
                      Gutters
                    </TabletMenuLink>
                    <TabletMenuLink href="/services/commercial" active={isActive("/services/commercial")}>
                      Commercial
                    </TabletMenuLink>
                  </div>
                </TabletMenuItem>

                <TabletMenuItem
                  label="About"
                  active={isActive("/about")}
                  isOpen={tabletMenuOpen === "about"}
                  onClick={() => toggleTabletMenu("about")}
                >
                  <div className="p-4 w-[400px]">
                    <TabletMenuLink
                      href="/about"
                      active={isActive("/about") && !isActive("/about/")}
                      className="flex flex-col gap-1"
                    >
                      <span className="font-medium">About Us</span>
                      <span className="text-xs text-muted-foreground">Learn about our company and values</span>
                    </TabletMenuLink>
                    <TabletMenuLink
                      href="/about/process"
                      active={isActive("/about/process")}
                      className="flex flex-col gap-1 mt-3"
                    >
                      <span className="font-medium">Our Process</span>
                      <span className="text-xs text-muted-foreground">Step-by-step approach and payment options</span>
                    </TabletMenuLink>
                  </div>
                </TabletMenuItem>

                <TabletMenuItem
                  label="Locations"
                  active={isActive("/locations")}
                  isOpen={tabletMenuOpen === "locations"}
                  onClick={() => toggleTabletMenu("locations")}
                >
                  <div className="grid grid-cols-2 gap-2 p-4 w-[500px]">
                    <Link
                      href="/locations"
                      className="col-span-2 flex items-center gap-2 p-3 rounded-md hover:bg-accent"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">All Locations</span>
                    </Link>
                    <TabletMenuLink href="/locations/atlanta" active={isActive("/locations/atlanta")}>
                      Atlanta
                    </TabletMenuLink>
                    <TabletMenuLink href="/locations/dc-metro" active={isActive("/locations/dc-metro")}>
                      Washington D.C. Metro
                    </TabletMenuLink>
                    <TabletMenuLink href="/locations/ohio" active={isActive("/locations/ohio")}>
                      Ohio
                    </TabletMenuLink>
                    <TabletMenuLink href="/locations/texas" active={isActive("/locations/texas")}>
                      Dallas-Fort Worth
                    </TabletMenuLink>
                    <TabletMenuLink href="/locations/st-louis" active={isActive("/locations/st-louis")}>
                      St. Louis Metro
                    </TabletMenuLink>
                    <TabletMenuLink href="/locations/pittsburgh" active={isActive("/locations/pittsburgh")}>
                      Pittsburgh
                    </TabletMenuLink>
                  </div>
                </TabletMenuItem>

                {/* REMOVED Partners link */}

                {/* ADDED Work With Us link */}
                <Link
                  href="/careers"
                  className={cn(
                    "whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground",
                    isActive("/careers")
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  Work With Us
                </Link>

                {/* Portals dropdown for tablet */}
                <TabletMenuItem
                  label="Portals"
                  active={isActive("/portals")}
                  isOpen={tabletMenuOpen === "portals"}
                  onClick={() => toggleTabletMenu("portals")}
                >
                  <div className="grid grid-cols-2 gap-2 p-4 w-[500px]">
                    <TabletMenuLink href="/portals/client" active={isActive("/portals/client")}>
                      <div className="flex items-center gap-2">
                        <UserCircle className="h-4 w-4" />
                        <span>Client Portal</span>
                      </div>
                    </TabletMenuLink>
                    <TabletMenuLink href="/portals/subcontractor" active={isActive("/portals/subcontractor")}>
                      <div className="flex items-center gap-2">
                        <HardHat className="h-4 w-4" />
                        <span>Subcontractor Portal</span>
                      </div>
                    </TabletMenuLink>
                    <TabletMenuLink href="/portals/employee" active={isActive("/portals/employee")}>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>Employee Portal</span>
                      </div>
                    </TabletMenuLink>
                    <TabletMenuLink href="/portals/affiliate" active={isActive("/portals/affiliate")}>
                      <div className="flex items-center gap-2">
                        <Handshake className="h-4 w-4" />
                        <span>Affiliate Portal</span>
                      </div>
                    </TabletMenuLink>
                  </div>
                </TabletMenuItem>
              </div>
            </nav>
          )}

          <NavigationMenu className="hidden lg:flex">
            <NavigationStyles />
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={isActive("/services") ? "bg-accent text-accent-foreground" : ""}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="navigation-menu-content">
                  <div className="w-[400px] p-4">
                    <ul className="space-y-1">
                      <li>
                        <Link
                          href="/services/storm-damage"
                          className="flex items-center gap-3 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                            <AlertTriangle className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Storm Damage</div>
                            <p className="text-xs opacity-90">Emergency response and...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/roofing"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Roofing Services</div>
                            <p className="text-xs text-muted-foreground">Complete roofing solutions includi...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/siding"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Siding & Exteriors</div>
                            <p className="text-xs text-muted-foreground">Durable, beautiful siding options...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/commercial"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Commercial Services</div>
                            <p className="text-xs text-muted-foreground">Specialized restoration and...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/restoration"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Restoration Services</div>
                            <p className="text-xs text-muted-foreground">Complete property restoration...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/solar"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">Solar Solutions</div>
                            <p className="text-xs text-muted-foreground">Professional solar panel installation...</p>
                          </div>
                          <ChevronDown className="h-4 w-4 -rotate-90 text-muted-foreground" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={isActive("/about") ? "bg-accent text-accent-foreground" : ""}>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="navigation-menu-content">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/about"
                        >
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our company, mission, and values
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/about/process"
                        >
                          <div className="text-sm font-medium leading-none">Our Process</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover our step-by-step approach and flexible payment options
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={isActive("/locations") ? "bg-accent text-accent-foreground" : ""}>
                  Locations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="navigation-menu-content">
                  <div className="w-[600px] p-6">
                    <div className="grid grid-cols-3 gap-4">
                      {/* Atlanta */}
                      <Link
                        href="/locations/atlanta"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-skyline-cityscape"
                            alt="Atlanta"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">Atlanta</div>
                            <p className="text-xs opacity-90">Atlanta, Marietta, Alpharetta</p>
                          </div>
                        </div>
                      </Link>

                      {/* DC Metro */}
                      <Link
                        href="/locations/dc-metro"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/washington-dc-capitol"
                            alt="Washington D.C. Metro"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">Washington D.C.</div>
                            <p className="text-xs opacity-90">D.C., Northern VA, Maryland</p>
                          </div>
                        </div>
                      </Link>

                      {/* Ohio */}
                      <Link
                        href="/locations/ohio"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/cleveland-ohio-skyline-downtown"
                            alt="Ohio"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">Ohio</div>
                            <p className="text-xs opacity-90">Cleveland, Columbus, Cincinnati</p>
                          </div>
                        </div>
                      </Link>

                      {/* Dallas-Fort Worth */}
                      <Link
                        href="/locations/texas"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dallas-texas-skyline-downtown"
                            alt="Dallas-Fort Worth"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">Dallas-Fort Worth</div>
                            <p className="text-xs opacity-90">Dallas, Fort Worth, Arlington, Plano</p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/locations/st-louis"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="/st-louis-gateway-arch-skyline.jpg"
                            alt="St. Louis Metro"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">St. Louis</div>
                            <p className="text-xs opacity-90">St. Louis, St. Charles, O'Fallon</p>
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/locations/pittsburgh"
                        className="group relative overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                          <Image
                            src="/pittsburgh-skyline-hero.jpg"
                            alt="Pittsburgh Metro"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="font-semibold text-lg mb-1">Pittsburgh</div>
                            <p className="text-xs opacity-90">Pittsburgh, Cranberry, Mt. Lebanon</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* REMOVED Partners link */}

              {/* ADDED Work With Us navigation item */}
              <NavigationMenuItem>
                <Link href="/careers" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-foreground hover:text-foreground",
                      isActive("/careers") && "bg-accent text-accent-foreground",
                    )}
                  >
                    Work With Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/portals" legacyBehavior passHref>
                  <NavigationMenuTrigger className={isActive("/portals") ? "bg-accent text-accent-foreground" : ""}>
                    Portals
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent className="navigation-menu-content">
                  <ul className="grid w-[400px] gap-2 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/portals/client"
                        >
                          <UserCircle className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">Client Portal</div>
                            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                              Access your project details and documents
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/portals/subcontractor"
                        >
                          <HardHat className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">Subcontractor Portal</div>
                            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                              Manage jobs and submit invoices
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/portals/employee"
                        >
                          <Users className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">Employee Portal</div>
                            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                              Access schedules and company resources
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          href="/portals/affiliate"
                        >
                          <Handshake className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-sm font-medium leading-none">Affiliate Portal</div>
                            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground mt-1">
                              Track referrals and commissions
                            </p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* REMOVED duplicate Portals link */}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Free Inspection</Link>
            </Button>
          </div>
        </div>
      </div>
      <GlobalStyles />
    </header>
  )
}

// Mobile Navigation Section Component with improved animation
function MobileNavSection({
  title,
  children,
  defaultOpen = false,
  icon,
  animationDuration = 300,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  icon?: React.ReactNode
  animationDuration?: number
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<number | undefined>(defaultOpen ? undefined : 0)

  useEffect(() => {
    if (isOpen) {
      const height = contentRef.current?.scrollHeight
      setContentHeight(height)
    } else {
      setContentHeight(0)
    }
  }, [isOpen])

  return (
    <div className="border-b border-border/50 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 rounded-md hover:bg-accent/50 transition-colors active-press"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-primary">{icon}</div>}
          <span className="font-medium">{title}</span>
        </div>
        <div
          className="text-muted-foreground transition-transform"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          height: contentHeight !== undefined ? `${contentHeight}px` : "auto",
          transitionDuration: `${animationDuration}ms`,
        }}
        className="overflow-hidden transition-all ease-in-out"
        aria-hidden={!isOpen}
      >
        <div className="pl-4 py-1 space-y-1">{children}</div>
      </div>
    </div>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({
  href,
  children,
  active = false,
  onClick,
  className = "",
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block rounded-md py-2 px-3 text-sm transition-colors hover:bg-accent active-press",
        active ? "bg-accent/70 text-accent-foreground font-medium" : "text-muted-foreground",
        className,
      )}
    >
      {children}
    </Link>
  )
}

// Tablet Menu Item Component
function TabletMenuItem({
  label,
  children,
  active = false,
  isOpen = false,
  onClick,
}: {
  label: string
  children: React.ReactNode
  active?: boolean
  isOpen?: boolean
  onClick: () => void
}) {
  return (
    <div className="tablet-menu-container">
      <button
        onClick={onClick}
        className={cn(
          "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
          active ? "bg-accent text-accent-foreground" : "hover:bg-accent/50",
        )}
      >
        {label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      {isOpen && (
        <div className="tablet-menu fixed top-16 left-0 right-0 w-full border-t border-border bg-background shadow-lg">
          <div className="container mx-auto px-4">{children}</div>
        </div>
      )}
    </div>
  )
}

// Tablet Menu Link Component
function TabletMenuLink({
  href,
  children,
  active = false,
  className = "",
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block p-3 rounded-md transition-colors hover:bg-accent",
        active ? "bg-accent/70 text-accent-foreground" : "",
        className,
      )}
    >
      {children}
    </Link>
  )
}

export default Header
