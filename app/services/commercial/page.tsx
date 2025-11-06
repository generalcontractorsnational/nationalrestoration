import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Clock,
  FileText,
  Handshake,
  Wrench,
  Award,
  Users,
  Building2,
  Store,
  Factory,
  Home,
  Shield,
  AlertTriangle,
  Droplets,
  Hammer,
  Paintbrush,
  Droplet,
  DoorOpen,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Commercial Restoration Services | National Builders Corporation",
  description:
    "Full-service commercial restoration, repair, and capital improvement projects. From emergency response to scheduled façade restoration and building envelope upgrades.",
}

export default function CommercialServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Commercial Restoration Services"
        description="Your full-service partner for commercial restoration, repair, and capital improvement projects"
        backgroundImage="/commercial-building-restoration.png"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-3">Commercial Expertise</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Full-Service Commercial Partner</h2>
              <p className="text-muted-foreground mb-3">
                National Builders Corporation is your full-service partner for commercial restoration, repair, and
                capital improvement projects. From emergency response after severe weather to scheduled façade
                restoration, tenant improvements, and full building envelope upgrades, our team manages every detail
                with professionalism and care.
              </p>
              <p className="text-muted-foreground mb-3">
                We coordinate free property assessments, rapid mitigation, detailed scopes and estimates, permitting,
                and turnkey execution—so facility managers, owners, and property teams can protect assets, control
                costs, and keep occupants safe with minimal disruption.
              </p>
              <p className="text-muted-foreground mb-4">
                We specialize in occupied, operational environments across multi-family housing, office buildings,
                retail centers, and industrial facilities. Our project managers, superintendents, and craft crews bring
                deep trade expertise, disciplined scheduling, and safety-first practices to deliver durable results—on
                time and on budget.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Assessment</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/commercial-team-meeting.jpg"
                alt="Commercial restoration consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Markets We Serve</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Commercial Properties We Serve</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We specialize in occupied, operational environments across diverse commercial property types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/multi-family-apartment-complex.jpg"
                  alt="Multi-Family Housing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Multi-Family Housing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Apartments, condos, HOA/COA properties. Swift communication, clean jobsites, and careful coordination
                  with onsite management and residents.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Exterior envelope repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Balcony remediation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Common-area renovations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48 w-full">
                <Image src="/office-building-exterior.jpg" alt="Office Buildings" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Office Buildings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Low-, mid-, and high-rise buildings. Lobby modernization to façade restoration and roof system
                  upgrades with minimal tenant disruption.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Façade restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Roof system upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Energy efficiency improvements
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48 w-full">
                <Image src="/retail-center-restoration.jpg" alt="Retail Centers" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Store className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Retail Centers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Neighborhood, power, and mixed-use centers. Rapid response repairs, storefront replacements, and
                  façade refreshes to maintain uptime.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Storefront replacements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Canopy & façade refreshes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> ADA upgrades
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/industrial-facility-exterior.jpg"
                  alt="Industrial Facilities"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Industrial Facilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Warehouses, logistics, light manufacturing. Durability, safety, and speed with work executed around
                  production schedules.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Roof & wall panel replacements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Dock equipment work
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Code-compliant egress
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Our Process</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How We Work With Commercial Clients</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures your commercial project is completed efficiently with minimal
              disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="relative h-40 w-full">
                <Image src="/commercial-property-inspection.jpg" alt="Free Inspection" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">1. Free Property Assessment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide a FREE commercial exterior assessment documenting façade condition, roof interfaces,
                  windows/doors, water management, and life-safety observations with photo documentation and prioritized
                  report.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-40 w-full">
                <Image
                  src="/insurance-documentation-commercial.jpg"
                  alt="Documentation Support"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">2. Documentation Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  High-resolution photography, damage mapping, moisture readings, and detailed notes. Transparent scopes
                  in Xactimate or client-specified formats, capturing full restoration needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-40 w-full">
                <Image src="/adjuster-meeting-commercial.jpg" alt="Adjuster Meeting" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">3. Adjuster Meeting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  On-site walkthroughs to ensure all damages are observed and properly scoped. We coordinate with your
                  carrier and provide guidance on forms, documentation, and policy details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-40 w-full">
                <Image src="/commercial-restoration-crew.jpg" alt="Restoration Work" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">4. Restoration Work</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Phased planning for occupied buildings, product selection, permitting, logistics, and quality-assured
                  installation to manufacturer specs and code with jobsite cleanliness throughout.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-40 w-full">
                <Image
                  src="/commercial-project-completion.jpg"
                  alt="Completion & Warranty"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">5. Completion & Warranty</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Final QA/QC walkthrough with punch-list closure, closeout package with warranties, O&M, product data,
                  and photo log. 10-year labor warranty on full replacements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-40 w-full">
                <Image src="/commercial-ongoing-support.jpg" alt="Ongoing Support" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">6. Ongoing Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Preventive maintenance programs with semi-annual or quarterly inspections, leak logs, trend tracking,
                  budget forecasting, and warranty maintenance tasks to keep coverage intact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Comprehensive Services</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Full-Service Commercial Solutions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From emergency response to complete building envelope restoration, we handle every aspect of your
              commercial project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Emergency Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> 24/7 board-up & shoring
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Water extraction & drying
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Tarping & temporary systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Debris removal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Building Envelope</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Façade repairs (masonry, EIFS, panels)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Sealants & expansion joints
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Roofing systems (TPO/PVC/EPDM)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Waterproofing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Hammer className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Capital Improvements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Lobby & common-area refreshes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Storefront systems
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Energy upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> ADA upgrades
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Structural Repairs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Rot remediation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Balcony & deck repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Steel reinforcement
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Framing corrections
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Paintbrush className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Coatings & Sealants</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Elastomeric wall coatings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Traffic deck coatings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Fire-resistive coatings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Joint sealant replacement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Droplet className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Gutter & Drainage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Seamless gutters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Commercial box gutters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Downspout protection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Tapered insulation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <DoorOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Windows & Doors</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Commercial storefronts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Curtain-wall interfaces
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Hollow-metal doors
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Panic hardware
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Interior Restoration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Selective demo & drying
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Mold-conscious rebuild
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> Drywall & finishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-primary" /> MEP reconnection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Our Work</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Commercial Project Examples</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              See the dramatic transformations we've delivered for commercial clients across diverse property types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Multi-Family Housing – Exterior Remediation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">BEFORE</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image
                        src="/commercial-multifamily-before.jpg"
                        alt="Multi-family before"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">AFTER</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image
                        src="/commercial-multifamily-after.jpg"
                        alt="Multi-family after"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Modern apartment community with balcony waterproofing, fiber cement panel replacement, joint/sealant
                  renewal, and gutter upgrades—delivered in phases to maintain occupancy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Office Buildings – Façade Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">BEFORE</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image src="/commercial-office-before.jpg" alt="Office before" fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">AFTER</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image src="/commercial-office-after.jpg" alt="Office after" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mid-rise façade restoration with elastomeric coating system, storefront sealant replacement, parapet
                  coping upgrades—executed on weekends to maintain tenant operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Retail Centers – Exterior Refresh</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">BEFORE</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image src="/commercial-retail-before.jpg" alt="Retail before" fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">AFTER</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image src="/commercial-retail-after.jpg" alt="Retail after" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Center-wide exterior refresh: re-clad canopies, new LED lighting integration, ADA curb and ramp
                  corrections, and repainting—sequenced tenant-by-tenant to protect revenue hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Industrial Facilities – Envelope Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">BEFORE</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image
                        src="/commercial-industrial-before.jpg"
                        alt="Industrial before"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">AFTER</p>
                    <div className="relative aspect-video rounded overflow-hidden">
                      <Image
                        src="/commercial-industrial-after.jpg"
                        alt="Industrial after"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Distribution warehouse: insulated metal wall panels, dock door replacements, slab joint repairs, roof
                  coating restoration, and safety rail installations—completed without interrupting shipping.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Why Choose Us</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Commercial Clients Choose National Builders</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Proven experience, occupied-site expertise, and unwavering commitment to quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Proven Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Thousands of successful projects across multifamily, office, retail, and industrial assets with
                  documented results and satisfied clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Occupied-Site Expertise</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Phased, low-disruption execution with clear occupant communication, flexible scheduling, and
                  meticulous site management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Technical Depth</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building envelope, waterproofing, roofing interfaces, and specialty coatings expertise—done right the
                  first time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Speed & Reliability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Rapid mobilization, predictable schedules, meticulous cleanup, and on-time project completion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Honesty & Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed scopes, change-order clarity, real-time progress reporting, and no hidden surprises.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">Safety & Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documented safety plans, daily oversight, OSHA compliance, and comprehensive insurance coverages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Testimonials</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Commercial Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm italic mb-4 text-muted-foreground">
                  "National Builders coordinated a complex façade and roof interface project for our mixed-use
                  center—night work, active tenants, zero incidents. Communication was excellent and the punch-list was
                  minimal."
                </p>
                <div>
                  <p className="font-semibold text-sm">Dana L.</p>
                  <p className="text-xs text-muted-foreground">Property Manager</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm italic mb-4 text-muted-foreground">
                  "Their team handled storm damage across three apartment buildings. Claims documentation was thorough,
                  repairs were phased without displacing residents, and the closeout was seamless."
                </p>
                <div>
                  <p className="font-semibold text-sm">Eric M.</p>
                  <p className="text-xs text-muted-foreground">Regional Maintenance Director</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Schedule Your Free Commercial Assessment</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
            Protect your portfolio and plan with confidence. Call 1-800-RESTORE today to schedule a FREE commercial
            property assessment or discuss an upcoming project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Assessment
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="tel:1-800-RESTORE">Call 1-800-RESTORE</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
