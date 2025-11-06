import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  withBackground?: boolean
  withShadow?: boolean
}

export default function Footer({ withBackground = true, withShadow = false, className, ...props }: FooterProps) {
  return (
    <footer
      className={cn(withBackground ? "bg-muted" : "bg-background", withShadow && "shadow-md", className)}
      {...props}
    >
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">National Builders Corporation</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Your one-stop contracting partner for comprehensive home and commercial restoration services.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary p-1 focus-visible">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary p-1 focus-visible">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary p-1 focus-visible">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary p-1 focus-visible">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/roofing"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Roofing Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/windows"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Window Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/siding"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Siding Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gutters"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Gutters & Downspouts
                </Link>
              </li>
              <li>
                <Link
                  href="/services/storm-damage"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Storm Damage Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Commercial Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/partners/apply"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Financing Options
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portals"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary block py-1 focus-visible"
                >
                  Portals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">1-800-RESTORE (1-800-737-8673)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">info@nationalrestoration.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground">
                  Serving Atlanta, D.C. Metro, Ohio, and Dallas–Fort Worth
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-foreground">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="max-w-[200px] bg-background"
                  aria-label="Email for newsletter"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} National Builders Corporation. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0 flex-wrap justify-center">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary py-1 focus-visible"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary py-1 focus-visible"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary py-1 focus-visible"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
