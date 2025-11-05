import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, CloudRain, Snowflake, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Washington D.C. Metro Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout the Washington D.C. Metro area, including Northern Virginia and Maryland.",
}

export default function DCMetroPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Washington D.C. Metro"
        description="Comprehensive restoration services for Washington D.C., Northern Virginia, and Maryland"
        backgroundImage="/dc-metro-skyline.png"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">D.C. Metro Restoration Specialists</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration has been serving the Washington D.C. Metro area, providing comprehensive
                restoration services to homeowners and businesses throughout the region. Our local team understands the
                unique challenges of the area's climate, architecture, and building regulations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Vienna, Virginia, with satellite operations throughout D.C., Northern Virginia, and Maryland,
                our team specializes in historic property restoration, modern home renovations, and commercial building
                exterior solutions. We work with all major insurance companies and are familiar with local building
                codes and permit requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're in Washington D.C., Alexandria, Arlington, Bethesda, or beyond, our local experts are
                ready to deliver exceptional results with the personalized service you deserve.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">D.C. Metro Office</p>
                    <p className="text-muted-foreground">
                      8300 Boone Blvd, Suite 500
                      <br />
                      Vienna, VA 22182
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(703) 555-4321</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">dcmetro@nationalrestoration.com</p>
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
              <Image src="/dc-metro-team.png" alt="D.C. Metro restoration team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Specializations */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Regional Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D.C. Metro Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our D.C. Metro team specializes in restoration solutions tailored to the region's unique climate,
              architecture, and building requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Historic Property Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in restoring and preserving historic properties throughout the D.C. Metro area. Our team
                  is experienced in working with historic review boards, sourcing period-appropriate materials, and
                  implementing modern improvements while maintaining historical integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Four-Season Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The D.C. Metro area experiences all four seasons, each with unique challenges for your property. We
                  provide comprehensive exterior solutions designed to withstand hot, humid summers, freezing winters,
                  and everything in between while maintaining energy efficiency year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ice Dam Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Winter ice dams are a common problem in the D.C. Metro area. Our specialized roofing, insulation, and
                  gutter solutions are designed to prevent ice dam formation, protecting your property from water damage
                  during freeze-thaw cycles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HOA & Condo Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We have extensive experience working with homeowners associations and condominium boards throughout
                  the D.C. Metro area. Our team understands the approval processes, architectural guidelines, and
                  coordination requirements for successful multi-unit projects.
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
              Our D.C. Metro team provides comprehensive restoration services throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/dc-metro-map.png" alt="D.C. Metro service area map" fill className="object-cover" />
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Washington D.C.</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Northwest D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Northeast D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Southwest D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Southeast D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Capitol Hill
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Georgetown
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Northern Virginia</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Alexandria
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Arlington
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Fairfax
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> McLean
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Vienna
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Reston
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Maryland Suburbs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Bethesda
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Silver Spring
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Rockville
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Chevy Chase
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Potomac
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Gaithersburg
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Loudoun County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Prince William County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Montgomery County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Prince George's County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Howard County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Anne Arundel County
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground">
                Don't see your area listed? Contact us to confirm service availability in your specific location.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D.C. Metro Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent restoration projects throughout the D.C. Metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/georgetown-historic-home.png"
                  alt="Georgetown Historic Home"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Georgetown Historic Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior restoration of a 19th-century Georgetown townhome, including custom-milled wood
                  siding, period-appropriate windows, and copper gutters. Project required historic review board
                  approval and specialized craftsmanship.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/georgetown-historic-home">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/arlington-office-complex.png"
                  alt="Arlington Office Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Arlington Office Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-building commercial renovation featuring energy-efficient window systems, modern facade
                  elements, and comprehensive waterproofing. Project completed in phases to minimize business
                  disruption.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/arlington-office-complex">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/bethesda-storm-recovery.png" alt="Bethesda Storm Recovery" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Bethesda Storm Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive restoration of a luxury home damaged by severe storms. Project included roof
                  replacement, siding repair, window replacement, and gutter system upgrades designed to prevent future
                  storm damage. Completed with full insurance coordination and minimal disruption to the homeowners.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/bethesda-storm-recovery">View Project</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our D.C. Metro Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and businesses throughout the D.C. Metro area who have experienced the National
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
                  "National Restoration restored our historic Alexandria home with incredible attention to detail. They
                  navigated the historic district requirements expertly and matched the original architectural elements
                  perfectly. Their craftsmanship and professionalism exceeded our expectations."
                </p>
                <div>
                  <p className="font-semibold">James & Elizabeth W.</p>
                  <p className="text-sm text-muted-foreground">Alexandria, VA</p>
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
                  "After a severe winter storm damaged our roof and caused interior water damage, National Restoration
                  responded quickly and professionally. Their team worked directly with our insurance company and
                  completed the repairs efficiently. The new roof and gutter system have already protected us through
                  several major storms."
                </p>
                <div>
                  <p className="font-semibold">Michael & Sarah T.</p>
                  <p className="text-sm text-muted-foreground">Bethesda, MD</p>
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
                  "As property managers for several commercial buildings in Arlington, we've worked with National
                  Restoration on multiple projects. Their ability to work around our tenants' schedules and complete
                  projects with minimal disruption has been invaluable. The quality of their work is consistently
                  excellent."
                </p>
                <div>
                  <p className="font-semibold">Jennifer K., Property Manager</p>
                  <p className="text-sm text-muted-foreground">Arlington, VA</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D.C. Metro Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our D.C. Metro team maintains specialized certifications and partnerships relevant to the region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/va-dpor-logo.png" alt="Virginia DPOR Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium">VA DPOR Licensed</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/md-dllr-logo.png" alt="Maryland DLLR Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium">MD DLLR Licensed</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/dc-dcra-logo.png" alt="DC DCRA Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium">DC DCRA Licensed</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/historic-preservation-logo.png"
                  alt="Historic Preservation Certified"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">Historic Preservation Certified</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
              </div>
              <p className="text-center font-medium">ENERGY STAR Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/pepco-logo.png" alt="Pepco Approved Contractor" width={60} height={60} />
              </div>
              <p className="text-center font-medium">Pepco Approved Contractor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started in the D.C. Metro Area?"
        description="Contact our local team today for a free inspection and estimate. We're ready to help with your restoration needs."
        buttonText="Contact Our D.C. Metro Team"
        buttonLink="/contact"
      />
    </div>
  )
}
