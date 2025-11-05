import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import CareerBenefits from "@/components/career-benefits"
import JobOpenings from "@/components/job-openings"
import EmployeeTestimonials from "@/components/employee-testimonials"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "Careers | National Restoration",
  description:
    "Join the National Restoration team. Explore career opportunities in restoration, construction, and property management.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Work With Us"
        description="Join our team and build a rewarding career in restoration and construction"
        backgroundImage="/careers-header.jpg"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work at National Restoration</h2>
            <p className="text-lg text-gray-700">
              We're building the future of restoration services, and we want talented individuals like you to join our
              growing team across the nation.
            </p>
          </div>

          <CareerBenefits />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-700">
              Explore our current job openings and find the perfect role for your skills and experience
            </p>
          </div>

          <JobOpenings />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear From Our Team</h2>
            <p className="text-lg text-gray-700">
              Learn what it's like to work at National Restoration from our employees
            </p>
          </div>

          <EmployeeTestimonials />
        </div>
      </section>

      <CTA
        title="Ready to join our team?"
        description="Apply today and start building your career with National Restoration."
        buttonText="View All Openings"
        buttonLink="/careers/apply"
      />
    </main>
  )
}
