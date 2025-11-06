import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, CheckCircle, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"

export const metadata = {
  title: "Ohio Restoration Services | Cleveland, Columbus & Cincinnati | National Restoration",
  description:
    "National Restoration provides comprehensive storm restoration, roofing, siding, and property repair services across Ohio. Serving Cleveland, Columbus, Cincinnati, and surrounding areas with local expertise and nationwide standards.",
}

export default function OhioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/ohio-cleveland-skyline-hero.jpg"
          alt="Cleveland Ohio skyline"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Ohio Restoration Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Serving Cleveland, Columbus, and Cincinnati with Local Expertise and Nationwide Standards
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pretty">
            Comprehensive storm restoration, roofing, siding, and property repair services across the Buckeye State
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">Schedule Free Inspection</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Link href="tel:1-800-RESTORE">Call 1-800-RESTORE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              National Restoration proudly provides comprehensive storm restoration, roofing, siding, and property
              repair services across Ohio. With our strongest presence in Cleveland and Northeast Ohio, expanding
              operations in Columbus, and a trusted network in Cincinnati, we deliver expert craftsmanship and
              dependable service to homes, HOAs, and commercial properties throughout the Buckeye State.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              Ohio weather is unpredictable — from Lake Erie lake-effect snow and hailstorms to Midwest wind and
              torrential rain. Our restoration experts are born for this climate. We respond fast, restore thoroughly,
              and rebuild smarter so your property stands stronger than ever.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Whether you're facing storm damage, roof leaks, or full exterior renovation, our certified crews and
              insurance-claim specialists handle every step of the process — documentation, permitting, materials, and
              final inspection — so you can focus on what matters most: peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Team Images */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/ohio-team-working-cleveland.jpg"
                alt="Ohio restoration team working in Cleveland"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/ohio-storm-damage-response.jpg"
                alt="Ohio storm damage emergency response"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/ohio-roofing-installation.jpg"
                alt="Ohio roofing installation in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Project Showcase */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ohio-residential-roofing-crew.jpg"
                alt="Ohio residential roofing crew at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ohio-commercial-project-progress.jpg"
                alt="Ohio commercial project in progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ohio-siding-installation-team.jpg"
                alt="Ohio siding installation team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src="/ohio-equipment-trucks-fleet.jpg"
                alt="Ohio equipment and trucks fleet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cleveland Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Cleveland – Our Ohio Headquarters</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cleveland's Restoration Specialists</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Cleveland is the heart of our Ohio operations and one of National Restoration's busiest hubs nationwide.
                From downtown Cleveland and Lakewood to Strongsville, Parma, and Mentor, our teams serve both historic
                neighborhoods and modern developments with expertise that comes from years of local experience.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Storm Damage & Insurance Restoration</p>
                    <p className="text-muted-foreground">
                      We respond quickly after hail, wind, or heavy snow events to assess, document, and repair your
                      property with zero hassle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Roofing & Exteriors</p>
                    <p className="text-muted-foreground">
                      Asphalt shingles, metal roofs, flat TPO commercial systems, and custom siding designed for Ohio's
                      freeze-thaw cycles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Water & Structural Repair</p>
                    <p className="text-muted-foreground">
                      Complete water extraction, structural drying, framing replacement, and rebuilds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Historic Property Restoration</p>
                    <p className="text-muted-foreground">
                      Specialized craftsmanship for Cleveland's century-old homes and buildings.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Our Cleveland branch is licensed, insured, and fully equipped to handle projects of any size — from
                single-family homes in West Park to large commercial buildings in Downtown and the Flats.
              </p>

              <Card className="bg-muted/50 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Building className="h-6 w-6 text-primary" />
                    Cleveland Office – Ohio Headquarters
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-muted-foreground">
                          6200 Rockside Woods Blvd N, Suite 220
                          <br />
                          Independence, OH 44131
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:+12165554521" className="text-primary hover:underline text-lg">
                          (216) 555-4521
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:cleveland@nationalrestoration.com" className="text-primary hover:underline">
                          cleveland@nationalrestoration.com
                        </a>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold mb-2">Office Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Emergency Service Only</p>
                      <p className="text-sm text-primary font-semibold mt-2">24/7 Emergency Response Available</p>
                    </div>
                    <Button asChild className="w-full mt-4" size="lg">
                      <Link href="/contact">Schedule Free Inspection</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/cleveland-downtown-skyline.jpg"
                  alt="Cleveland downtown skyline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/cleveland-historic-home-restoration.jpg"
                    alt="Cleveland historic home restoration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/cleveland-commercial-building.jpg"
                    alt="Cleveland commercial building restoration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleveland Neighborhoods Showcase */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Serving Cleveland Neighborhoods</h3>
            <p className="text-muted-foreground">From historic districts to modern developments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/cleveland-lakewood-homes.jpg" alt="Lakewood Cleveland homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Lakewood</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image
                src="/cleveland-strongsville-residential.jpg"
                alt="Strongsville residential area"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Strongsville</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/cleveland-parma-neighborhood.jpg" alt="Parma neighborhood" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Parma</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/cleveland-mentor-homes.jpg" alt="Mentor homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Columbus Section */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/columbus-downtown-skyline.jpg"
                  alt="Columbus downtown skyline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/columbus-residential-roofing.jpg"
                    alt="Columbus residential roofing project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/columbus-commercial-restoration.jpg"
                    alt="Columbus commercial restoration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4">Columbus – Central Ohio Restoration Experts</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Restoration for the Columbus Metro</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our Columbus team delivers fast, professional service to the capital region — serving Franklin,
                Delaware, and Licking Counties with the same quality and reliability that made our Cleveland division a
                market leader.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Residential & Multi-Family Restoration</p>
                    <p className="text-muted-foreground">
                      Full-service repair and renovation for homes, HOAs, and property managers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Commercial Services</p>
                    <p className="text-muted-foreground">
                      Building envelope restoration, roofing, waterproofing, and exterior modernization.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Storm Response & Insurance Claims</p>
                    <p className="text-muted-foreground">
                      We handle documentation, adjuster coordination, and full rebuilds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Energy-Efficient Upgrades</p>
                    <p className="text-muted-foreground">
                      Roofing, windows, and siding systems designed to reduce energy costs and increase property value.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Our Columbus crews understand the balance between new construction communities and established historic
                districts. We navigate local permitting with ease and deliver polished, professional results every time.
              </p>

              <Card className="bg-background border-2 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Building className="h-6 w-6 text-primary" />
                    Columbus Division
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-muted-foreground">
                          445 Hutchinson Ave, Suite 200
                          <br />
                          Columbus, OH 43235
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:+16145554980" className="text-primary hover:underline text-lg">
                          (614) 555-4980
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:columbus@nationalrestoration.com" className="text-primary hover:underline">
                          columbus@nationalrestoration.com
                        </a>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold mb-2">Office Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Emergency Service Only</p>
                      <p className="text-sm text-primary font-semibold mt-2">24/7 Emergency Response Available</p>
                    </div>
                    <Button asChild className="w-full mt-4" size="lg">
                      <Link href="/contact">Schedule Free Inspection</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Columbus Neighborhoods Showcase */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Serving Columbus Communities</h3>
            <p className="text-muted-foreground">From downtown to suburban neighborhoods</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image
                src="/columbus-dublin-neighborhood.jpg"
                alt="Dublin Columbus neighborhood"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Dublin</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/columbus-hilliard-homes.jpg" alt="Hilliard homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Hilliard</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image
                src="/columbus-westerville-residential.jpg"
                alt="Westerville residential area"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Westerville</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/columbus-new-albany-homes.jpg" alt="New Albany homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">New Albany</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cincinnati Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Cincinnati – Expanding in Southwest Ohio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Growing Our Presence in Southwest Ohio</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In Cincinnati and surrounding areas like Mason, West Chester, and Florence, our restoration presence
                continues to grow. We're partnering with homeowners, HOAs, and commercial facilities to deliver the same
                elite restoration service that defines our brand.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Emergency Storm Response</p>
                    <p className="text-muted-foreground">
                      24/7 roof tarping, leak mitigation, and rapid inspection after wind or hail events.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Exterior Renovation</p>
                    <p className="text-muted-foreground">
                      Roof, siding, and gutter replacement for both residential and mixed-use properties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Insurance Restoration</p>
                    <p className="text-muted-foreground">
                      End-to-end claims assistance and project execution with full transparency.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Our Cincinnati team represents National Restoration's continued investment in serving all of Ohio with
                local, community-based crews backed by national resources.
              </p>

              <Card className="bg-muted/50 border-2 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <Building className="h-6 w-6 text-primary" />
                    Cincinnati Area Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Address</p>
                        <p className="text-muted-foreground">
                          9990 Montgomery Rd, Suite 300
                          <br />
                          Cincinnati, OH 45242
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:+15135554673" className="text-primary hover:underline text-lg">
                          (513) 555-4673
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:cincinnati@nationalrestoration.com" className="text-primary hover:underline">
                          cincinnati@nationalrestoration.com
                        </a>
                      </div>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold mb-2">Office Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Emergency Service Only</p>
                      <p className="text-sm text-primary font-semibold mt-2">24/7 Emergency Response Available</p>
                    </div>
                    <Button asChild className="w-full mt-4" size="lg">
                      <Link href="/contact">Schedule Free Inspection</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/cincinnati-riverfront-skyline.jpg"
                  alt="Cincinnati riverfront skyline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/cincinnati-residential-siding.jpg"
                    alt="Cincinnati residential siding project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/cincinnati-storm-damage-repair.jpg"
                    alt="Cincinnati storm damage repair"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cincinnati Neighborhoods Showcase */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Serving Cincinnati Metro</h3>
            <p className="text-muted-foreground">From downtown to Northern Kentucky</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image
                src="/cincinnati-mason-neighborhood.jpg"
                alt="Mason Cincinnati neighborhood"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Mason</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/cincinnati-west-chester-homes.jpg" alt="West Chester homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">West Chester</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image
                src="/cincinnati-loveland-residential.jpg"
                alt="Loveland residential area"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Loveland</p>
              </div>
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden">
              <Image src="/cincinnati-blue-ash-homes.jpg" alt="Blue Ash homes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-semibold">Blue Ash</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Project Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Transformations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Project Transformations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the dramatic difference our restoration work makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-center font-semibold mb-3 text-muted-foreground">Before</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-before-storm-damage-roof.jpg"
                  alt="Ohio roof before storm damage repair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-center font-semibold mb-3 text-primary">After</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-after-storm-damage-roof.jpg"
                  alt="Ohio roof after storm damage repair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-center font-semibold mb-3 text-muted-foreground">Before</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-before-siding-replacement.jpg"
                  alt="Ohio siding before replacement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-center font-semibold mb-3 text-primary">After</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-after-siding-replacement.jpg"
                  alt="Ohio siding after replacement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-center font-semibold mb-3 text-muted-foreground">Before</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-before-commercial-restoration.jpg"
                  alt="Ohio commercial building before restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-center font-semibold mb-3 text-primary">After</p>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-after-commercial-restoration.jpg"
                  alt="Ohio commercial building after restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Services Section */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Complete Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Restoration & Exterior Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every project is built with quality materials, precision craftsmanship, and a commitment to doing things
              right — not fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Storm Damage Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Wind, hail, tornado, and ice damage restoration</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Roof Replacement & Repair</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Asphalt, metal, TPO/EPDM systems</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Siding & Trim Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Vinyl, fiber cement, engineered wood</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Water & Fire Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete extraction, drying, and rebuilds</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Commercial Building Envelope</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Full exterior restoration and modernization</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Insurance Claim Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Documentation, adjuster coordination, execution</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gutters & Ventilation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Complete gutter and ventilation systems</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Windows & Doors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Energy-efficient window and door replacement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team and Equipment Showcase */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Ohio Team & Equipment</h3>
            <p className="text-muted-foreground">Professional crews with state-of-the-art equipment</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-lg overflow-hidden">
              <Image
                src="/ohio-team-training-session.jpg"
                alt="Ohio team training session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden">
              <Image
                src="/ohio-branded-trucks-equipment.jpg"
                alt="Ohio branded trucks and equipment"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-72 rounded-lg overflow-hidden">
              <Image src="/ohio-crew-safety-meeting.jpg" alt="Ohio crew safety meeting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Built for Ohio's Climate</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Midwest Weather</h2>
              <p className="text-lg text-muted-foreground mb-6">
                From Cleveland's lake-effect snow to Columbus's temperature swings and Cincinnati's humid summers, we
                design and install systems that thrive in Ohio's climate.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Ice-Dam Resistant Roofing</p>
                    <p className="text-muted-foreground">Advanced ventilation systems to prevent ice dam formation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Energy-Efficient Insulation</p>
                    <p className="text-muted-foreground">Siding assemblies designed for maximum energy savings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Impact-Rated Materials</p>
                    <p className="text-muted-foreground">Shingles and metal panels tested for Midwest wind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Advanced Waterproofing</p>
                    <p className="text-muted-foreground">Superior drainage for heavy rain events</p>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold mt-6">
                When weather hits hard, your property should stand stronger — and with National Restoration, it will.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/ohio-lake-effect-snow.jpg"
                  alt="Ohio lake-effect snow storm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/ohio-hail-damage.jpg" alt="Ohio hail damage on roof" fill className="object-cover" />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/ohio-wind-damage.jpg" alt="Ohio wind damage restoration" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Coverage Area</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve Across Ohio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive restoration services throughout Northeast, Central, and Southwest Ohio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Northeast Ohio (Cleveland Metro)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Cleveland • Lakewood • Parma
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Strongsville • Mentor • Solon
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Independence • Avon • Westlake
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Euclid • Hudson • Akron
                  </p>
                  <p className="text-sm mt-4">
                    Cuyahoga County • Lake County • Summit County • Medina County • Lorain County
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Central Ohio (Columbus Metro)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Columbus • Dublin • Hilliard
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Westerville • Gahanna • Delaware
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    New Albany • Grove City • Worthington
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Reynoldsburg
                  </p>
                  <p className="text-sm mt-4">Franklin County • Delaware County • Licking County</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Southwest Ohio (Cincinnati Metro)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Cincinnati • Mason • West Chester
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Hamilton • Fairfield • Loveland
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Florence, KY • Blue Ash
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    Anderson Township
                  </p>
                  <p className="text-sm mt-4">Clermont County • Butler County • Warren County • Hamilton County</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Don't see your town listed? We likely serve it — call <strong>1-800-RESTORE</strong> for confirmation or to
            schedule a free inspection.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Credentials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Certifications & Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our local licensing and manufacturer partnerships ensure every installation meets or exceeds state
              building codes and carries full warranty coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ohio Licensed General Contractor</p>
                    <p className="text-sm text-muted-foreground">Fully licensed and bonded in the state of Ohio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">GAF Master Elite® Certified</p>
                    <p className="text-sm text-muted-foreground">Top 3% of roofing contractors nationwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">CertainTeed Select ShingleMaster™</p>
                    <p className="text-sm text-muted-foreground">Certified for premium installations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Owens Corning Preferred Contractor</p>
                    <p className="text-sm text-muted-foreground">Authorized for extended warranties</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">IICRC-Certified Restoration</p>
                    <p className="text-sm text-muted-foreground">Professional restoration technicians</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Fully Insured</p>
                    <p className="text-sm text-muted-foreground">Liability & Workers' Compensation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Ohio Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "After a hailstorm in Cleveland Heights, National Restoration was on-site the next morning. They
                  handled our insurance claim from start to finish, and the new roof looks incredible."
                </p>
                <div>
                  <p className="font-semibold">Kevin S.</p>
                  <p className="text-sm text-muted-foreground">Cleveland, OH</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "We manage several apartment buildings in Columbus. The National team replaced roofs on three
                  buildings with zero disruption to tenants. Professional, fast, and thorough."
                </p>
                <div>
                  <p className="font-semibold">Lindsey M.</p>
                  <p className="text-sm text-muted-foreground">Property Manager, Columbus, OH</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "They restored our siding and gutters after a storm in West Chester. Excellent work — clear
                  communication and top-notch quality."
                </p>
                <div>
                  <p className="font-semibold">Rachel P.</p>
                  <p className="text-sm text-muted-foreground">Cincinnati, OH</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ohio Project Gallery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/ohio-project-1-before-after.jpg"
                alt="Ohio restoration project before and after"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Cleveland Historic Home Restoration</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/ohio-project-2-commercial.jpg"
                alt="Ohio commercial restoration project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Columbus Office Building Renovation</p>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/ohio-project-3-storm-damage.jpg"
                alt="Ohio storm damage restoration"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-semibold">Cincinnati Storm Damage Recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact All Ohio Offices Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Ohio Offices</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three convenient locations to serve you better. Call, email, or visit us today for a free inspection and
              estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Cleveland Office Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Cleveland Office</CardTitle>
                <p className="text-sm text-muted-foreground">Ohio Headquarters</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Address</p>
                  <p className="text-sm">
                    6200 Rockside Woods Blvd N, Suite 220
                    <br />
                    Independence, OH 44131
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+12165554521" className="text-primary hover:underline font-semibold text-lg">
                    (216) 555-4521
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <a href="mailto:cleveland@nationalrestoration.com" className="text-primary hover:underline text-sm">
                    cleveland@nationalrestoration.com
                  </a>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                  <p className="text-xs text-muted-foreground">Sat: 8AM-4PM</p>
                  <p className="text-xs text-primary font-semibold mt-2">24/7 Emergency Service</p>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Contact Cleveland</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Columbus Office Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Columbus Office</CardTitle>
                <p className="text-sm text-muted-foreground">Central Ohio Division</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Address</p>
                  <p className="text-sm">
                    445 Hutchinson Ave, Suite 200
                    <br />
                    Columbus, OH 43235
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+16145554980" className="text-primary hover:underline font-semibold text-lg">
                    (614) 555-4980
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <a href="mailto:columbus@nationalrestoration.com" className="text-primary hover:underline text-sm">
                    columbus@nationalrestoration.com
                  </a>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                  <p className="text-xs text-muted-foreground">Sat: 8AM-4PM</p>
                  <p className="text-xs text-primary font-semibold mt-2">24/7 Emergency Service</p>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Contact Columbus</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Cincinnati Office Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Cincinnati Office</CardTitle>
                <p className="text-sm text-muted-foreground">Southwest Ohio</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Address</p>
                  <p className="text-sm">
                    9990 Montgomery Rd, Suite 300
                    <br />
                    Cincinnati, OH 45242
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+15135554673" className="text-primary hover:underline font-semibold text-lg">
                    (513) 555-4673
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <a href="mailto:cincinnati@nationalrestoration.com" className="text-primary hover:underline text-sm">
                    cincinnati@nationalrestoration.com
                  </a>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">Mon-Fri: 7AM-6PM</p>
                  <p className="text-xs text-muted-foreground">Sat: 8AM-4PM</p>
                  <p className="text-xs text-primary font-semibold mt-2">24/7 Emergency Service</p>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Contact Cincinnati</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              Not sure which office to contact? Call our main line and we'll connect you with the right team.
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link href="tel:1-800-RESTORE">Call 1-800-RESTORE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Request a Free Inspection in Ohio"
        description="Whether you've experienced storm damage, roof leaks, or aging exteriors, our Ohio teams are ready to help. Schedule a free inspection and estimate today."
        buttonText="Schedule Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
