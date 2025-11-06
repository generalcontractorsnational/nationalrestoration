import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, ArrowRight, Shield, Droplet, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"
import MaterialsShowcase from "@/components/materials-showcase"

export const metadata = {
  title: "Gutters & Downspouts Services | National Restoration",
  description:
    "Professional gutter installation, replacement, and repair services. Protect your property from water damage with custom seamless gutters and quality downspouts.",
}

export default function GuttersPage() {
  const processSteps = [
    {
      title: "Free Consultation",
      description: "We assess your current gutters and discuss your needs, preferences, and budget considerations.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Custom Measurement",
      description: "Our specialists take precise measurements to ensure your gutters fit perfectly.",
      icon: <Droplet className="h-6 w-6 text-primary" />,
    },
    {
      title: "Material Selection",
      description: "Choose from our premium gutter materials and colors with guidance from our experts.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Custom Fabrication",
      description: "We fabricate seamless gutters on-site to the exact specifications of your home.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Professional Installation",
      description: "Our skilled technicians install your new gutter system with precision and care.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  const materials = [
    {
      name: "Aluminum Gutters",
      description:
        "Lightweight, rust-resistant, and available in many colors. The most popular and cost-effective option.",
      imageSrc: "/aluminum-gutters-installation.png",
    },
    {
      name: "Copper Gutters",
      description: "Premium, distinctive appearance that develops a beautiful patina over time. Extremely durable.",
      imageSrc: "/copper-gutters-home.png",
    },
    {
      name: "Steel Gutters",
      description: "Strong and durable option that stands up to extreme weather conditions and heavy rainfall.",
      imageSrc: "/steel-gutters-installation.png",
    },
    {
      name: "Vinyl Gutters",
      description: "Economical, lightweight, and easy to install. Resistant to rust and corrosion.",
      imageSrc: "/vinyl-gutters-home.png",
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Gutters & Downspouts"
        description="Protect your property from water damage with custom gutter solutions"
        backgroundImage="/gutter-installation-team.png"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Water Management Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Gutter Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your gutter system plays a critical role in protecting your property from water damage. At National
                Restoration, we provide complete gutter solutions designed to effectively channel water away from your
                home's foundation, roof, and exterior walls.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From seamless gutter installation and replacement to repairs and maintenance, our experienced team
                delivers quality craftsmanship using durable materials that stand the test of time. We custom fabricate
                gutters on-site to ensure a perfect fit for your property's specific dimensions and drainage needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Proper water management is essential for preventing costly damage to your foundation, landscaping, and
                exterior. Our comprehensive gutter solutions provide reliable protection while enhancing your home's
                appearance and value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Gutter Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Seamless Gutter Installation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Gutter Replacement
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Gutter Repair
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Downspout Installation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Gutter Guard Installation
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Gutter Types</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> K-Style Gutters
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Half-Round Gutters
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Box Gutters
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Custom Sizes (5", 6", 7")
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Commercial Gutters
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
                src="/seamless-gutter-installation.png"
                alt="Seamless gutter installation"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Importance of Quality Gutters</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A properly designed and installed gutter system provides numerous benefits that protect your property and
              enhance its value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Foundation Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Properly functioning gutters direct water away from your foundation, preventing soil erosion, basement
                  flooding, and foundation cracks. This protection can save you thousands in potential structural
                  repairs and maintain your home's stability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prevents Exterior Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quality gutters protect your siding, windows, doors, and painted surfaces from water damage and
                  premature deterioration. By controlling water runoff, they prevent staining, rot, and mold growth on
                  your home's exterior.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Landscape Preservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Effective gutters prevent soil erosion around your property and protect your landscaping investments.
                  They help maintain the grade around your foundation and prevent mulch, plants, and softscaping from
                  being washed away during heavy rainfall.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prevents Roof Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Properly sized gutters prevent water from backing up onto your roof, which can damage shingles and
                  lead to leaks. They also protect your fascia and soffit from water damage and rot, extending the life
                  of your roofing system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Prevents Ice Dams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In colder climates, properly installed gutters help prevent the formation of ice dams, which can cause
                  significant roof damage and interior leaks. When paired with proper insulation and ventilation, they
                  contribute to a complete winter protection system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enhanced Curb Appeal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern seamless gutters are available in a variety of colors and styles to complement your home's
                  architecture. They provide a finished look to your roofline while serving their essential function,
                  enhancing your property's overall appearance and value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gutter Types */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Gutter Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gutter Styles & Profiles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of gutter styles to match your home's architecture and meet your specific water
              management needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image src="/k-style-gutter-profile.png" alt="K-Style Gutters" fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">K-Style Gutters</h3>
                <p className="text-muted-foreground mb-4">
                  The most popular gutter style, K-style gutters feature a decorative front edge that resembles crown
                  molding. They offer excellent water capacity and complement most architectural styles, particularly
                  modern and traditional homes.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Higher water capacity than half-round
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Available in 5", 6", and 7" sizes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Flat back design attaches securely to fascia
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image src="/half-round-gutter-profile.png" alt="Half-Round Gutters" fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Half-Round Gutters</h3>
                <p className="text-muted-foreground mb-4">
                  Half-round gutters feature a smooth, semicircular profile that complements historic and traditional
                  homes. They're especially popular with copper and zinc materials and offer excellent flow
                  characteristics with minimal debris buildup.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Smooth interior reduces debris buildup
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Classic, timeless appearance
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Ideal for historic home restoration
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image src="/box-gutter-profile.png" alt="Box Gutters" fill className="object-cover" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Box Gutters</h3>
                <p className="text-muted-foreground mb-4">
                  Box gutters feature a square or rectangular profile and are often used on commercial buildings or
                  homes with contemporary architecture. They offer maximum water capacity and a clean, modern
                  appearance.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Maximum water capacity
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Clean, modern aesthetic
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Ideal for areas with heavy rainfall
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/custom-gutter-fabrication.png"
                  alt="Custom Gutter Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Custom Gutter Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  For unique architectural styles or specific water management needs, we offer custom gutter solutions.
                  Our on-site fabrication capabilities allow us to create gutters tailored to your property's specific
                  requirements.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Tailored to your property's needs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Special sizes and configurations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Solutions for complex rooflines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Gutter Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures your new gutter system is installed efficiently with exceptional results.
            </p>
          </div>

          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Gutter Materials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Material Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Gutter Materials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of premium gutter materials to suit your style, performance needs, and budget.
            </p>
          </div>

          <MaterialsShowcase materials={materials} />

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Not sure which gutter material is right for your home? Our specialists will help you compare options and
              select the perfect solution for your property, climate, and aesthetic preferences.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gutter Accessories */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/gutter-guard-installation.png"
                alt="Gutter guard installation"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Gutter Accessories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Gutter Protection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Enhance your gutter system's performance and reduce maintenance with our premium gutter accessories.
                These additions help prevent clogs, improve water flow, and extend the life of your gutter system.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Gutter Guards</h3>
                    <p className="text-muted-foreground">
                      Keep leaves, debris, and pests out of your gutters while allowing water to flow freely. We offer
                      mesh, screen, and surface-tension gutter protection systems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Downspout Extensions</h3>
                    <p className="text-muted-foreground">
                      Direct water further away from your foundation with decorative downspout extensions. Available in
                      above-ground and underground options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Rain Chains</h3>
                    <p className="text-muted-foreground">
                      Decorative alternatives to traditional downspouts that guide water from your gutters to the ground
                      or a collection basin, adding visual interest to your home's exterior.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Rain Barrels</h3>
                    <p className="text-muted-foreground">
                      Collect and store rainwater for landscaping use, reducing water bills and promoting environmental
                      sustainability. Available in various sizes and styles.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  Learn More About Gutter Accessories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Maintenance</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gutter Maintenance Tips</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proper maintenance helps extend the life of your gutter system and ensures it continues to protect your
              property effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regular Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Clean your gutters at least twice a year—in the spring and fall—to remove leaves, twigs, and debris
                  that can cause clogs. If you have many trees near your home, more frequent cleaning may be necessary.
                </p>
                <p className="text-muted-foreground">
                  Consider installing gutter guards to reduce the frequency of cleaning while maintaining proper water
                  flow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Inspect Regularly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Conduct visual inspections of your gutter system after major storms and seasonally. Look for signs of
                  damage, sagging, or separation from the fascia. Check downspouts for proper water flow and ensure
                  they're directing water away from your foundation.
                </p>
                <p className="text-muted-foreground">
                  Address minor issues promptly to prevent them from becoming major problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Check for Leaks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  During rainfall, observe your gutter system for leaks at seams or corners. Small leaks can often be
                  sealed with gutter sealant, but larger issues may require professional repair or section replacement.
                </p>
                <p className="text-muted-foreground">
                  Seamless gutters eliminate many potential leak points, providing superior performance and longevity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Check Downspout Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ensure downspouts extend at least 4-6 feet away from your foundation to prevent water from pooling
                  around your home. Consider installing downspout extensions or underground drainage systems in areas
                  with poor drainage.
                </p>
                <p className="text-muted-foreground">
                  Regularly check that downspout outlets remain clear and unobstructed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trim Overhanging Branches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Keep tree branches trimmed away from your roof and gutters to reduce debris accumulation and prevent
                  damage during storms. This simple step can significantly reduce maintenance requirements and extend
                  the life of your gutter system.
                </p>
                <p className="text-muted-foreground">
                  Consider professional tree trimming for branches that are difficult to reach.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Professional Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schedule professional gutter inspections and maintenance annually. Our technicians can identify
                  potential issues before they become problems, clean hard-to-reach areas, and make necessary
                  adjustments to ensure optimal performance.
                </p>
                <p className="text-muted-foreground">
                  Ask about our maintenance plans that include regular cleaning, inspections, and priority service for
                  repairs when needed.
                </p>
              </CardContent>
            </Card>
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
              Get answers to common questions about gutters and our installation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How do I know if I need new gutters?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Signs that indicate gutter replacement is needed include: visible cracks or splits, sagging sections,
                  peeling paint or rust, water damage around the foundation, gutters pulling away from the fascia, and
                  water overflowing during rain. If your gutters are more than 20 years old or you're experiencing these
                  issues, it's likely time for replacement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What size gutters do I need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The appropriate gutter size depends on your roof size, pitch, and local rainfall intensity. Most
                  residential properties use 5-inch K-style gutters, but homes with larger roofs, steep pitches, or in
                  areas with heavy rainfall may require 6-inch gutters. Commercial properties often need 7-inch or
                  larger gutters. Our specialists will assess your specific needs during the consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What are seamless gutters and why are they better?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Seamless gutters are custom-fabricated on-site to the exact length needed for your home, eliminating
                  seams except at corners and downspout outlets. This significantly reduces the potential for leaks,
                  which typically occur at seams in sectional gutters. Seamless gutters also offer a cleaner appearance,
                  better durability, and lower maintenance requirements over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does gutter installation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Most residential gutter installations are completed in a single day, though larger homes or complex
                  projects may take 1-2 days. The timeline depends on the size of your home, gutter material, complexity
                  of your roofline, and weather conditions. We'll provide a specific timeline during your consultation
                  and work efficiently to minimize any disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are gutter guards worth the investment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gutter guards are typically a worthwhile investment, especially if your property has many trees
                  nearby. They significantly reduce maintenance requirements by preventing leaves and debris from
                  entering your gutters while allowing water to flow freely. This reduces the need for frequent
                  cleaning, prevents clogs, extends gutter lifespan, and helps maintain proper water drainage
                  year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What warranty do you offer on gutters?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide a comprehensive warranty package that includes a 20-year material warranty on aluminum
                  gutters (varies by material type) and a 5-year workmanship warranty on installation. Our copper
                  gutters come with a 50-year material warranty. We'll provide detailed warranty information for your
                  specific gutter system during your consultation.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Gutter Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners who have experienced the benefits of our gutter installation services.
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
                  "National Restoration installed seamless gutters and downspouts on our home last fall. The difference
                  is remarkable - no more water pooling around our foundation or overflowing during heavy rain. The team
                  was professional, efficient, and left our property spotless. The gutters look great and function
                  perfectly."
                </p>
                <div>
                  <p className="font-semibold">Thomas & Sarah J.</p>
                  <p className="text-sm text-muted-foreground">Cleveland, OH</p>
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
                  "We opted for copper gutters on our historic home renovation, and National Restoration did an
                  outstanding job. Their attention to detail with the half-round style and custom downspouts perfectly
                  complemented our home's architecture. The installation was flawless, and the team was knowledgeable
                  and respectful of our property."
                </p>
                <div>
                  <p className="font-semibold">Michael & Elizabeth P.</p>
                  <p className="text-sm text-muted-foreground">Washington D.C.</p>
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
                  "After years of dealing with clogged gutters due to surrounding oak trees, we had National Restoration
                  install new gutters with gutter guards. What a difference! The team was prompt, professional, and
                  thorough. The installation was completed in one day, and we haven't had to clean our gutters since.
                  Highly recommend their services."
                </p>
                <div>
                  <p className="font-semibold">Robert & Linda M.</p>
                  <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Protect Your Property?"
        description="Contact us today for a free gutter consultation and estimate. Discover how our custom gutter solutions can enhance your home's protection and appearance."
        buttonText="Schedule Free Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
