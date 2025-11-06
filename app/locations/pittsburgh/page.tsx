import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Award, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Pittsburgh Restoration & Roofing Services | National Restoration Pennsylvania",
  description:
    "National Restoration provides storm, roofing, and exterior restoration throughout Pittsburgh and Western Pennsylvania. Licensed, insured, and trusted locally. Free inspections – call 1-800-RESTORE.",
  keywords:
    "Pittsburgh storm restoration, Pittsburgh roofing company, roof repair Pittsburgh PA, siding replacement Pittsburgh, commercial roofing Pennsylvania, hail damage repair Pittsburgh, insurance claim roof repair Pittsburgh, storm damage near me, roofers in Cranberry PA, Mt Lebanon restoration, Western PA exterior contractor, water damage cleanup Pittsburgh, roofing contractor Allegheny County",
}

export default function PittsburghPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/pittsburgh-skyline-hero.jpg"
          alt="Pittsburgh skyline with bridges and downtown"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Pittsburgh Metro Restoration Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance">
            Comprehensive Storm, Roofing & Exterior Solutions for Western Pennsylvania
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg">
              <a href="tel:1-800-RESTORE">Call 1-800-RESTORE</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="/contact">Free Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving the Steel City with Pride</h2>
              <p className="text-lg text-muted-foreground mb-4">
                In the heart of the Steel City, National Restoration brings decades of expertise in storm recovery,
                roofing, siding, and property restoration to homeowners and businesses across Pittsburgh and Western
                Pennsylvania.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                From the historic brick homes of Shadyside to the modern builds of Cranberry and Wexford, we combine
                local craftsmanship, insurance-claim expertise, and top-tier materials to protect what matters most.
              </p>
              <p className="text-lg text-muted-foreground">
                When hail, wind, or water damages your property, our certified restoration teams respond quickly,
                document the loss, and rebuild with precision — ensuring your home or commercial space is stronger than
                before.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/pittsburgh-team-working-residential.jpg"
                alt="National Restoration team working on Pittsburgh residential property"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Local Expertise, Pittsburgh Pride</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Pittsburgh division is locally staffed, licensed, and deeply familiar with the region's construction
              styles, climate, and permitting processes. We understand freeze–thaw cycles, steep-slope roofs, and aging
              brick exteriors that define Western Pennsylvania's architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-shadyside-historic-homes.jpg"
                alt="Historic brick homes in Shadyside Pittsburgh"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-cranberry-modern-builds.jpg"
                alt="Modern residential construction in Cranberry Township"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-mt-lebanon-neighborhood.jpg"
                alt="Mt. Lebanon neighborhood homes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pittsburgh Specialties */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Pittsburgh Specialties</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Storm Damage Restoration</h3>
                <p className="text-muted-foreground">
                  Fast emergency response, inspections, and insurance-supported restoration after hail, wind, or
                  flooding.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Roof Replacement & Repair</h3>
                <p className="text-muted-foreground">
                  Asphalt, architectural, and metal systems designed for Pittsburgh's harsh winters and heavy rains.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Siding & Exterior Renovation</h3>
                <p className="text-muted-foreground">
                  Vinyl, fiber cement, and engineered wood siding built for strength and curb appeal.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Water & Fire Restoration</h3>
                <p className="text-muted-foreground">
                  24/7 cleanup, mitigation, and rebuild services for residential and commercial losses.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Commercial Roofing & Coatings</h3>
                <p className="text-muted-foreground">
                  Flat, TPO, and spray-coating systems for offices, schools, and industrial facilities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Images Gallery */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-storm-damage-response.jpg"
                alt="Storm damage emergency response in Pittsburgh"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-roof-replacement.jpg"
                alt="Roof replacement project in Western Pennsylvania"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-siding-installation.jpg"
                alt="Siding installation on Pittsburgh home"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-commercial-roofing.jpg"
                alt="Commercial roofing project in Allegheny County"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pittsburgh Office Contact */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/pittsburgh-office-building.jpg"
                alt="National Restoration Pittsburgh office at William Penn Place"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Pittsburgh Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">525 William Penn Place, Suite 300</p>
                    <p>Pittsburgh, PA 15219</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:4125554782" className="hover:underline font-semibold">
                    (412) 555-4782
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:pittsburgh@nationalrestoration.com" className="hover:underline">
                    pittsburgh@nationalrestoration.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Office Hours:</p>
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="mt-2 font-semibold">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
              <Button size="lg" variant="secondary" className="w-full mt-6" asChild>
                <a href="tel:1-800-RESTORE">Call Now for Free Inspection</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Serving All of Western Pennsylvania */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serving All of Western Pennsylvania</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From city neighborhoods to rural communities, our crews provide prompt, professional restoration
              throughout the Greater Pittsburgh region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">City of Pittsburgh</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <p>• Downtown</p>
                <p>• Lawrenceville</p>
                <p>• Shadyside</p>
                <p>• Oakland</p>
                <p>• Bloomfield</p>
                <p>• Squirrel Hill</p>
                <p>• South Side</p>
                <p>• Mt. Washington</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Allegheny County</h3>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <p>• Bethel Park</p>
                <p>• Mount Lebanon</p>
                <p>• West Mifflin</p>
                <p>• Monroeville</p>
                <p>• Penn Hills</p>
                <p>• North Hills</p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Westmoreland County</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>• Greensburg</p>
                <p>• Murrysville</p>
                <p>• Irwin</p>
                <p>• Latrobe</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Butler County</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>• Cranberry Township</p>
                <p>• Butler</p>
                <p>• Mars</p>
                <p>• Zelienople</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Beaver County</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>• Beaver</p>
                <p>• Aliquippa</p>
                <p>• Hopewell</p>
                <p>• Center Township</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-3">Washington County</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>• Washington</p>
                <p>• Canonsburg</p>
                <p>• Peters Township</p>
              </div>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-6">
            If you don't see your community listed, give us a call — our teams serve nearly every ZIP in Western
            Pennsylvania.
          </p>
        </div>
      </section>

      {/* Neighborhood Showcase */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Proud to Serve Pittsburgh Neighborhoods</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-lawrenceville-homes.jpg"
                alt="Lawrenceville Pittsburgh neighborhood homes"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Lawrenceville</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-oakland-buildings.jpg"
                alt="Oakland Pittsburgh neighborhood"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Oakland</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-squirrel-hill-residential.jpg"
                alt="Squirrel Hill Pittsburgh homes"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Squirrel Hill</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-south-side-neighborhood.jpg"
                alt="South Side Pittsburgh neighborhood"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">South Side</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-bethel-park-homes.jpg"
                alt="Bethel Park residential area"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Bethel Park</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-monroeville-suburban.jpg"
                alt="Monroeville suburban homes"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Monroeville</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-greensburg-homes.jpg"
                alt="Greensburg Westmoreland County homes"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Greensburg</p>
              </div>
            </div>
            <div className="relative h-[200px]">
              <Image
                src="/pittsburgh-butler-residential.jpg"
                alt="Butler County residential area"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                <p className="text-white font-semibold">Butler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Service Restoration Solutions */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Full-Service Restoration Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our turnkey approach means one call handles it all — inspection, estimate, insurance coordination, and
              rebuild. You'll never have to chase subcontractors or paperwork.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Storm, Hail & Wind Damage Repair</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Roof Replacement (Shingle, Metal, Flat Roof)</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Siding Replacement & Trim Work</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Window & Gutter Systems</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Water Extraction & Structural Drying</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Fire & Smoke Damage Reconstruction</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Commercial Roof Coatings & Maintenance</h3>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Insurance Claim Support & Documentation</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Built for Pennsylvania Weather */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Pennsylvania Weather</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Western Pennsylvania sees it all — heavy snow, pounding rain, humid summers, and rapid freeze–thaw
                cycles. Our systems are engineered for it.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Impact-rated roofing built for hail and high winds</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Proper ventilation & insulation to prevent ice dams</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Moisture-resistant siding & flashing for driving rain</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Reflective coatings that improve summer efficiency</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p>Energy-smart upgrades that lower heating & cooling costs</p>
                </div>
              </div>
              <p className="text-lg font-semibold mt-6">
                We don't just fix storm damage — we rebuild for long-term protection and performance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px]">
                <Image
                  src="/pittsburgh-winter-snow-damage.jpg"
                  alt="Winter snow and ice damage in Pittsburgh"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/pittsburgh-hail-damage-inspection.jpg"
                  alt="Hail damage inspection in Western Pennsylvania"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/pittsburgh-wind-damage-repair.jpg"
                  alt="Wind damage repair in Allegheny County"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[200px]">
                <Image
                  src="/pittsburgh-rain-protection-systems.jpg"
                  alt="Rain protection and gutter systems"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pittsburgh Projects */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Pittsburgh Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-[250px]">
                <Image
                  src="/pittsburgh-mt-lebanon-historic-project.jpg"
                  alt="Mt. Lebanon historic home slate roof restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mt. Lebanon Historic Home</h3>
                <p className="text-muted-foreground mb-4">
                  Slate roof repair and copper flashing restoration on a 1920s Tudor-style home. Completed with
                  preservation-approved materials and full gutter system replacement.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Mt. Lebanon, PA</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-[250px]">
                <Image
                  src="/pittsburgh-cranberry-commercial-project.jpg"
                  alt="Cranberry Township commercial TPO roof installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cranberry Township Commercial Re-Roof</h3>
                <p className="text-muted-foreground mb-4">
                  Flat roof tear-off and TPO installation on a 40,000 sq ft distribution facility. Added reflective
                  coating for energy efficiency and warranty longevity.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Cranberry Township, PA</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-[250px]">
                <Image
                  src="/pittsburgh-greensburg-storm-recovery.jpg"
                  alt="Greensburg apartment complex storm damage restoration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Greensburg Storm Recovery</h3>
                <p className="text-muted-foreground mb-4">
                  Wind and hail damage repair on a 30-unit apartment complex, including full siding replacement and new
                  gutters — finished ahead of schedule and fully insurance-funded.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Greensburg, PA</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pittsburgh Transformations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Before</h3>
              <div className="relative h-[300px] mb-4">
                <Image
                  src="/pittsburgh-before-storm-damage.jpg"
                  alt="Before storm damage restoration Pittsburgh"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/pittsburgh-before-old-siding.jpg"
                  alt="Before siding replacement Pittsburgh"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">After</h3>
              <div className="relative h-[300px] mb-4">
                <Image
                  src="/pittsburgh-after-restoration-complete.jpg"
                  alt="After storm damage restoration Pittsburgh"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/pittsburgh-after-new-siding.jpg"
                  alt="After siding replacement Pittsburgh"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Our Pittsburgh Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "After a major hailstorm, National Restoration handled our insurance claim and new roof seamlessly.
                Their Pittsburgh team was professional, courteous, and fast."
              </p>
              <p className="font-semibold">— Mark R.</p>
              <p className="text-sm text-muted-foreground">Bethel Park, PA</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "They replaced the siding on our Mt. Lebanon home and the results were stunning. Excellent craftsmanship
                and communication."
              </p>
              <p className="font-semibold">— Katherine S.</p>
              <p className="text-sm text-muted-foreground">Mt. Lebanon, PA</p>
            </Card>

            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Our warehouse roof in Washington County was leaking badly. They completed a full TPO replacement and
                coating within a week. Highly recommend."
              </p>
              <p className="font-semibold">— Dale P.</p>
              <p className="text-sm text-muted-foreground">Washington, PA</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team and Equipment */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Pittsburgh Team & Equipment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-team-at-office.jpg"
                alt="National Restoration Pittsburgh team at office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-branded-trucks-fleet.jpg"
                alt="National Restoration branded trucks in Pittsburgh"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[250px]">
              <Image
                src="/pittsburgh-crew-working-site.jpg"
                alt="Restoration crew working on Pittsburgh project"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pennsylvania Credentials & Certifications */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pennsylvania Credentials & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every installation and restoration project is fully insured and compliant with state and local codes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Pennsylvania HIC</h3>
              <p className="text-sm text-muted-foreground">Licensed Home Improvement Contractor</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">GAF Master Elite®</h3>
              <p className="text-sm text-muted-foreground">Top 3% of Roofing Contractors</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">CertainTeed Certified</h3>
              <p className="text-sm text-muted-foreground">Select ShingleMaster™</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Owens Corning</h3>
              <p className="text-sm text-muted-foreground">Preferred Contractor</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">IICRC Certified</h3>
              <p className="text-sm text-muted-foreground">Water & Fire Restoration</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">ENERGY STAR®</h3>
              <p className="text-sm text-muted-foreground">Partner</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">BBB A+ Rated</h3>
              <p className="text-sm text-muted-foreground">Accredited Business</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Licensed & Bonded</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-6 md:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Regional Coverage Beyond Pittsburgh</h2>
            <p className="text-lg text-muted-foreground">
              We also proudly serve: Erie • Johnstown • Altoona • State College • Morgantown (WV) regional corridor
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Schedule Your Free Inspection Today</h2>
          <p className="text-xl mb-8">
            Don't wait until small leaks or minor hail damage become costly repairs. Contact National Restoration
            Pittsburgh for a free, no-obligation inspection and damage assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <a href="tel:1-800-RESTORE">📞 Call 1-800-RESTORE</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <a href="mailto:pittsburgh@nationalrestoration.com">📧 Email Us</a>
            </Button>
          </div>
          <p className="text-lg font-semibold">🕐 Available 24/7 for Emergency Response</p>
          <p className="text-muted-foreground mt-4">
            From roof to foundation, National Restoration is Western Pennsylvania's trusted name in property recovery,
            protection, and peace of mind.
          </p>
        </div>
      </section>
    </div>
  )
}
