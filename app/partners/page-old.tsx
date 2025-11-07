import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import PartnershipBenefits from "@/components/partnership-benefits"
import PartnershipTypes from "@/components/partnership-types"
import PartnerTestimonials from "@/components/partner-testimonials"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "Partners | National Restoration",
  description:
    "Partner with National Restoration for exclusive benefits, streamlined project management, and growth opportunities.",
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Partner Program"
        description="Join our network of trusted partners and grow your business with National Restoration"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/partnership-header"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-lg text-gray-700">
              National Restoration partners with contractors, insurance companies, and property managers to deliver
              exceptional restoration services nationwide.
            </p>
          </div>

          <PartnershipBenefits />

          <div className="mt-12 text-center">
            <Link
              href="/partners/portal"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Access Partner Portal
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Types</h2>
            <p className="text-lg text-gray-700">
              We offer various partnership opportunities tailored to your business needs
            </p>
          </div>

          <PartnershipTypes />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Success Stories</h2>
            <p className="text-lg text-gray-700">
              Hear from our partners about their experience working with National Restoration
            </p>
          </div>

          <PartnerTestimonials />
        </div>
      </section>

      <CTA
        title="Ready to become a partner?"
        description="Join our network of trusted partners and start growing your business today."
        buttonText="Apply Now"
        buttonLink="/partners/apply"
      />
    </main>
  )
}
