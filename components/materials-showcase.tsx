import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Material {
  name: string
  description: string
  imageSrc: string
}

interface MaterialsShowcaseProps {
  materials: Material[]
}

export default function MaterialsShowcase({ materials }: MaterialsShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {materials.map((material, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={material.imageSrc || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"} alt={material.name} fill className="object-cover" />
          </div>
          <CardHeader className="pb-2">
            <CardTitle>{material.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{material.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
