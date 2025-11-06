import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Droplets, Flame, Wind, Home, Shield, Clock, FileText, Users, Award, Wrench } from "lucide-react"
import Image from "next/image"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Restoration Services | National Builders Corporation",
  description:
    "24/7 fire, water, storm, and structural restoration services. Rapid emergency response, expert mitigation, and complete rebuild services for commercial and residential properties.",
}

export default function RestorationPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Restoration Services"
        description="24/7 Emergency Response • Fire, Water, Storm & Structural Restoration"
        backgroundImage="/restoration-emergency-response.jpg"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <Badge className="mb-3">Turnkey Restoration Partner</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">When Disaster Strikes, We Respond 24/7</h2>
            <p className="text-base text-muted-foreground mb-4">
              When disaster strikes, National Builders Corporation is the restoration partner you can count on—day or
              night. We provide turnkey fire, water, storm, and structural restoration for commercial and residential
              properties, combining rapid emergency response with meticulous craftsmanship and clear communication.
            </p>
            <p className="text-base text-muted-foreground">
              From the first call through final walkthrough, our mission is simple: stabilize, restore, and rebuild your
              property safely, efficiently, and to the highest standards—so you can get back to business and life with
              confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/restoration-team-emergency-response.jpg"
                alt="Emergency restoration team responding"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/restoration-equipment-setup.jpg"
                alt="Professional restoration equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <p className="text-base text-muted-foreground">
              We handle everything end-to-end: 24/7 emergency mitigation, damage assessments, moisture mapping, contents
              protection and cleaning, code-compliant rebuilds, and insurance claim support using the same estimating
              platforms carriers rely on. Our certified technicians follow industry best practices for drying,
              decontamination, and structural repairs, while our project managers coordinate permits, inspections,
              schedules, and documentation. You'll always know what's happening, what it costs, and what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Our Restoration Process */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Our Process</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">How We Restore Your Property</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              From emergency response to final completion, we guide you through every step with clear communication and
              expert execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="/restoration-damage-assessment.jpg"
                  alt="Free damage assessment"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <CardTitle className="text-lg">Free Damage Assessment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We provide a no-obligation inspection and comprehensive written report including cause & origin
                  observations, extent of damage with photos and moisture readings, immediate mitigation plan, repair
                  vs. replacement guidance, and estimated timelines.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image src="/restoration-documentation.jpg" alt="Documentation support" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <CardTitle className="text-lg">Documentation Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Evidence capture with photo logs, material inventories, moisture maps, and environmental readings.
                  Line-item scopes in carrier-standard platforms with real-time price lists to facilitate your insurance
                  claim.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="/restoration-adjuster-meeting.jpg"
                  alt="Adjuster meeting coordination"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <CardTitle className="text-lg">Adjuster Meeting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We meet adjusters on site, review scopes, and address supplements with documentation. Building code
                  upgrades, manufacturer specs, and warranty requirements are incorporated for coverage-aligned
                  outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image src="/restoration-work-in-progress.jpg" alt="Restoration work" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <CardTitle className="text-lg">Restoration Work</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Emergency mitigation, structural drying, demolition, decontamination, and complete reconstruction. Our
                  certified technicians follow industry best practices with daily monitoring and clear communication
                  throughout.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="/restoration-completion-inspection.jpg"
                  alt="Completion and warranty"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    5
                  </div>
                  <CardTitle className="text-lg">Completion & Warranty</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Final QA/QC walkthrough and closeout package with warranties, care guides, permits, and inspection
                  records. 10-year labor warranty on full reconstruction scopes, 1-2 year warranties on targeted
                  repairs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image src="/restoration-ongoing-support.jpg" alt="Ongoing support" fill className="object-cover" />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    6
                  </div>
                  <CardTitle className="text-lg">Ongoing Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We stand behind our work with responsive warranty service and ongoing support. Your facilities team
                  receives complete O&M handoff and warranty registration for long-term peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Restore */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Comprehensive Services</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What We Restore</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Expert restoration services for all types of property damage, from emergency mitigation to complete
              reconstruction.
            </p>
          </div>

          <div className="space-y-8">
            {/* Fire & Smoke Damage */}
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="/fire-damage-restoration-before.jpg"
                    alt="Fire damage restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Flame className="h-8 w-8 text-destructive" />
                    <h3 className="text-xl font-bold">Fire & Smoke Damage Restoration</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fires impact more than the burn area—smoke, soot, and odor migrate throughout the building,
                    affecting mechanical systems, finishes, and contents. Our fire restoration program includes:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency board-up & shoring to secure openings and stabilize structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Smoke & soot removal using HEPA filtration, detailed surface cleaning, media/soda blasting, and
                        HVAC cleaning
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Odor neutralization with hydroxyl/ozone treatments and sealing of affected substrates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Selective demolition & debris removal to isolate damaged assemblies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Contents handling: pack-out, cleaning, deodorization, inventory, and climate-controlled storage
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Complete reconstruction to pre-loss condition or better, including code-required upgrades
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Water Damage */}
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplets className="h-8 w-8 text-blue-500" />
                    <h3 className="text-xl font-bold">Water Damage Mitigation & Dry-Out</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Water moves fast—our teams move faster. We respond 24/7 to burst pipes, roof leaks, appliance
                    failures, sprinkler discharges, storm intrusion, and sewer backups. Services include:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stop the source & stabilize: shutoffs, temporary repairs, roof tarps, and containment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Extraction & pumping for standing water; moisture mapping with meters and thermal imaging
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Structural drying with commercial air movers, dehumidifiers, and heated drying when required
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Antimicrobial application in affected areas to inhibit microbial growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Category-specific protocols (clean/gray/black water) and Class 1–4 drying strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Daily monitoring & documentation until dry-standard is reached</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video lg:aspect-auto order-1 lg:order-2">
                  <Image
                    src="/water-damage-mitigation-equipment.jpg"
                    alt="Water damage mitigation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Structural Repairs */}
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="/structural-repairs-framing.jpg"
                    alt="Structural repairs and rebuild"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Structural Repairs & Rebuild</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    After mitigation, we reconstruct and renovate to deliver a durable, code-compliant finish:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Framing & sheathing replacement, engineered repairs, and fire- or water-impacted structural
                        remediation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Roof, siding, and building envelope repairs (flashing, sealants, insulation)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Interior build-back: drywall, insulation, ceilings, millwork, flooring, and paint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>MEP coordination (mechanical, electrical, plumbing) with licensed trade partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Finish upgrades where clients elect to improve materials or layout during restoration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Mold Remediation */}
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Mold Remediation (When Present)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    When moisture events lead to microbial growth, we follow containment-first protocols:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Assessment & moisture control, then negative-pressure containments with HEPA air filtration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Source removal (demolition of unsalvageable materials) and HEPA vacuuming/wet wiping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Post-remediation verification and documentation for your records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Root-cause corrections (ventilation, drainage, envelope) to prevent recurrence</span>
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-video lg:aspect-auto order-1 lg:order-2">
                  <Image src="/mold-remediation-containment.jpg" alt="Mold remediation" fill className="object-cover" />
                </div>
              </div>
            </Card>

            {/* Storm & Impact Damage */}
            <Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src="/storm-impact-damage-repair.jpg"
                    alt="Storm and impact damage"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Wind className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Storm & Impact Damage</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Severe weather brings wind, hail, water, and debris impacts. We deliver:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency tarping, temporary power, and site safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Façade, glazing, and roofing repairs and replacements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Waterproofing & sealing at penetrations and transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>
                        Coordination for multi-building campuses with prioritized phasing and occupant communication
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Response */}
      <section className="py-6 md:py-8 bg-destructive text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-10 w-10" />
                <h2 className="text-2xl md:text-3xl font-bold">24/7 Emergency Response</h2>
              </div>
              <p className="text-base mb-4 opacity-90">
                Every hour counts after a loss. Our on-call teams mobilize with the right equipment and materials to
                stabilize your property:
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Board-up, tarping, and shoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Water extraction, drying, and dehumidification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Environmental controls (air scrubbers, negative air)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Debris removal & hazard abatement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Temporary fencing, lighting, and security</span>
                </li>
              </ul>
              <p className="text-sm opacity-90">
                You get an immediate incident report, a preliminary scope, and a transparent plan for the next 24–72
                hours.
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/emergency-response-team-night.jpg"
                alt="24/7 emergency response team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Our Work</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Restoration Results</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              See the dramatic transformations we deliver—from disaster to complete restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Fire Damage Restoration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Before</p>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/fire-restoration-before.jpg"
                      alt="Fire damage before restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">After</p>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/fire-restoration-after.jpg"
                      alt="Fire damage after restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Retail unit fire stabilized with board-up and shoring; containment and negative air established; soot
                  removal, odor neutralization, and full interior reconstruction including upgraded finishes and new
                  storefront system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Water Damage Cleanup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">Before</p>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/water-restoration-before.jpg"
                      alt="Water damage before restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">After</p>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src="/water-restoration-after.jpg"
                      alt="Water damage after restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Commercial water loss mitigated with rapid extraction, thermal imaging moisture mapping, and desiccant
                  dehumidification; selective demo, antimicrobial treatment, and monitored dry-out followed by phased
                  rebuild to keep suites operational.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Comprehensive Support</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Complete Restoration Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Insurance Claim Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We work with you and your carrier to document, communicate, and expedite. Evidence capture, estimating
                  in carrier-standard platforms, adjuster coordination, and compliance with building codes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Contents Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  On-site protection with poly wrapping, inventory & pack-out for cleaning and storage, specialty
                  cleaning for electronics and documents, secure storage with barcoded tracking and controlled return.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Project Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Single point of contact from day one. Kickoff meeting, milestone schedule with phasing maps, status
                  updates with photos and drying logs, change management with documented approvals, final QA/QC
                  walkthrough.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Environmental Health & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Site-specific safety plans, containment & pressure controls, lead-safe and asbestos-aware practices,
                  OSHA-aligned fall protection, lockout/tagout, hot-work permits, and air monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Repairs & Renovations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Not every loss ends at "back to pre-loss." Upgrade finishes, improve layouts, increase resilience.
                  Impact-resistant finishes, energy-efficient upgrades, code improvements, and aesthetic refreshes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Workmanship & Warranties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Certified technicians following industry standards. Manufacturer-compliant installations. 10-year
                  labor warranty on full reconstruction scopes. 1-2 year repair warranties. Warranty registration & O&M
                  handoff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Why Choose Us</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Property Owners Trust National Builders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Rapid Response, Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  24/7 mobilization, disciplined processes, and durable outcomes that get you back to normal quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Clear Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transparent pricing, schedules, and change-order clarity. You'll always know what's happening and what
                  comes next.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Occupied-Site Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Phasing that safeguards tenants, guests, and staff. We minimize disruption while maximizing progress.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Documented plans, trained crews, and strong insurance coverages. Safety is non-negotiable for
                  occupants and crews.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Customer-First Mindset</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We don't consider the job complete until you're satisfied. Your peace of mind is our priority.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Flexible Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Insurance-funded projects, retail projects with clear estimates, and financing options for qualified
                  clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-3">Client Testimonials</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "A sprinkler break flooded two floors of our office at 2 a.m. National Builders had crews extracting
                  water within the hour. Drying logs were meticulous, and build-back finished ahead of schedule.
                  Outstanding coordination."
                </p>
                <p className="text-sm font-semibold">Elena S., Facility Manager</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "After a restaurant kitchen fire, they handled demo, deodorization, and reconstruction. Insurance
                  paperwork was seamless, and we reopened faster than expected."
                </p>
                <p className="text-sm font-semibold">Marcus D., Owner-Operator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Schedule Your Free Restoration Assessment"
        description="If your property has suffered fire, water, storm, or structural damage, don't wait. Call 1-800-RESTORE now to schedule your FREE assessment. We'll document conditions, stabilize what's critical, and provide a clear, step-by-step plan to restore your building quickly and correctly."
        buttonText="Call 1-800-RESTORE"
        buttonLink="tel:1-800-RESTORE"
        secondaryButtonText="Request Assessment Online"
        secondaryButtonLink="/contact"
      />
    </div>
  )
}
