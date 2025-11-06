import { Heart, DollarSign, TrendingUp, Users, Shield, Award } from "lucide-react"

export default function CareerBenefits() {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Competitive Pay",
      description: "Industry-leading compensation packages with performance bonuses",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Comprehensive medical, dental, and vision insurance for you and your family",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "Clear advancement paths with ongoing training and development opportunities",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Culture",
      description: "Collaborative environment where your ideas and contributions matter",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Job Security",
      description: "Stable employment with a growing company serving multiple markets",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition",
      description: "Employee recognition programs and rewards for outstanding performance",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
        >
          <div className="mb-4 text-primary">{benefit.icon}</div>
          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
          <p className="text-gray-700">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}
