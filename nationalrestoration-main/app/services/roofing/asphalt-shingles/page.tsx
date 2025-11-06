import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Home, Shield, Award, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Asphalt Shingle Roofing | National Builders Corporation",
  description:
    "Expert asphalt shingle roofing installation and repair. Choose from 3-tab or architectural shingles with 20-30 year warranties.",
}

export default function AsphaltShinglesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Asphalt Shingle Roofing"
        description="America's most popular roofing choice for durability and value"
        backgroundImage="/roofing-crew-install.png"
      />

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Asphalt shingles are America's most popular roofing choice, and for good reason. They offer an unbeatable
              combination of affordability, durability, and aesthetic appeal. At National Builders Corporation, we
              specialize in both economical 3-tab shingles and premium architectural shingles, providing expert
              installation that maximizes the lifespan and performance of your roof.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're building a new home, replacing an aging roof, or repairing storm damage, asphalt shingles
              deliver reliable protection and curb appeal that lasts for decades.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Asphalt Shingles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We install two main types of asphalt shingles, each with distinct advantages to fit your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  3-Tab Shingles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The most economical option, 3-tab shingles feature a flat, uniform appearance with three tabs per
                  shingle. They're lightweight and easy to install, making them a cost-effective choice for
                  budget-conscious homeowners.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">20-25 year lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Wind resistance up to 60 mph</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Most affordable option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Available in multiple colors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Architectural Shingles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Also called dimensional or laminated shingles, architectural shingles are thicker and more
                  dimensional, creating a premium, textured appearance. They're about 50% heavier than 3-tab shingles
                  and offer superior durability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">25-30+ year lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Wind resistance up to 130 mph</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Enhanced curb appeal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Wide variety of colors and styles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Asphalt Shingles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Asphalt shingles remain the top choice for residential roofing across America for these compelling
              reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Asphalt shingles offer the best value for your investment, with lower material and installation costs
                  compared to metal, tile, or slate roofing. You get reliable protection without breaking the bank.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Weather Resistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern asphalt shingles are engineered to withstand harsh weather conditions including high winds,
                  heavy rain, hail, and temperature extremes. Many carry Class A fire ratings for maximum safety.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Versatile Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Available in dozens of colors and styles, asphalt shingles complement any architectural style from
                  traditional to contemporary. Architectural shingles can even mimic the look of wood shake or slate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Easy Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Asphalt shingles are lightweight and straightforward to install, which means faster project completion
                  and lower labor costs. Most residential roofs can be completed in 1-2 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Low Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once installed, asphalt shingles require minimal maintenance. Periodic inspections and basic gutter
                  cleaning are typically all that's needed to keep your roof in excellent condition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Proven Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  With over a century of use and continuous improvement, asphalt shingles have a proven track record of
                  reliable performance. Modern formulations offer better durability than ever before.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Installation Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Asphalt Shingle Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              National Builders follows industry best practices to ensure your asphalt shingle roof is installed
              correctly and built to last.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Complete Tear-Off</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We remove all existing shingles down to the roof deck, allowing us to inspect the underlying structure
                  for any damage or rot. Any compromised decking is replaced with new plywood.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Weatherproof Underlayment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We install premium synthetic underlayment across the entire roof deck as a secondary moisture barrier.
                  In vulnerable areas like eaves and valleys, we use ice and water shield for extra protection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Drip Edge & Flashing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Metal drip edge is installed along all eaves and rakes to direct water into gutters. All penetrations
                  (chimneys, vents, skylights) receive new flashing properly sealed against water intrusion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Starter Shingles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Starter strip shingles are installed along the eaves and rakes to provide a solid base and prevent
                  wind-driven rain from getting under the first course of shingles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Shingle Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Shingles are installed following manufacturer specifications for nail placement and overlap. We use
                  the proper number of nails per shingle and ensure correct alignment for maximum wind resistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. Ridge Ventilation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ridge vents are installed at the peak of your roof to allow hot, moist air to escape from the attic,
                  extending the life of your shingles and preventing moisture-related issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">7. Final Inspection & Cleanup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We conduct a thorough inspection to ensure every detail meets our quality standards. The property is
                  cleaned with magnetic sweepers to remove all nails and debris, leaving your home spotless.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/roofing-crew-restoration.jpg"
                alt="Asphalt shingle color options"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Color & Style Options</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Look</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Asphalt shingles come in an extensive range of colors and styles to complement your home's architecture
                and your personal taste.
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="font-semibold mb-1">Popular Color Families</p>
                  <p className="text-sm text-muted-foreground">
                    Charcoal and black, various shades of brown and tan, gray tones from light to dark, red and
                    terracotta, green and blue accents
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Style Options</p>
                  <p className="text-sm text-muted-foreground">
                    Traditional 3-tab for clean lines, dimensional architectural for depth and texture, designer
                    shingles that mimic slate or wood shake
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Special Features</p>
                  <p className="text-sm text-muted-foreground">
                    Algae-resistant shingles with copper granules, impact-resistant shingles for hail-prone areas,
                    cool-roof shingles that reflect solar heat
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Our team will help you select the perfect shingle color and style that enhances your home's curb appeal
                and fits your budget. We can show you samples and provide visualizations to help you make the best
                choice.
              </p>

              <Button asChild size="lg">
                <Link href="/contact">Explore Color Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4">Warranty Protection</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Warranty Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your investment is protected by both our workmanship warranty and manufacturer material warranties.
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
                <p className="text-muted-foreground mb-3">
                  National Builders stands behind every installation with a 10-year workmanship warranty. If any issue
                  arises due to our installation, we'll fix it at no cost to you.
                </p>
                <p className="text-sm text-muted-foreground">
                  This warranty covers installation defects, improper nailing, flashing failures, and any other
                  workmanship-related issues.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Manufacturer Material Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Asphalt shingles come with manufacturer warranties ranging from 25 to 50 years, depending on the
                  product line you choose. These warranties cover manufacturing defects and premature failure.
                </p>
                <p className="text-sm text-muted-foreground">
                  We work with top manufacturers like GAF, Owens Corning, and CertainTeed, and we'll register your
                  warranty upon completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA
        title="Ready for a New Asphalt Shingle Roof?"
        description="Get a free inspection and detailed estimate for your asphalt shingle roofing project. Our experts will help you choose the perfect shingles for your home and budget."
        buttonText="Schedule Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
