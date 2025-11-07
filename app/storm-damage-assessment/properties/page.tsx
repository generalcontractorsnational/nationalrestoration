import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import PropertyManager from "@/components/property-manager"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Property Management | Storm Damage Assessment | National Restoration",
  description:
    "Manage multiple properties for storm damage assessment. Add, edit, and track assessments for each of your properties.",
}

export default function PropertyManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Storm Damage Assessment", url: "/storm-damage-assessment" },
          { name: "Property Management", url: "/storm-damage-assessment/properties" },
        ]}
      />
      <PageHeader
        title="Property Management"
        description="Manage your properties and their storm damage assessments"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/building-exterior-inspection"
      />
      <PropertyManager />
    </>
  )
}
