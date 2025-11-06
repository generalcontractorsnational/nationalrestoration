import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Shield, BarChart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"
import ServiceProcess from "@/components/service-process"
import MaterialsShowcase from "@/components/materials-showcase"

export const metadata = {
  title: "Window Replacement Services | National Restoration",
  description:
    "Energy-efficient window replacement and installation services for residential and commercial properties. Improve comfort, reduce utility bills, and enhance your property's appearance.",
}

export default function WindowsPage() {
  const processSteps = [
    {
      title: "Free Consultation",
      description: "We assess your current windows and discuss your goals, preferences, and budget.",
      icon: <Clock className="h-6 w-6 text-primary" />,
    },
    {
      title: "Window Selection",
      description: "Choose from our wide range of window styles, materials, and energy-efficient options.",
      icon: <Shield className="h-6 w-6 text-primary" />,
    },
    {
      title: "Precise Measurement",
      description: "We take detailed measurements to ensure your new windows fit perfectly.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Expert Installation",
      description: "Our certified installers ensure proper fit, sealing, and operation.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough quality check and demonstrate proper operation of your new windows.",
      icon: <Check className="h-6 w-6 text-primary" />,
    },
  ]

  const materials = [
    {
      name: "Vinyl Windows",
      description: "Energy-efficient, low-maintenance, and affordable with excellent insulation properties.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=vinyl replacement windows on home",
    },
    {
      name: "Fiberglass Windows",
      description: "Superior strength and durability with the ability to withstand extreme temperatures.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=fiberglass windows on modern home",
    },
    {
      name: "Wood Windows",
      description: "Classic beauty and natural insulation with options for exterior cladding for weather protection.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=wood frame windows on traditional home",
    },
    {
      name: "Aluminum Windows",
      description: "Sleek, modern appearance with strength and narrow frames, ideal for contemporary designs.",
      imageSrc: "/placeholder.svg?height=300&width=400&query=aluminum windows on contemporary building",
    },
  ]

  return (
    <div className="flex flex-col">
      <PageHeader
        title="Window Replacement"
        description="Energy-efficient window solutions for comfort, savings, and beauty"
        backgroundImage="/placeholder.svg?height=400&width=1920&query=professional window installation in progress"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Energy-Efficient Solutions</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Window Replacement Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Quality windows do much more than enhance your property's appearance. They improve energy efficiency,
                reduce outside noise, increase security, and add value to your property.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At National Restoration, we offer a comprehensive selection of high-performance windows designed to meet
                your specific needs and preferences. From classic double-hung to elegant bay windows, our expert team
                provides professional installation ensuring perfect fit and maximum performance.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're replacing old, drafty windows or upgrading to modern energy-efficient options, we guide
                you through the entire process with expertise and care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Window Styles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Double-Hung Windows
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Casement Windows
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Sliding Windows
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Bay & Bow Windows
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Picture Windows
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Window Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> ENERGY STAR® Certified
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Low-E Glass Options
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Argon Gas Filling
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Triple-Pane Options
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> Custom Sizes & Shapes
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800&query=window installation technician installing energy efficient window"
                alt="Window installation in progress"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Advantages of New Windows</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern replacement windows offer numerous benefits that improve your home's comfort, appearance, and
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern windows with double or triple-pane glass, low-E coatings, and proper insulation can
                  significantly reduce your heating and cooling costs. Many homeowners report saving 15-25% on their
                  energy bills after window replacement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Improved Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  New windows eliminate drafts and cold spots near windows, maintaining more consistent indoor
                  temperatures throughout your home. They also reduce heat gain in summer, keeping your home cooler and
                  more comfortable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Noise Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dual-pane windows with insulated glass can reduce outside noise by up to 50% compared to single-pane
                  windows. This creates a quieter, more peaceful indoor environment, especially in busy urban areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enhanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern windows feature improved locking mechanisms, stronger frames, and impact-resistant glass
                  options that provide better protection against break-ins and severe weather events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Increased Home Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Window replacement typically returns 70-80% of its cost in increased home value. Energy-efficient
                  windows are a major selling point for potential buyers and can make your home more attractive in the
                  real estate market.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>UV Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Low-E glass coatings block up to 95% of harmful UV rays that can fade furniture, flooring, and
                  artwork. This helps protect your interior investments while still allowing natural light to brighten
                  your home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Window Replacement Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures your window replacement project is completed efficiently with exceptional
              results.
            </p>
          </div>

          <ServiceProcess steps={processSteps} />
        </div>
      </section>

      {/* Window Materials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Window Options</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Window Materials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a variety of premium window materials to suit your style, performance needs, and budget.
            </p>
          </div>

          <MaterialsShowcase materials={materials} />

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              Not sure which window material is right for your home? Our window specialists will help you compare
              options and select the perfect windows for your property, climate, and aesthetic preferences.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Window Styles */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Window Styles</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Window Styles</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from a variety of window styles to enhance your home's architecture and meet your functional needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=double hung windows on traditional home"
                  alt="Double-Hung Windows"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Double-Hung Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Double-hung windows feature two operable sashes that move up and down, allowing for ventilation from
                  the top, bottom, or both. This classic style works well in traditional and contemporary homes alike.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Easy cleaning with tilt-in sashes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Excellent ventilation options
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Works with most architectural styles
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=casement windows on modern home"
                  alt="Casement Windows"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Casement Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Casement windows are hinged on one side and open outward like a door, offering full-ventilation and
                  unobstructed views. They provide excellent energy efficiency due to their tight seal when closed.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Maximum ventilation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Superior energy efficiency
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Excellent security features
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=sliding windows in contemporary apartment"
                  alt="Sliding Windows"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Sliding Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Sliding windows open horizontally along a track, making them ideal for spaces with limited exterior
                  clearance. They provide excellent views and are often used in modern and contemporary homes.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Space-saving design
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Easy operation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Minimal maintenance
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=bay windows on colonial style home"
                  alt="Bay & Bow Windows"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-2">Bay & Bow Windows</h3>
                <p className="text-muted-foreground mb-4">
                  Bay and bow windows project outward from your home, creating additional interior space and dramatic
                  curb appeal. They allow abundant natural light and provide panoramic views of the outdoors.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Creates additional interior space
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Dramatic architectural feature
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> Increased natural light
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about window replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How do I know if I need to replace my windows?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Signs that indicate window replacement is needed include: drafts or air leaks, condensation or frost
                  between glass panes, difficulty opening/closing, visible damage or warping, increasing energy bills,
                  and excessive outside noise. Windows over 20 years old may also need replacement due to efficiency
                  advancements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How long does window replacement take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A professional installation team can typically replace 8-10 windows in a single day. The exact
                  timeline depends on the number of windows, complexity of installation, and any custom requirements.
                  Most residential projects are completed within 1-2 days with minimal disruption to your home.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What window features should I look for in energy-efficient windows?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Key features include: double or triple glazing, low-E glass coatings, argon or krypton gas filling
                  between panes, quality frame materials with insulation, warm-edge spacers, and proper
                  weatherstripping. Look for ENERGY STAR certification and check the window's U-factor and Solar Heat
                  Gain Coefficient (SHGC) ratings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I replace windows in winter?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we install windows year-round, including winter months. Our installation teams use specialized
                  techniques to minimize heat loss during the process, typically working on one window at a time. Winter
                  installations can actually help you immediately realize energy savings during the heating season.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are there tax credits available for energy-efficient windows?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, there are often federal tax credits available for ENERGY STAR certified windows. Additionally,
                  some utility companies and state programs offer rebates or incentives. Our team can provide current
                  information on available tax credits and rebates during your consultation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What warranty comes with new windows?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer a comprehensive warranty package that includes a lifetime limited warranty on window
                  materials and a 10-year warranty on installation labor. Specific coverage varies by manufacturer and
                  product line. Many of our warranties are transferable to new homeowners, which can be a valuable
                  selling point.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Window Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners who have experienced the benefits of our window replacement services.
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
                  "We replaced all the windows in our 1970s home and the difference is remarkable. The house stays
                  cooler in summer and warmer in winter, and our energy bills have dropped significantly. The
                  installation team was professional and clean. Highly recommend!"
                </p>
                <div>
                  <p className="font-semibold">Catherine L.</p>
                  <p className="text-sm text-muted-foreground">Cleveland, OH</p>
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
                  "National Restoration installed beautiful bay windows in our living room and replaced all our old
                  double-hung windows. The transformation is stunning. We love how much brighter our home feels, and the
                  noise reduction is amazing. We sleep better now that we don't hear street noise."
                </p>
                <div>
                  <p className="font-semibold">James & Patricia W.</p>
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
                  "After getting quotes from several companies, we chose National Restoration for our window
                  replacement. Their pricing was competitive and their knowledge was impressive. The fiberglass windows
                  they recommended are perfect for our coastal home. Great experience from consultation to
                  installation."
                </p>
                <div>
                  <p className="font-semibold">Mark T.</p>
                  <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Home?"
        description="Contact us today for a free window consultation and estimate. Discover how new windows can improve your home's comfort, efficiency, and appearance."
        buttonText="Schedule Free Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}
