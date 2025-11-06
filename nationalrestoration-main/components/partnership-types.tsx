import { CheckCircle } from "lucide-react"

export default function PartnershipTypes() {
  const partnershipTypes = [
    {
      title: "Contractor Partnerships",
      description: "For restoration contractors looking to expand their service offerings",
      features: [
        "Access to large-scale projects",
        "Dedicated project manager",
        "Priority scheduling",
        "Marketing support",
        "Technical training",
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-500",
    },
    {
      title: "Subcontractor Partnerships",
      description: "For specialized subcontractors seeking consistent project opportunities",
      features: [
        "Steady workflow and projects",
        "Competitive compensation",
        "On-time payment guarantees",
        "Safety training and support",
        "Long-term partnership opportunities",
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-500",
    },
    {
      title: "Property Management Partnerships",
      description: "For property managers needing consistent maintenance services",
      features: [
        "Preventative maintenance programs",
        "24/7 emergency response",
        "Multi-property management",
        "Tenant satisfaction focus",
        "Customized service packages",
      ],
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {partnershipTypes.map((type, index) => (
        <div key={index} className={`rounded-lg border p-6 ${type.color}`}>
          <h3 className="text-xl font-bold mb-3">{type.title}</h3>
          <p className="text-gray-700 mb-6">{type.description}</p>

          <ul className="space-y-3">
            {type.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className={`h-5 w-5 mr-2 flex-shrink-0 ${type.iconColor}`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
