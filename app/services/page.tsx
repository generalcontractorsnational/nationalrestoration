import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, HomeIcon, Building, Shield, PenToolIcon as Tool, AlertTriangle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Services"
        description="Comprehensive restoration and general contracting services for residential and commercial properties."
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/home-restoration-team"
      />

      {/* Emergency Storm Services - NEW */}
      <section className="py-12 bg-destructive/5 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="destructive" className="mb-4">
                Emergency Response
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Storm Damage Services</h2>
              <p className="text-lg mb-6">
                When severe weather strikes, immediate action is crucial. Our emergency response team is available 24/7
                to secure your property and begin the restoration process.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Emergency Tarping</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Water Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Structural Stabilization</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <span>Insurance Assistance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-destructive hover:bg-destructive/90">
                  <Link href="/services/storm-damage">
                    Storm Damage Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-destructive/50 text-destructive hover:bg-destructive/5"
                >
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden h-[300px]">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/storm-damaged-roof-tarping"
                alt="Emergency storm damage response"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <p className="font-bold">Rapid emergency response to secure your property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Residential</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Home Restoration Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive restoration services to keep every aspect of your home's exterior in top
              condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight Storm Damage Card with special styling */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-destructive to-destructive/60 rounded-lg blur-sm"></div>
              <Card className="flex flex-col relative border-destructive/50">
                <CardHeader>
                  <div className="mb-4">
                    <Shield className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle>Storm Damage Repair</CardTitle>
                  <CardDescription>Emergency response and restoration for storm-damaged properties.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Emergency Response</li>
                    <li>• Hail Damage Repair</li>
                    <li>• Wind Damage Repair</li>
                    <li>• Water Damage Restoration</li>
                    <li>• Insurance Claim Assistance</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-destructive hover:bg-destructive/90">
                    <Link href="/services/storm-damage">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <div className="absolute top-3 right-3 bg-destructive text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                24/7 Response
              </div>
            </div>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <HomeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Roofing Services</CardTitle>
                <CardDescription>Complete roofing solutions for all types of residential properties.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Roof Replacement</li>
                  <li>• Roof Repair</li>
                  <li>• Roof Installation</li>
                  <li>• Emergency Roof Services</li>
                  <li>• Roof Inspections</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/roofing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <HomeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Window Replacement</CardTitle>
                <CardDescription>Energy-efficient window solutions for comfort and aesthetics.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Window Replacement</li>
                  <li>• Window Types & Styles</li>
                  <li>• Energy-Efficient Windows</li>
                  <li>• Custom Window Solutions</li>
                  <li>• Window Installation</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/windows">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <HomeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Siding Replacement</CardTitle>
                <CardDescription>
                  Durable, beautiful siding options to protect and enhance your property.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Siding Replacement</li>
                  <li>• Siding Repair</li>
                  <li>• James Hardie Siding</li>
                  <li>• Vinyl Siding</li>
                  <li>• Siding Options & Materials</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/siding">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <HomeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Gutters & Downspouts</CardTitle>
                <CardDescription>Custom gutter solutions to protect your home from water damage.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Seamless Gutters</li>
                  <li>• Gutter Replacement</li>
                  <li>• Gutter Repair</li>
                  <li>• Gutter Guards</li>
                  <li>• Soffit and Fascia</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/gutters">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Tool className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>General Contracting</CardTitle>
                <CardDescription>Comprehensive home improvement and renovation services.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Home Additions</li>
                  <li>• Exterior Renovations</li>
                  <li>• Interior Remodeling</li>
                  <li>• Deck & Patio Construction</li>
                  <li>• Custom Projects</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/general-contracting">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Commercial</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized restoration and contracting services for commercial properties of all types and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Highlight Commercial Storm Damage Card with special styling */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-destructive to-destructive/60 rounded-lg blur-sm"></div>
              <Card className="flex flex-col relative border-destructive/50">
                <CardHeader>
                  <div className="mb-4">
                    <Shield className="h-8 w-8 text-destructive" />
                  </div>
                  <CardTitle>Commercial Storm Damage</CardTitle>
                  <CardDescription>
                    Emergency response and restoration for storm-damaged commercial properties.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 24/7 Emergency Response</li>
                    <li>• Rapid Damage Assessment</li>
                    <li>• Insurance Claim Assistance</li>
                    <li>• Temporary Repairs</li>
                    <li>• Complete Restoration</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-destructive hover:bg-destructive/90">
                    <Link href="/services/commercial-storm-damage">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <div className="absolute top-3 right-3 bg-destructive text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                24/7 Response
              </div>
            </div>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Commercial Roof Replacement</CardTitle>
                <CardDescription>Expert commercial roofing solutions for all types of buildings.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flat Roof Replacement</li>
                  <li>• Commercial Roof Repair</li>
                  <li>• TPO, EPDM, & PVC Systems</li>
                  <li>• Metal Roofing</li>
                  <li>• Roof Maintenance Programs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/commercial-roofing">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Commercial Window Replacement</CardTitle>
                <CardDescription>Energy-efficient window solutions for commercial buildings.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Storefront Windows</li>
                  <li>• Curtain Wall Systems</li>
                  <li>• Energy-Efficient Glazing</li>
                  <li>• Window Wall Systems</li>
                  <li>• Commercial Door Replacement</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/commercial-windows">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Commercial Siding</CardTitle>
                <CardDescription>Durable exterior cladding solutions for commercial properties.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Metal Panel Systems</li>
                  <li>• Fiber Cement Cladding</li>
                  <li>• EIFS & Stucco</li>
                  <li>• Masonry Veneer</li>
                  <li>• Exterior Renovations</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/commercial-siding">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Office Park Remodeling</CardTitle>
                <CardDescription>
                  Comprehensive exterior renovations for office parks and commercial campuses.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Exterior Facade Upgrades</li>
                  <li>• Common Area Improvements</li>
                  <li>• Walkways & Canopies</li>
                  <li>• Lighting & Signage</li>
                  <li>• Multi-Building Projects</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/office-park-remodeling">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Commercial Gutters</CardTitle>
                <CardDescription>Heavy-duty gutter systems for commercial and industrial buildings.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Oversized Gutter Systems</li>
                  <li>• Commercial Downspouts</li>
                  <li>• Internal Drainage Systems</li>
                  <li>• Gutter Maintenance</li>
                  <li>• Custom Fabrication</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/services/commercial-gutters">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Claims */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roof-inspection-team" alt="Insurance claim assistance" fill className="object-cover" />
            </div>

            <div>
              <Badge className="mb-4">Insurance Claims</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Insurance Claim Specialists</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dealing with insurance claims can be daunting. We work directly with insurance companies on your behalf
                to ensure all damage is documented and covered appropriately.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Thorough Documentation</h3>
                    <p className="text-muted-foreground">
                      We provide detailed estimates, photos, and reports to streamline your claim.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Adjuster Meetings</h3>
                    <p className="text-muted-foreground">
                      We meet with your insurance adjuster on-site to point out damage and answer technical questions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Claim Navigation</h3>
                    <p className="text-muted-foreground">
                      Our experience with insurance procedures often results in more thorough coverage and less
                      out-of-pocket cost.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Stress-Free Process</h3>
                    <p className="text-muted-foreground">
                      We handle the paperwork and negotiations, allowing you to focus on getting your life back to
                      normal.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/services/insurance-claims">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Contact us today for a free inspection and estimate. Our team is ready to help with your restoration needs."
        buttonText="Get Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
