import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import StormDamageAssessmentDashboard from "@/components/storm-damage-assessment-dashboard"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Storm Damage Assessment Tool | National Restoration",
  description:
    "Identify, document, and report storm damage to your property with our interactive assessment tool. Get professional help for your insurance claims.",
}

export default function StormDamageAssessmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Storm Damage Assessment", url: "/storm-damage-assessment" },
        ]}
      />
      <PageHeader
        title="Storm Damage Assessment Tool"
        description="Identify, document, and report storm damage to your property"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/storm-damaged-roof"
      />
      <StormDamageAssessmentDashboard />
    </>
  )
}
