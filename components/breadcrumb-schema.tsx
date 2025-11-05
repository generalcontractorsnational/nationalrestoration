"use client"

import { getBreadcrumbSchema } from "@/lib/schema"

interface BreadcrumbSchemaProps {
  items: {
    name: string
    url: string
  }[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    ...getBreadcrumbSchema(items),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
}
