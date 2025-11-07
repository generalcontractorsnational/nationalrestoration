import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Shield, Award, Leaf, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Metal Roofing | National Builders Corporation",
  description:
    "Premium metal roofing installation with 50+ year lifespan. Standing seam and metal shingle options for residential and commercial properties.",
}

export default function MetalRoofingPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Metal Roofing"
        description="Durable, energy-efficient roofing built to last 50+ years"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/roofing-crew-install"
      />

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Metal roofing represents the pinnacle of durability, longevity, and energy efficiency in modern roofing
              systems. At National Builders Corporation, we specialize in installing premium metal roofing systems that
              can last 50 years or more with minimal maintenance. Whether you're looking for the sleek, contemporary
              look of standing seam panels or the traditional appearance of metal shingles, we have the expertise to
              deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Metal roofs are an investment in your property's future, offering superior performance in extreme weather,
              excellent energy efficiency, and a distinctive aesthetic that enhances curb appeal and property value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Metal Roofing?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Metal roofing offers unmatched benefits that make it an increasingly popular choice for discerning
              property owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Exceptional Longevity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal roofs can last 50-70 years or more with proper installation and minimal maintenance. That's 2-3
                  times longer than asphalt shingles, making it a true lifetime roofing solution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy Efficient</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal roofs reflect solar radiant heat, reducing cooling costs by 10-25%. Special reflective coatings
                  can further enhance energy savings, making metal roofing an eco-friendly choice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Superior Weather Resistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal roofing excels in extreme weather conditions. It's non-combustible (Class A fire rating), sheds
                  snow easily, resists wind speeds up to 140 mph, and won't crack, corrode, or impact like other
                  materials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Increased Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal roofing can recoup 85-95% of its cost at resale and is a major selling point for buyers. The
                  modern, upscale appearance and known durability make properties more attractive.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Environmentally Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal roofing is 100% recyclable at the end of its life and often contains 25-95% recycled content. It
                  doesn't contribute to landfill waste like asphalt shingles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once installed, metal roofs require very little maintenance. No need for periodic replacement of
                  damaged shingles or worry about moss, mildew, or rot. Occasional inspections are all that's needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metal Roofing Systems We Install</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of metal roofing systems to suit different architectural styles and performance
              requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Standing Seam Metal Roofing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The most popular and modern metal roofing system, standing seam features vertical panels with raised
                  seams that interlock. The fasteners are concealed beneath the seams, creating a sleek, clean
                  appearance with no exposed screws.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Contemporary, streamlined appearance perfect for modern architecture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Concealed fasteners prevent leaks and extend roof life
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Allows for thermal expansion and contraction without damage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Ideal for low-slope applications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metal Shingles & Tiles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Metal shingles and tiles are designed to mimic the appearance of traditional roofing materials like
                  asphalt shingles, wood shake, slate, or clay tile, while providing all the benefits of metal roofing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Traditional appearance that fits historic or classic architecture
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      Lighter weight than slate or tile with same aesthetic
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Available in many colors and finishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Easier to install on complex roof designs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Corrugated & R-Panel Metal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Corrugated metal and R-panel roofing feature exposed fasteners and are commonly used for agricultural
                  buildings, barns, and industrial structures. They're also gaining popularity for modern residential
                  designs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Most economical metal roofing option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Fast installation for large areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Industrial or rustic aesthetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Excellent for outbuildings and shops</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Metal Material Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We work with various metal materials, each offering unique benefits:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Steel:</strong> Most common, durable, available with various coatings
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Aluminum:</strong> Lightweight, rust-proof, ideal for coastal areas
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Copper:</strong> Premium option, develops natural patina, 100+ year lifespan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Zinc:</strong> Self-healing properties, extremely long-lasting
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Installation Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Metal Roof Installation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Metal roofing requires specialized knowledge and precision. Our certified installers follow strict
              protocols to ensure your metal roof performs flawlessly for decades.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Roof Deck Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We inspect and repair the roof deck as needed, ensuring it's structurally sound and properly
                  ventilated. Any damaged decking is replaced before proceeding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Underlayment Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-temperature synthetic underlayment is installed across the entire roof deck. This provides a
                  secondary moisture barrier and helps prevent condensation issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Trim & Flashing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom-fabricated trim pieces and flashing are installed at eaves, rakes, ridges, valleys, and all
                  penetrations. Proper flashing is critical for a watertight metal roof system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Panel Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal panels are carefully measured, cut, and installed according to manufacturer specifications. For
                  standing seam systems, panels are mechanically seamed together for a weathertight seal.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Ridge Cap & Ventilation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ridge caps are installed with proper ventilation to allow hot air to escape from the attic. This is
                  essential for preventing moisture buildup and maximizing energy efficiency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. Quality Inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A thorough inspection ensures all seams are properly sealed, fasteners are correctly installed, and
                  the roof meets all manufacturer requirements for warranty coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4">Color & Finish Options</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Customize Your Metal Roof</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Modern metal roofing is available in a wide array of colors and finishes to complement any architectural
                style and personal preference.
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-semibold mb-1">Popular Color Options</p>
                  <p className="text-sm text-muted-foreground">
                    Charcoal gray, slate blue, forest green, barn red, bronze, copper, galvalume silver, white, tan, and
                    custom colors
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Finish Types</p>
                  <p className="text-sm text-muted-foreground">
                    Matte finish for a subtle, non-reflective look; glossy finish for vibrant color and shine; textured
                    finishes that mimic traditional materials
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Coating Systems</p>
                  <p className="text-sm text-muted-foreground">
                    Kynar 500/PVDF coatings for maximum durability and color retention (30+ year warranties); SMP
                    coatings for good performance at lower cost; specialty cool-roof coatings for energy savings
                  </p>
                </div>
              </div>

              <Button asChild size="lg">
                <Link href="/contact">Explore Metal Roofing Options</Link>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/commercial-roofing-team"
                alt="Metal roofing color samples"
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
            <Badge className="mb-4">Warranty Protection</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Leading Warranties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Metal roofing comes with some of the best warranty coverage in the roofing industry, protecting your
              investment for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>10-Year Labor Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  National Builders provides a comprehensive 10-year workmanship warranty on all metal roof
                  installations. We stand behind our work and will address any installation-related issues at no cost to
                  you.
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
                  Metal roofing materials come with extensive manufacturer warranties: 30-50 year paint/finish
                  warranties, 40-50 year substrate warranties, and weathertightness guarantees. Some premium systems
                  offer lifetime warranties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Invest in a Metal Roof That Lasts a Lifetime"
        description="Discover how metal roofing can enhance your property's value, reduce energy costs, and provide decades of worry-free protection. Schedule your free consultation today."
        buttonText="Get Free Metal Roof Quote"
        buttonLink="/contact"
      />
    </div>
  )
}
