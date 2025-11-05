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
  title: "Atlanta Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout Atlanta, including Marietta, Alpharetta, and surrounding areas.",
}

export default function AtlantaPage() {
  // Services for schema
  const services = [
    {
      name: "Roofing Services in Atlanta",
      description:
        "Expert roof replacement, repair and installation services for residential and commercial properties in Atlanta.",
      url: "https://nationalrestoration.com/services/roofing",
      image: "https://nationalrestoration.com/roofing-crew-install.png",
    },
    {
      name: "Window Replacement in Atlanta",
      description:
        "Energy-efficient window solutions that enhance comfort, reduce utility bills, and improve your home's appearance in Atlanta.",
      url: "https://nationalrestoration.com/services/windows",
      image: "https://nationalrestoration.com/modern-window-install.png",
    },
    {
      name: "Siding Replacement in Atlanta",
      description:
        "Durable, beautiful siding options including vinyl, fiber cement, and engineered wood to protect and enhance your property in Atlanta.",
      url: "https://nationalrestoration.com/services/siding",
      image: "https://nationalrestoration.com/newly-sided-home.png",
    },
    {
      name: "Storm Damage Repair in Atlanta",
      description:
        "Emergency response and comprehensive restoration for properties damaged by storms, hail, wind, and water in Atlanta.",
      url: "https://nationalrestoration.com/services/storm-damage",
      image: "https://nationalrestoration.com/roof-repair-after-storm.png",
    },
  ]

  // Generate location page schema
  const locationSchema = getLocationPageSchema(
    "Atlanta",
    "Atlanta",
    "GA",
    "3344 Peachtree Road NE, Suite 1200",
    "30326",
    "(404) 555-7890",
    "atlanta@nationalrestoration.com",
    33.8463,
    -84.3621,
    "https://nationalrestoration.com/locations/atlanta",
    "https://nationalrestoration.com/atlanta-skyline.png",
    "National Restoration provides comprehensive restoration services throughout Atlanta, including Marietta, Alpharetta, and surrounding areas.",
    services,
  )

  return (
    <>
      {/* Add schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <div className="flex flex-col">
        <PageHeader
          title="Atlanta"
          description="Comprehensive restoration services for Atlanta, Marietta, Alpharetta, and beyond"
          backgroundImage="/atlanta-skyline.png"
        />

        {/* Rest of the location page content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Local Expertise</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Atlanta Restoration Specialists</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  National Restoration has been serving Atlanta homeowners and businesses. Our local team understands
                  the unique challenges of the region's climate, from summer storms to occasional winter weather events,
                  and provides tailored solutions for every property.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Based in Atlanta with satellite operations throughout the metro area, our Georgia team provides
                  comprehensive restoration services including roofing, windows, siding, gutters, and storm damage
                  repair. We work with all major insurance companies and are familiar with local building codes and
                  permit requirements.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're in Atlanta, Marietta, Alpharetta, or surrounding areas, our local experts are ready to
                  deliver exceptional results with the personalized service you deserve.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Atlanta Office</p>
                      <p className="text-muted-foreground">
                        3344 Peachtree Road NE, Suite 1200
                        <br />
                        Atlanta, GA 30326
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(404) 555-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">atlanta@nationalrestoration.com</p>
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
                <Image src="/atlanta-team.png" alt="Atlanta restoration team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Regional Specializations */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Regional Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Specializations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Atlanta team specializes in restoration solutions tailored to the region's unique climate and
                architectural styles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Heat-Resistant Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We specialize in heat-resistant roofing and siding materials designed to withstand Atlanta's hot and
                    humid summers. These specialized materials maintain their appearance and structural integrity for
                    years longer than standard options, providing superior protection and value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CloudRain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Storm Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For properties in storm-prone areas, we offer specialized storm-resistant roofing, siding, and
                    window solutions. Our impact-resistant materials and installation techniques help protect your
                    property during severe weather and may qualify for insurance discounts.
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
                    in Atlanta's warm climate. These solutions not only lower utility bills but also qualify for various
                    rebates and incentives from local utilities and government programs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Humidity Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our restoration solutions take into account Atlanta's high humidity levels. We use specialized
                    moisture barriers, ventilation systems, and mold-resistant materials to ensure your exterior systems
                    can withstand the region's humidity without damage or deterioration.
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
                Our Atlanta team provides comprehensive restoration services throughout the metro area.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image src="/atlanta-map.png" alt="Atlanta service area map" fill className="object-cover" />
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Atlanta</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Buckhead
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Midtown
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Downtown
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Virginia Highland
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Decatur
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Sandy Springs
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">North Metro</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Marietta
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Alpharetta
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Roswell
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Kennesaw
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Cumming
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Johns Creek
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">East Metro</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Stone Mountain
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Lilburn
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Snellville
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Lawrenceville
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Duluth
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Norcross
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">South Metro</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> College Park
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> East Point
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Fayetteville
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Peachtree City
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> McDonough
                      </li>
                      <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" /> Stockbridge
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore some of our recent restoration projects throughout Atlanta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src="/buckhead-estate.png" alt="Buckhead Estate Restoration" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Buckhead Estate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete exterior restoration of a luxury estate property damaged by severe storms. Project included
                    custom copper gutters, impact-resistant windows, and specialized architectural finishes.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/buckhead-estate">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/atlanta-commercial-complex.png"
                    alt="Atlanta Commercial Complex"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Midtown Office Complex</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Multi-building commercial renovation featuring energy-efficient window systems, cool roofing
                    technology, and updated facade elements. Project completed in phases to minimize business
                    disruption.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/atlanta-commercial">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="/marietta-storm-recovery.png"
                    alt="Marietta Storm Recovery"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Marietta Storm Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive restoration of a residential community affected by severe storm damage. Project
                    included storm-resistant roofing, siding, and window systems designed to enhance protection against
                    future events.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/case-studies/marietta-storm-recovery">View Project</Link>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Atlanta Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from homeowners and businesses throughout Atlanta who have experienced the National Restoration
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
                    "After the severe storms damaged our roof, National Restoration responded quickly and
                    professionally. Their team worked directly with our insurance company and completed the repairs
                    efficiently. The new roof looks fantastic and has already withstood several major storms without
                    issue."
                  </p>
                  <div>
                    <p className="font-semibold">Michael & Jennifer T.</p>
                    <p className="text-sm text-muted-foreground">Marietta, GA</p>
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
                    "We hired National Restoration to replace all the windows in our Atlanta home with energy-efficient
                    options. The difference in our comfort and energy bills has been remarkable. Their team was
                    knowledgeable about local rebate programs, which saved us thousands on the project."
                  </p>
                  <div>
                    <p className="font-semibold">David & Sarah L.</p>
                    <p className="text-sm text-muted-foreground">Atlanta, GA</p>
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
                    "As property managers for several commercial buildings in Atlanta, we've worked with many
                    contractors over the years. National Restoration stands out for their professionalism, quality work,
                    and ability to complete projects with minimal disruption to our tenants."
                  </p>
                  <div>
                    <p className="font-semibold">Robert K., Property Manager</p>
                    <p className="text-sm text-muted-foreground">Atlanta, GA</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our Atlanta team maintains specialized certifications and partnerships relevant to the region.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/georgia-license-board.png" alt="Georgia State License Board" width={60} height={60} />
                </div>
                <p className="text-center font-medium">GA Licensed</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
                </div>
                <p className="text-center font-medium">ENERGY STAR Partner</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/atlanta-bbb-logo.png" alt="BBB Atlanta" width={60} height={60} />
                </div>
                <p className="text-center font-medium">BBB Accredited</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/cool-roof-rating-logo.png" alt="Cool Roof Rating Council" width={60} height={60} />
                </div>
                <p className="text-center font-medium">CRRC Member</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image
                    src="/georgia-power-logo.png"
                    alt="Georgia Power Preferred Contractor"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-center font-medium">GA Power Preferred Contractor</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                  <Image src="/atlanta-hba-logo.png" alt="Atlanta Home Builders Association" width={60} height={60} />
                </div>
                <p className="text-center font-medium">Atlanta HBA Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Ready to Get Started in Atlanta?"
          description="Contact our local team today for a free inspection and estimate. We're ready to help with your restoration needs."
          buttonText="Contact Our Atlanta Team"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}
