import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Clock,
  Shield,
  Phone,
  FileText,
  Wrench,
  Award,
  Users,
  Zap,
  Wind,
  Droplets,
  Snowflake,
  Flame,
  TreeDeciduous,
  Tornado,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"

export const metadata = {
  title: "Storm Damage Repair Services | National Restoration",
  description:
    "Emergency storm damage repair and restoration services. 24/7 response for hail, wind, and water damage with insurance claim assistance.",
}

export default function StormDamagePage() {
  return (
    <>
      <div className="flex flex-col">
        {/* Emergency Banner */}
        <div className="bg-destructive text-destructive-foreground py-3">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-medium">
              24/7 Emergency Storm Damage Response: Call{" "}
              <a href="tel:1-800-737-8673" className="font-bold underline">
                1-800-RESTORE
              </a>
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-3">Emergency Response</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Storm Damage Repair by National Builders Corporation
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  When a storm strikes, National Builders Corporation is your trusted, fast-acting solution for
                  comprehensive storm damage repair. We specialize in restoring homes and commercial properties to
                  pre-storm condition with speed and expertise. From the first emergency call to the final inspection,
                  our team makes the process easy – handling everything from initial cleanup to full rebuild.
                </p>
                <p className="text-muted-foreground mb-6">
                  We know that acting quickly after a storm is critical: addressing damage right away helps prevent
                  hazards like mold growth or structural deterioration. With National Builders, you get a full-service
                  restoration partner who manages every step, so you can recover with minimal stress and interruption.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">Request Free Inspection</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                  </Button>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roofing-crew-restoration"
                  alt="Emergency storm damage response"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Claims Assistance Section */}
        <section className="py-6 md:py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/insurance-documentation-support.jpg"
                  alt="National Restoration team member meeting with insurance adjuster at residential property"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <Badge className="mb-3">Insurance Support</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">We Work Directly with Your Insurance Company</h2>
                <p className="text-muted-foreground mb-4">
                  Navigating insurance claims after storm damage can be overwhelming. National Builders Corporation
                  takes the burden off your shoulders by working directly with your insurance company throughout the
                  entire process.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Comprehensive Documentation</p>
                      <p className="text-sm text-muted-foreground">
                        We provide detailed photo documentation, measurements, and estimates to support your claim
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Adjuster Meetings</p>
                      <p className="text-sm text-muted-foreground">
                        We meet with your insurance adjuster on-site to ensure all damage is properly assessed
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Thorough Damage Assessment</p>
                      <p className="text-sm text-muted-foreground">
                        We ensure all storm damage is properly identified and documented so nothing is missed during the
                        insurance evaluation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Documentation</p>
                      <p className="text-sm text-muted-foreground">
                        We handle all documentation on our end, ensuring our estimates and assessments are accurate and
                        complete for the insurance process
                      </p>
                    </div>
                  </li>
                </ul>

                <Button asChild size="lg">
                  <Link href="/contact">Get Help with Your Claim</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Storm Damage Repair Process */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Badge className="mb-3">Our Process</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Storm Damage Repair Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                After a storm, timing is key. Our comprehensive 6-step process ensures your property is secured,
                assessed, and restored efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>1. Free Inspection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We provide a comprehensive, no-cost inspection covering roof, siding, gutters, windows, doors,
                    attic, insulation, and interior areas with full photo documentation.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/professional-inspection-documentation.jpg"
                      alt="Professional inspection and documentation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>2. Documentation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We prepare detailed documentation with photos, measurements, and estimates to support your insurance
                    claim and ensure nothing is overlooked.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/roof-shingles-close-up-detail.jpg"
                      alt="Detailed documentation for insurance claim"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>3. Adjuster Meeting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We meet with your insurance adjuster on-site to walk through all damage, ensuring accurate
                    assessment and fair coverage for your repairs.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/adjuster-meeting-driveway.png"
                      alt="Meeting with insurance adjuster"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>4. Restoration Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our licensed crews handle all repairs from roofing and siding to interior restoration. We're a
                    one-stop contractor for complete storm damage restoration.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/restoration-work-residential-roof.jpg"
                      alt="Restoration crew actively working on residential home"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>5. Completion & Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We complete a final walkthrough, ensure your satisfaction, and provide comprehensive warranties
                    including our 10-year roof labor warranty.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/completion-handshake-warranty.jpg"
                      alt="Project completion with satisfied homeowner and branded National Restoration truck"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>6. Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We're here for you long after the project is complete with lifetime customer support for any
                    questions or concerns about your restoration.
                  </p>
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/ongoing-support-customer-service.jpg"
                      alt="Ongoing customer support and service representative"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Badge className="mb-3">Our Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Storm Damage Restoration Results</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                See the dramatic transformations we've achieved for homeowners and businesses after severe storms.
              </p>
            </div>

            <div className="space-y-6 max-w-6xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9ukGO1h1vzhbjXZaFMuYOCQFs0WFLP.png"
                  alt="Before and after comparison of roof restoration - worn brown shingles transformed to new dark gray architectural shingles"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-caSbhVsiVNLczaFdkf7XlvSEhVqFhv.png"
                  alt="Before and after comparison of siding restoration - faded beige siding with teal shutters transformed to fresh gray siding with dark shutters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Types of Storm Damage We Handle */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Badge className="mb-3">Storm Damage Types</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Types of Storm Damage We Handle</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every storm is unique. We're equipped to repair all types of storm damage to restore your property
                completely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Hail Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">Roofing, siding, windows, HVAC</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hail can dent metal flashing and gutters, crack vinyl siding, shatter windows, and bruise roof
                    shingles. Our inspectors spot impact damage like cracks, bruises, or missing granules. We replace
                    cracked shingles, fix broken windows, repair dented siding, and service hail-damaged HVAC components
                    to make your home weather-tight again.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wind className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Wind Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Missing shingles, structural stress, debris impact
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High winds can rip shingles, tear flashing, crack soffits, and hurl debris into buildings. We secure
                    loose sections, replace missing shingles, repair torn flashing and impacts from fallen branches. We
                    also assess structural elements to ensure your home's integrity is sound after extreme winds.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Droplets className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Water Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Roof leaks, flooding, soaked insulation, mold risk
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Heavy rain or roof damage can cause leaks and flooding. We locate and seal roof leaks, extract
                    standing water, dry out walls and floors, remove soaked insulation, and apply antimicrobial
                    treatments to prevent mold growth. We restore warped floors, waterlogged drywall, and drenched
                    carpets to ensure your home is dry and safe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Snowflake className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Ice Dam Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">Gutters, roof decking, interior leaks</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ice dams form when snow melts and refreezes at eaves, trapping water that backs up under shingles.
                    We safely remove ice buildup, repair water damage, check gutters for ice-related damage, inspect
                    roof decking for rot, and can install preventive measures like improved insulation or heat cables.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Flame className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Lightning & Fire Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Fire damage, electrical systems, structural repairs
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Lightning strikes can ignite fires or damage electrical systems. We repair fire and smoke damage,
                    rebuild burned roof trusses, replace charred roofing, remediate smoke damage, and coordinate
                    licensed electricians to repair wiring and electrical systems for safety.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TreeDeciduous className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Fallen Trees & Structural Impacts</CardTitle>
                      <p className="text-sm text-muted-foreground">Tree removal, roof damage, structural repairs</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fallen trees can crush roofs and collapse walls. We provide prompt tree removal, secure the
                    structure with tarps or shoring, then replace damaged roof framing, shingles, and rafters. We fix
                    collateral damage like broken gutters, siding, and interior holes to make your property structurally
                    sound again.
                  </p>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Tornado className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Tornado & Hurricane Damage</CardTitle>
                      <p className="text-sm text-muted-foreground">Extensive structural restoration</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Catastrophic storms can cause extensive structural damage from torn-off roofs to collapsed walls.
                    Our Disaster Response crews stabilize and reconstruct heavily damaged properties. We clear debris,
                    conduct full structural assessments, install temporary support, then rebuild roofing systems,
                    replace siding, repair foundations, and restore interiors on a large scale. We've restored buildings
                    others thought were total losses.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 24/7 Emergency Response Details */}
        <section className="py-6 md:py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-3">Emergency Services</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Response & Temporary Repairs</h2>
                <p className="text-muted-foreground mb-4">
                  When a storm emergency strikes, National Builders Corporation is on call 24/7 to respond. We know that
                  storm damage often can't wait – your property needs to be secured immediately to prevent further
                  issues. Our emergency crews are always ready to roll, day or night, 365 days a year.
                </p>
                <p className="text-muted-foreground mb-4">
                  Within hours of your call, we dispatch a specialized team fully equipped to perform necessary
                  temporary repairs:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Tarping Damaged Roofs</p>
                      <p className="text-sm text-muted-foreground">
                        Heavy-duty tarps cover exposed areas to stop rainwater intrusion and protect interiors
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Boarding Up Windows & Doors</p>
                      <p className="text-sm text-muted-foreground">
                        Plywood boards secure broken windows and doors to keep out weather and secure the property
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Structural Shoring</p>
                      <p className="text-sm text-muted-foreground">
                        Emergency bracing stabilizes structures to prevent further collapse
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Water Extraction</p>
                      <p className="text-sm text-muted-foreground">
                        Immediate pumping and vacuuming of standing water to prevent additional damage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Site Cleanup & Hazard Removal</p>
                      <p className="text-sm text-muted-foreground">
                        Clearing debris and coordinating with utilities for safe conditions
                      </p>
                    </div>
                  </li>
                </ul>

                <Button asChild size="lg">
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE Now</a>
                </Button>
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/storm-damaged-home-roof"
                  alt="Emergency storm damage response team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Homeowners & Businesses Trust Us */}
        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <Badge className="mb-3">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Why Homeowners & Businesses Trust National Builders
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expertise, dedication, and customer-first approach set us apart in storm damage restoration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Decades of Experience & Certified Teams</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Our technicians are highly trained and certified (IICRC water restoration, HAAG roofing inspectors).
                    We're fully licensed, bonded, and insured, continuously educating our team on the latest techniques
                    and safety standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>24/7 Availability & Fast Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Storms don't wait, and neither do we. We're truly always available in an emergency. Our quick
                    response can mean the difference between a minor repair and a major loss, with crews arriving before
                    dawn when needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>End-to-End Project Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    One call does it all. We handle the entire restoration from debris removal to final walkthrough. A
                    dedicated project manager keeps you updated frequently, so you're never left in the dark about
                    progress.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Quality Workmanship & Guaranteed Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We do the job right the first time with quality materials and attention to detail. Strong warranties
                    back our work, and senior supervisors inspect completed work to ensure it meets our high standards
                    before completion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Honesty, Transparency & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We provide written estimates line by line, discuss unexpected issues before proceeding, and maintain
                    no hidden fees. Our polite, professional crews treat your home like our own, with lifetime customer
                    support available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Lasting Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your relationship with National Builders isn't just a transaction – it's a lasting partnership for
                    the health and safety of your property. We're here for follow-up questions months or years after
                    repairs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Don't Wait – Get Your Storm Damage Fixed Today!"
          description="Call us now at 1-800-RESTORE for immediate response or schedule a free inspection. The sooner you act, the sooner we can prevent further damage and return your life to normal."
          buttonText="Request Free Inspection"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}
