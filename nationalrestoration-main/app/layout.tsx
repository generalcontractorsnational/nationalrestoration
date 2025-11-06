import type React from "react"
import type { Metadata } from "next"
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema"
import ClientLayout from "./ClientLayout"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://nationalrestoration.com"),
  title: {
    default: "National Restoration Services | Your One-Stop Contracting Partner",
    template: "%s | National Restoration",
  },
  description:
    "National Restoration provides comprehensive home and commercial restoration services including roofing, siding, windows, and storm damage repair across the US. 24/7 emergency response available.",
  keywords: [
    "restoration services",
    "roofing contractor",
    "storm damage repair",
    "siding installation",
    "commercial restoration",
    "emergency restoration",
    "home repair",
    "property restoration",
    "insurance claims",
    "24/7 emergency service",
  ],
  authors: [{ name: "National Restoration" }],
  creator: "National Restoration",
  publisher: "National Restoration",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "National Restoration",
    title: "National Restoration | Professional Restoration Services",
    description:
      "Expert restoration services for roofing, siding, storm damage, and more. Licensed & insured professionals serving residential and commercial properties.",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Restoration | Professional Restoration Services",
    description: "Expert restoration services for residential and commercial properties. 24/7 emergency response.",
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
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.dev",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [getOrganizationSchema(), getWebsiteSchema()],
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }} />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
