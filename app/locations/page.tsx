import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Service Locations | National Restoration",
  description:
    "National Restoration provides services across Southern California, Washington D.C. Metro, Ohio, Dallas-Fort Worth, St. Louis, and Pittsburgh. Find your local office.",
}

export default function LocationsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Our Locations"
        description="Serving communities across the country with local expertise"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/national-map-locations"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">National Reach, Local Expertise</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Communities Nationwide</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration has strategically positioned offices across the country to provide responsive,
                high-quality restoration services to homeowners and businesses in diverse regions and climates.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Each of our regional offices is staffed with local experts who understand the unique challenges and
                building requirements of their area. From the coastal conditions of Southern California to the severe
                weather patterns of the Midwest, our teams are equipped with the knowledge and experience to address
                your specific needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                In addition to our permanent locations, we maintain mobile response teams that can be deployed
                nationwide for large-scale restoration projects and disaster recovery efforts. This combination of local
                presence and national resources allows us to deliver exceptional service wherever you are.
              </p>

              <div className="space-y-4">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/contact">Contact Your Local Office</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/national-service-map"
                alt="National Restoration service areas map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Regional Offices</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Local Office</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our regional offices provide comprehensive restoration services tailored to local needs and building
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/atlanta-office-building" alt="Atlanta Office" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Atlanta</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving Atlanta, Marietta, Alpharetta, and surrounding areas with comprehensive restoration services
                  tailored to Southern California's unique climate and building styles.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      5500 Bolsa Ave, Suite 120
                      <br />
                      Huntington Beach, CA 92649
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(714) 555-7890</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">socal@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/atlanta">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/washington-dc-capitol"
                  alt="Washington D.C. Metro Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Washington D.C. Metro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving Washington D.C., Northern Virginia, and Maryland with specialized restoration services for
                  historic properties, modern homes, and commercial buildings.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      8300 Boone Blvd, Suite 500
                      <br />
                      Vienna, VA 22182
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(703) 555-4321</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">dcmetro@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/dc-metro">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/ohio-office-building" alt="Ohio Office" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Ohio</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving Cleveland, Columbus, and surrounding areas with comprehensive restoration services designed
                  for the Midwest's challenging weather conditions and diverse architectural styles.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      6100 Rockside Woods Blvd, Suite 315
                      <br />
                      Independence, OH 44131
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(216) 555-9876</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">ohio@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/ohio">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dallas-fort-worth-office-building"
                  alt="Dallas-Fort Worth Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Dallas–Fort Worth</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving the entire DFW Metroplex with specialized restoration services for hail damage, storm
                  recovery, and comprehensive exterior renovations for Texas homes and businesses.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      5050 Quorum Drive, Suite 700
                      <br />
                      Dallas, TX 75254
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(972) 555-6543</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">dfw@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/texas">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/st-louis-gateway-arch-skyline.jpg"
                  alt="St. Louis Metro Office"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>St. Louis Metro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving St. Louis, St. Charles, O'Fallon, and Southern Illinois with comprehensive restoration
                  services tailored to the Midwest's unique climate and diverse architectural styles.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      12345 Olive Blvd, Suite 200
                      <br />
                      St. Louis, MO 63141
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(314) 555-8765</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">stlouis@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/st-louis">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/pittsburgh-skyline-hero.jpg" alt="Pittsburgh Metro Office" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>Pittsburgh Metro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Serving Pittsburgh and Western Pennsylvania with comprehensive restoration services designed for the
                  region's freeze-thaw cycles, steep-slope roofs, and historic architecture.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      525 William Penn Place, Suite 300
                      <br />
                      Pittsburgh, PA 15219
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">(412) 555-4782</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">pittsburgh@nationalrestoration.com</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/locations/pittsburgh">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile Response */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/mobile-response-team.png"
                alt="National Restoration mobile response team"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4">Nationwide Coverage</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Response Teams</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In addition to our regional offices, National Restoration maintains specialized mobile response teams
                that can be rapidly deployed to areas affected by major storms, natural disasters, or other emergency
                situations.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Rapid Deployment</h3>
                    <p className="text-muted-foreground">
                      Our mobile teams can be on-site within 24-48 hours of a major weather event, equipped with
                      specialized equipment and materials to address emergency needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Large-Scale Capabilities</h3>
                    <p className="text-muted-foreground">
                      Our mobile teams are equipped to handle large-scale projects, from multi-building commercial
                      complexes to entire residential neighborhoods affected by severe weather.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">24/7 Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Our emergency hotline is staffed 24/7 to coordinate rapid response to storm damage and other
                      urgent restoration needs, regardless of location.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Contact Emergency Response</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Find Your Local Office"
        description="Contact us today to connect with restoration experts in your area. Our team is ready to help with your specific needs."
        buttonText="Contact Us Today"
        buttonLink="/contact"
      />
    </div>
  )
}
