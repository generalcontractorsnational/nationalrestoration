import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Shield, FileText, Phone, Wrench, Home, Building2, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import { getServicePageSchema } from "@/lib/schema"

export const metadata = {
  title: "Roofing Services | National Builders Corporation",
  description:
    "Full-service residential and commercial roofing partner. From repairs and inspections to complete roof replacements and insurance claim assistance.",
}

export default function RoofingPage() {
  const faqs = [
    {
      question: "How do I know if I need a roof replacement?",
      answer:
        "Signs you may need a new roof include: missing or curling shingles, granules in gutters, daylight visible through roof boards, leaks or water damage, sagging areas, and a roof that's 20+ years old. Our free inspection can provide a definitive assessment.",
    },
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most residential roof replacements are completed in 1-2 days, depending on the size and complexity of your roof. Commercial projects may take longer. We always provide a specific timeline during the estimation process.",
    },
    {
      question: "Can you install a new roof over my existing one?",
      answer:
        "While some codes allow for a second layer of shingles, we typically recommend a complete tear-off. This allows us to inspect the decking for damage, ensures proper installation, and maximizes the life of your new roof.",
    },
    {
      question: "What warranty do you offer on new roofs?",
      answer:
        "We provide a 10-year workmanship warranty on all roof installations. Additionally, the materials come with manufacturer warranties that range from 25-50 years depending on the product selected.",
    },
    {
      question: "Will my insurance cover a new roof?",
      answer:
        "If your roof was damaged by a covered peril such as hail, wind, or falling objects, your homeowner's insurance likely covers replacement. We specialize in insurance claim assistance and can help navigate the process.",
    },
    {
      question: "Do you offer roof maintenance services?",
      answer:
        "Yes, we provide comprehensive roof maintenance programs for both residential and commercial properties. Regular maintenance can extend your roof's lifespan and prevent costly repairs.",
    },
  ]

  const reviews = [
    {
      author: "Sarah H.",
      rating: 5,
      text: "National Builders made replacing our roof a breeze. From the free inspection to dealing with our insurance adjuster, they handled everything professionally. The crew replaced our entire roof in one day and the clean-up was immaculate. Our new roof looks amazing!",
      date: "2023-06-15",
    },
    {
      author: "Michael D.",
      rating: 5,
      text: "As a commercial property manager, I've worked with many contractors – and National Builders stands out. Their team repaired a persistent flat roof leak on one of our office buildings and later did a full TPO re-roof. The project was on time and on budget.",
      date: "2023-08-22",
    },
  ]

  const roofingSchema = getServicePageSchema(
    "Roofing Services",
    "Full-service residential and commercial roofing partner. From repairs and inspections to complete roof replacements and insurance claim assistance.",
    "https://nationalrestoration.com/services/roofing",
    "https://nationalrestoration.com/roofing-crew-install.png",
    faqs,
    reviews,
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofingSchema) }} />

      <div className="flex flex-col">
        <PageHeader
          title="Roofing Services"
          description="Your full-service residential and commercial roofing partner"
          backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roofing-crew-install"
        />

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-6">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  National Builders Corporation is your full-service residential and commercial roofing partner. From
                  minor repairs and preventative inspections to complete roof replacements and even insurance claim
                  assistance, we handle every aspect of roofing with professionalism and care. Our experienced team
                  coordinates everything – including free roof inspections, emergency storm damage response, and
                  hassle-free insurance support – to make protecting your home or business easy and stress-free.
                </p>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roofing-team-working-on-residential-roof"
                  alt="Professional roofing team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roof-damage-before-repair"
                  alt="Damaged roof before repair"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">Before: Storm Damage</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roof-replacement-in-progress"
                  alt="Roof replacement in progress"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">During: Professional Installation</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/completed-roof-replacement-beautiful"
                  alt="Completed roof replacement"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-semibold text-sm">After: Beautiful Results</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                National Builders Corporation is your full-service residential and commercial roofing partner. From
                minor repairs and preventative inspections to complete roof replacements and even insurance claim
                assistance, we handle every aspect of roofing with professionalism and care. Our experienced team
                coordinates everything – including free roof inspections, emergency storm damage response, and
                hassle-free insurance support – to make protecting your home or business easy and stress-free. We are
                committed to educating property owners, delivering top-quality workmanship, and converting each
                inspection into a long-lasting, weather-tight roof that offers peace of mind for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Removed "Our Process" section as requested */}

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                National Builders Corporation is your full-service residential and commercial roofing partner. From
                minor repairs and preventative inspections to complete roof replacements and even insurance claim
                assistance, we handle every aspect of roofing with professionalism and care. Our experienced team
                coordinates everything – including free roof inspections, emergency storm damage response, and
                hassle-free insurance support – to make protecting your home or business easy and stress-free. We are
                committed to educating property owners, delivering top-quality workmanship, and converting each
                inspection into a long-lasting, weather-tight roof that offers peace of mind for years to come.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Types of Roofing We Handle</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We work on all types of roofs and materials commonly used in homes and commercial properties. Our
                skilled crews are trained to install and repair a wide range of roofing systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/asphalt-shingle-roof-close-up-texture"
                    alt="Asphalt Shingle Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Home className="h-5 w-5 text-primary" />
                    Asphalt Shingles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    America's most popular roofing choice. We install both economical 3-tab shingles and premium
                    architectural shingles, which are thicker and more dimensional for enhanced curb appeal and wind
                    resistance.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Architectural shingles are about 50% heavier and can withstand higher winds than basic 3-tabs.
                    Available in many colors, typically lasting 20–30 years.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/asphalt-shingles">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/standing-seam-metal-roof-modern-home"
                    alt="Metal Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    Metal Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Durable and sleek, metal roofs are built to last 50+ years. We install standing seam panels and
                    metal shingles in aluminum or steel.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Metal roofing offers superior longevity, energy efficiency (by reflecting heat), and excellent
                    performance in extreme weather. Ideal for modern looks or low-slope sections.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/metal-roofing">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/clay-tile-roof-spanish-style-home"
                    alt="Tile Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Award className="h-5 w-5 text-primary" />
                    Tile Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Clay and concrete tile roofing provides exceptional durability and distinctive Mediterranean or
                    Spanish-style aesthetics. Tiles are fire-resistant and can last 50-100 years.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tile roofs offer superior longevity, excellent insulation properties, and distinctive architectural
                    character. Available in various profiles including barrel, S-tile, and flat styles.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/tile">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/natural-slate-roof-luxury-home" alt="Slate Roofing" fill className="object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Award className="h-5 w-5 text-primary" />
                    Slate Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Natural slate is the ultimate premium roofing material, offering unmatched beauty and longevity.
                    Slate roofs can last 75-200 years with proper installation and maintenance.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Slate is naturally fire-resistant, environmentally friendly, and provides timeless elegance. Each
                    slate tile is unique, creating a distinctive, high-end appearance.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/slate">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/tpo-white-membrane-flat-roof" alt="TPO Roofing" fill className="object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    TPO Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Thermoplastic Polyolefin (TPO) is a popular single-ply membrane for flat and low-slope roofs. White
                    TPO reflects sunlight, reducing cooling costs and extending roof life.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    TPO is heat-welded at seams for superior waterproofing, resistant to UV rays and chemicals, and
                    typically lasts 15-20 years. Cost-effective for commercial buildings.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/tpo">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/epdm-rubber-membrane-flat-roof" alt="EPDM Roofing" fill className="object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    EPDM Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Ethylene Propylene Diene Monomer (EPDM) is a durable rubber membrane ideal for flat roofs. Known as
                    "rubber roofing," it's flexible, weather-resistant, and cost-effective.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    EPDM is easy to install, resistant to ozone and UV radiation, and can last 20-30 years. Available in
                    black or white, it's a proven solution for low-slope applications.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/epdm">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/modified-bitumen-torch-down-roof"
                    alt="Modified Bitumen Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    Modified Bitumen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Modified bitumen is an asphalt-based membrane reinforced with fiberglass or polyester. Applied with
                    torch-down or cold adhesive methods for excellent waterproofing.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Highly durable and flexible, modified bitumen resists tears and punctures. Multi-ply systems provide
                    redundant protection, lasting 15-20 years with proper maintenance.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/modified-bitumen">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/built-up-tar-gravel-roof" alt="Built-Up Roofing" fill className="object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    Built-Up Roofing (BUR)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Traditional built-up roofing consists of multiple layers of bitumen and reinforcing fabrics, topped
                    with gravel or a mineral cap sheet. Time-tested for flat roofs.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    BUR systems provide excellent waterproofing through redundant layers, UV protection from gravel
                    surfacing, and can last 20-30 years. Ideal for heavy foot traffic areas.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/built-up">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/commercial-building-flat-roof-installation"
                    alt="Commercial Roofing Systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="h-5 w-5 text-primary" />
                    Commercial Systems
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    We service all commercial roof types, including PVC membrane roofs, spray polyurethane foam systems,
                    and reflective roof coatings for extending roof life.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Our commercial team has specialized training for every system, ensuring proper installation and
                    long-term performance for warehouses, offices, and retail centers.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/commercial">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/cedar-shake-wood-shingle-roof-rustic-cabin.jpg"
                    alt="Wood Shake & Cedar Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Home className="h-5 w-5 text-primary" />
                    Wood Shake & Cedar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Natural wood shake and cedar shingle roofing provides rustic beauty and excellent insulation. We
                    install premium cedar shakes and shingles with proper ventilation and treatment.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Wood roofing offers natural beauty, excellent insulation properties, and can last 30-40 years with
                    proper maintenance. Ideal for traditional and mountain-style homes.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/wood-shake">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/synthetic-composite-slate-roof-modern-home"
                    alt="Synthetic Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Shield className="h-5 w-5 text-primary" />
                    Synthetic Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Advanced composite materials that mimic the look of slate, tile, or wood shake but with superior
                    durability and lower maintenance. Lightweight and impact-resistant.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Synthetic roofing combines the aesthetic appeal of premium materials with modern engineering for
                    exceptional performance, often lasting 50+ years with minimal maintenance.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/synthetic">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-panels-on-residential-roof-installation"
                    alt="Solar-Ready Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Award className="h-5 w-5 text-primary" />
                    Solar-Ready Roofing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Future-proof your home with solar-ready roofing systems designed to support solar panel
                    installation. We coordinate with solar installers for seamless integration.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Solar-ready roofs include reinforced decking, proper flashing systems, and optimal orientation for
                    maximum energy generation. Perfect for eco-conscious property owners.
                  </p>
                  <Button asChild variant="link" size="sm" className="h-auto p-0">
                    <Link href="/services/roofing/solar-ready">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Free Service</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Roof Inspection & Damage Assessment</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Concerned about your roof? We offer a FREE roof inspection and comprehensive damage assessment for
                  residential and commercial properties. Our inspection covers every component of your roofing system to
                  identify issues early and accurately.
                </p>
                <p className="text-muted-foreground mb-4">
                  During a typical roof inspection, our certified inspectors will examine:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Structural integrity of your roof frame (checking for sagging or deck damage)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Condition of shingles or membrane (missing, loose, curling shingles, granule loss)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Flashing around chimneys, vents, and skylights (ensuring seals are intact)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Ventilation setup in your attic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Drainage system – gutters, downspouts, and roof scuppers
                    </span>
                  </li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  After the physical inspection, we provide you with photo documentation and a detailed written report
                  of our findings. You'll see pictures of any damage or vulnerable areas, and we'll clearly explain the
                  condition of your roof in plain language.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Schedule Free Inspection</Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roof-replacement-day"
                  alt="Roof inspection in progress"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Insurance Assistance</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Insurance Claim Support</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dealing with a storm-damaged roof can be overwhelming, but National Builders is here to help streamline
                the insurance process. We have extensive experience working with insurance companies to get homeowners
                the coverage they deserve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Thorough Damage Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Right after storm damage or if we find issues during an inspection, we document all roof damage with
                    high-resolution photos and detailed notes. This evidence is invaluable in explaining and validating
                    the damage to your insurance adjuster.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Estimate Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our roofing specialists will prepare a professional repair/replacement estimate for your insurance
                    claim, using the same Xactimate software and pricing that insurance adjusters use. This helps in
                    reaching an agreed cost quickly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Claims Filing & Paperwork</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll help you file the claim and ensure all necessary paperwork is filled out properly and
                    submitted on time. Our team will guide you on the information your insurer needs and help you
                    understand your policy coverage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Meeting with the Adjuster</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    When your insurance company sends their adjuster to inspect the roof, we meet them on-site as your
                    knowledgeable roofing partner. We point out all the damage and explain the necessary fixes to ensure
                    nothing is overlooked.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                With National Builders, you won't be left to navigate the complex insurance process alone. We've helped
                countless homeowners restore their roofs after wind, hail, and storm disasters. Bottom line: we
                document, communicate, and expedite.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Repair Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Roof Repairs</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Not every roofing issue requires a full replacement. National Builders provides prompt, expert roof
                repair services to address leaks and damage before they worsen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Leak Investigation & Patch Repairs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We track down the source of roof leaks and perform immediate repairs. This may involve replacing a
                    section of shingles, patching a small hole in a flat membrane, or sealing a cracked pipe boot.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Shingle Replacement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If a windstorm has torn off a few shingles or you have shingles that are cracked, curled, or losing
                    granules, we can replace them individually. We'll match the color and style for a seamless look.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Flashing and Sealant Repairs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The metal flashing around chimneys, skylights, vent pipes, and wall junctions is a common spot for
                    leaks. We repair or re-secure flashing and apply fresh sealant where needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Roof Ventilation Fixes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Problems like attic moisture or uneven temperatures can be traced to faulty roof ventilation. We
                    repair ridge vents, soffit vents, and attic fans to ensure your roof can "breathe" correctly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Emergency Tarping
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If your roof is heavily damaged by a storm, we offer 24/7 emergency roof tarping. Our crew will
                    install a heavy-duty waterproof tarp over the damaged sections to prevent further rain intrusion.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                With every repair, big or small, you can expect honest advice and quality workmanship. We won't try to
                upsell you on a new roof if a repair will suffice. All repair work is backed by our warranty.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Request Roof Repair</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Complete Replacement</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Roof Replacement</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                When repairs won't cut it, National Builders Corporation provides full roof replacement services with
                industry-leading quality and efficiency. We make the roof replacement process straightforward and
                hassle-free.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">What's Included in Our Roof Replacement</h3>
              <p className="text-muted-foreground mb-6">
                We don't cut corners – every roof we install is built to last decades. A typical National Builders
                re-roof includes:
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tear-Off & Decking Repairs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We carefully remove all old shingles and underlayment, right down to the wooden roof deck. We then
                      inspect the decking for any rot or damage. Any weak or rotted sections of plywood will be replaced
                      to ensure a solid foundation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Weatherproof Underlayment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Once the deck is sound, we install premium underlayment across the entire roof. This acts as a
                      secondary moisture barrier. In leak-prone areas, we use ice and water shield, a self-healing
                      waterproof membrane for extra protection.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Drip Edge Installation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We install metal drip edge flashing along all the eaves and rakes of your roof. This L-shaped
                      metal trim directs rainwater into your gutters and protects the roof deck and fascia from water
                      intrusion.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">New Flashing Components</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      All new flashing is installed or existing metal flashing is inspected and re-secured if in good
                      condition. We flash every chimney, vent pipe, skylight, and wall intersection with quality
                      aluminum or copper flashing sealed against water.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Attic Ventilation System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We typically install ridge vents at the peak of your roof and make sure soffit vents are clear.
                      Ridge vents allow hot, moist air to escape the attic, which helps prevent premature shingle aging
                      and mold growth.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">High-Quality Roofing Material</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Finally, we install your chosen roofing material with expert precision. We use architectural
                      shingles from top manufacturers, available in a wide array of colors and styles, and nail them to
                      manufacturer-specified patterns to withstand high winds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                We can typically complete most residential roof replacements in one to two days (weather permitting),
                minimizing disruption to your routine. Throughout the process, we communicate with you and keep you
                informed.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get Roof Replacement Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/commercial-flat-roof-install"
                  alt="Commercial roofing installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4">Commercial Services</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Roofing Services</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  National Builders brings the same level of expertise and quality to commercial roofing projects as we
                  do to homes. We understand the unique challenges of commercial roofs and work to minimize downtime and
                  disruptions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We have experience installing and repairing roofs on warehouses, office buildings, retail centers,
                  restaurants, schools, and multi-family apartment/condo complexes.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Commercial Roof Repairs & Maintenance</p>
                      <p className="text-sm text-muted-foreground">
                        Regular inspections and maintenance plans to catch small issues before they cause costly
                        problems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Flat Roof Replacement & Installation</p>
                      <p className="text-sm text-muted-foreground">
                        Complete tear-offs and re-installs with TPO, PVC, EPDM, or built-up roofing systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Roof Coatings and Restoration</p>
                      <p className="text-sm text-muted-foreground">
                        Fluid-applied coatings that seal and renew your roof surface, adding 10-20 years of life
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Emergency Response</p>
                      <p className="text-sm text-muted-foreground">
                        Priority emergency response including fast tarping or temporary repairs to keep your business
                        operational
                      </p>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg">
                  <Link href="/contact">Discuss Commercial Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Quality Guarantee</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Workmanship & Warranties</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At National Builders Corporation, quality workmanship is non-negotiable. We take pride in every nail
                driven and every shingle laid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>10-Year Labor Warranty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We stand behind our work with a 10-Year Labor Warranty on every full roof replacement. If any issue
                    arises due to our installation, we will fix it at no cost to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Manufacturer Warranties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    As certified installers with leading manufacturers (GAF, Owens Corning, CertainTeed), we offer 25-50
                    year manufacturer warranties on materials, depending on the product you choose.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Licensed & Insured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our company is fully licensed and insured (both liability insurance and workers' compensation). We
                    obtain all necessary permits and ensure everything is done to code.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                When we finish your roofing project, you not only get a roof built to last, but also all the paperwork
                and guarantees to back it up. We'll register your manufacturer warranty and provide you with a detailed
                warranty packet upon completion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Financing Available</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Payment Options</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe everyone deserves a safe, reliable roof without financial strain. National Builders offers
                flexible payment and financing options to fit your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Insurance Claims</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If your roof repair or replacement is covered by insurance, we accept the insurance payments and
                    often only require you to pay your deductible. We coordinate with the insurer so the funds flow
                    smoothly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retail Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    For non-insurance projects, we offer competitive pricing and a variety of payment methods. We never
                    demand full payment upfront – typically a deposit is collected to secure scheduling/materials and
                    the remainder upon completion.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financing Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Need to spread out the cost? We've partnered with financing providers to offer affordable roof
                    financing plans with deferred payments, zero-interest options, or low monthly payment plans
                    extending 5+ years.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Don't put off a needed roof repair or replacement because of cost – we'll find a solution that works for
                you so you can safeguard your property.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <Badge className="mb-4">Our Commitment</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Property Owners Trust National Builders</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We know you have choices when it comes to roofing contractors. Here are a few reasons why thousands of
                customers have chosen National Builders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Extensive Experience & Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We bring decades of combined roofing experience to every project. Our team has successfully
                    completed thousands of roof installations and repairs, from standard re-roofs to complex custom
                    homes and large commercial buildings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Certified & Credible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    National Builders is a fully licensed roofing contractor and factory-certified by top manufacturers.
                    We hold certifications like GAF Master Elite® and CertainTeed Select ShingleMaster™, which only a
                    small percentage of roofers achieve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Local Knowledge, Fast Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're locally owned and operated, not a fly-by-night storm chaser. Our team lives and works here in
                    the community, so we understand the local climate challenges and building codes. We provide quick
                    response – often same-day for inspections.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Efficient Project Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Time is of the essence when your roof is at stake. We pride ourselves on fast project timelines
                    without sacrificing quality. Once materials are in hand, our crew shows up on time and works
                    diligently to finish the job.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Honesty & Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trust is built through transparency. From the initial inspection to the final nail, we maintain
                    clear, open communication. You receive detailed estimates, we answer all your questions, and we keep
                    you updated on progress.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Satisfaction Guaranteed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Above all, we truly care about our customers. We don't consider a job done until you are 100%
                    satisfied. Our team is friendly and professional, making sure you feel comfortable throughout the
                    project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <CTA
          title="Get Your Free Roof Inspection Today!"
          description="Your roof is too important to leave to chance. Don't wait until a small issue becomes a major problem. Call us today at 1-800-RESTORE to book your free roof inspection or to discuss your roofing project."
          buttonText="Call 1-800-RESTORE"
          buttonLink="tel:1-800-737-8673"
        />
      </div>
    </>
  )
}
