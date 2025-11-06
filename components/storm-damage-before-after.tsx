import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StormDamageBeforeAfter() {
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <Badge variant="outline" className="mb-2">
          Before & After
        </Badge>
        <h2 className="text-3xl font-bold mb-2">Storm Damage Transformations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See the dramatic difference our storm restoration services make for homeowners
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src="/storm-damaged-roof.png" alt="Roof damaged by storm" fill className="object-cover" />
            <div className="absolute top-3 left-3 bg-destructive text-white px-3 py-1 rounded font-medium">Before</div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src="/restored-roof-after-storm.png" alt="Roof after restoration" fill className="object-cover" />
            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded font-medium">After</div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Complete roof replacement after severe hail damage in Dallas, TX
          </p>
        </div>

        <div className="space-y-3">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/roof-replacement-day.png"
              alt="Home during storm damage repair"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-destructive text-white px-3 py-1 rounded font-medium">During</div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/residential-roof-install.png"
              alt="Home after complete restoration"
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded font-medium">Complete</div>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Full exterior restoration after wind damage in Cleveland, OH
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/services/storm-damage">View More Storm Damage Solutions</Link>
        </Button>
      </div>
    </div>
  )
}
