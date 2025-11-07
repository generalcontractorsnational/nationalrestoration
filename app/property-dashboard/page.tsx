import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import PropertyDashboard from "@/components/property-dashboard"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata: Metadata = {
  title: "Property Dashboard | National Restoration",
  description:
    "Manage your properties and storm damage assessments in one place. View property status, assessment history, and take quick actions.",
}

export default function PropertyDashboardPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Property Dashboard", url: "/property-dashboard" },
        ]}
      />
      <PageHeader
        title="Property Dashboard"
        description="Manage your properties and assessments in one centralized dashboard"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/building-exterior-inspection"
      />
      <PropertyDashboard />
    </>
  )
}
