import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, CloudRain, Snowflake, Wind, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Ohio Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout Ohio, including Cleveland, Columbus, and surrounding areas.",
}

export default function OhioPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Ohio"
        description="Comprehensive restoration services for Cleveland, Columbus, and surrounding areas"
        backgroundImage="/ohio-skyline.png"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ohio Restoration Specialists</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration has been serving Ohio homeowners and businesses. Our local team understands the
                unique challenges of the Midwest climate, from harsh winters to severe summer storms, and provides
                tailored solutions for every property.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Based in Independence with satellite operations throughout the state, our Ohio team provides
                comprehensive restoration services including roofing, windows, siding, gutters, and storm damage repair.
                We work with all major insurance companies and are familiar with local building codes and permit
                requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're in Cleveland, Columbus, or surrounding areas, our local experts are ready to deliver
                exceptional results with the personalized service you deserve.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Ohio Office</p>
                    <p className="text-muted-foreground">
                      6100 Rockside Woods Blvd, Suite 315
                      <br />
                      Independence, OH 44131
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(216) 555-9876</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">ohio@nationalrestoration.com</p>
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
              <Image src="/ohio-team.png" alt="Ohio restoration team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Specializations */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Regional Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Specializations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Ohio team specializes in restoration solutions tailored to the region's unique climate and
              architectural styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Winter Weather Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in roofing, siding, and window systems designed to withstand Ohio's harsh winters. Our
                  solutions include enhanced ice and water shield protection, superior insulation, and ice dam
                  prevention measures to protect your property during freeze-thaw cycles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Storm Damage Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ohio experiences severe thunderstorms, high winds, and occasional tornadoes. Our team specializes in
                  comprehensive storm damage assessment, emergency response, and insurance claim assistance. We use
                  impact-resistant materials and reinforced installation methods for better storm protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy Efficiency Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ohio's variable climate demands energy-efficient building solutions. We offer comprehensive energy
                  upgrades including high-performance windows, insulated siding, and proper attic insulation and
                  ventilation systems that reduce energy costs year-round while improving comfort.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Historic Home Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ohio has many historic neighborhoods with unique architectural styles. Our team has specialized
                  experience in restoring and preserving historic properties, sourcing period-appropriate materials, and
                  implementing modern improvements while maintaining historical integrity.
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
              Our Ohio team provides comprehensive restoration services throughout the state.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/ohio-map.png" alt="Ohio service area map" fill className="object-cover" />
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Cleveland Area</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Cleveland
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Parma
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Lakewood
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Euclid
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Strongsville
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Westlake
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Columbus Area</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Columbus
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Dublin
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Westerville
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Gahanna
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Hilliard
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Grove City
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Akron/Canton Area</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Akron
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Canton
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Cuyahoga Falls
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Stow
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> North Canton
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Green
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Cincinnati
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Toledo
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Dayton
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Youngstown
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Mansfield
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" /> Lima
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent restoration projects throughout Ohio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/cleveland-historic-restoration.png"
                  alt="Cleveland Historic Restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Cleveland Historic Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior restoration of a century home in Cleveland's historic Tremont neighborhood. Project
                  included custom wood siding replication, window restoration, and period-appropriate details while
                  improving energy efficiency.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/cleveland-historic-restoration">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/columbus-office-park.png" alt="Columbus Office Park" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Columbus Office Park</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-building commercial renovation featuring energy-efficient window systems, modern facade
                  elements, and comprehensive waterproofing. Project completed in phases to minimize business
                  disruption.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/columbus-office-park">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/akron-storm-recovery.png" alt="Akron Storm Recovery" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Akron Storm Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive restoration of a residential neighborhood affected by severe hail and wind damage.
                  Project included roof replacement, siding repair, and gutter system upgrades designed to prevent
                  future storm damage.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/akron-storm-recovery">View Project</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Ohio Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and businesses throughout Ohio who have experienced the National Restoration
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
                  "After a severe hailstorm damaged our roof and siding, National Restoration responded quickly and
                  professionally. Their team worked directly with our insurance company and completed the repairs
                  efficiently. The new roof and siding look fantastic and have already withstood several major storms
                  without issue. We couldn't be happier with the results."
                </p>
                <div>
                  <p className="font-semibold">Robert & Karen J.</p>
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
                  "We hired National Restoration to replace all the windows in our Columbus home with energy-efficient
                  options. The difference in our comfort and energy bills has been remarkable. Their team was
                  professional, clean, and completed the project ahead of schedule."
                </p>
                <div>
                  <p className="font-semibold">Michael & Jennifer T.</p>
                  <p className="text-sm text-muted-foreground">Columbus, OH</p>
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
                  "As property managers for several commercial buildings in Akron, we've worked with National
                  Restoration on multiple projects. Their ability to work around our tenants' schedules and complete
                  projects with minimal disruption has been invaluable. The quality of their work is consistently
                  excellent."
                </p>
                <div>
                  <p className="font-semibold">David K., Property Manager</p>
                  <p className="text-sm text-muted-foreground">Akron, OH</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Ohio team maintains specialized certifications and partnerships relevant to the region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/ohio-ocilb-logo.png" alt="Ohio OCILB Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium">OCILB Licensed</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
              </div>
              <p className="text-center font-medium">ENERGY STAR Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/ohio-home-builders-logo.png" alt="Ohio Home Builders Association" width={60} height={60} />
              </div>
              <p className="text-center font-medium">OHBA Member</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/ohio-insurance-institute-logo.png"
                  alt="Ohio Insurance Institute Partner"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">OII Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/firstenergy-logo.png" alt="FirstEnergy Solutions Partner" width={60} height={60} />
              </div>
              <p className="text-center font-medium">FirstEnergy Solutions Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/ohio-bbb-logo.png" alt="BBB Accredited Business" width={60} height={60} />
              </div>
              <p className="text-center font-medium">BBB Accredited A+</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started in Ohio?"
        description="Contact our local team today for a free inspection and estimate. We're ready to help with your restoration needs."
        buttonText="Contact Our Ohio Team"
        buttonLink="/contact"
      />
    </div>
  )
}
