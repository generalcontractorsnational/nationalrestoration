import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, ArrowRight, Shield, AlertTriangle, CloudRain, Wind } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"

export const metadata = {
  title: "Storm Damage Repair Services | National Restoration",
  description:
    "Emergency storm damage repair and restoration services. 24/7 response for hail, wind, and water damage with insurance claim assistance.",
}

export default function StormDamagePage() {
  const emergencyProcessSteps = [
    {
      title: "24/7 Emergency Response",
      description: "Our team responds immediately to secure your property and prevent further damage.",
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    },
    {
      title: "Damage Assessment",
      description: "We thoroughly document all damage for insurance purposes and create a restoration plan.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Insurance Coordination",
      description: "Our specialists work directly with your insurance company to maximize your claim.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Emergency Repairs",
      description: "We quickly implement temporary repairs to prevent additional damage to your property.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Complete Restoration",
      description: "Our skilled craftsmen restore your property to pre-storm condition or better.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Storm Damage Repair"
        description="Emergency response and comprehensive restoration for storm-damaged properties"
        backgroundImage="/storm-damaged-home-roof.jpg"
      />

      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-medium">
            24/7 Emergency Storm Damage Response: Call{" "}
            <a href="tel:1-800-737-8673" className="font-bold underline">
              1-800-RESTORE
            </a>
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Emergency Response</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Storm Damage Restoration</h2>
              <p className="text-lg text-foreground mb-6">
                When severe weather strikes, immediate action is crucial to minimize damage and protect your property.
                National Restoration provides rapid emergency response and complete restoration services for homes and
                businesses affected by storms.
              </p>
              <p className="text-lg text-foreground mb-6">
                Our experienced team handles all types of storm damage, from roof and siding damage caused by high winds
                and hail to water intrusion and structural issues. We work directly with your insurance company to
                ensure your claim is processed efficiently and you receive the coverage you deserve.
              </p>
              <p className="text-lg text-foreground mb-8">
                With our 24/7 emergency services and nationwide coverage, we're ready to respond whenever and wherever
                disaster strikes. Trust National Restoration to restore your property quickly, safely, and with the
                highest quality craftsmanship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Storm Damage Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Emergency Tarping
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Roof Damage Repair
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Siding Replacement
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Water Extraction
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Structural Repairs
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Insurance Assistance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Damage Documentation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Claim Filing Support
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Adjuster Meetings
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Scope of Work Review
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Supplement Negotiation
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Request Emergency Service</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/roofing-crew-restoration.jpg"
                alt="Emergency storm damage response"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Storm Damage */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Damage Types</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Storm Damage We Repair</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              We handle all types of storm-related damage to restore your property to pre-storm condition or better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wind Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  High winds can lift shingles, damage siding, break windows, and even cause structural issues. We
                  repair all wind-related damage and strengthen your property against future storms.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Missing or damaged shingles
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Torn or detached siding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Damaged soffit and fascia
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Broken windows and doors
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hail Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Hail can cause significant damage that's not always visible to the untrained eye. Our specialists
                  identify and repair all hail damage to prevent long-term issues.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Roof impact damage
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Dented siding and gutters
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Damaged windows and screens
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> HVAC and exterior equipment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Water Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Storm-related water intrusion can cause immediate damage and lead to mold and structural issues if not
                  properly addressed. We provide complete water damage restoration.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Water extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Structural drying
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Mold prevention
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Interior repairs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Fallen Tree Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Fallen trees and large branches can cause severe damage to roofs, siding, and structural elements. We
                  coordinate removal and repair all resulting damage.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Emergency tree removal
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Roof puncture repair
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Structural assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Complete reconstruction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Lightning strikes can cause fires, electrical system damage, and structural issues. We provide
                  comprehensive assessment and repair of all lightning-related damage.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Fire damage restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Electrical system inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Structural integrity assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Complete repairs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flood Damage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Storm-related flooding requires immediate response to minimize damage. We provide complete flood
                  restoration services to return your property to pre-flood condition.
                </p>
                <ul className="space-y-1 text-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Water extraction
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Sanitization
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Structural drying
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Complete restoration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Response Process</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Our streamlined emergency response process ensures your property is secured quickly and restored
              efficiently.
            </p>
          </div>

          <ServiceProcess steps={emergencyProcessSteps} />
        </div>
      </section>

      {/* Insurance Claims Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/commercial-roofing-team.jpg"
                alt="Insurance claim assistance"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Insurance Claims</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Insurance Claim Specialists</h2>
              <p className="text-lg text-foreground mb-6">
                Navigating insurance claims after storm damage can be overwhelming. Our experienced team works directly
                with your insurance company to ensure you receive the coverage you deserve for complete restoration.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Thorough Documentation</h3>
                    <p className="text-foreground">
                      We meticulously document all storm damage with detailed photos, videos, and written assessments to
                      support your claim.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Adjuster Meetings</h3>
                    <p className="text-foreground">
                      Our specialists meet with your insurance adjuster on-site to point out all damage and ensure
                      nothing is overlooked.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Scope of Work Review</h3>
                    <p className="text-foreground">
                      We carefully review the insurance company's scope of work to ensure all necessary repairs are
                      included and properly valued.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Check className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Supplement Negotiation</h3>
                    <p className="text-foreground">
                      If additional damage is discovered during repairs, we handle the supplemental claim process with
                      your insurance company.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">
                  Get Insurance Claim Assistance <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Transformations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Storm Restoration</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for properties damaged by severe storms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/storm-damaged-home-roof.jpg" alt="Roof before restoration" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md font-medium">
                  Before
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/restored-home-complete.jpg" alt="Roof after restoration" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md font-medium">
                  After
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Complete roof replacement after severe hail and wind damage in Avon Lake, OH
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/severe-roof-damage.jpg" alt="Exterior before restoration" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md font-medium">
                  Before
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/restored-home-complete.jpg"
                  alt="Exterior after restoration"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md font-medium">
                  After
                </div>
              </div>
              <p className="text-center text-muted-foreground">
                Complete exterior restoration after storm damage in Cleveland, OH
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/gallery">View More Transformations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Get answers to common questions about storm damage repair and insurance claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>What should I do immediately after storm damage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  First, ensure everyone's safety and evacuate if necessary. Document the damage with photos and videos
                  before touching anything. Cover damaged areas if possible to prevent further damage. Contact your
                  insurance company to report the claim, then call us at 1-800-RESTORE for emergency response and
                  assistance with the entire restoration process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How quickly can you respond to storm damage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We provide 24/7 emergency response and typically arrive within 2-4 hours of your call in most service
                  areas. During widespread disaster events, we prioritize based on severity but work to secure all
                  properties as quickly as possible. Our mobile response teams can be deployed nationwide for major
                  storm events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Will my insurance cover storm damage repairs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Most homeowner's insurance policies cover sudden and accidental damage from storms, including wind,
                  hail, lightning, and falling trees. However, coverage varies by policy, and flood damage typically
                  requires separate flood insurance. Our insurance specialists will review your policy, help determine
                  coverage, and work directly with your insurance company throughout the claims process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long will the restoration process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Timeline varies based on damage extent, but emergency services like tarping and board-up are completed
                  immediately. The complete restoration process typically takes 2-8 weeks depending on scope, material
                  availability, and insurance approval timelines. We provide detailed timelines during the assessment
                  and keep you updated throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do I need to get multiple estimates for my insurance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Most insurance companies don't require multiple estimates, but they may recommend it. We provide
                  detailed, line-item estimates that meet insurance industry standards. Our insurance specialists work
                  directly with adjusters to ensure all damage is properly documented and fairly valued, often
                  eliminating the need for you to gather multiple estimates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What if my insurance claim is denied?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  If your claim is denied, we can help you understand the reason and determine if an appeal is
                  warranted. Our documentation and expertise often help overturn initial denials. If the damage truly
                  isn't covered, we'll provide clear options for repairs at competitive rates and may be able to offer
                  financing solutions to help manage the cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Storm Damage Customers Say</h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Hear from property owners who trusted us with their storm damage restoration.
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
                  "After a severe hailstorm damaged our roof and siding, National Restoration was at our home within
                  hours. They tarped the roof to prevent water damage and worked directly with our insurance company.
                  The entire process was seamless, and the quality of work was exceptional. Our home looks better than
                  before the storm!"
                </p>
                <div>
                  <p className="font-semibold">William & Karen J.</p>
                  <p className="text-sm text-muted-foreground">Dallas, TX</p>
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
                  "When a tree fell on our home during a windstorm, we were devastated. National Restoration's team
                  arrived quickly, secured the property, and handled everything from tree removal to complete
                  reconstruction. Their insurance specialists were invaluable in getting our claim approved for full
                  replacement. We couldn't be happier with the results."
                </p>
                <div>
                  <p className="font-semibold">Rebecca M.</p>
                  <p className="text-sm text-muted-foreground">Arlington, VA</p>
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
                  "Our commercial building suffered significant water damage after a major storm. National Restoration's
                  commercial team responded immediately with water extraction equipment and quickly developed a
                  restoration plan. Their expertise in working with commercial insurance was invaluable. They minimized
                  our downtime and restored our facility to perfect condition."
                </p>
                <div>
                  <p className="font-semibold">David L., Business Owner</p>
                  <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 md:py-24 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Storm Damage Response</h2>
            <p className="text-lg text-destructive-foreground/90 max-w-2xl mb-8">
              Don't wait. Contact us immediately for emergency storm damage services. Our rapid response team is ready
              to secure your property and begin the restoration process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="font-medium">
                <a href="tel:1-800-737-8673">Call 1-800-RESTORE</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/10"
              >
                <Link href="/contact">Request Emergency Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
