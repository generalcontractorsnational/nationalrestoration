import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, Clock, Shield, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import { getLocationPageSchema } from "@/lib/schema"

export const metadata = {
  title: "Atlanta Metro Restoration Services | National Builders Georgia",
  description:
    "Trusted roofing, storm, and exterior experts across Metro Atlanta and North Georgia. Licensed, insured, and ready to help. Free inspections – call 1-800-RESTORE.",
}

export default function AtlantaPage() {
  const services = [
    {
      name: "Storm Damage Restoration in Atlanta",
      description:
        "Expert hail, wind, and tornado damage repair with free inspections and fast turnaround throughout Metro Atlanta.",
      url: "https://nationalrestoration.com/services/storm-damage",
      image: "https://nationalrestoration.com/atlanta-storm-damage.jpg",
    },
    {
      name: "Roof Replacement & Repair in Atlanta",
      description: "Asphalt, metal, and flat roof systems built for Georgia's heat and humidity.",
      url: "https://nationalrestoration.com/services/roofing",
      image: "https://nationalrestoration.com/atlanta-roofing.jpg",
    },
    {
      name: "Siding, Windows & Gutters in Atlanta",
      description: "Full exterior upgrades to restore beauty, function, and energy efficiency for Atlanta properties.",
      url: "https://nationalrestoration.com/services/siding",
      image: "https://nationalrestoration.com/atlanta-siding.jpg",
    },
    {
      name: "Water & Fire Restoration in Atlanta",
      description: "24/7 emergency response, cleanup, and reconstruction services throughout Metro Atlanta.",
      url: "https://nationalrestoration.com/services/restoration",
      image: "https://nationalrestoration.com/atlanta-restoration.jpg",
    },
  ]

  const locationSchema = getLocationPageSchema(
    "Atlanta",
    "Atlanta",
    "GA",
    "3340 Peachtree Rd NE, Suite 1800",
    "30326",
    "(404) 555-4722",
    "atlanta@nationalrestoration.com",
    33.8463,
    -84.3621,
    "https://nationalrestoration.com/locations/atlanta",
    "https://nationalrestoration.com/atlanta-skyline-hero.jpg",
    "Trusted roofing, storm, and exterior experts across Metro Atlanta and North Georgia. Licensed, insured, and ready to help.",
    services,
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }} />

      <div className="flex flex-col">
        <PageHeader
          title="Atlanta Metro Restoration Services"
          description="Trusted Roofing, Storm, and Exterior Experts Across Georgia"
          backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-skyline-hero"
        />

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                When the storm passes, National Builders is the name homeowners and businesses across Atlanta trust
                most. We provide comprehensive restoration, roofing, and exterior renovation services for residential
                and commercial properties throughout Metro Atlanta and North Georgia — combining local craftsmanship
                with the power of a nationally trusted company.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether it's hail, high winds, flooding, or fire, our certified teams deliver rapid response, precise
                inspections, and quality repairs that stand the test of time. From the heart of Atlanta to Alpharetta,
                Marietta, and beyond, we're the Southeast's full-service partner for storm recovery, roofing, and
                exterior restoration.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-team-working-residential"
                  alt="Atlanta restoration team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/atlanta-storm-damage-inspection.jpg"
                  alt="Storm damage inspection in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-commercial-roofing-project"
                  alt="Commercial roofing project in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4">Georgia's Restoration Leader</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Atlanta Headquarters</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our Atlanta office is home to one of National Builders' most experienced divisions, specializing in
                  storm recovery, insurance claim support, and complete exterior replacement.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We serve both historic intown properties and modern suburban developments across Fulton, Cobb,
                  Gwinnett, and DeKalb Counties — with crews strategically stationed throughout the Metro to respond
                  quickly after major weather events.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Storm Damage Restoration</p>
                      <p className="text-muted-foreground">
                        Expert hail, wind, and tornado damage repair with free inspections and fast turnaround.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Roof Replacement & Repair</p>
                      <p className="text-muted-foreground">
                        Asphalt, metal, and flat roof systems built for Georgia's heat and humidity.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Siding, Windows & Gutters</p>
                      <p className="text-muted-foreground">
                        Full exterior upgrades to restore beauty, function, and energy efficiency.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Water & Fire Restoration</p>
                      <p className="text-muted-foreground">
                        24/7 emergency response, cleanup, and reconstruction services.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Insurance Claim Support</p>
                      <p className="text-muted-foreground">
                        We document, estimate, and coordinate directly with your adjuster to secure fair coverage.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                  When it comes to protecting your home or business, National Builders Atlanta is more than a contractor
                  — we're your advocate and your partner from inspection to completion.
                </p>
              </div>

              <div>
                <Card className="border-2 border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="text-2xl">Contact Atlanta Office</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <Building className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-1">Address</p>
                        <p className="text-muted-foreground">
                          3340 Peachtree Rd NE, Suite 1800
                          <br />
                          Atlanta, GA 30326
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-1">Phone</p>
                        <a href="tel:4045554722" className="text-primary hover:underline text-lg">
                          (404) 555-4722
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Toll-Free: 1-800-RESTORE</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-1">Email</p>
                        <a href="mailto:atlanta@nationalrestoration.com" className="text-primary hover:underline">
                          atlanta@nationalrestoration.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-lg mb-1">Office Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 3:00 PM</p>
                        <p className="text-sm text-primary font-semibold mt-2">24/7 Emergency Service Available</p>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Button asChild size="lg" className="w-full">
                        <Link href="/contact">Schedule Free Inspection</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                        <a href="tel:4045554722">Call Now</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="relative aspect-video rounded-lg overflow-hidden mt-6">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-office-building"
                    alt="Atlanta office building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/atlanta-buckhead-homes.jpg" alt="Buckhead neighborhood" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Buckhead</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="/atlanta-midtown-skyline.jpg" alt="Midtown Atlanta" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Midtown</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-decatur-neighborhood"
                  alt="Decatur neighborhood"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Decatur</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-sandy-springs-homes" alt="Sandy Springs homes" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Sandy Springs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Coverage Area</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving the Entire Metro Atlanta Region</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our service area spans the entire Metro Atlanta region, including the city center and surrounding
                suburbs. We understand the diverse architecture and permitting requirements across counties, and we
                tailor our solutions for each community's unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/atlanta-metro-map.jpg"
                  alt="Atlanta Metro service area map"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      City of Atlanta
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Midtown</li>
                      <li>Buckhead</li>
                      <li>Downtown</li>
                      <li>Grant Park</li>
                      <li>West End</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      North Metro
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Alpharetta</li>
                      <li>Roswell</li>
                      <li>Milton</li>
                      <li>Johns Creek</li>
                      <li>Suwanee</li>
                      <li>Cumming</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      East Metro
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Decatur</li>
                      <li>Stone Mountain</li>
                      <li>Lawrenceville</li>
                      <li>Snellville</li>
                      <li>Conyers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      West Metro
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Marietta</li>
                      <li>Smyrna</li>
                      <li>Kennesaw</li>
                      <li>Powder Springs</li>
                      <li>Douglasville</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      South Metro
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Peachtree City</li>
                      <li>Fayetteville</li>
                      <li>Newnan</li>
                      <li>Stockbridge</li>
                      <li>McDonough</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      North Georgia
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Gainesville</li>
                      <li>Dawsonville</li>
                      <li>Canton</li>
                      <li>Athens</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-muted-foreground italic">
                  Wherever you are in the Atlanta Metro area, our restoration professionals are nearby — ready to
                  respond fast and deliver five-star service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/marietta-neighborhood" alt="Marietta neighborhood" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Marietta</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/alpharetta-development" alt="Alpharetta development" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Alpharetta</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roswell-homes" alt="Roswell homes" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Roswell</p>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/johns-creek-neighborhood"
                  alt="Johns Creek neighborhood"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-semibold">Johns Creek</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Restoration & Exterior Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We handle every stage of restoration — from the first inspection to the final clean-up — using premium
                materials, experienced crews, and detailed photo documentation. Every project is code-compliant,
                insured, and warrantied.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Storm Damage Repair</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hail, Wind, Water, Fire</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Roof Replacement & Repairs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Shingle, Metal, Flat Roof Systems</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Siding Replacement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Vinyl, Fiber Cement, Engineered Wood</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Window & Door Upgrades</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Energy-efficient solutions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gutter & Downspout Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete drainage solutions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Water Mitigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Structural Dry-Out</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Commercial Roofing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Waterproofing solutions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Insurance Claim Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Documentation & Advocacy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-roofing-installation"
                  alt="Roofing installation in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-siding-replacement"
                  alt="Siding replacement in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-window-installation"
                  alt="Window installation in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Climate Solutions</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Georgia's Climate</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Atlanta weather brings it all — blistering heat, severe thunderstorms, high humidity, and the
                  occasional ice storm.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our roofing and exterior systems are designed to withstand the South's extremes, offering durability,
                  efficiency, and protection year-round.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Impact-resistant shingles</p>
                      <p className="text-muted-foreground">For hail and high winds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Reflective roof coatings</p>
                      <p className="text-muted-foreground">For energy savings in summer heat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Advanced flashing & drainage systems</p>
                      <p className="text-muted-foreground">For heavy rain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Moisture-resistant siding & insulation</p>
                      <p className="text-muted-foreground">To combat humidity and mold</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Roof ventilation & attic upgrades</p>
                      <p className="text-muted-foreground">To improve energy efficiency</p>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 mt-6">
                  Our work doesn't just restore — it fortifies your home or business against whatever Georgia's weather
                  brings next.
                </p>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-heat-resistant-roofing"
                    alt="Heat-resistant roofing in Atlanta"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-storm-protection"
                    alt="Storm protection systems"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Featured Projects</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Atlanta Projects</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore some of our recent restoration projects throughout Metro Atlanta.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/buckhead-historic-restoration"
                    alt="Historic Buckhead Restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Historic Buckhead Restoration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete exterior restoration on a 1930s home with new architectural shingles, custom wood trim, and
                    historically matched paint colors. Project approved through the city's preservation board.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/marietta-multi-family-storm-recovery"
                    alt="Marietta Multi-Family Storm Recovery"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Marietta Multi-Family Storm Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Full roof and siding replacement across a 40-unit HOA community after severe hail damage. Work
                    completed with zero disruption to residents and full insurance coordination.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/alpharetta-office-complex"
                    alt="Alpharetta Office Complex"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Alpharetta Office Complex</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Commercial roof restoration and coating project improving energy efficiency and waterproofing for a
                    25,000 sq. ft. building in North Fulton County.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Transformations</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-center font-semibold mb-2">Before</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-before-storm-damage"
                    alt="Before storm damage repair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center font-semibold mb-2">After</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-after-storm-damage"
                    alt="After storm damage repair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center font-semibold mb-2">Before</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-before-siding-replacement"
                    alt="Before siding replacement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-center font-semibold mb-2">After</p>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-after-siding-replacement"
                    alt="After siding replacement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Atlanta Clients Say</h2>
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
                    "National Builders made a stressful storm claim completely painless. They handled everything — from
                    meeting the adjuster to replacing our roof. The workmanship was excellent."
                  </p>
                  <div>
                    <p className="font-semibold">Jennifer L.</p>
                    <p className="text-sm text-muted-foreground">Alpharetta, GA</p>
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
                    "Our Buckhead home needed extensive repair after a windstorm. The team was on-site within 24 hours,
                    professional, and communicative. The new roof looks incredible."
                  </p>
                  <div>
                    <p className="font-semibold">David M.</p>
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
                    "As a property manager, I've worked with several restoration companies. National Builders Atlanta is
                    by far the most reliable — on schedule, transparent, and quality-focused."
                  </p>
                  <div>
                    <p className="font-semibold">Robert P.</p>
                    <p className="text-sm text-muted-foreground">Marietta, GA</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Credentials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Georgia Credentials & Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our certifications and partnerships mean every project meets Georgia's state codes and qualifies for
                manufacturer-backed warranties.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">GA Licensed General Contractor</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">GAF Master Elite®</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">CertainTeed Select ShingleMaster™</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">Owens Corning Preferred</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">IICRC-Certified</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">ENERGY STAR® Partner</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">BBB A+ Accredited</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-3">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <p className="text-center text-sm font-medium">Insured & Bonded</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-team-meeting" alt="Atlanta team meeting" fill className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-equipment-trucks"
                  alt="Atlanta equipment and trucks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-crew-celebration"
                  alt="Atlanta crew celebrating success"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Schedule a Free Inspection Today"
          description="Don't wait until the next storm hits. Contact National Builders Atlanta for a free, no-obligation inspection and damage assessment. Our local experts will identify issues early, document your claim, and restore your property quickly and professionally."
          buttonText="Contact Atlanta Office"
          buttonLink="/contact"
        />
      </div>
    </>
  )
}
