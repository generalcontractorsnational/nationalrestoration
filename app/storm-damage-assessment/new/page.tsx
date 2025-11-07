import { Suspense } from "react"
import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import NewAssessmentForm from "@/components/new-assessment-form"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "New Assessment | Storm Damage Assessment | National Restoration",
  description:
    "Create a new storm damage assessment for your property. Document damage and get professional assistance.",
}

export default function NewAssessmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Storm Damage Assessment", url: "/storm-damage-assessment" },
          { name: "New Assessment", url: "/storm-damage-assessment/new" },
        ]}
      />
      <PageHeader
        title="New Storm Damage Assessment"
        description="Create a new assessment for your property"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/storm-damaged-roof"
      />
      <Suspense fallback={<div className="container py-12">Loading assessment form...</div>}>
        <NewAssessmentForm />
      </Suspense>
    </>
  )
}
