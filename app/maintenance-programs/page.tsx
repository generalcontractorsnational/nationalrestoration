import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Building2, Calendar, ClipboardCheck, Shield, BadgeCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import PageHeader from "@/components/page-header"
import CTA from "@/components/cta"

export default function MaintenancePrograms() {
  return (
    <>
      <PageHeader
        title="Commercial Maintenance Programs"
        description="Proactive maintenance solutions to protect your commercial property investment and prevent costly repairs"
        backgroundImage="/commercial-maintenance-inspection.png"
      />

      {/* Introduction Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Commercial Investment</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At National Restoration, we understand that commercial properties represent significant investments. Our
                comprehensive maintenance programs are designed to protect these investments through regular
                inspections, preventative care, and early problem detection.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our data shows that properties enrolled in regular maintenance programs experience:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">67% fewer emergency repairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Extended building system lifespan by 30-40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Average 24% reduction in long-term maintenance costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Minimized business disruptions from unexpected failures</span>
                </li>
              </ul>
              <Button asChild size="lg" className="font-medium">
                <Link href="#maintenance-plans">View Maintenance Plans</Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] shadow-xl">
              <Image
                src="/preventative-maintenance-team.png"
                alt="National Restoration maintenance team performing a commercial roof inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section id="maintenance-plans" className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customized Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground">
              Choose the maintenance program that best fits your property's needs and budget. All plans can be
              customized to address your specific building requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential Plan */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Essential Plan</CardTitle>
                <CardDescription className="text-lg">Basic preventative maintenance</CardDescription>
                <div className="mt-4 text-3xl font-bold">
                  Starting at $1,499<span className="text-base font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Annual comprehensive inspection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Roof, gutter, and drainage system check</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Basic maintenance report with photos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Minor repairs (up to 2 hours of labor)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>10% discount on additional services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Request Quote
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-bl-lg">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Premium Plan</CardTitle>
                <CardDescription className="text-lg">Comprehensive protection</CardDescription>
                <div className="mt-4 text-3xl font-bold">
                  Starting at $2,999<span className="text-base font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Semi-annual comprehensive inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>All exterior building systems checked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Detailed digital reports with recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Preventative maintenance (up to 5 hours of labor)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Priority scheduling for repairs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>15% discount on additional services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Quote</Button>
              </CardFooter>
            </Card>

            {/* Elite Plan */}
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Elite Plan</CardTitle>
                <CardDescription className="text-lg">Maximum protection & service</CardDescription>
                <div className="mt-4 text-3xl font-bold">
                  Starting at $4,999<span className="text-base font-normal text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Quarterly comprehensive inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Complete building envelope assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Advanced diagnostic testing (infrared, moisture)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Unlimited minor repairs & maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>24/7 emergency response guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>20% discount on additional services</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Request Quote
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              All plans can be customized based on your property size, type, and specific needs. Multi-property
              discounts available.
            </p>
            <Button variant="link" asChild>
              <Link href="/contact" className="flex items-center gap-1">
                Contact us for custom pricing <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Our Maintenance Programs</h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive maintenance programs cover all critical exterior building systems
            </p>
          </div>

          <Tabs defaultValue="roofing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="roofing">Roofing</TabsTrigger>
              <TabsTrigger value="exterior">Building Exterior</TabsTrigger>
              <TabsTrigger value="drainage">Drainage Systems</TabsTrigger>
              <TabsTrigger value="additional">Additional Services</TabsTrigger>
            </TabsList>

            <TabsContent value="roofing" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Roofing System Maintenance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Comprehensive roof inspection and assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Identification of potential leak points and vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cleaning of debris from roof surface</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Inspection of flashing, penetrations, and edge details</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Assessment of roof membrane condition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minor repairs to prevent water infiltration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Documentation of roof condition with photos</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[300px] shadow-lg">
                  <Image
                    src="/commercial-roof-maintenance.png"
                    alt="Commercial roof maintenance inspection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="exterior" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Building Exterior Maintenance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Inspection of all siding and exterior cladding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Assessment of windows, doors, and seals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Evaluation of exterior paint and sealants</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Inspection of expansion joints and control joints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Identification of moisture intrusion points</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Caulking and sealing of minor gaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Documentation of exterior condition with photos</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[300px] shadow-lg">
                  <Image
                    src="/building-exterior-inspection.png"
                    alt="Building exterior inspection"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="drainage" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Drainage System Maintenance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cleaning and inspection of all gutters and downspouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Assessment of roof drains and scuppers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Evaluation of site drainage patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Inspection of underground drainage connections</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Clearing of debris from drainage pathways</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minor repairs to gutter systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Documentation of drainage system with photos</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[300px] shadow-lg">
                  <Image
                    src="/commercial-gutter-maintenance.png"
                    alt="Commercial gutter maintenance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="additional" className="border rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Additional Maintenance Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Infrared moisture scanning (Elite plan)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Drone inspection of inaccessible areas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>HVAC curb and penetration inspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Lightning protection system inspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Facade cleaning services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Parking lot and walkway assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Energy efficiency recommendations</span>
                    </li>
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden h-[300px] shadow-lg">
                  <Image
                    src="/thermal-imaging-inspection.png"
                    alt="Thermal imaging inspection of commercial building"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Preventative Maintenance</h2>
            <p className="text-lg text-muted-foreground">
              Investing in regular maintenance provides significant returns for commercial property owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Extended Asset Lifespan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular maintenance can extend the life of your roofing and exterior systems by 30-40%, maximizing
                  your return on investment and delaying costly replacements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Reduced Emergency Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Preventative maintenance identifies and addresses small issues before they become major problems,
                  reducing emergency repair costs and business disruptions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <ClipboardCheck className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Warranty Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Many manufacturer warranties require regular maintenance. Our programs ensure your building systems
                  remain under warranty protection throughout their lifespan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Improved Safety & Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular inspections identify potential safety hazards before they cause injuries or property damage,
                  reducing liability risks for property owners.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <BadgeCheck className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Predictable Budgeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintenance programs allow for planned, predictable expenses rather than unexpected emergency costs,
                  making budgeting and financial planning easier.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Enhanced Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Well-maintained properties command higher rents, attract better tenants, and maintain higher property
                  values compared to neglected buildings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Process Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Maintenance Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to keeping your commercial property in optimal condition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Property Assessment</h3>
                    <p className="text-muted-foreground">
                      We conduct a comprehensive baseline assessment of your property's current condition, documenting
                      all existing issues and establishing maintenance priorities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Customized Maintenance Plan</h3>
                    <p className="text-muted-foreground">
                      Based on the initial assessment, we develop a tailored maintenance plan specific to your
                      building's needs, age, construction type, and local climate conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Scheduled Inspections</h3>
                    <p className="text-muted-foreground">
                      We perform regular inspections according to your chosen maintenance plan, thoroughly examining all
                      building systems and documenting their condition.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Preventative Maintenance</h3>
                    <p className="text-muted-foreground">
                      Our team performs routine maintenance tasks to prevent issues before they occur, including
                      cleaning, minor repairs, and system adjustments.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Detailed Reporting</h3>
                    <p className="text-muted-foreground">
                      After each inspection, you receive a comprehensive report detailing findings, completed
                      maintenance, recommendations, and future budget planning considerations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative rounded-lg overflow-hidden h-[500px] shadow-xl">
              <Image
                src="/maintenance-inspection-process.png"
                alt="Commercial building maintenance inspection process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Common questions about our commercial maintenance programs</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How often should commercial buildings be inspected?</AccordionTrigger>
                <AccordionContent>
                  Commercial buildings should be inspected at least twice a year—ideally in spring and fall—to prepare
                  for seasonal changes. Buildings in harsh climates or older structures may benefit from quarterly
                  inspections. Our maintenance programs are designed to provide the optimal inspection frequency based
                  on your building's specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What's the difference between repairs and maintenance?</AccordionTrigger>
                <AccordionContent>
                  Maintenance is preventative work performed to keep systems functioning properly and prevent future
                  issues. Repairs address existing damage or failures. Our maintenance programs include a certain amount
                  of minor repair work, but major repairs may require additional services. The goal of regular
                  maintenance is to minimize the need for costly repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can maintenance programs be customized for multi-building portfolios?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in creating customized maintenance programs for property management companies and
                  owners with multiple buildings. We can develop portfolio-wide maintenance strategies that prioritize
                  buildings based on condition, age, and importance while providing economies of scale for inspection
                  and maintenance services.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How do maintenance programs affect insurance premiums?</AccordionTrigger>
                <AccordionContent>
                  Many insurance companies offer reduced premiums for buildings with documented maintenance programs.
                  Regular maintenance reduces the risk of claims and demonstrates responsible property management. Our
                  detailed maintenance records can be provided to your insurance company to potentially qualify for
                  these discounts.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What happens if issues are found during an inspection?</AccordionTrigger>
                <AccordionContent>
                  When our team identifies issues during an inspection, we document them with photos and descriptions in
                  your maintenance report. Minor issues covered by your maintenance plan are addressed immediately. For
                  larger issues requiring additional work, we provide detailed recommendations and cost estimates for
                  your approval before proceeding with any repairs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Can maintenance programs be adjusted seasonally?</AccordionTrigger>
                <AccordionContent>
                  Yes, our maintenance programs can be adjusted to focus on different building systems based on seasonal
                  needs. For example, roof and drainage systems receive extra attention before rainy seasons, while
                  building envelope and insulation issues are prioritized before winter. We tailor the timing and focus
                  of inspections to your local climate conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from commercial property owners who trust our maintenance programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-6">
                  "National Restoration's maintenance program has saved us thousands in emergency repairs. Their team
                  identified roof issues before they became leaks, and their detailed reports help us plan our capital
                  improvements budget more effectively."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/property-manager-testimonial.png"
                      alt="Property Manager"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Property Manager, Westfield Office Park</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-6">
                  "We manage a portfolio of 12 retail properties, and National Restoration's maintenance program has
                  streamlined our operations significantly. Their team coordinates all inspections and provides
                  consistent reporting across all properties, making my job much easier."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/facilities-director-testimonial.png"
                      alt="Facilities Director"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Chen</p>
                    <p className="text-sm text-muted-foreground">Facilities Director, Metro Retail Group</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-6">
                  "As a building owner, I appreciate the peace of mind that comes with National Restoration's Elite
                  maintenance program. Their thermal imaging identified moisture issues in our walls that weren't
                  visible to the naked eye, potentially saving us from a major mold remediation project."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/building-owner-testimonial.png" alt="Building Owner" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">Robert Washington</p>
                    <p className="text-sm text-muted-foreground">Owner, Parkview Medical Plaza</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Protect Your Commercial Property Investment"
        description="Schedule a consultation with our maintenance specialists to develop a customized program for your property."
        buttonText="Request a Consultation"
        buttonLink="/contact"
      />
    </>
  )
}
