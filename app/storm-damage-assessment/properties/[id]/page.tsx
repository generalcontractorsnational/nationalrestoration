import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import PropertyDetail from "@/components/property-detail"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Property Detail | Storm Damage Assessment | National Restoration",
  description:
    "View and manage storm damage assessments for a specific property. Track assessment history and create new assessments.",
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Storm Damage Assessment", url: "/storm-damage-assessment" },
          { name: "Property Management", url: "/storm-damage-assessment/properties" },
          { name: "Property Detail", url: `/storm-damage-assessment/properties/${params.id}` },
        ]}
      />
      <PageHeader
        title="Property Detail"
        description="View and manage assessments for this property"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/building-exterior-inspection"
      />
      <PropertyDetail propertyId={params.id} />
    </>
  )
}
