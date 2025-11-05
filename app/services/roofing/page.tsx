import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, ArrowRight, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"
import MaterialsShowcase from "@/components/materials-showcase"
import { getServicePageSchema } from "@/lib/schema"

export const metadata = {
  title: "Roofing Services | National Restoration",
  description:
    "Expert roof replacement, repair and installation services for residential and commercial properties. We handle all types of roofing materials with quality craftsmanship.",
}

export default function RoofingPage() {
  const processSteps = [
    {
      title: "Free Inspection",
      description: "We thoroughly inspect your roof and provide a detailed assessment of its condition.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Custom Proposal",
      description: "We create a detailed estimate and recommend the best roofing solutions for your specific needs.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Material Selection",
      description: "Choose from premium roofing materials with guidance from our experts.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Expert Installation",
      description: "Our skilled craftsmen install your new roof with precision and attention to detail.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough inspection to ensure every detail meets our high standards.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  const materials = [
    {
      name: "Asphalt Shingles",
      description: "Affordable, versatile, and available in numerous styles and colors.",
      imageSrc: "/weathered-asphalt-texture.png",
    },
    {
      name: "Metal Roofing",
      description: "Durable, energy-efficient, and can last up to 50+ years with minimal maintenance.",
      imageSrc: "/modern-metal-roof-home.png",
    },
    {
      name: "Slate Roofing",
      description: "Natural, elegant appearance with exceptional durability and longevity.",
      imageSrc: "/luxury-home-slate-roof.png",
    },
    {
      name: "Flat Roofing",
      description: "Specialized systems for commercial buildings and modern residential designs.",
      imageSrc: "/commercial-flat-roof-install.png",
    },
  ]

  // FAQs for schema
  const faqs = [
    {
      question: "How do I know if I need a roof replacement?",
      answer:
        "Signs you may need a new roof include: missing or curling shingles, granules in gutters, daylight visible through roof boards, leaks or water damage, sagging areas, and a roof that's 20+ years old. Our free inspection can provide a definitive assessment.",
    },
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. Commercial projects may take longer. We always provide a specific timeline during the estimation process.",
    },
    {
      question: "Can you install a new roof over my existing one?",
      answer:
        "While some codes allow for a second layer of shingles, we typically recommend a complete tear-off. This allows us to inspect the decking for damage, ensures proper installation, and maximizes the life of your new roof. It also prevents adding excess weight to your structure.",
    },
    {
      question: "What warranty do you offer on new roofs?",
      answer:
        "We provide a 10-year workmanship warranty on all roof installations. Additionally, the materials come with manufacturer warranties that range from 25-50 years depending on the product selected. Some premium materials offer lifetime limited warranties that are transferable to new homeowners.",
    },
    {
      question: "Will my insurance cover a new roof?",
      answer:
        "If your roof was damaged by a covered peril such as hail, wind, or falling objects, your homeowner's insurance likely covers replacement. We specialize in insurance claim assistance and can help navigate the process, including meeting with adjusters and providing documentation.",
    },
    {
      question: "Do you offer roof maintenance services?",
      answer:
        "Yes, we provide comprehensive roof maintenance programs for both residential and commercial properties. Regular maintenance can extend your roof's lifespan and prevent costly repairs. Our service includes inspections, cleaning, minor repairs, and detailed condition reports.",
    },
  ]

  // Reviews for schema
  const reviews = [
    {
      author: "Robert M.",
      rating: 5,
      text: "National Restoration replaced our roof after significant hail damage. The entire process was smooth and professional. Their crew completed the work in just two days and left our property spotless. The new roof looks fantastic!",
      date: "2023-06-15",
    },
    {
      author: "Jennifer & David T.",
      rating: 5,
      text: "After researching several companies, we chose National Restoration for our roof replacement. Their knowledge and attention to detail was impressive. They helped us select the perfect architectural shingles and explained every step of the process.",
      date: "2023-08-22",
    },
    {
      author: "Michael S.",
      rating: 5,
      text: "National Restoration's team worked magic with our insurance company after a severe storm. They documented everything, met with the adjuster, and got our claim approved for a full replacement. Their workmanship is excellent and the new roof has dramatically improved our home's appearance.",
      date: "2023-07-10",
    },
  ]

  // Generate service page schema
  const roofingSchema = getServicePageSchema(
    "Roofing Services",
    "Expert roof replacement, repair and installation services for residential and commercial properties. We handle all types of roofing materials with quality craftsmanship.",
    "https://nationalrestoration.com/services/roofing",
    "https://nationalrestoration.com/roofing-crew-install.png",
    faqs,
    reviews,
  )

  return (
    <>
      {/* Add schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingSchema) }} />

      <div className="flex flex-col">
        <PageHeader
          title="Roofing Services"
          description="Expert roof replacement, repair, and installation services"
          backgroundImage="/roofing-crew-install.png"
        />

        {/* Overview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Expert Roofing Solutions</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Roofing Services</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your roof is your home's first line of defense against the elements. At National Restoration, we
                  provide complete roofing solutions to ensure your property is protected for years to come.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Whether you need a simple repair, full roof replacement, or new installation, our experienced team
                  delivers quality craftsmanship using the finest materials available. We work with all roofing types,
                  including asphalt shingles, metal, slate, tile, and flat roofing systems.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  As certified roofing professionals, we stand behind our work with industry-leading warranties and
                  exceptional service from start to finish.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <Card className="bg-muted/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Residential Roofing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Roof Replacement
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Roof Repair
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> New Construction
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Preventative Maintenance
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Commercial Roofing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Flat Roof Systems
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> TPO & EPDM
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Metal Roofing
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" /> Maintenance Programs
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <Button asChild size="lg" className="mr-4">
                    <Link href="/contact">Get Free Roof Inspection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services/storm-damage">Storm Damage Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/roof-replacement-day.png"
                  alt="Roof replacement in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The National Restoration Difference</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedication to quality, expertise, and customer satisfaction sets us apart in the roofing industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Certified Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team consists of factory-certified roofing professionals with extensive training and experience.
                    As GAF Master Elite, CertainTeed ShingleMaster, and Owens Corning Preferred contractors, we meet the
                    highest standards in the industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Premium Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We only use top-quality materials from leading manufacturers, ensuring your roof's durability,
                    performance, and aesthetic appeal. Our relationships with suppliers allow us to offer excellent
                    warranties and competitive pricing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Insurance Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our team has extensive experience working with insurance companies. We help navigate the claims
                    process, provide detailed documentation, and ensure you receive the coverage you deserve for storm
                    or weather-related roof damage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Comprehensive Warranties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand behind our work with solid workmanship warranties in addition to manufacturer warranties on
                    materials. Our aim is to give you complete peace of mind about your investment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Clean Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We take pride in our meticulous cleanup process. Our crews use advanced equipment to ensure no nails
                    or debris remain on your property, protecting your family, pets, and landscaping.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Financing Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We offer flexible financing solutions to make your roofing project affordable. Our options include
                    deferred interest plans and competitive fixed-rate loans to fit your budget.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Roofing Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven process ensures your roofing project is completed efficiently, with minimal disruption and
                maximum quality.
              </p>
            </div>

            <ServiceProcess steps={processSteps} />
          </div>
        </section>

        {/* Roofing Materials */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Roofing Materials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Materials for Lasting Results</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer a wide selection of premium roofing materials to suit every style, budget, and climate
                condition.
              </p>
            </div>

            <MaterialsShowcase materials={materials} />

            <div className="mt-12 text-center">
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
                Not sure which material is right for your property? Our roofing experts will help you make the best
                choice based on your home's architecture, your aesthetic preferences, local climate conditions, and your
                budget.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule a Consultation</Link>
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
                Get answers to common questions about our roofing services and processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>How do I know if I need a roof replacement?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Signs you may need a new roof include: missing or curling shingles, granules in gutters, daylight
                    visible through roof boards, leaks or water damage, sagging areas, and a roof that's 20+ years old.
                    Our free inspection can provide a definitive assessment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long does a roof replacement take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most residential roof replacements are completed in 1-3 days, depending on the size and complexity
                    of your roof. Commercial projects may take longer. We always provide a specific timeline during the
                    estimation process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can you install a new roof over my existing one?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    While some codes allow for a second layer of shingles, we typically recommend a complete tear-off.
                    This allows us to inspect the decking for damage, ensures proper installation, and maximizes the
                    life of your new roof. It also prevents adding excess weight to your structure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What warranty do you offer on new roofs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide a 10-year workmanship warranty on all roof installations. Additionally, the materials
                    come with manufacturer warranties that range from 25-50 years depending on the product selected.
                    Some premium materials offer lifetime limited warranties that are transferable to new homeowners.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Will my insurance cover a new roof?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If your roof was damaged by a covered peril such as hail, wind, or falling objects, your homeowner's
                    insurance likely covers replacement. We specialize in insurance claim assistance and can help
                    navigate the process, including meeting with adjusters and providing documentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you offer roof maintenance services?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide comprehensive roof maintenance programs for both residential and commercial
                    properties. Regular maintenance can extend your roof's lifespan and prevent costly repairs. Our
                    service includes inspections, cleaning, minor repairs, and detailed condition reports.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/storm-damaged-roof-tarping.png" alt="Emergency roof services" fill className="object-cover" />
              </div>

              <div>
                <Badge className="mb-4">Emergency Services</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">24/7 Emergency Roof Repairs</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  When storms strike or unexpected damage occurs, immediate action is crucial to prevent further damage
                  to your property. Our emergency response team is available 24/7 to provide rapid assistance.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Emergency Tarping</h3>
                      <p className="text-muted-foreground">
                        Quickly secure damaged areas to prevent water intrusion until permanent repairs can be made.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Leak Mitigation</h3>
                      <p className="text-muted-foreground">
                        Identify and address active leaks to minimize interior damage to your property.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Storm Damage Assessment</h3>
                      <p className="text-muted-foreground">
                        Thorough evaluation of damage extent to facilitate insurance claims and permanent repairs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Rapid Response</h3>
                      <p className="text-muted-foreground">
                        Our teams are strategically positioned to provide prompt service throughout our service areas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-destructive/10 rounded-lg mb-8">
                  <p className="font-medium mb-2">For emergency roof services, call immediately:</p>
                  <p className="text-xl font-bold">1-800-RESTORE (1-800-737-8673)</p>
                </div>

                <Button asChild size="lg">
                  <Link href="/services/storm-damage">
                    Learn About Storm Damage Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Roofing Customers Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it. Read what our satisfied roofing customers have to say.
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
                    "National Restoration replaced our roof after significant hail damage. The entire process was smooth
                    and professional. Their crew completed the work in just two days and left our property spotless. The
                    new roof looks fantastic!"
                  </p>
                  <div>
                    <p className="font-semibold">Robert M.</p>
                    <p className="text-sm text-muted-foreground">Dallas, TX</p>
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
                    "After researching several companies, we chose National Restoration for our roof replacement. Their
                    knowledge and attention to detail was impressive. They helped us select the perfect architectural
                    shingles and explained every step of the process."
                  </p>
                  <div>
                    <p className="font-semibold">Jennifer & David T.</p>
                    <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
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
                    "National Restoration's team worked magic with our insurance company after a severe storm. They
                    documented everything, met with the adjuster, and got our claim approved for a full replacement.
                    Their workmanship is excellent and the new roof has dramatically improved our home's appearance."
                  </p>
                  <div>
                    <p className="font-semibold">Michael S.</p>
                    <p className="text-sm text-muted-foreground">Bethesda, MD</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready for a New Roof?"
          description="Contact us today for a free roof inspection and estimate. Our team is ready to provide the perfect roofing solution for your property."
          buttonText="Get Free Roof Inspection"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}
