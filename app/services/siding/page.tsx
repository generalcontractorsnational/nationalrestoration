import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, ArrowRight, Shield, Palette } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"
import MaterialsShowcase from "@/components/materials-showcase"

export const metadata = {
  title: "Siding Replacement Services | National Restoration",
  description:
    "Premium siding replacement and installation services. Enhance your property's curb appeal, energy efficiency, and protection with durable siding options.",
}

export default function SidingPage() {
  const processSteps = [
    {
      title: "Free Consultation",
      description: "We evaluate your current siding and discuss your goals, preferences, and budget considerations.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Material Selection",
      description:
        "Choose from our premium siding materials with guidance from our experts on the best options for your home.",
      icon: <Palette className="h-6 w-6 text-primary" />,
    },
    {
      title: "Precise Measurement",
      description:
        "We take detailed measurements to ensure your new siding fits perfectly and calculate materials needed.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Professional Installation",
      description: "Our skilled craftsmen install your new siding with attention to detail and proper techniques.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough quality check to ensure everything meets our high standards.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  const materials = [
    {
      name: "Vinyl Siding",
      description:
        "Low-maintenance, versatile, and available in numerous colors and styles at an affordable price point.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=vinyl siding on modern home exterior",
    },
    {
      name: "Fiber Cement Siding",
      description: "James Hardie's durable composite material that resists fire, pests, and severe weather conditions.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=fiber cement hardie board siding installation",
    },
    {
      name: "Engineered Wood Siding",
      description: "Combines the beauty of wood with enhanced durability and resistance to moisture and insects.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=engineered wood siding on traditional home",
    },
    {
      name: "Metal Siding",
      description: "Modern look with exceptional durability and minimal maintenance requirements.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=metal siding on contemporary building",
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Siding Replacement"
        description="Durable, beautiful siding solutions to protect and enhance your property"
        backgroundImage="/placeholder.svg?height=400&width=1920&query=professional siding installation in progress on residential home"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Superior Protection</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Siding Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your home's siding is more than just curb appeal—it's your property's first line of defense against the
                elements. National Restoration provides comprehensive siding solutions that enhance beauty while
                ensuring long-lasting protection.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From traditional vinyl to premium fiber cement and engineered wood, we offer a wide range of
                high-quality siding materials. Our expert installation ensures your home is protected against moisture,
                pests, and severe weather while improving energy efficiency and appearance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're replacing damaged siding, updating your home's look, or seeking more durable and
                low-maintenance options, our team delivers exceptional results with precision and care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Siding Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Weather Protection
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Enhanced Insulation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Increased Home Value
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Reduced Maintenance
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Our Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Full Siding Replacement
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Partial Siding Repair
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> James Hardie Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Custom Trim & Accents
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&query=contractors installing new siding on house exterior"
                alt="Siding installation in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Advantages of New Siding</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern siding materials offer numerous benefits that improve your home's appearance, protection, and
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Superior Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality siding provides a robust barrier against rain, snow, wind, and extreme temperatures. It
                  prevents moisture intrusion that can lead to mold, rot, and structural damage, while also keeping
                  insects and pests at bay.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enhanced Curb Appeal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New siding dramatically transforms your home's appearance with fresh colors and textures. Modern
                  siding materials come in countless style options to complement any architectural design, from
                  traditional to contemporary.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Insulated siding adds an extra layer of thermal protection to your home, reducing heat transfer
                  through walls. This can help lower heating and cooling costs by up to 20% while creating a more
                  comfortable indoor environment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern siding materials require minimal upkeep compared to traditional options like wood. Vinyl and
                  fiber cement siding won't rot, warp, or need regular painting, saving you time and maintenance costs
                  over decades of ownership.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Increased Home Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Siding replacement typically returns 70-80% of its cost in increased home value. It's one of the most
                  impactful exterior improvements, making your home more attractive to potential buyers and improving
                  its marketability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality siding with proper insulation can reduce outside noise transmission by up to 45%. This creates
                  a quieter, more peaceful indoor environment, especially beneficial for homes in busy urban areas or
                  near highways.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Siding Replacement Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures your siding project is completed efficiently with exceptional results.
            </p>
          </div>

          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Siding Materials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Material Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Siding Materials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of premium siding materials to suit your style, performance needs, and budget.
            </p>
          </div>

          <MaterialsShowcase materials={materials} />

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Not sure which siding material is right for your home? Our specialists will help you compare options and
              select the perfect solution for your property, climate, and aesthetic preferences.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* James Hardie Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&query=james hardie fiber cement siding being installed"
                alt="James Hardie Siding Installation"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Featured Product</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">James Hardie® Fiber Cement Siding</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As a James Hardie Preferred Contractor, we specialize in installing this industry-leading fiber cement
                siding that delivers unmatched durability, appearance, and performance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Exceptional Durability</h3>
                    <p className="text-muted-foreground">
                      Resists damage from moisture, rot, pests, fire, and impact. Engineered to withstand harsh weather
                      conditions including hurricane-force winds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">ColorPlus® Technology</h3>
                    <p className="text-muted-foreground">
                      Factory-applied finish provides superior color consistency and longevity with a 15-year limited
                      warranty against fading, peeling, and cracking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Climate-Specific Formulations</h3>
                    <p className="text-muted-foreground">
                      HardieZone® system provides siding specifically engineered for your local climate conditions for
                      optimal performance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Superior Warranty</h3>
                    <p className="text-muted-foreground">
                      Backed by a 30-year non-prorated, transferable limited warranty—one of the strongest in the
                      industry.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  Learn More About James Hardie Siding <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about siding replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How do I know if my siding needs to be replaced?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Signs indicating siding replacement include: warping, cracking, or buckling; frequent painting (every
                  5-6 years); fading beyond acceptable levels; dry rot or mold growth; higher energy bills; and interior
                  moisture problems. During our free inspection, we'll identify these issues and help you determine if
                  repair or replacement is needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does siding installation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most residential siding projects are completed within 1-2 weeks, depending on home size, material
                  type, and weather conditions. Vinyl siding typically installs faster than fiber cement or engineered
                  wood. We provide a specific timeline during your consultation and keep you updated throughout the
                  project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What's the best siding material for my home?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The ideal material depends on your climate, budget, aesthetic preferences, and maintenance tolerance.
                  Vinyl offers affordability and low maintenance. Fiber cement provides superior durability and fire
                  resistance. Engineered wood delivers a natural look with enhanced performance. During your
                  consultation, we'll help you evaluate which option best meets your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I install new siding over existing siding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While sometimes possible, we typically recommend removing old siding before installation. This allows
                  us to inspect for and address underlying damage, ensure proper installation of moisture barriers, and
                  maintain appropriate clearances around windows, doors, and rooflines. Complete removal also prevents
                  adding excess weight to your structure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What warranty do you offer on siding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide a 10-year workmanship warranty on all siding installations. Additionally, manufacturers
                  offer material warranties that range from 25 years to lifetime coverage depending on the product.
                  James Hardie fiber cement siding comes with a 30-year non-prorated, transferable warranty. We'll
                  provide detailed warranty information for all options during your consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do I maintain my new siding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most modern siding requires minimal maintenance. For vinyl and fiber cement, an annual cleaning with a
                  garden hose and soft brush is typically sufficient. Engineered wood may need periodic inspection for
                  caulking needs. We provide detailed care instructions specific to your siding material after
                  installation to ensure long-lasting performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Siding Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners who have experienced the benefits of our siding replacement services.
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
                  "National Restoration installed James Hardie siding on our home last fall, and the difference is
                  remarkable. Not only does our house look brand new, but we've noticed significant noise reduction and
                  our heating bills were much lower this winter. The installation team was professional and clean."
                </p>
                <div>
                  <p className="font-semibold">Thomas & Maria R.</p>
                  <p className="text-sm text-muted-foreground">Arlington, VA</p>
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
                  "After researching several companies, we chose National Restoration for our vinyl siding project.
                  Their attention to detail impressed us from the consultation through installation. They suggested
                  design elements like accent areas that really enhanced our home's appearance. Our neighbors have all
                  commented on how great it looks!"
                </p>
                <div>
                  <p className="font-semibold">Jennifer P.</p>
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
                  "We needed to replace our damaged siding after a hailstorm. National Restoration handled everything,
                  from the insurance claim to selecting the perfect engineered wood siding for our craftsman style home.
                  The results exceeded our expectations. The team was courteous, skilled, and clearly took pride in
                  their work."
                </p>
                <div>
                  <p className="font-semibold">Michael & Susan T.</p>
                  <p className="text-sm text-muted-foreground">Columbus, OH</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Home's Exterior?"
        description="Contact us today for a free siding consultation and estimate. Discover how new siding can enhance your home's protection, efficiency, and curb appeal."
        buttonText="Schedule Free Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
