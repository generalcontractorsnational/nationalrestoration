import { Building2, TrendingUp, Clock, BadgeCheck, Briefcase, Users } from "lucide-react"

export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-primary" />,
      title: "Expanded Market Reach",
      description: "Access new markets and customer bases through our nationwide network.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Increased Revenue",
      description: "Grow your business with consistent project referrals and opportunities.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Streamlined Operations",
      description: "Utilize our digital portal for efficient project management and communication.",
    },
    {
      icon: <BadgeCheck className="h-8 w-8 text-primary" />,
      title: "Enhanced Credibility",
      description: "Leverage our trusted brand reputation to build customer confidence.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Resource Access",
      description: "Get exclusive access to training materials, marketing resources, and industry insights.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Networking Opportunities",
      description: "Connect with other industry professionals and potential collaborators.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}
