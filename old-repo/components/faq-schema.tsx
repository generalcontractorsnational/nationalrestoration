import { getFAQSchema } from "@/lib/schema"

interface FAQSchemaProps {
  faqs: {
    question: string
    answer: string
  }[]
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    ...getFAQSchema(faqs),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
}
