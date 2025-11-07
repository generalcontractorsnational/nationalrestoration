import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Building, CloudRain, Snowflake, Shield, Clock, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Washington D.C. Metro Restoration Services | National Restoration",
  description:
    "National Restoration provides comprehensive restoration services throughout the Washington D.C. Metro area, including Northern Virginia and Maryland. Licensed, insured, and trusted locally.",
}

export default function DCMetroPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Washington D.C. Metro Restoration Services"
        description="Proudly Serving Washington D.C., Northern Virginia & Maryland"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-capitol-building-hero"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Trusted D.C. Metro Partner</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Trusted Restoration Partner</h2>
              <p className="text-lg text-muted-foreground mb-4">
                National Restoration is the D.C. Metro's trusted name for comprehensive property restoration, roofing,
                siding, and exterior renovation services. For over a decade, we've helped homeowners, property managers,
                and commercial clients across Washington D.C., Northern Virginia, and Maryland recover from storms,
                water damage, and everyday wear with professionalism and precision.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From historic rowhomes in Georgetown to modern condominiums in Arlington, from federal offices in the
                heart of D.C. to industrial facilities in Prince George's County, our local team understands the area's
                unique blend of architecture, weather patterns, and regulations.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine local expertise, insurance-claim experience, and industry-leading craftsmanship to deliver
                results that last—and service you can trust.
              </p>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-metro-team-at-work"
                alt="D.C. Metro restoration team at work"
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
            <Badge className="mb-4">Local Expertise, National Standards</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose National Restoration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our D.C. Metro branch, based in Vienna, Virginia, is supported by regional field offices throughout
              Washington D.C., Northern Virginia, and suburban Maryland. This structure allows us to respond quickly to
              emergencies while maintaining the high standards of a nationally recognized restoration company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-georgetown-historic-homes"
                alt="Georgetown historic homes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-arlington-modern-buildings"
                alt="Arlington modern buildings"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-bethesda-residential-area"
                alt="Bethesda residential area"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Residential Storm Restoration</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Commercial Exterior Renovation</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Roofing, Siding & Windows</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Fire, Water & Structural Repair</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Full Insurance Coordination</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
            Our licensed professionals are trained to navigate local permit requirements, HOA regulations, and historic
            preservation guidelines—so your project is compliant, efficient, and stress-free from start to finish.
          </p>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Comprehensive Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D.C. Metro Services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Storm Damage Restoration */}
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-storm-damage-restoration"
                  alt="Storm damage restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Storm Damage Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Mid-Atlantic is no stranger to high winds, hail, and heavy rain. Our storm restoration specialists
                  provide full-service recovery—from emergency tarping to full roof, siding, and gutter
                  replacements—with direct insurance claim support to ensure you get the coverage you deserve.
                </p>
              </CardContent>
            </Card>

            {/* Roofing & Exterior Services */}
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-roofing-exterior-services"
                  alt="Roofing and exterior services"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Roofing & Exterior Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We install and repair asphalt shingles, standing-seam metal roofs, TPO/EPDM commercial systems, and
                  more. Each system is tailored for D.C.'s variable climate, from humid summers to freezing winters. We
                  also handle siding, windows, gutters, and trim, ensuring a complete weather-tight envelope.
                </p>
              </CardContent>
            </Card>

            {/* Water & Fire Damage Restoration */}
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-water-fire-damage-restoration"
                  alt="Water and fire damage restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Water & Fire Damage Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our certified technicians manage every step of the restoration process—extraction, drying, cleaning,
                  deodorization, and reconstruction—with advanced equipment and proven techniques. We restore your
                  property safely, efficiently, and with care.
                </p>
              </CardContent>
            </Card>

            {/* Commercial Restoration */}
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-commercial-restoration"
                  alt="Commercial restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Commercial Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From multi-family housing to Class-A office buildings, our commercial restoration division delivers
                  durable solutions with minimal disruption. We coordinate directly with property managers, tenants, and
                  adjusters to maintain operations and timelines.
                </p>
              </CardContent>
            </Card>

            {/* Historic Property Restoration */}
            <Card>
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-historic-property-restoration"
                  alt="Historic property restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Historic Property Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  D.C. and Old Town Alexandria are filled with architectural treasures. Our team works closely with
                  historic review boards, using period-accurate materials and finishes to preserve character while
                  upgrading performance and efficiency.
                </p>
              </CardContent>
            </Card>

            {/* Climate Solutions */}
            <Card>
              <div className="relative h-64 w-full">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-climate-solutions" alt="Climate solutions" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Built for the D.C. Climate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Washington's four distinct seasons demand flexible, durable construction. Our restoration and exterior
                  systems are engineered to withstand intense summer heat & humidity, heavy rain & tropical remnants,
                  winter snow & ice, and wind & hail impacts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate Section */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Built for the D.C. Climate</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineered for Every Season</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Washington's four distinct seasons demand flexible, durable construction. Our restoration and exterior
              systems are engineered to withstand every challenge Mother Nature delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <CardTitle>Intense Summer Heat & Humidity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Energy-efficient materials that prevent warping and fading.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CloudRain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Heavy Rain & Tropical Remnants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced drainage, waterproofing, and flashing details.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Snowflake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Winter Snow & Ice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized insulation, roof ventilation, and ice-dam prevention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wind & Hail Impacts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Impact-rated shingles, metal, and coatings designed for high-wind zones.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-summer-heat-protection" alt="Summer heat protection" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-winter-snow-ice-protection"
                alt="Winter snow and ice protection"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-storm-wind-protection"
                alt="Storm and wind protection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Coverage Area</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Every Corner of the Washington D.C. Metro Area
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our crews operate daily across D.C., Northern Virginia, and Maryland, proudly serving communities
              throughout the region.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-metro-service-area-map"
                alt="D.C. Metro service area map"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Washington D.C.</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Northwest D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Northeast D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Southwest D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Southeast D.C.
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Capitol Hill
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Georgetown
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Dupont Circle
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Adams Morgan
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Northern Virginia</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Alexandria
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Arlington
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Fairfax
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> McLean
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Vienna
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Reston
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Great Falls
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Falls Church
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Loudoun County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Prince William County
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Maryland Suburbs</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Bethesda
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Silver Spring
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Rockville
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Chevy Chase
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Potomac
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Gaithersburg
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Germantown
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Additional Counties</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Montgomery County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Prince George's County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Howard County
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" /> Anne Arundel County
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground">
                Don't see your area listed? We probably still serve it—call 1-800-RESTORE to confirm or schedule a free
                inspection.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-capitol-hill-neighborhood"
                alt="Capitol Hill neighborhood"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-alexandria-old-town" alt="Alexandria Old Town" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-arlington-skyline" alt="Arlington skyline" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-bethesda-downtown" alt="Bethesda downtown" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Local Credentials & Certifications */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Local Credentials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Credentials & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our D.C. Metro division maintains all regional and state licenses and certifications to ensure your
              restoration is legal, insurable, and built to last.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/va-dpor-logo.png" alt="Virginia DPOR Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium text-sm">Virginia DPOR Licensed Contractor</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/md-dllr-logo.png" alt="Maryland DLLR Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium text-sm">Maryland DLLR Licensed Contractor</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/dc-dcra-logo.png" alt="DC DCRA Licensed" width={60} height={60} />
              </div>
              <p className="text-center font-medium text-sm">D.C. DCRA Licensed Contractor</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/historic-preservation-logo.png"
                  alt="Historic Restoration Specialist"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium text-sm">Certified Historic Restoration Specialist</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/energy-star-logo.png" alt="ENERGY STAR Partner" width={60} height={60} />
              </div>
              <p className="text-center font-medium text-sm">ENERGY STAR Partner</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/gaf-master-elite-logo.png" alt="GAF Master Elite" width={60} height={60} />
              </div>
              <p className="text-center font-medium text-sm">GAF Master Elite & CertainTeed Select ShingleMaster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects in the D.C. Metro</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore some of our recent restoration projects throughout the D.C. Metro area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-georgetown-residence-project"
                  alt="Historic Georgetown Residence"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Historic Georgetown Residence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full façade restoration of an 1800s townhouse with custom wood siding, copper gutters, and
                  historically accurate detailing—completed under Historic Preservation Review Board oversight.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/georgetown-historic-home">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-arlington-office-complex-project"
                  alt="Arlington Office Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Arlington Office Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Multi-building exterior modernization including new TPO roof systems, window replacements, and façade
                  coating upgrades completed while tenants remained operational.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/arlington-office-complex">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-bethesda-storm-recovery-project"
                  alt="Bethesda Storm Recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Bethesda Storm Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Luxury home restoration after a Category 2 storm event: full roof replacement, siding repair, and
                  drainage redesign for long-term protection. Completed with seamless insurance handling and zero
                  disruption.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/case-studies/bethesda-storm-recovery">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-project-before-after-1"
                alt="Before and after restoration project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-project-before-after-2"
                alt="Before and after restoration project 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Client Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and businesses throughout the D.C. Metro area who have experienced the National
              Restoration difference.
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
                  "National Restoration turned what could have been a nightmare into a smooth experience. Their D.C.
                  team handled every detail of our insurance claim and rebuilt our roof beautifully."
                </p>
                <div>
                  <p className="font-semibold">Michael T.</p>
                  <p className="text-sm text-muted-foreground">Bethesda, MD</p>
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
                  "We trusted National Restoration with our Georgetown brownstone restoration, and they delivered
                  craftsmanship worthy of its history. They handled the permits, approvals, and even matched
                  19th-century trim profiles."
                </p>
                <div>
                  <p className="font-semibold">Elizabeth R.</p>
                  <p className="text-sm text-muted-foreground">Washington, D.C.</p>
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
                  "As a property manager with multiple assets, I rely on National Restoration because they're
                  dependable, communicative, and professional. They make my job easier."
                </p>
                <div>
                  <p className="font-semibold">James P.</p>
                  <p className="text-sm text-muted-foreground">Arlington, VA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* D.C. Metro Office */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Visit Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">D.C. Metro Office</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/dc-metro-office-building"
                alt="D.C. Metro office building"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          8300 Boone Blvd, Suite 500
                          <br />
                          Vienna, VA 22182
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(703) 555-4321</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">dcmetro@nationalrestoration.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Hours</p>
                        <p className="text-muted-foreground">
                          Monday–Friday: 8:00 AM – 6:00 PM
                          <br />
                          24/7 Emergency Response Available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Regional Teams */}
      <section className="py-6 md:py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Regional Teams</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Our Regional Teams</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We serve clients throughout the Mid-Atlantic region. Explore our other regional service areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Baltimore County Restoration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/locations/baltimore">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arlington & Alexandria Restoration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/locations/arlington-alexandria">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fairfax & Loudoun Restoration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/locations/fairfax-loudoun">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Montgomery & Prince George's County Restoration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/locations/montgomery-prince-georges">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Annapolis & Anne Arundel County Restoration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/locations/annapolis-anne-arundel">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Each local page includes service highlights, project examples, and permit resources specific to your area.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Schedule Your Free Inspection Today"
        description="Don't wait until the next storm causes more damage. Contact National Restoration's D.C. Metro team for a free, no-obligation property inspection and same-day damage assessment. Available 24/7 for Emergency Response."
        buttonText="Call 1-800-RESTORE"
        buttonLink="/contact"
      />
    </div>
  )
}
