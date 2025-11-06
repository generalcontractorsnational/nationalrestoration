import Image from "next/image"

export default function PartnerTestimonials() {
  const testimonials = [
    {
      quote:
        "Partnering with National Restoration has transformed our business. The consistent project flow and operational support have helped us grow by 40% in just one year.",
      name: "Michael Rodriguez",
      title: "Owner, Rodriguez Contracting",
      image: "/partner-testimonial-1.png",
    },
    {
      quote:
        "As an insurance provider, we need reliable restoration partners. National Restoration consistently delivers quality work that keeps our clients satisfied and claims process smooth.",
      name: "Sarah Johnson",
      title: "Claims Director, Midwest Insurance Group",
      image: "/partner-testimonial-2.png",
    },
    {
      quote:
        "Managing multiple properties requires dependable service providers. National Restoration's preventative maintenance program has reduced our emergency repairs by 60%.",
      name: "David Chen",
      title: "Regional Manager, Urban Property Management",
      image: "/partner-testimonial-3.png",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>

          <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
        </div>
      ))}
    </div>
  )
}
