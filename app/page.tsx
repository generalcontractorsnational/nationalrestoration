import { getHomePageSchema } from "@/lib/schema"
import type { Metadata } from "next"
import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

const InteractiveServices = dynamic(() => import("@/components/interactive-services"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})
const ProcessTimeline = dynamic(() => import("@/components/process-timeline"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})
const StormDamageShowcase = dynamic(() => import("@/components/storm-damage-showcase"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
})
const InteractiveTestimonials = dynamic(() => import("@/components/interactive-testimonials"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})
const InteractiveCTA = dynamic(() => import("@/components/interactive-cta"), {
  loading: () => <div className="h-64 bg-primary/5 animate-pulse" />,
})

export const metadata: Metadata = {
  title: "National Restoration | Professional Home & Commercial Restoration Services",
  description:
    "Expert restoration services for roofing, siding, storm damage, and more. 24/7 emergency response. Licensed & insured. Serving residential and commercial properties nationwide.",
  keywords: [
    "restoration services",
    "roofing contractor",
    "storm damage repair",
    "siding installation",
    "commercial restoration",
    "emergency restoration",
    "home repair",
    "property restoration",
  ],
  openGraph: {
    title: "National Restoration | Your One-Stop Contracting Partner",
    description:
      "From roof to foundation, we keep your property in prime condition with comprehensive restoration services.",
    type: "website",
    locale: "en_US",
    siteName: "National Restoration",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Restoration | Professional Restoration Services",
    description: "Expert restoration services for residential and commercial properties. 24/7 emergency response.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  const homePageSchema = getHomePageSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />

      {/* Hero section - loaded immediately for LCP */}
      <HeroSection />

      {/* Lazy-loaded sections for better performance */}
      <InteractiveServices />
      <StormDamageShowcase />
      <ProcessTimeline />
      <InteractiveTestimonials />
      <InteractiveCTA />
    </>
  )
}
