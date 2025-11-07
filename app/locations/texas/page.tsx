import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building, Clock, Shield, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Dallas–Fort Worth Restoration Services | National Restoration Texas",
  description:
    "Trusted storm, roofing & exterior experts for North Texas. Serving Dallas, Fort Worth, Plano, Arlington, Frisco & the entire DFW Metroplex. Free inspections – call 1-800-RESTORE.",
}

export default function TexasPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Dallas–Fort Worth Restoration Services"
        description="Trusted Storm, Roofing & Exterior Experts for North Texas"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/texas-dallas-skyline-hero"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              When the Texas weather turns fierce, National Restoration is the name homeowners and businesses trust to
              rebuild, restore, and protect. Our Dallas–Fort Worth (DFW) team delivers comprehensive storm restoration,
              roofing, siding, and property repair services across the Metroplex — combining local expertise with
              national craftsmanship standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/texas-team-working-residential"
                alt="Texas team working on residential project"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/texas-hail-damage-inspection"
                alt="Hail damage inspection in Texas"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/texas-commercial-roofing-project"
                alt="Commercial roofing project in Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              From Dallas to Fort Worth, Plano to Arlington, and Frisco to Mansfield, we provide fast response, detailed
              damage assessment, and expert restoration for residential and commercial properties throughout North
              Texas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's hail, high winds, or extreme heat — our certified restoration crews know how to repair,
              replace, and rebuild with precision. Backed by full insurance-claim support, premium materials, and proven
              workmanship, we make it easy to restore your property and your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Dallas Headquarters Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Dallas Headquarters</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Heart of Our Texas Operations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Dallas office anchors National Restoration's growing Texas presence. From here, we manage restoration
              projects across Dallas, Collin, Denton, and Tarrant Counties, delivering superior service to homeowners,
              property managers, and business owners throughout the Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Dallas Restoration Specialties</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Storm Damage Restoration</p>
                    <p className="text-muted-foreground">
                      Rapid response for hail, wind, and tornado damage with same-day roof tarping and inspection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Residential Roofing & Siding</p>
                    <p className="text-muted-foreground">
                      Asphalt, metal, and designer shingles built for Texas heat and wind.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Commercial Roofing Systems</p>
                    <p className="text-muted-foreground">
                      TPO, PVC, EPDM, and roof coatings for energy efficiency and durability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Water & Fire Damage Recovery</p>
                    <p className="text-muted-foreground">Complete mitigation, cleanup, and reconstruction services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Insurance Claim Support</p>
                    <p className="text-muted-foreground">
                      Our team handles the paperwork, photos, and communication with your adjuster for a seamless claim
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-medium mb-2">
                  We know Texas storms hit hard — and that's why we're here 24/7 to respond fast when you need it most.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Dallas Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground">
                        5001 Spring Valley Rd, Suite 400
                        <br />
                        Dallas, TX 75244
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:2145554768" className="text-primary hover:underline text-lg font-semibold">
                        (214) 555-4768
                      </a>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:dallas@nationalrestoration.com" className="text-primary hover:underline">
                        dallas@nationalrestoration.com
                      </a>
                    </div>

                    <div>
                      <p className="font-medium mb-1 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Office Hours
                      </p>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                      <p className="text-sm text-primary font-medium mt-2">24/7 Emergency Service Available</p>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">Schedule Free Inspection</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image src="/dallas-office-building.jpg" alt="Dallas office building" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dallas-downtown-skyline" alt="Dallas downtown skyline" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dallas-residential-roofing"
                alt="Dallas residential roofing project"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dallas-storm-damage-repair"
                alt="Dallas storm damage repair"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fort Worth Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Fort Worth & Tarrant County</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving West Metroplex Communities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Just west of Dallas, our Fort Worth division serves residential neighborhoods, commercial districts, and
              rural properties across Tarrant County. Known for our honest estimates, high-quality work, and storm
              recovery expertise, we've helped countless Fort Worth residents and business owners recover after hail and
              wind events.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Fort Worth Area Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground">
                        9800 Hillwood Pkwy, Suite 250
                        <br />
                        Fort Worth, TX 76177
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:8175554922" className="text-primary hover:underline text-lg font-semibold">
                        (817) 555-4922
                      </a>
                    </div>

                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:fortworth@nationalrestoration.com" className="text-primary hover:underline">
                        fortworth@nationalrestoration.com
                      </a>
                    </div>

                    <div>
                      <p className="font-medium mb-1 flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Office Hours
                      </p>
                      <p className="text-muted-foreground">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                      <p className="text-sm text-primary font-medium mt-2">24/7 Emergency Service Available</p>
                    </div>

                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">Contact Fort Worth Office</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/fort-worth-office-building"
                  alt="Fort Worth office building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Fort Worth Service Highlights</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Roof Replacements & Exterior Restoration</p>
                    <p className="text-muted-foreground">
                      Expert recovery after major storms with comprehensive restoration services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Historic Home Repair</p>
                    <p className="text-muted-foreground">
                      Specialized restoration in areas like Fairmount and Arlington Heights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Large-Scale Commercial Projects</p>
                    <p className="text-muted-foreground">
                      Commercial roofing and coating projects for businesses of all sizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">HOA & Multi-Family Programs</p>
                    <p className="text-muted-foreground">
                      Coordinated restoration programs for communities and apartment complexes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-lg">Licensed & Compliant</p>
                    <p className="text-muted-foreground">
                      Fully licensed, insured, and compliant with all Fort Worth and Arlington building codes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-medium">
                  From Downtown Fort Worth to Burleson, Keller, and Mansfield, our team delivers the same
                  professionalism and reliability that defines National Restoration.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/fort-worth-downtown-skyline"
                alt="Fort Worth downtown skyline"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/fort-worth-historic-home.jpg"
                alt="Fort Worth historic home restoration"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/fort-worth-commercial-building.jpg"
                alt="Fort Worth commercial building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Presence Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Growing with North Texas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expanding Presence Across North Texas</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The DFW Metroplex is one of the fastest-growing regions in America — and National Restoration is proud to
              be part of that growth. Our field crews operate daily across North Texas communities, providing top-tier
              exterior restoration where it's needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/plano-neighborhood.jpg" alt="Plano neighborhood" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/frisco-residential-area.jpg" alt="Frisco residential area" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/arlington-homes.jpg" alt="Arlington homes" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/mckinney-neighborhood.jpg" alt="McKinney neighborhood" fill className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Dallas County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Dallas</li>
                <li>Highland Park</li>
                <li>University Park</li>
                <li>Irving</li>
                <li>Mesquite</li>
                <li>Garland</li>
                <li>DeSoto</li>
                <li>Cedar Hill</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Tarrant County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fort Worth</li>
                <li>Arlington</li>
                <li>Hurst</li>
                <li>Euless</li>
                <li>Bedford</li>
                <li>Keller</li>
                <li>Mansfield</li>
                <li>Southlake</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Collin County
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Plano</li>
                <li>McKinney</li>
                <li>Allen</li>
                <li>Frisco</li>
                <li>Prosper</li>
                <li>Wylie</li>
                <li>Richardson</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Additional Areas
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Denton</li>
                <li>Lewisville</li>
                <li>Flower Mound</li>
                <li>The Colony</li>
                <li>Rockwall</li>
                <li>Granbury</li>
                <li>Waxahachie</li>
                <li>Weatherford</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't see your area listed? Contact us — our teams cover most of North and Central Texas, and we're adding
              new service areas every season.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Complete Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Texas Restoration Services</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Storm Damage & Hail Repair</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Roof Replacement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Siding & Exterior Renovation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Window & Gutter Installation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Water & Fire Damage</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Commercial Roofing</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Insurance Claim Management</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="font-semibold">Preventative Maintenance</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              Every project includes detailed inspection reports, photo documentation, and transparent estimates using
              industry-standard pricing (Xactimate) — the same software insurers use. We make sure your coverage works
              for you, not against you.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Texas Weather Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Texas Tough</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Texas Weather</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From spring hailstorms to summer heat and winter ice, Texas weather demands resilience. That's why we
              install roofing and exterior systems engineered for extreme conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/texas-hail-storm-damage.jpg" alt="Texas hail storm damage" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/texas-summer-heat-protection.jpg"
                alt="Texas summer heat protection"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/texas-wind-resistant-roofing.jpg"
                alt="Texas wind resistant roofing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Hail Impact Resistance</h3>
                <p className="text-sm text-muted-foreground">Class 4 rated materials that withstand severe hail</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">High Wind Performance</h3>
                <p className="text-sm text-muted-foreground">Up to 130+ MPH rated shingles and fastening systems</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">UV & Heat Reflection</h3>
                <p className="text-sm text-muted-foreground">Energy-efficient materials that reduce cooling costs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Thermal Insulation</h3>
                <p className="text-sm text-muted-foreground">Protection for both hot summers and cold winters</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold mb-2">Waterproof Systems</h3>
                <p className="text-sm text-muted-foreground">Advanced flashing for driving rain protection</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our solutions not only restore your property but strengthen it — keeping your home or building ready for
              the next storm.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Texas Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="/frisco-residential-roof-replacement.jpg"
                  alt="Frisco residential roof replacement"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Frisco Residential Roof Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hail-damaged roof restored with Class 4 impact-resistant shingles, complete ventilation upgrade, and
                  new gutters — completed in 2 days with full insurance coordination.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Frisco, TX</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="/downtown-fort-worth-commercial-roof.jpg"
                  alt="Downtown Fort Worth commercial roof"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Downtown Fort Worth Commercial Roof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Flat roof system replacement on 50,000 sq. ft. office complex using TPO membrane and reflective
                  coating to meet ENERGY STAR standards.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Fort Worth, TX</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="/dallas-historic-home-restoration.jpg"
                  alt="Dallas historic home restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Dallas Historic Home Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Complete exterior restoration of a 1920s M Streets residence, including custom siding, copper gutters,
                  and restored dormers under city preservation guidelines.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Dallas, TX</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Client Reviews</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Texas Clients Say</h2>
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
                  "After a hailstorm tore through Plano, National Restoration inspected our roof the next day and walked
                  us through the insurance claim. The process was smooth, and the workmanship was first class."
                </p>
                <div>
                  <p className="font-semibold">Rachel M.</p>
                  <p className="text-sm text-muted-foreground">Plano, TX</p>
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
                  "Our commercial building in Fort Worth had severe roof leaks after a storm. The team at National
                  handled everything — from temporary repairs to full roof replacement — on time and on budget."
                </p>
                <div>
                  <p className="font-semibold">James L.</p>
                  <p className="text-sm text-muted-foreground">Fort Worth, TX</p>
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
                  "We've worked with several contractors over the years, but none have been as responsive or
                  professional. The Dallas office was amazing from start to finish."
                </p>
                <div>
                  <p className="font-semibold">Maria S.</p>
                  <p className="text-sm text-muted-foreground">Dallas, TX</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Trusted & Certified</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Texas Credentials & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our licensing, certifications, and partnerships ensure that every job meets Texas building standards and
              manufacturer warranty requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Texas Licensed & Insured Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">GAF Master Elite® Roofing Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Owens Corning Preferred Contractor</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">CertainTeed Select ShingleMaster™</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">IICRC-Certified Restoration</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">ENERGY STAR® Partner</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">BBB A+ Accredited</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                <p className="font-semibold">Haag Certified Inspector</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact All Offices Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Texas Offices</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              When Texas weather strikes, you need a partner you can trust. Contact our Dallas or Fort Worth office
              today for a free inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building className="h-6 w-6" />
                  Dallas Headquarters
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">
                      5001 Spring Valley Rd, Suite 400
                      <br />
                      Dallas, TX 75244
                    </p>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:2145554768" className="text-primary hover:underline text-xl font-bold">
                      (214) 555-4768
                    </a>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:dallas@nationalrestoration.com" className="text-primary hover:underline">
                      dallas@nationalrestoration.com
                    </a>
                  </div>

                  <div>
                    <p className="font-medium mb-1 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Office Hours
                    </p>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-primary font-medium text-sm mt-2">24/7 Emergency Service Available</p>
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Schedule Free Inspection</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Building className="h-6 w-6" />
                  Fort Worth Area Office
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">
                      9800 Hillwood Pkwy, Suite 250
                      <br />
                      Fort Worth, TX 76177
                    </p>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:8175554922" className="text-primary hover:underline text-xl font-bold">
                      (817) 555-4922
                    </a>
                  </div>

                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:fortworth@nationalrestoration.com" className="text-primary hover:underline">
                      fortworth@nationalrestoration.com
                    </a>
                  </div>

                  <div>
                    <p className="font-medium mb-1 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Office Hours
                    </p>
                    <p className="text-muted-foreground text-sm">Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground text-sm">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-primary font-medium text-sm mt-2">24/7 Emergency Service Available</p>
                  </div>

                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Contact Fort Worth Office</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-medium mb-4">Emergency Service Available 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:18007378673" className="text-2xl font-bold text-primary hover:underline">
                1-800-RESTORE
              </a>
              <span className="text-muted-foreground">or</span>
              <a href="mailto:info@nationalrestoration.com" className="text-lg text-primary hover:underline">
                info@nationalrestoration.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Protect Your Property and Restore Your Peace of Mind"
        description="National Restoration is Texas tough and ready to serve you. Schedule your free inspection today."
        buttonText="Schedule Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
