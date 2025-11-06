import { AlertTriangle, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmergencyContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col gap-3">
        <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 shadow-lg rounded-full px-6">
          <a href="tel:1-800-737-8673" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-bold">Emergency Response</span>
          </a>
        </Button>

        <Button asChild variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm shadow-md rounded-full">
          <Link href="/services/storm-damage" className="flex items-center gap-1">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-xs">Storm Damage Info</span>
            <ArrowRight className="h-3 w-3 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
