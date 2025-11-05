import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Droplets, Flame, Wind, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Restoration Services | National Restoration",
  description:
    "Complete property restoration services for fire, water, and structural damage. Expert restoration with attention to detail and quality craftsmanship.",
}

export default function RestorationPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Restoration Services"
        description="Complete property restoration for fire, water, and structural damage"
        backgroundImage="/property-restoration-work.jpg"
      />

      {/* Overview Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-3">Expert Restoration</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Property Restoration Services</h2>
              <p className="text-base text-muted-foreground mb-4">
                When disaster strikes your property, National Restoration is here to help you recover. Our comprehensive
                restoration services address fire, water, storm, and structural damage with expert craftsmanship and
                attention to detail.
              </p>
              <p className="text-base text-muted-foreground mb-6">
                We understand the stress and disruption that property damage causes. Our team works efficiently to
                restore your property to its pre-loss condition, handling everything from initial assessment through
                final repairs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <Home className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-base">Residential</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Home restoration services</p>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <Home className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-base">Commercial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Business property restoration</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-x-3">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/storm-damage">Storm Damage</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/property-restoration.jpg" alt="Property restoration" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Types */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Our Services</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Comprehensive Restoration Solutions</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We handle all types of property damage with expert restoration services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Droplets className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Water Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Water extraction & drying</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Mold remediation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Structural repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Content restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Flame className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Fire Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Smoke & soot removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Odor elimination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Structural rebuilding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Content cleaning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wind className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Storm Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Roof repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Siding replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Window restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Emergency tarping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Home className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-lg">Structural Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Foundation repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Framing restoration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Drywall replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete rebuilding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Why Choose Us</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The National Restoration Difference</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and customer satisfaction sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">24/7 Emergency Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our emergency response team is available around the clock to secure your property and begin the
                  restoration process immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insurance Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We work directly with your insurance company, providing detailed documentation and helping navigate
                  the claims process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quality Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our licensed, bonded, and insured team delivers exceptional workmanship backed by comprehensive
                  warranties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need Restoration Services?"
        description="Contact us today for a free assessment. Our team is ready to help restore your property to its pre-loss condition."
        buttonText="Get Free Assessment"
        buttonLink="/contact"
      />
    </div>
  )
}
