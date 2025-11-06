import Image from "next/image"

export default function LocationsMap() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden">
      <Image
        src="/placeholder.svg?height=400&width=1200&query=map of United States with location markers"
        alt="National Restoration service areas"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
          <p className="text-center font-medium">Serving Atlanta, Washington D.C. Metro, Ohio, and Dallas–Fort Worth</p>
        </div>
      </div>
    </div>
  )
}
