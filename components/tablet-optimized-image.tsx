import { CldImage } from "next-cloudinary"
import { cn } from "@/lib/utils"
import { getCloudinaryPublicId } from "@/lib/image-utils"

interface TabletOptimizedImageProps {
  src: string
  alt: string
  caption: string
  aspectRatio?: "square" | "4:3" | "16:9" | "auto"
  className?: string
  captionClassName?: string
}

export function TabletOptimizedImage({
  src,
  alt,
  caption,
  aspectRatio = "4:3",
  className,
  captionClassName,
}: TabletOptimizedImageProps) {
  // Map aspect ratio to tailwind classes
  const aspectRatioClasses = {
    square: "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-[16/9]",
    auto: "",
  }

  const publicId = getCloudinaryPublicId(src || "placeholder")

  return (
    <div className={cn("relative rounded-lg overflow-hidden", className)}>
      <div className={aspectRatioClasses[aspectRatio]}>
        <CldImage src={publicId} alt={alt} fill className="object-cover rounded-lg" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-8">
        <div className={cn("p-3 text-white", captionClassName)}>
          <p className="font-medium text-sm">{caption}</p>
        </div>
      </div>
    </div>
  )
}
