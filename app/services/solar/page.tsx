import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Sun, Battery, Zap, TrendingDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Solar Installation Services | National Restoration",
  description:
    "Professional solar panel installation and energy solutions for residential and commercial properties. Reduce your energy costs with clean, renewable solar power.",
}

export default function SolarPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Solar Installation Services"
        description="Harness the power of the sun with professional solar solutions"
        backgroundImage="/solar-panels-on-roof.png"
      />

      {/* Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-3">Clean Energy Solutions</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Professional Solar Installation</h2>
              <p className="text-base text-muted-foreground mb-4">
                Take control of your energy costs and reduce your carbon footprint with professional solar panel
                installation from National Restoration. Our experienced team designs and installs custom solar solutions
                tailored to your property's unique needs.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                Whether you're looking to offset your entire energy bill or simply reduce your monthly costs, we provide
                comprehensive solar solutions backed by industry-leading warranties and exceptional service.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <Sun className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-base">Residential Solar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Custom home solar systems</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <Zap className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-base">Commercial Solar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Large-scale business solutions</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-x-3">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Solar Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/roofing">Roofing Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/solar-panel-installation.png" alt="Solar panel installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Benefits</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Choose Solar Energy?</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Solar energy offers numerous benefits for homeowners and businesses alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <TrendingDown className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Lower Energy Bills</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Significantly reduce or eliminate your monthly electricity costs with solar power.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sun className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Clean Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reduce your carbon footprint with renewable, environmentally-friendly energy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Battery className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Energy Independence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate your own power and reduce reliance on the utility grid.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Increase Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Solar installations can increase your property's resale value significantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Our Process</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Solar Installation Process</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              From consultation to activation, we handle every step of your solar journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  1
                </div>
                <CardTitle className="text-lg">Free Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We assess your property, energy needs, and provide a detailed proposal with savings estimates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  2
                </div>
                <CardTitle className="text-lg">Custom Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our engineers design a solar system optimized for your roof and energy consumption patterns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  3
                </div>
                <CardTitle className="text-lg">Permitting & Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We handle all permits, utility applications, and local approvals required for installation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  4
                </div>
                <CardTitle className="text-lg">Professional Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our certified installers mount panels, wire the system, and ensure everything meets code.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  5
                </div>
                <CardTitle className="text-lg">Inspection & Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  After final inspection approval, we activate your system and connect it to the grid.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                  6
                </div>
                <CardTitle className="text-lg">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide monitoring, maintenance, and support to ensure optimal system performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Go Solar?"
        description="Contact us today for a free solar consultation and discover how much you can save with clean, renewable energy."
        buttonText="Get Free Solar Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
