import type { Metadata } from "next"
import ProcessClientPage from "./ProcessClientPage"

export const metadata: Metadata = {
  title: "Our Process | National Restoration",
  description:
    "Learn about our comprehensive restoration process. We offer flexible payment options including financing, retail, cash, and insurance claims to meet your needs.",
}

export default function ProcessPage() {
  return <ProcessClientPage />
}
