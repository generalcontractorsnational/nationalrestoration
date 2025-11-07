import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Shield, Home, Wrench, FileText, Handshake, Award } from "lucide-react"
import Image from "next/image"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ProcessTimeline from "@/components/process-timeline"

export const metadata = {
  title: "Siding & Exteriors | National Builders Corporation",
  description:
    "Full-service exterior renovation partner. Durable, energy-efficient siding installations, custom trim, gutters, and replacement windows. Transform and protect your property.",
}

export default function SidingPage() {
  const sidingTypes = [
    {
      name: "Vinyl Siding",
      description:
        "The most popular and cost-effective option. Excellent weather resistance, minimal upkeep, and wide range of styles from traditional clapboard to vertical board-and-batten.",
      benefits: "Affordable, fade-resistant, maintenance-free (no painting required)",
      lifespan: "20–40 years with proper care",
      features: "Dozens of colors and textures, compatible with insulated backing for improved energy efficiency",
      image: "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/vinyl-siding-traditional-home",
    },
    {
      name: "Fiber Cement Siding",
      description:
        "Perfect balance between beauty and durability. Made from cement, sand, and cellulose fibers, mimics wood, stucco, or stone with unmatched durability.",
      benefits: "Non-combustible, rot-proof, and insect-resistant",
      lifespan: "40–50 years or more",
      features:
        "James Hardie® and CertainTeed® certified. Holds paint exceptionally well, withstands extreme temperatures",
      image: "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/fiber-cement-siding-modern-home",
    },
    {
      name: "Engineered Wood Siding",
      description:
        "Charm of real wood grain with modern performance enhancements. Crafted from resin-bonded wood fibers, treated to resist moisture and pests.",
      benefits: "Warm, authentic look; impact-resistant; eco-friendly manufacturing",
      lifespan: "30+ years",
      features: "LP® SmartSide and similar products. Natural aesthetic without traditional maintenance",
      image: "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/engineered-wood-siding-craftsman-home",
    },
    {
      name: "Composite & Specialty Siding",
      description:
        "For commercial or high-end residential projects. Includes aluminum, steel, stone veneer panels, and decorative accents.",
      benefits: "Architectural appeal, exceptional longevity, unique textures",
      lifespan: "30–50+ years",
      features: "Custom finishes, metal panels, stone veneer, decorative elements",
      image: "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/composite-specialty-siding-commercial",
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Siding & Exteriors"
        description="Full-service exterior renovation partner. Transform and protect your property with durable, beautiful siding solutions."
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-installation-crew-working"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Full-Service Exterior Renovation Partner</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At National Builders Corporation, we're more than roofing experts — we're your full-service exterior
              renovation partner. From durable, energy-efficient siding installations to custom trim, gutter systems,
              and replacement windows, we transform and protect your property from every angle.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Whether you need to repair storm-damaged siding, upgrade to premium materials, or completely refresh your
              building's exterior, our experienced team handles everything — from free inspections and design
              consultations to precise installation and insurance claim support.
            </p>
            <p className="text-lg text-muted-foreground">
              Your property's exterior is its first line of defense and its first impression. Trust National Builders to
              deliver both — strength and style that last.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-before-damaged"
                alt="Damaged siding before repair"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-installation-progress"
                alt="Siding installation in progress"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-after-beautiful" alt="Beautiful completed siding" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/exterior-trim-detail" alt="Exterior trim detail work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Siding Section */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Siding Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Types of Siding We Install</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with every major siding system, offering an array of materials, colors, and profiles to suit your
              property's unique style and performance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sidingTypes.map((type, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={type.image || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"} alt={type.name} fill className="object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                  <div className="space-y-1 text-sm">
                    <p>
                      <strong>Benefits:</strong> {type.benefits}
                    </p>
                    <p>
                      <strong>Lifespan:</strong> {type.lifespan}
                    </p>
                    <p>
                      <strong>Features:</strong> {type.features}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Trim, Windows, Doors & Gutters */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Complete Exterior Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Beyond Siding: Complete Exterior Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Your exterior renovation often includes more than siding. We offer full replacement services for trim,
              windows, doors, and gutters — all designed to work together for a complete, weather-tight exterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Exterior Trim, Soffit & Fascia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Quality siding installation is only complete with the right finishing touches. We expertly install
                  exterior trim, fascia, and soffit systems.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fascia boards protect roof edges from moisture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Soffit panels provide crucial attic airflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Trim boards seal corners for watertight finish</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Replacement Windows & Doors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  We install energy-efficient windows and durable, stylish doors that enhance comfort, reduce utility
                  costs, and improve aesthetics.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>ENERGY STAR® certified, custom-fit windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Double-hung, casement, slider, bay/bow styles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fiberglass, steel, and wood entry doors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Gutter Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Proper drainage is critical to protecting your siding, foundation, and landscaping. We install
                  seamless gutters custom-fit to your roofline.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Seamless aluminum and copper gutters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Gutter guards and downspouts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prevents water damage and erosion</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/exterior-trim-installation"
                alt="Exterior trim installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/replacement-windows-installation"
                alt="Replacement windows"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/seamless-gutter-installation"
                alt="Seamless gutter installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our proven 6-step process ensures your exterior project is completed efficiently with exceptional results.
            </p>
          </div>

          <ProcessTimeline />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-8">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/professional-inspection-documentation.jpg"
                alt="Free inspection"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/roof-shingles-close-up-detail.jpg"
                alt="Documentation support"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/adjuster-meeting-exterior" alt="Adjuster meeting" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/restoration-work-siding" alt="Restoration work" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/completion-warranty-exterior"
                alt="Completion and warranty"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/ongoing-support-customer" alt="Ongoing support" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Claim Support */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-3">Insurance Support</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">We Simplify the Insurance Process</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Storm damage can impact more than just your roof — high winds and hail can damage siding, gutters, and
                trim too. National Builders simplifies the insurance process by managing the details for you.
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Thorough Damage Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      We record every dent, crack, and tear with professional photos and inspection notes for your claim
                      file.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Estimate Preparation</h3>
                    <p className="text-sm text-muted-foreground">
                      Our estimators use industry-standard Xactimate software to prepare accurate repair/replacement
                      estimates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Handshake className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adjuster Meeting</h3>
                    <p className="text-sm text-muted-foreground">
                      We meet your insurance adjuster on-site to point out damage that could otherwise be overlooked.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Repair & Follow-Up</h3>
                    <p className="text-sm text-muted-foreground">
                      Once approved, our crew completes the work quickly and to code, providing final documentation for
                      insurance closeout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/insurance-documentation-exterior"
                  alt="Insurance documentation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/adjuster-meeting-siding-damage" alt="Adjuster meeting" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-repair-work" alt="Siding repair work" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/completed-exterior-restoration"
                  alt="Completed restoration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Transformations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Before & After Results</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for property owners across the region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Vinyl Siding Replacement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-before-old-damaged"
                    alt="Before: Old damaged siding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-after-new-vinyl"
                    alt="After: New vinyl siding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Fiber Cement Upgrade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-before-faded-wood"
                    alt="Before: Faded wood siding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-destructive text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Before
                  </div>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/siding-after-fiber-cement"
                    alt="After: New fiber cement siding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    After
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Siding Repairs & Full Replacement */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="pb-3">
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Siding Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Not all siding issues require full replacement. Our expert technicians provide efficient,
                  cost-effective repair services to restore the integrity and appearance of your exterior.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fixing cracked, loose, or missing panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Replacing damaged trim or fascia boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Repairing hail dents, wind damage, or impact breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Correcting warping, bulging, or water damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Color matching and material blending</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Full Exterior Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  When damage is widespread or your exterior is outdated, a full siding replacement or total exterior
                  renovation may be the best option.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Old siding removal and sheathing inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Weather-resistant barriers installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Proper flashing around openings and joints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Precise new siding installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Trim, soffit & fascia finishing details</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workmanship & Warranties */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Quality Guarantee</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Workmanship & Warranties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We stand behind every exterior project with industry-leading guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-3">
                <Award className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Manufacturer Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Certified installers for leading siding manufacturers, ensuring proper installation and full warranty
                  eligibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Material Warranties</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  25–50 year manufacturer warranties for fade, rot, and defect protection depending on product
                  selection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">10-Year Labor Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Every full replacement includes our 10-Year Labor Warranty, covering workmanship and installation
                  integrity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-3">
                <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Repair Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Smaller repairs are backed by a 1–2 year warranty. We're licensed, insured, and committed to doing
                  things right.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Trust National Builders */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-3">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Property Owners Trust National Builders</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Thousands of homeowners and businesses choose National Builders for one simple reason — we deliver
              excellence with integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Experience & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Decades of combined industry experience and a deep understanding of local building codes and weather
                  conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Certified Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Factory-trained installers for the top brands in siding and exteriors, ensuring proper installation
                  techniques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Honesty & Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transparent quotes, clear timelines, and no surprises. We keep you informed every step of the way.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Speed & Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most residential projects completed within days, with meticulous cleanup and inspection upon
                  completion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our clients consistently rate us 5 stars for professionalism, communication, and results that exceed
                  expectations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Flexible Payment Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Insurance coordination, retail payment plans, and financing options including 0% interest plans
                  available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Get Your Free Siding & Exterior Inspection Today!"
        description="Don't wait for damage or deterioration to compromise your property's beauty and protection. Call 1-800-RESTORE today to schedule your FREE siding and exterior inspection."
        buttonText="Schedule Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
