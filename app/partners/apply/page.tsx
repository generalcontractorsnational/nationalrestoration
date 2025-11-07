import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import PartnerApplicationForm from "@/components/partner-application-form"

export const metadata: Metadata = {
  title: "Apply for Partnership | National Restoration",
  description: "Apply to become a National Restoration partner and grow your business with our nationwide network.",
}

export default function PartnerApplicationPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Partnership Application"
        description="Join our network of trusted partners and start growing your business"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/partnership-application-header"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Apply to Become a Partner</h2>
              <p className="text-gray-700">
                Complete the form below to apply for our partnership program. Our team will review your application and
                contact you within 2-3 business days.
              </p>
            </div>

            <PartnerApplicationForm />
          </div>
        </div>
      </section>
    </main>
  )
}
