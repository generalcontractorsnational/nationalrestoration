import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, PenToolIcon as Tool } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import CTA from "@/components/cta"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Atlanta Restoration Services | National Restoration",
  description:
    "Specialized restoration services for Atlanta homes and businesses, including storm damage repair, roofing, siding, and more.",
}

export default function AtlantaServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Atlanta Restoration Services"
        description="Specialized solutions for Atlanta's unique climate and architectural styles"
        backgroundImage="/atlanta-skyline-wide.png"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Atlanta-Specific Restoration Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At National Restoration, we understand that Atlanta properties face unique challenges due to the
                region's climate, architectural styles, and building codes. Our Atlanta team provides specialized
                restoration services tailored to local needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From historic homes in Inman Park to modern commercial buildings in Buckhead, we have the expertise to
                handle any restoration project in the Atlanta metro area. Our team is familiar with local building
                codes, permit requirements, and HOA regulations throughout Fulton, DeKalb, Cobb, and Gwinnett counties.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're proud to be an active part of the Atlanta community, with a dedicated local team that understands
                the unique needs of Georgia homeowners and businesses.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Local Knowledge</h3>
                    <p className="text-muted-foreground">
                      Our Atlanta team understands local building codes, architectural styles, and climate challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Atlanta-Based Crews</h3>
                    <p className="text-muted-foreground">
                      Local teams that arrive quickly and understand Atlanta's unique neighborhoods and communities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Climate-Specific Solutions</h3>
                    <p className="text-muted-foreground">
                      Materials and techniques optimized for Atlanta's hot, humid summers and occasional severe storms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/atlanta-restoration-team.png"
                alt="Atlanta restoration team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atlanta-Specific Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Specialized Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta-Specific Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our services are tailored to address the unique challenges faced by Atlanta properties.
            </p>
          </div>

          <Tabs defaultValue="storm" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="storm">Storm Damage</TabsTrigger>
              <TabsTrigger value="roofing">Roofing</TabsTrigger>
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="historic">Historic Restoration</TabsTrigger>
            </TabsList>
            <TabsContent value="storm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-storm-damage-repair.png"
                    alt="Storm damage repair in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Atlanta Storm Damage Specialists</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Atlanta's severe thunderstorms, occasional tornadoes, and heavy rainfall can cause significant
                    damage to properties. Our storm damage team specializes in comprehensive restoration services for
                    Atlanta-area homes and businesses affected by:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Hail damage</span> - Common in spring and summer storms, causing
                        roof, siding, and window damage
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Wind damage</span> - From fallen trees and debris during severe
                        thunderstorms and occasional tornadoes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Water intrusion</span> - From heavy rainfall and flash flooding
                        common in Atlanta's climate
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-medium">Lightning strikes</span> - Causing electrical damage, fires, and
                        structural issues
                      </span>
                    </li>
                  </ul>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our Atlanta storm response team is available 24/7 with emergency services including tarping,
                    board-up, water extraction, and temporary power solutions. We work directly with all major insurance
                    companies and have extensive experience with storm-related claims in Georgia.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/services/storm-damage">Learn More About Storm Damage Services</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="roofing">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Atlanta Roofing Solutions</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Atlanta's hot, humid summers and occasional severe storms require roofing systems that can withstand
                    these challenging conditions. Our Atlanta roofing specialists provide solutions optimized for local
                    weather patterns and architectural styles.
                  </p>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Heat-Resistant Roofing</h4>
                      <p className="text-muted-foreground">
                        Our cool roofing systems reflect more sunlight and absorb less heat, reducing cooling costs
                        during Atlanta's hot summers. These systems can lower roof surface temperatures by up to 50°F
                        and reduce peak cooling demand by 10-15%.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Storm-Resistant Systems</h4>
                      <p className="text-muted-foreground">
                        We offer impact-resistant shingles and roofing systems designed to withstand hail and wind
                        damage common during Atlanta thunderstorms. These systems are tested to withstand impacts
                        equivalent to 2" hail and wind speeds up to 130 mph.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Humidity Protection</h4>
                      <p className="text-muted-foreground">
                        Our advanced ventilation and moisture barrier systems protect against the high humidity levels
                        in Atlanta, preventing mold, mildew, and rot in attic spaces and extending the life of your
                        roofing system.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/services/roofing">Learn More About Roofing Services</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-roofing-project.png"
                    alt="Roofing project in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="exterior">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-exterior-renovation.png"
                    alt="Exterior renovation in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Atlanta Exterior Solutions</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    From traditional brick homes in Virginia Highland to modern designs in Midtown, our exterior
                    renovation services are tailored to Atlanta's diverse architectural styles and climate challenges.
                  </p>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Siding Solutions</h4>
                      <p className="text-muted-foreground">
                        We offer fiber cement, engineered wood, and vinyl siding options specifically selected to
                        withstand Atlanta's humidity and temperature fluctuations. Our moisture-resistant barriers and
                        installation techniques prevent warping, cracking, and mold growth common in humid climates.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Window Replacement</h4>
                      <p className="text-muted-foreground">
                        Our energy-efficient windows are designed to keep Atlanta homes cool in summer and warm in
                        winter. With low-E glass coatings and insulated frames, these windows can reduce energy costs by
                        up to 30% while protecting interiors from UV damage.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Gutter Systems</h4>
                      <p className="text-muted-foreground">
                        Atlanta's heavy rainfall requires properly sized gutters and downspouts to protect foundations
                        and prevent erosion. Our seamless gutter systems are custom-fabricated on-site to ensure perfect
                        fit and maximum performance during heavy downpours.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/services/siding">Siding Services</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/services/windows">Window Services</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/services/gutters">Gutter Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="historic">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Atlanta Historic Restoration</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Atlanta's historic neighborhoods like Inman Park, Grant Park, and Druid Hills feature unique
                    architectural styles that require specialized restoration expertise. Our historic restoration team
                    combines modern techniques with traditional craftsmanship to preserve the character and integrity of
                    Atlanta's historic homes.
                  </p>
                  <div className="space-y-6 mb-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Period-Accurate Restoration</h4>
                      <p className="text-muted-foreground">
                        We specialize in restoring Victorian, Craftsman, and Colonial Revival homes with period-accurate
                        materials and techniques. Our team works closely with historical societies and preservation
                        boards to ensure compliance with local guidelines.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Modern Performance</h4>
                      <p className="text-muted-foreground">
                        While maintaining historical accuracy, we incorporate modern materials and techniques where
                        appropriate to improve energy efficiency, durability, and comfort. This balanced approach
                        ensures your historic home is both beautiful and functional.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tax Credit Assistance</h4>
                      <p className="text-muted-foreground">
                        Our team can help navigate the Georgia Historic Preservation Tax Incentives program and other
                        available credits for qualifying historic restoration projects in Atlanta.
                      </p>
                    </div>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/services/historic-restoration">Learn More About Historic Restoration</Link>
                  </Button>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-historic-restoration.png"
                    alt="Historic home restoration in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Atlanta Projects Showcase */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Project Showcase</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our recent restoration projects throughout the Atlanta metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/buckhead-estate-project.png"
                  alt="Buckhead Estate Restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Buckhead Estate Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior restoration of a 1920s estate in Buckhead following significant storm damage.
                  Project included custom copper gutters, slate roof restoration, and period-accurate window
                  replacements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Historic Restoration</Badge>
                  <Badge variant="outline">Roofing</Badge>
                  <Badge variant="outline">Windows</Badge>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/buckhead-estate">View Project Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/midtown-commercial-project.png"
                  alt="Midtown Commercial Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Midtown Office Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Energy-efficient renovation of a three-building office complex in Midtown Atlanta. Project featured
                  cool roofing technology, high-performance window systems, and updated facade elements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Commercial</Badge>
                  <Badge variant="outline">Energy Efficiency</Badge>
                  <Badge variant="outline">Facade</Badge>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/midtown-commercial">View Project Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/marietta-neighborhood-project.png"
                  alt="Marietta Neighborhood Recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Marietta Neighborhood Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive restoration of 27 homes in a Marietta subdivision following severe hail and wind damage.
                  Project included coordinated insurance claims, roofing, siding, and window replacements.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Storm Recovery</Badge>
                  <Badge variant="outline">Multi-Property</Badge>
                  <Badge variant="outline">Insurance Claims</Badge>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/projects/marietta-neighborhood">View Project Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/projects/atlanta">View All Atlanta Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Atlanta Building Codes & Permits */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Local Knowledge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Building Codes & Permits</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team navigates Atlanta's complex building codes and permit requirements so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Permit Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We handle all aspects of the permitting process for your Atlanta restoration project, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Permit application preparation and submission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Required documentation and drawings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Inspection scheduling and coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Final permit closeout and documentation</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Our relationships with local building departments throughout the Atlanta metro area help streamline
                  the permitting process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Code Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We ensure your project meets all applicable building codes and regulations, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Georgia State Minimum Standard Codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>City of Atlanta Building Code amendments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>County-specific requirements (Fulton, DeKalb, Cobb, Gwinnett)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Energy efficiency and green building standards</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Our team stays current with code updates and changes to ensure your project is always compliant.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HOA & Historic District Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  We navigate the approval processes for properties in special districts, including:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>HOA architectural review committees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Historic district preservation boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Atlanta Urban Design Commission requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Neighborhood planning unit (NPU) approvals</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Our experience with Atlanta's diverse neighborhoods ensures smooth approval processes for even the
                  most stringent review boards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atlanta Service Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Atlanta Restoration Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures a hassle-free experience for Atlanta homeowners and businesses.
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted hidden md:block"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Free On-Site Consultation</h3>
                  <p className="text-lg text-muted-foreground">
                    Our Atlanta team provides a thorough on-site assessment of your property, discussing your needs,
                    concerns, and restoration goals. We typically arrive within 24-48 hours of your initial contact.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden md:order-first">
                  <Image
                    src="/atlanta-consultation.png"
                    alt="On-site consultation in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Detailed Project Plan</h3>
                  <p className="text-lg text-muted-foreground">
                    We develop a comprehensive project plan tailored to your property's specific needs and your budget.
                    This includes material selections, timeline, and transparent pricing with no hidden costs.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-project-planning.png"
                    alt="Project planning session in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Insurance Coordination</h3>
                  <p className="text-lg text-muted-foreground">
                    For insurance claims, our Atlanta specialists work directly with your insurance company to ensure
                    maximum coverage. We document damage thoroughly, attend adjuster meetings, and handle all
                    claim-related paperwork.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden md:order-first">
                  <Image
                    src="/atlanta-insurance-coordination.png"
                    alt="Insurance coordination in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Expert Execution</h3>
                  <p className="text-lg text-muted-foreground">
                    Our Atlanta-based crews execute your project with precision and attention to detail. We use premium
                    materials and techniques optimized for Atlanta's climate, with daily cleanup and minimal disruption
                    to your property.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/atlanta-project-execution.png"
                    alt="Project execution in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Step 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    5
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Quality Inspection</h3>
                  <p className="text-lg text-muted-foreground">
                    Upon completion, our project manager conducts a thorough inspection with you to ensure everything
                    meets our high standards and your expectations. We don't consider the job complete until you're 100%
                    satisfied.
                  </p>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden md:order-first">
                  <Image
                    src="/atlanta-quality-inspection.png"
                    alt="Quality inspection in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atlanta Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Atlanta Clients Say</h2>
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
                  "After the hailstorm damaged our Buckhead home, National Restoration handled everything from the
                  insurance claim to the final roof installation. Their Atlanta team was professional, knowledgeable
                  about local building codes, and completed the work ahead of schedule. We couldn't be happier with the
                  results."
                </p>
                <div>
                  <p className="font-semibold">Robert & Susan M.</p>
                  <p className="text-sm text-muted-foreground">Buckhead, Atlanta</p>
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
                  "As a property manager for several historic buildings in Inman Park, I've worked with many contractors
                  over the years. National Restoration stands out for their attention to detail and understanding of
                  historic preservation requirements. Their team navigated the Urban Design Commission approval process
                  flawlessly."
                </p>
                <div>
                  <p className="font-semibold">Jennifer L., Property Manager</p>
                  <p className="text-sm text-muted-foreground">Inman Park, Atlanta</p>
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
                  "When our Marietta neighborhood was hit by severe storms, National Restoration coordinated repairs for
                  our entire HOA. Their team handled 27 different insurance claims and completed all repairs within 60
                  days. Their knowledge of local building codes and permit requirements made the process seamless."
                </p>
                <div>
                  <p className="font-semibold">David K., HOA President</p>
                  <p className="text-sm text-muted-foreground">Marietta, GA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Start Your Atlanta Project?"
        description="Contact our local Atlanta team today for a free inspection and estimate. We're ready to help with your restoration needs."
        buttonText="Contact Our Atlanta Team"
        buttonLink="/contact"
      />
    </div>
  )
}
