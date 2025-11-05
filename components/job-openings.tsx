import { MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function JobOpenings() {
  const jobs = [
    {
      title: "Restoration Technician",
      location: "Atlanta, GA",
      type: "Full-Time",
      department: "Field Operations",
      description: "Join our field team to perform restoration work on residential and commercial properties.",
    },
    {
      title: "Project Manager",
      location: "Washington D.C. Metro",
      type: "Full-Time",
      department: "Project Management",
      description: "Oversee restoration projects from start to finish, ensuring quality and customer satisfaction.",
    },
    {
      title: "Sales Representative",
      location: "Dallas-Fort Worth, TX",
      type: "Full-Time",
      department: "Sales",
      description: "Build relationships with property owners and generate new business opportunities.",
    },
    {
      title: "Roofing Specialist",
      location: "Ohio",
      type: "Full-Time",
      department: "Field Operations",
      description: "Perform roof inspections, repairs, and installations with our expert roofing team.",
    },
    {
      title: "Customer Service Representative",
      location: "Remote",
      type: "Full-Time",
      department: "Customer Service",
      description: "Provide exceptional support to clients throughout their restoration journey.",
    },
    {
      title: "Estimator",
      location: "Multiple Locations",
      type: "Full-Time",
      department: "Estimating",
      description: "Assess property damage and create detailed estimates for restoration projects.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job, index) => (
        <div key={index} className="border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-sm text-muted-foreground">{job.department}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{job.description}</p>

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{job.type}</span>
            </div>
          </div>

          <Link
            href="/careers/apply"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      ))}
    </div>
  )
}
