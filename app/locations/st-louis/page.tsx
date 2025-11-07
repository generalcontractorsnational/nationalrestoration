import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "St. Louis Metro Restoration Services | National Restoration Missouri",
  description:
    "National Restoration delivers storm, roof, and property restoration across St Louis and Metro East. Licensed, insured, and trusted locally. Free inspections.",
}

export default function StLouisPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="St. Louis Metro Restoration Services"
        description="Complete Storm, Roofing & Exterior Solutions for Missouri Homes and Businesses"
        backgroundImage="/st-louis-gateway-arch-skyline.jpg"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Serving Greater St. Louis</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">From the Gateway Arch to St. Charles County</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Property owners across Missouri trust National Restoration for dependable, full-service storm
                restoration and exterior repairs. We bring national-scale resources with local-team care—restoring
                roofs, siding, and entire buildings across St. Louis, St. Charles, Chesterfield, O'Fallon, and
                Belleville.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Whether you've suffered hail, wind, water, or fire damage, our experts handle every step—inspection,
                insurance coordination, repair, and replacement—so you can get back to normal fast.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With our dedicated St. Louis office in Clayton, we're your neighbors—not a distant call center. Our
                local team knows Missouri weather, understands regional building codes, and has established
                relationships with insurance adjusters throughout the metro area. We've restored thousands of homes and
                businesses across the Gateway City, from historic Soulard townhomes to modern developments in St.
                Peters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule Free Inspection</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="tel:1-800-RESTORE">Call 1-800-RESTORE</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/st-louis-downtown-skyline.jpg"
                alt="St. Louis downtown skyline"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-team-at-office" alt="St. Louis team at office" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-branded-trucks-fleet.jpg"
                alt="National Restoration trucks in St. Louis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-team-meeting-client"
                alt="Team meeting with client"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-warehouse-facility"
                alt="St. Louis warehouse facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Local Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rooted in St. Louis</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              Our St. Louis division combines deep Midwestern construction knowledge with a focus on quality,
              compliance, and customer satisfaction. We understand local architecture—from historic Soulard rowhomes to
              new builds in St. Peters and Wentzville—and we navigate the city's permit systems, HOA requirements, and
              insurance processes daily.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team has worked on everything from century-old brick homes in Lafayette Square to modern luxury
              estates in Ladue, from multi-family complexes in Clayton to commercial buildings downtown. We're familiar
              with the unique challenges of Missouri construction—from dealing with expansive clay soils to managing
              moisture in our humid climate. When you work with National Restoration in St. Louis, you're working with
              true local experts who live and work in the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-soulard-historic-homes.jpg"
                alt="Historic Soulard homes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-clayton-modern-buildings"
                alt="Clayton modern buildings"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-st-peters-residential"
                alt="St. Peters residential area"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/st-louis-chesterfield-homes.jpg" alt="Chesterfield homes" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-ladue-luxury-homes" alt="Ladue luxury homes" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-webster-groves-historic.jpg"
                alt="Webster Groves historic district"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/st-louis-ballwin-suburban.jpg" alt="Ballwin suburban homes" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-wildwood-developments"
                alt="Wildwood new developments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why St. Louis Property Owners Trust National Restoration
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just another contractor—we're your long-term restoration partner with deep roots in the St.
              Louis community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">True Local Presence</h3>
                <p className="text-muted-foreground">
                  Our Clayton office is staffed with local project managers, estimators, and customer service
                  representatives who live in the communities we serve. We're not a national chain with a local phone
                  number—we're genuinely local.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Emergency Response</h3>
                <p className="text-muted-foreground">
                  When disaster strikes, we respond fast. Our St. Louis team provides 24/7 emergency services with
                  same-day response for tarping, board-up, and water mitigation. We have crews and equipment stationed
                  locally for immediate deployment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Insurance Expertise</h3>
                <p className="text-muted-foreground">
                  We work with every major insurance carrier in Missouri and Illinois. Our team knows how to document
                  damage properly, communicate with adjusters effectively, and advocate for fair settlements. We handle
                  the paperwork so you don't have to.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every project is backed by our workmanship warranty and manufacturer certifications. We use premium
                  materials from GAF, CertainTeed, Owens Corning, and James Hardie, installed by trained,
                  background-checked crews.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparent Communication</h3>
                <p className="text-muted-foreground">
                  You'll have a dedicated project manager who keeps you informed every step of the way. No surprises, no
                  hidden fees—just honest, straightforward communication from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Services</h3>
                <p className="text-muted-foreground">
                  From emergency tarping to complete rebuilds, we handle every aspect of restoration under one roof. No
                  need to coordinate multiple contractors—we manage everything for you.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-project-manager-consultation.jpg"
                alt="Project manager consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-quality-inspection.jpg"
                alt="Quality inspection process"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-customer-satisfaction.jpg"
                alt="Customer satisfaction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* St. Louis Specialties */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Our Specialties</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive St. Louis Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From emergency storm response to planned renovations, we offer complete restoration and exterior services
              tailored to Missouri's unique climate and architectural styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Storm Damage Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  Rapid response for hail, wind, and tornado events with emergency tarping and same-day inspections. Our
                  storm damage specialists document every detail for insurance claims and coordinate all repairs from
                  temporary protection to final restoration.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-storm-damage-response"
                    alt="Storm damage response"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Emergency tarping & board-up
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Hail & wind damage assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Insurance claim documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Complete structural repairs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Roof Replacement & Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Asphalt, architectural, metal, and flat roof systems built for Missouri storms and temperature swings.
                  We install premium roofing systems from industry-leading manufacturers with extended warranties and
                  impact-resistant options.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-roof-replacement" alt="Roof replacement" fill className="object-cover" />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Asphalt shingle roofing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Metal roofing systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Flat & low-slope roofing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Roof repairs & maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Siding & Exterior Renovation</h3>
                <p className="text-muted-foreground mb-4">
                  Vinyl, fiber cement, and engineered wood options to beautify and fortify your home. Transform your
                  property's curb appeal while improving energy efficiency and weather protection with premium siding
                  systems.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-siding-installation"
                    alt="Siding installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Vinyl siding installation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    James Hardie fiber cement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Trim & soffit replacement
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Custom color matching
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Water & Fire Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 mitigation, clean-up, and structural rebuilds after emergencies. Our IICRC-certified technicians
                  respond immediately to minimize damage and begin the restoration process, handling everything from
                  water extraction to complete reconstruction.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-water-fire-restoration"
                    alt="Water and fire restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Water extraction & drying
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Fire & smoke damage cleanup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Mold remediation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Structural reconstruction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Commercial & Multi-Family Projects</h3>
                <p className="text-muted-foreground mb-4">
                  Large-scale roof and façade systems with minimal tenant disruption. We specialize in commercial
                  restoration projects, working efficiently to minimize business interruption while delivering superior
                  results.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/st-louis-commercial-project.jpg"
                    alt="Commercial project"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Multi-family roofing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Commercial building restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    HOA & property management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Scheduled maintenance programs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Windows, Doors & Gutters</h3>
                <p className="text-muted-foreground mb-4">
                  Complete exterior upgrades including energy-efficient windows, entry doors, and seamless gutter
                  systems. Improve your home's efficiency, security, and curb appeal with professional installation.
                </p>
                <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/st-louis-window-door-installation.jpg"
                    alt="Window and door installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Replacement windows
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Entry & patio doors
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Seamless gutter systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Gutter guards & protection
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-crew-installing-shingles.jpg"
                alt="Crew installing shingles"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-siding-progress"
                alt="Siding installation progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-gutter-installation" alt="Gutter installation" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/st-louis-window-replacement.jpg" alt="Window replacement" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* St. Louis Office Contact */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Badge className="mb-4">St. Louis Office</Badge>
                    <h3 className="text-2xl font-bold mb-6">Contact Our Local Team</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">200 S. Hanley Rd, Suite 300</p>
                          <p className="text-muted-foreground">Clayton, MO 63105</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <a href="tel:314-555-4790" className="font-medium hover:text-primary transition-colors">
                          (314) 555-4790
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <a
                          href="mailto:stlouis@nationalrestoration.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          stlouis@nationalrestoration.com
                        </a>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium">Office Hours:</p>
                          <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p className="text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
                          <p className="text-primary font-medium mt-2">24/7 Emergency Response Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-office-building"
                      alt="St. Louis office building"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Service Coverage</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving the Entire St. Louis Region</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our coverage extends throughout Greater St. Louis and Southern Illinois, providing local response with
              consistent, high-standard workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                St. Louis City & County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Central West End
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Downtown
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Ladue
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Kirkwood
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Brentwood
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Clayton
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Webster Groves
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  University City
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                St. Charles County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  St. Charles
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  St. Peters
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  O'Fallon
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Wentzville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Lake St. Louis
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Jefferson County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Arnold
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Festus
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Hillsboro
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Imperial
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Franklin County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Union
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Washington
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Surrounding Communities
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Chesterfield
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Ballwin
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Wildwood
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Eureka
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-4 mt-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Illinois Metro East
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Belleville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Edwardsville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  O'Fallon
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Collinsville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Fairview Heights
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  Granite City
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/st-louis-kirkwood-neighborhood.jpg"
                alt="Kirkwood neighborhood"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/st-louis-ofallon-residential.jpg" alt="O'Fallon residential" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image src="/st-louis-belleville-homes.jpg" alt="Belleville homes" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-wentzville-development"
                alt="Wentzville development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Don't see your town listed? We likely serve it—call 1-800-RESTORE to confirm and schedule a free
              inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Restoration Services */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Complete Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Service Restoration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Storm & Hail Damage Repair</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Roof Replacement (Shingle, Metal, Flat)</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Siding & Trim Replacement</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Window & Gutter Installation</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Water Damage Dry-Out & Rebuild</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Fire & Smoke Remediation</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Commercial Roofing & Coatings</h3>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">Full Insurance Claim Assistance</h3>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-team-working-roof" alt="Team working on roof" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-equipment-trucks" alt="Equipment and trucks" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-inspection-documentation"
                alt="Inspection and documentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Missouri's Climate */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Climate Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Missouri's Climate</h2>
              <p className="text-lg text-muted-foreground mb-6">
                St. Louis weather is tough—hail in spring, heat in summer, and freezing ice in winter. Our materials and
                methods are chosen for maximum durability and efficiency.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Impact-Resistant Shingles</h3>
                    <p className="text-muted-foreground">
                      Class 4 impact-resistant shingles for hail and wind up to 130 MPH
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Reflective Roof Coatings</h3>
                    <p className="text-muted-foreground">Reduce energy bills in humid heat</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Waterproof Systems</h3>
                    <p className="text-muted-foreground">Waterproof membranes and flashing for heavy rain and snow</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ice-Dam Prevention</h3>
                    <p className="text-muted-foreground">Proper attic ventilation and ice-dam prevention</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Energy-Efficient Solutions</h3>
                    <p className="text-muted-foreground">
                      Energy-efficient siding and insulated windows for year-round comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-hail-damage" alt="Hail damage" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-summer-heat" alt="Summer heat protection" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-winter-ice" alt="Winter ice protection" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-wind-damage" alt="Wind damage protection" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects in St. Louis</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-soulard-townhome-project"
                    alt="Historic Soulard Townhome"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Historic Soulard Townhome</h3>
                <p className="text-muted-foreground">
                  Full roof and gutter restoration using period-accurate materials and custom copper details approved by
                  the Historic Preservation Commission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-ofallon-hoa-project"
                    alt="O'Fallon HOA Storm Restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">O'Fallon HOA Storm Restoration</h3>
                <p className="text-muted-foreground">
                  Complete siding and roof replacement across a 60-unit community after severe hail damage—completed
                  ahead of schedule with insurance coordination for every unit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-downtown-commercial-roof"
                    alt="Downtown Commercial Roof"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Downtown Commercial Roof</h3>
                <p className="text-muted-foreground">
                  Flat-roof system replacement with TPO membrane and energy-reflective coating to improve efficiency and
                  extend roof life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Transformations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">BEFORE</p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-before-damaged-roof" alt="Before restoration" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">AFTER</p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-after-beautiful-roof" alt="After restoration" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">BEFORE</p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-before-damaged-siding"
                  alt="Before siding restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">AFTER</p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/st-louis-after-beautiful-siding"
                  alt="After siding restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "National Restoration handled everything after our ballasted roof was destroyed by hail. They met with
                  our insurance adjuster and finished the job flawlessly."
                </p>
                <p className="font-semibold">Tom H.</p>
                <p className="text-sm text-muted-foreground">St. Charles, MO</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "We own a historic home in Webster Groves and needed a company that respected its age. They matched
                  our wood trim perfectly and kept the project on budget."
                </p>
                <p className="font-semibold">Erin P.</p>
                <p className="text-sm text-muted-foreground">Webster Groves, MO</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-primary" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "After a tornado in Madison County, the National team showed up the next day. Professional, kind, and
                  detail-oriented from start to finish."
                </p>
                <p className="font-semibold">Shawn B.</p>
                <p className="text-sm text-muted-foreground">Belleville, IL</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Missouri Credentials */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Credentials & Certifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Missouri Licensed & Certified</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your project is backed by verified credentials and strong manufacturer warranties.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">Missouri Licensed General Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">Illinois Licensed Roofing Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">GAF Master Elite®</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">CertainTeed Select ShingleMaster™</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">Owens Corning Preferred Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">IICRC-Certified Water & Fire Restoration</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">ENERGY STAR® Partner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-medium">BBB A+ Accredited</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Schedule Your Free Inspection"
        description="Don't wait until the next storm strikes. Contact National Restoration St. Louis for a free, no-obligation inspection and damage assessment today."
        buttonText="Get Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
