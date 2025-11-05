import type React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  imageSrc: string
  className?: string
}

export default function ServiceCard({ title, description, icon, link, imageSrc, className }: ServiceCardProps) {
  return (
    <Card className={cn("overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-shadow", className)}>
      <div className="relative h-40 sm:h-48 w-full">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2 px-4 sm:px-6 bg-card">
        <div className="mb-2 text-primary">{icon}</div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-4 sm:px-6 bg-card">
        <p className="text-sm sm:text-base text-foreground/90">{description}</p>
      </CardContent>
      <CardFooter className="px-4 sm:px-6 pb-4 bg-card">
        <Button asChild variant="outline" className="w-full font-medium">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
