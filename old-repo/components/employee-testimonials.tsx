import { Star } from "lucide-react"
import Image from "next/image"

export default function EmployeeTestimonials() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      role: "Project Manager",
      location: "Atlanta, GA",
      image: "/employee-michael.jpg",
      quote:
        "I've been with National Restoration for 3 years, and the growth opportunities have been incredible. The company truly invests in its employees.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Restoration Technician",
      location: "Washington D.C.",
      image: "/employee-sarah.jpg",
      quote:
        "The team culture here is amazing. Everyone supports each other, and I feel valued every day. Best decision I ever made.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Sales Representative",
      location: "Dallas, TX",
      image: "/employee-david.jpg",
      quote:
        "The compensation and benefits are top-notch. Plus, the training program helped me develop skills I never thought I'd have.",
      rating: 5,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-card border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>

          <div className="flex gap-1 mb-3">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          <p className="text-gray-700 italic">"{testimonial.quote}"</p>
        </div>
      ))}
    </div>
  )
}
