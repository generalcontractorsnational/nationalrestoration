import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, Sun, CloudRain, Wind, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import { getLocationPageSchema } from "@/lib/schema"

export const metadata = {
  title: "Southern California Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout Southern California, including Los Angeles, Orange County, and San Diego.",
}

export default function SouthernCaliforniaPage() {
  // Services for schema
  const services = [
    {
      name: "Roofing Services in Southern California",
      description:
        "Expert roof replacement, repair and installation services for residential and commercial properties in Southern California.",
      url: "https://nationalrestoration.com/services/roofing",
      image: "https://nationalrestoration.com/roofing-crew-install.png",
    },
    {
      name: "Window Replacement in Southern California",
      description:
        "Energy-efficient window solutions that enhance comfort, reduce utility bills, and improve your home's appearance in Southern California.",
      url: "https://nationalrestoration.com/services/windows",
      image: "https://nationalrestoration.com/modern-window-install.png",
    },
    {
      name: "Siding Replacement in Southern California",
      description:
        "Durable, beautiful siding options including vinyl, fiber cement, and engineered wood to protect and enhance your property in Southern California.",
      url: "https://nationalrestoration.com/services/siding",
      image: "https://nationalrestoration.com/newly-sided-home.png",
    },
    {
      name: "Storm Damage Repair in Southern California",
      description:
        "Emergency response and comprehensive restoration for properties damaged by storms, hail, wind, and water in Southern California.",
      url: "https://nationalrestoration.com/services/storm-damage",
      image: "https://nationalrestoration.com/roof-repair-after-storm.png",
    },
  ]

  // Generate location page schema
  const locationSchema = getLocationPageSchema(
    "Southern California",
    "Huntington Beach",
    "CA",
    "5500 Bolsa Ave, Suite 120",
    "92649",
    "(714) 555-7890",
    "socal@nationalrestoration.com",
    33.7456,
    -118.006,
    "https://nationalrestoration.com/locations/southern-california",
    "https://nationalrestoration.com/southern-california-skyline.png",
    "National Restoration provides comprehensive restoration services throughout Southern California, including Los Angeles, Orange County, and San Diego.",
    services,
  )

  return (
    <>
      {/* Add schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <div className="flex flex-col">
        <PageHeader
          title="Southern California"
          description="Comprehensive restoration services for Los Angeles, Orange County, San Diego, and beyond"
          backgroundImage="/southern-california-skyline.png"
        />

        {/* Rest of the location page content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Local Expertise</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Southern California Restoration Specialists</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  National Restoration has been serving Southern California homeowners and businesses. Our local team
                  understands the unique challenges of the region's diverse climate zones, from coastal conditions to
                  inland heat, and provides tailored solutions for every property.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Based in Huntington Beach with satellite operations throughout the region, our Southern California
                  team provides comprehensive restoration services including roofing, windows, siding, gutters, and
                  storm damage repair. We work with all major insurance companies and are familiar with local building
                  codes and permit requirements.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're in Los Angeles, Orange County, San Diego, or surrounding areas, our local experts are
                  ready to deliver exceptional results with the personalized service you deserve.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Southern California Office</p>
                      <p className="text-muted-foreground">
                        5500 Bolsa Ave, Suite 120
                        <br />
                        Huntington Beach, CA 92649
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(714) 555-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">socal@nationalrestoration.com</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button asChild size="lg" className="mr-4">
                    <Link href="/contact">Schedule Free Inspection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/southern-california-team.png"
                  alt="Southern California restoration team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Regional Specializations */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Regional Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Southern California Specializations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Southern California team specializes in restoration solutions tailored to the region's unique
                climate and architectural styles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>UV-Resistant Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in UV-resistant roofing and siding materials designed to withstand Southern
                    California's intense sun exposure. These specialized materials maintain their appearance and
                    structural integrity for years longer than standard options, providing superior protection and
                    value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CloudRain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Wildfire Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For properties in wildfire-prone areas, we offer specialized fire-resistant roofing, siding, and
                    window solutions. Our Class A fire-rated materials and installation techniques help protect your
                    property during wildfire season and may qualify for insurance discounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Wind className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Energy-Efficient Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our energy-efficient windows, cool roofing systems, and insulated siding help reduce cooling costs
                    in Southern California's warm climate. These solutions not only lower utility bills but also qualify
                    for various rebates and incentives from local utilities and government programs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Earthquake Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our restoration solutions take into account Southern California's seismic activity. We use flexible
                    flashing systems, reinforced attachment methods, and other specialized techniques to ensure your
                    exterior systems can withstand minor to moderate seismic events without damage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Coverage Area</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Southern California team provides comprehensive restoration services throughout the region.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/southern-california-map.png"
                  alt="Southern California service area map"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Los Angeles County</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Los Angeles
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Long Beach
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Pasadena
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Santa Monica
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Glendale
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Torrance
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Orange County</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Anaheim
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Huntington Beach
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Irvine
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Newport Beach
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Santa Ana
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Laguna Beach
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">San Diego County</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> San Diego
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Oceanside
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Carlsbad
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Chula Vista
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Escondido
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> La Jolla
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Additional Areas</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Ventura County
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Riverside County
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> San Bernardino County
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Santa Barbara
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Palm Springs
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Temecula
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground">
                  Don't see your city listed? Contact us to confirm service availability in your specific location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Projects */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Featured Projects</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Southern California Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore some of our recent restoration projects throughout Southern California.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/malibu-coastal-home.png"
                    alt="Malibu Coastal Home Restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Malibu Coastal Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete exterior restoration of a luxury coastal property damaged by salt air exposure and winter
                    storms. Project included custom copper gutters, impact-resistant windows, and specialized
                    marine-grade finishes.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/malibu-coastal-home">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/san-diego-commercial-complex.png"
                    alt="San Diego Commercial Complex"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>San Diego Commercial Complex</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Multi-building commercial renovation featuring energy-efficient window systems, cool roofing
                    technology, and updated facade elements. Project completed in phases to minimize business
                    disruption.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/san-diego-commercial">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/orange-county-fire-recovery.png"
                    alt="Orange County Fire Recovery"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Orange County Fire Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive restoration of a residential community affected by wildfire damage. Project included
                    fire-resistant roofing, siding, and window systems designed to enhance protection against future
                    events.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/orange-county-fire-recovery">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/gallery">View More Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Southern California Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from homeowners and businesses throughout Southern California who have experienced the National
                Restoration difference.
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
                    "After the Santa Ana winds damaged our roof, National Restoration responded quickly and
                    professionally. Their team worked directly with our insurance company and completed the repairs
                    efficiently. The new roof looks fantastic and has already withstood several major wind events
                    without issue."
                  </p>
                  <div>
                    <p className="font-semibold">Michael & Jennifer T.</p>
                    <p className="text-sm text-muted-foreground">Anaheim, CA</p>
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
                    "We hired National Restoration to replace all the windows in our San Diego home with
                    energy-efficient options. The difference in our comfort and energy bills has been remarkable. Their
                    team was knowledgeable about local rebate programs, which saved us thousands on the project."
                  </p>
                  <div>
                    <p className="font-semibold">David & Sarah L.</p>
                    <p className="text-sm text-muted-foreground">San Diego, CA</p>
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
                    "As property managers for several commercial buildings in Los Angeles, we've worked with many
                    contractors over the years. National Restoration stands out for their professionalism, quality work,
                    and ability to complete projects with minimal disruption to our tenants."
                  </p>
                  <div>
                    <p className="font-semibold">Robert K., Property Manager</p>
                    <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Certifications */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Local Credentials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Southern California Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Southern California team maintains specialized certifications and partnerships relevant to the
                region.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/cslb-logo.png" alt="California State License Board" width={60} height={60} />
                </div>
                <p className="text-center font-medium">CSLB Licensed</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
                </div>
                <p className="text-center font-medium">ENERGY STAR Partner</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/title-24-logo.png" alt="Title 24 Compliant" width={60} height={60} />
                </div>
                <p className="text-center font-medium">Title 24 Compliant</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/cool-roof-rating-logo.png" alt="Cool Roof Rating Council" width={60} height={60} />
                </div>
                <p className="text-center font-medium">CRRC Member</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/socal-edison-logo.png" alt="SoCal Edison Preferred Contractor" width={60} height={60} />
                </div>
                <p className="text-center font-medium">SCE Preferred Contractor</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/sdge-logo.png" alt="SDG&E Marketplace Partner" width={60} height={60} />
                </div>
                <p className="text-center font-medium">SDG&E Marketplace Partner</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started in Southern California?"
          description="Contact our local team today for a free inspection and estimate. We're ready to help with your restoration needs."
          buttonText="Contact Our SoCal Team"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}
