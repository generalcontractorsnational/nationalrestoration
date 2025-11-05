import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import AssessmentDetail from "@/components/assessment-detail"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Assessment Detail | Storm Damage Assessment | National Restoration",
  description:
    "View and edit your storm damage assessment. Document damage, add photos, and get professional assistance.",
}

export default function AssessmentDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Storm Damage Assessment", url: "/storm-damage-assessment" },
          { name: "Assessment Detail", url: `/storm-damage-assessment/${params.id}` },
        ]}
      />
      <PageHeader
        title="Storm Damage Assessment"
        description="Document and report storm damage to your property"
        backgroundImage="/storm-damaged-roof.png"
      />
      <AssessmentDetail assessmentId={params.id} />
    </>
  )
}
