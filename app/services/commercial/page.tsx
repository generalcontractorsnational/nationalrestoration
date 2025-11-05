import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, ArrowRight, Shield, Building, Briefcase, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"

export const metadata = {
  title: "Commercial Restoration Services | National Restoration",
  description:
    "Specialized commercial restoration and contracting services for office buildings, retail centers, industrial facilities, and multi-family properties. Minimize downtime and protect your investment.",
}

export default function CommercialServicesPage() {
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We meet with your team to understand your facility's needs, timeline, and budget considerations.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Comprehensive Assessment",
      description:
        "Our specialists conduct a thorough evaluation of your property and develop a detailed project plan.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
    },
    {
      title: "Custom Proposal",
      description: "We provide a detailed proposal with transparent pricing, timeline, and scope of work.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Coordinated Execution",
      description: "Our commercial teams work efficiently to minimize disruption to your business operations.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Quality Assurance",
      description:
        "We conduct rigorous inspections to ensure all work meets our high standards and your specifications.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Commercial Restoration Services"
        description="Specialized solutions for commercial properties of all types and sizes"
        backgroundImage="/commercial-building-restoration.png"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Commercial Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Commercial Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration understands the unique challenges of commercial property maintenance and
                restoration. Our specialized commercial division provides tailored solutions for businesses, property
                managers, and facility directors across diverse industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From routine maintenance to complete exterior renovations and emergency repairs, we deliver high-quality
                results while minimizing disruption to your operations. Our experienced teams work efficiently with a
                focus on safety, compliance, and your bottom line.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With our comprehensive service offerings, you can rely on a single contractor for all your commercial
                property's exterior needs—simplifying management and ensuring consistent quality across all projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Commercial Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Commercial Roofing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Facade Restoration
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Storefront Systems
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Waterproofing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Storm Damage Repair
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Property Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Office Buildings
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Retail Centers
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Industrial Facilities
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Multi-Family Housing
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Healthcare Facilities
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/contact">Schedule Commercial Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/commercial-team-meeting.png"
                alt="Commercial restoration consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Commercial Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a comprehensive range of exterior restoration and maintenance services tailored to commercial
              properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Roofing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete commercial roofing solutions including flat roof systems, metal roofing, and preventative
                  maintenance programs designed to extend roof life and prevent costly leaks.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> TPO, EPDM & PVC Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Modified Bitumen
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Metal Roofing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Roof Maintenance Programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Facade Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive exterior facade services to maintain your building's appearance, structural integrity,
                  and weather resistance while enhancing property value.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Metal Panel Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> EIFS & Stucco
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Fiber Cement Cladding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Masonry Restoration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Windows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Energy-efficient window solutions for commercial buildings that improve comfort, reduce operating
                  costs, and enhance the appearance of your property.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Storefront Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Curtain Wall Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Window Wall Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Energy-Efficient Glazing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Waterproofing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive waterproofing solutions to protect your commercial property from water intrusion,
                  preventing costly structural damage and interior issues.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Building Envelope Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Joint Sealants
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Expansion Joint Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Traffic Coatings
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Storm Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency response and comprehensive restoration for commercial properties damaged by severe
                  weather events, minimizing business interruption.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Emergency Response
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Temporary Repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Insurance Claim Assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Complete Restoration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial Gutters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Heavy-duty gutter systems designed specifically for commercial buildings to effectively manage water
                  runoff and protect your property's foundation and exterior.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Oversized Gutter Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Commercial Downspouts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Internal Drainage Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Custom Fabrication
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Commercial Advantage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover why property managers and facility directors choose National Restoration for their commercial
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Minimal Business Disruption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our commercial teams work efficiently with flexible scheduling options to minimize impact on your
                  daily operations. We coordinate closely with your team to establish work zones, manage noise and dust,
                  and maintain access points throughout the project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Budget-Conscious Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We understand the importance of staying within budget constraints while delivering quality results.
                  Our transparent pricing, value engineering options, and phased implementation approaches help you
                  manage costs effectively while protecting your property investment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Safety is our top priority on every commercial project. Our teams are OSHA-certified and follow
                  rigorous safety protocols. We maintain comprehensive insurance coverage, including general liability
                  and workers' compensation, providing peace of mind for property owners.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Single-Source Convenience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simplify your property management with one contractor for all exterior needs. Our comprehensive
                  service offerings eliminate the hassle of coordinating multiple vendors, streamlining communication
                  and ensuring consistent quality across all aspects of your project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Commercial-Grade Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use only high-performance, commercial-grade materials designed to withstand heavy use and extreme
                  weather conditions. Our product selections focus on durability, energy efficiency, and low maintenance
                  requirements to reduce your long-term operating costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dedicated Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each commercial project is assigned a dedicated project manager who serves as your single point of
                  contact throughout the process. They coordinate all aspects of your project, provide regular updates,
                  and ensure quality standards are met at every stage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Commercial Project Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined approach ensures your commercial project is completed efficiently with minimal disruption
              to your operations.
            </p>
          </div>

          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Property Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Property Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Properties We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide specialized restoration services for a wide range of commercial property types, each with
              unique requirements and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image src="/office-building-exterior.png" alt="Office Building" fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Office Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  From single-tenant properties to multi-story office complexes, we provide comprehensive exterior
                  maintenance and restoration services that minimize disruption to daily business operations.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Facade restoration and modernization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Energy-efficient window systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Flat roof maintenance and replacement
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image src="/retail-center-restoration.png" alt="Retail Center" fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Retail Centers</h3>
                <p className="text-muted-foreground mb-4">
                  We understand the importance of maintaining an attractive appearance for retail properties while
                  ensuring minimal impact on tenant operations and customer access during restoration projects.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Storefront system upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Parking area maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Exterior lighting and signage integration
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/industrial-facility-exterior.png"
                  alt="Industrial Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Industrial Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Our industrial restoration services focus on durability, functionality, and compliance with industry
                  regulations while accommodating the unique operational requirements of manufacturing and warehouse
                  facilities.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Metal building restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Industrial roof systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Loading dock area waterproofing
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/multi-family-housing-complex.png"
                  alt="Multi-Family Housing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Multi-Family Housing</h3>
                <p className="text-muted-foreground mb-4">
                  We specialize in apartment complexes, condominiums, and other multi-family properties, providing
                  comprehensive exterior restoration services that enhance property value while minimizing resident
                  disruption.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Building envelope restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Balcony and walkway waterproofing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Phased implementation strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Project Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent commercial restoration projects and the results we've delivered for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/office-park-renovation.png" alt="Office Park Renovation" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Office Park Renovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior renovation of a 5-building office park in Dallas, TX. The project included roof
                  replacement, facade restoration, and window upgrades to improve energy efficiency and modernize the
                  property's appearance.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/office-park-renovation">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/retail-center-facade-upgrade.png"
                  alt="Retail Center Facade Upgrade"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Retail Center Facade Upgrade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Modernization of a 120,000 sq ft retail center in Los Angeles, CA. The project included storefront
                  system replacement, exterior cladding, and signage integration, completed in phases to maintain
                  business operations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/retail-center-facade">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/industrial-roof-replacement.png"
                  alt="Industrial Roof Replacement"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Industrial Roof Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete roof replacement for a 200,000 sq ft manufacturing facility in Cleveland, OH. The project
                  included installation of a TPO roofing system with enhanced insulation, improving energy efficiency
                  while maintaining operations.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies/industrial-roof-replacement">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/case-studies">View All Commercial Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our commercial restoration services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How do you minimize disruption to our business operations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We develop a detailed project plan that accommodates your operational requirements, including flexible
                  scheduling (nights, weekends, or phased implementation), designated work zones, dust/noise
                  containment, and clear communication protocols. Our goal is to complete the work efficiently while
                  allowing your business to function normally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you handle all necessary permits and code compliance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we manage the entire permitting process for commercial projects. Our team is well-versed in local
                  building codes and regulations across our service areas. We ensure all work meets or exceeds current
                  code requirements, including energy efficiency standards, fire safety regulations, and ADA compliance
                  where applicable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What types of warranties do you offer for commercial projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide comprehensive warranty coverage for all commercial projects, including a 5-10 year
                  workmanship warranty (varies by service type) and manufacturer warranties on materials (typically
                  15-30 years). For roofing systems, we offer extended warranty options through our manufacturer
                  partnerships, some extending up to 30 years with regular maintenance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can you work with our insurance company for storm damage claims?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. Our commercial division includes insurance specialists who understand the complexities of
                  commercial property claims. We provide detailed documentation, meet with adjusters, and advocate on
                  your behalf to ensure you receive fair coverage for all storm-related damage. Our goal is to minimize
                  your administrative burden throughout the claims process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer maintenance programs for commercial properties?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide customized maintenance programs for commercial properties that include regular
                  inspections, preventative maintenance, and priority response for issues. These programs help extend
                  the life of your building systems, prevent costly emergency repairs, and provide documentation for
                  warranty compliance and capital planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do you handle multi-building or campus-wide projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in managing complex, multi-building projects with our dedicated commercial project
                  management team. We develop a master implementation plan that coordinates work across buildings,
                  optimizes crew deployment, and ensures consistency in materials and quality. This approach maximizes
                  efficiency while minimizing disruption across your campus.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Commercial Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from property managers and facility directors who have experienced the National Restoration
              difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">
                  "National Restoration managed the complete exterior renovation of our 5-building office park. Their
                  team's professionalism and attention to detail were exceptional. They worked around our tenants'
                  schedules, maintained clear communication throughout, and delivered outstanding results on time and
                  within budget."
                </p>
                <div>
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-muted-foreground">Property Manager, Oakwood Office Park</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">
                  "After a severe hailstorm damaged our manufacturing facility, National Restoration responded
                  immediately to secure the building and prevent further damage. Their insurance specialists were
                  invaluable in navigating our claim, and their commercial roofing team completed the replacement with
                  minimal disruption to our production schedule."
                </p>
                <div>
                  <p className="font-semibold">Jennifer L.</p>
                  <p className="text-sm text-muted-foreground">Facility Director, Precision Manufacturing</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">
                  "We've worked with National Restoration on multiple retail center renovations across our portfolio.
                  Their ability to phase work to maintain tenant operations while still delivering quality results has
                  been impressive. Their dedicated project managers make the process seamless, and we consider them a
                  valuable partner in maintaining our properties."
                </p>
                <div>
                  <p className="font-semibold">David W.</p>
                  <p className="text-sm text-muted-foreground">Director of Operations, Westfield Properties</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Discuss Your Commercial Project?"
        description="Contact us today to schedule a consultation with our commercial division. We'll develop a customized solution for your property's needs."
        buttonText="Schedule Commercial Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
