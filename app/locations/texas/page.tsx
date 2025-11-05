import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, CloudRain, Sun, Wind, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Dallas-Fort Worth Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout the Dallas-Fort Worth Metroplex and surrounding areas.",
}

export default function TexasPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Dallas–Fort Worth"
        description="Comprehensive restoration services for the entire DFW Metroplex"
        backgroundImage="/dallas-fort-worth-skyline.png"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">DFW Restoration Specialists</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration has been serving the Dallas-Fort Worth Metroplex. Our local team understands the
                unique challenges of the Texas climate, from intense heat and sun exposure to severe hailstorms and high
                winds, and provides tailored solutions for every property.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Dallas with satellite operations throughout the Metroplex, our Texas team provides
                comprehensive restoration services including roofing, windows, siding, gutters, and storm damage repair.
                We work with all major insurance companies and are familiar with local building codes and permit
                requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're in Dallas, Fort Worth, or surrounding communities, our local experts are ready to deliver
                exceptional results with the personalized service you deserve.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Dallas-Fort Worth Office</p>
                    <p className="text-muted-foreground">
                      5050 Quorum Drive, Suite 700
                      <br />
                      Dallas, TX 75254
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(972) 555-6543</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">dfw@nationalrestoration.com</p>
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
                src="/dallas-fort-worth-team.png"
                alt="Dallas-Fort Worth restoration team"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DFW Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Dallas-Fort Worth team specializes in restoration solutions tailored to the region's unique climate
              and building requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hail Damage Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The DFW area experiences some of the most severe hailstorms in the country. Our team specializes in
                  comprehensive hail damage assessment, insurance claim assistance, and installation of impact-resistant
                  roofing and siding materials designed specifically for Texas storm conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Heat-Resistant Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Texas summers demand specialized building materials. We offer cool roofing systems, UV-resistant
                  siding, and energy-efficient windows designed to reflect heat, reduce cooling costs, and withstand
                  intense sun exposure without fading or deteriorating prematurely.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wind Damage Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High winds are common in North Texas. Our team specializes in wind-resistant roofing systems with
                  enhanced installation methods, reinforced siding attachment, and impact-rated windows that provide
                  superior protection during severe weather events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HOA Compliance Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many DFW communities have strict homeowners association requirements. Our team has extensive
                  experience navigating HOA approval processes and offering compliant exterior solutions that meet
                  aesthetic guidelines while providing superior protection and energy efficiency.
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
              Our Dallas-Fort Worth team provides comprehensive restoration services throughout the Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/dfw-metro-map.png" alt="Dallas-Fort Worth service area map" fill className="object-cover" />
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Dallas County</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Dallas
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Richardson
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Garland
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Irving
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Mesquite
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Carrollton
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Tarrant County</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Fort Worth
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Arlington
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Mansfield
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Euless
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Bedford
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Hurst
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Collin County</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Plano
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Frisco
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> McKinney
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Allen
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Wylie
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Prosper
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Denton County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Rockwall County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Kaufman County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Ellis County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Johnson County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Parker County
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DFW Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent restoration projects throughout the Dallas-Fort Worth Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/plano-hail-recovery.png" alt="Plano Hail Recovery" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Plano Hail Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive restoration of a residential neighborhood affected by severe hail damage. Project
                  included impact-resistant roof replacement, siding repair, window replacement, and gutter system
                  upgrades designed to withstand future hailstorms.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/plano-hail-recovery">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/fort-worth-commercial-complex.png"
                  alt="Fort Worth Commercial Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Fort Worth Commercial Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-building commercial renovation featuring energy-efficient window systems, cool roofing
                  technology, and updated facade elements. Project completed in phases to minimize business disruption
                  while improving energy efficiency and appearance.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/fort-worth-commercial">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/frisco-neighborhood-upgrade.png"
                  alt="Frisco Neighborhood Upgrade"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Frisco Neighborhood Upgrade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior renovation of multiple homes in a Frisco neighborhood, coordinated with the HOA to
                  ensure compliance while upgrading to more durable, energy-efficient materials. Project included
                  roofing, siding, windows, and gutters.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/frisco-neighborhood-upgrade">View Project</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our DFW Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and businesses throughout the Dallas-Fort Worth area who have experienced the
              National Restoration difference.
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
                  "After a massive hailstorm hit our Plano neighborhood, National Restoration helped us navigate the
                  insurance claim process and restored our home beautifully. Their team installed impact-resistant
                  roofing, repaired our siding, and replaced damaged windows. The work was completed efficiently and
                  with excellent quality."
                </p>
                <div>
                  <p className="font-semibold">Thomas & Sarah J.</p>
                  <p className="text-sm text-muted-foreground">Plano, TX</p>
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
                  "We hired National Restoration to replace all the windows in our Arlington home with energy-efficient
                  options. The difference in our comfort during the hot Texas summer has been remarkable. Their team was
                  professional, clean, and completed the project ahead of schedule."
                </p>
                <div>
                  <p className="font-semibold">Michael & Jennifer R.</p>
                  <p className="text-sm text-muted-foreground">Arlington, TX</p>
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
                  "As property managers for several commercial buildings in Dallas, we've worked with National
                  Restoration on multiple projects. Their ability to work around our tenants' schedules and complete
                  projects with minimal disruption has been invaluable. The quality of their work is consistently
                  excellent and their knowledge of commercial building requirements is impressive."
                </p>
                <div>
                  <p className="font-semibold">Robert K., Property Manager</p>
                  <p className="text-sm text-muted-foreground">Dallas, TX</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">DFW Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Dallas-Fort Worth team maintains specialized certifications and partnerships relevant to the region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/texas-rcat-logo.png" alt="RCAT Member" width={60} height={60} />
              </div>
              <p className="text-center font-medium">RCAT Member</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/texas-trcc-logo.png" alt="TRCC Registered" width={60} height={60} />
              </div>
              <p className="text-center font-medium">TRCC Registered</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
              </div>
              <p className="text-center font-medium">ENERGY STAR Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/north-texas-roofing-logo.png"
                  alt="North Texas Roofing Contractors Association"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">NTRCA Member</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/oncor-logo.png" alt="Oncor Approved Contractor" width={60} height={60} />
              </div>
              <p className="text-center font-medium">Oncor Approved Contractor</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/texas-bbb-logo.png" alt="BBB Accredited Business" width={60} height={60} />
              </div>
              <p className="text-center font-medium">BBB Accredited A+</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started in Dallas-Fort Worth?"
        description="Contact our local team today for a free inspection and estimate. We're ready to help with your restoration needs."
        buttonText="Contact Our DFW Team"
        buttonLink="/contact"
      />
    </div>
  )
}
