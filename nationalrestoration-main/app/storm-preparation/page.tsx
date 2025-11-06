import type { Metadata } from "next"
import Link from "next/link"
import {
  AlertTriangle,
  Calendar,
  CheckSquare,
  Download,
  ExternalLink,
  Home,
  List,
  Shield,
  Umbrella,
  Wrench,
  HardHat,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PageHeader from "@/components/page-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import StormPreparationSchema from "@/components/storm-preparation-schema"

export const metadata: Metadata = {
  title: "Storm Preparation Guide | National Restoration",
  description:
    "Comprehensive guide to help homeowners prepare for storm season with checklists, tips, and emergency resources.",
}

export default function StormPreparationPage() {
  return (
    <>
      <StormPreparationSchema />

      <PageHeader
        title="Storm Preparation Guide"
        description="Protect your home and family with our comprehensive storm preparation resources"
        backgroundImage="/storm-preparation-header.png"
      />

      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold tracking-tight">Why Prepare?</h2>
                  <p className="text-muted-foreground">
                    Being prepared before storm season can significantly reduce damage to your property and keep your
                    family safe.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <Card className="border-destructive/20 bg-destructive/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-5 w-5" />
                        Emergency Contacts
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <strong>Emergency:</strong> 911
                        </li>
                        <li>
                          <strong>National Restoration:</strong> 1-800-RESTORE
                        </li>
                        <li>
                          <strong>FEMA:</strong> 1-800-621-3362
                        </li>
                        <li>
                          <strong>Red Cross:</strong> 1-800-733-2767
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/storm-preparation/checklist.pdf" target="_blank" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Printable Checklist
                    </Link>
                  </Button>

                  <Button asChild className="w-full bg-destructive hover:bg-destructive/90">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Schedule a Storm Readiness Inspection
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Wrench className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Professional Restoration Services</h2>
                </div>

                <Card className="border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HardHat className="h-5 w-5 text-primary" />
                      Storm Damage Restoration
                    </CardTitle>
                    <CardDescription>
                      When storm damage occurs, National Restoration is here to help restore your property quickly and
                      professionally.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2 rounded-lg border border-primary/20 p-4 bg-background">
                        <h4 className="font-medium">Emergency Response</h4>
                        <p className="text-sm text-muted-foreground">
                          24/7 emergency services for immediate storm damage mitigation and temporary repairs.
                        </p>
                        <Link
                          href="/services/storm-damage"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          Learn more <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2 rounded-lg border border-primary/20 p-4 bg-background">
                        <h4 className="font-medium">Roof Restoration</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete roof repair and replacement services for wind, hail, and water damage.
                        </p>
                        <Link
                          href="/services/roofing"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          Learn more <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2 rounded-lg border border-primary/20 p-4 bg-background">
                        <h4 className="font-medium">Siding & Exterior</h4>
                        <p className="text-sm text-muted-foreground">
                          Repair or replace damaged siding, gutters, and exterior components.
                        </p>
                        <Link
                          href="/services/siding"
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          Learn more <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                      <div className="flex flex-col gap-2 rounded-lg border border-primary/20 p-4 bg-background">
                        <h4 className="font-medium">Insurance Assistance</h4>
                        <p className="text-sm text-muted-foreground">
                          We work directly with your insurance company to streamline the claims process.
                        </p>
                        <Link href="/contact" className="text-sm text-primary hover:underline flex items-center gap-1">
                          Get help <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button asChild className="flex-1">
                        <Link href="/storm-damage-assessment">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Assess Storm Damage
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 bg-transparent">
                        <Link href="/contact">Schedule Free Inspection</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-destructive">
                  <Umbrella className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Seasonal Storm Preparation</h2>
                </div>

                <Tabs defaultValue="spring" className="w-full">
                  <TabsContent value="spring" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Spring Storm Preparation</CardTitle>
                        <CardDescription>March - May</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Roof Inspection</h4>
                            <p className="text-sm text-muted-foreground">
                              Check for winter damage and repair loose shingles before spring storms.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Gutter Cleaning</h4>
                            <p className="text-sm text-muted-foreground">
                              Clear debris to ensure proper drainage during heavy spring rains.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Trim Trees</h4>
                            <p className="text-sm text-muted-foreground">
                              Remove dead branches that could fall during high winds.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Check Sump Pump</h4>
                            <p className="text-sm text-muted-foreground">
                              Test your sump pump to ensure it's working properly for spring flooding.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="summer" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Summer Storm Preparation</CardTitle>
                        <CardDescription>June - August</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Hurricane Readiness</h4>
                            <p className="text-sm text-muted-foreground">
                              Prepare hurricane shutters and secure outdoor furniture.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Emergency Kit</h4>
                            <p className="text-sm text-muted-foreground">
                              Update your emergency supplies for hurricane season.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Evacuation Plan</h4>
                            <p className="text-sm text-muted-foreground">
                              Review and update your family's evacuation plan.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Document Review</h4>
                            <p className="text-sm text-muted-foreground">
                              Update insurance policies and take inventory of valuables.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="fall" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Fall Storm Preparation</CardTitle>
                        <CardDescription>September - November</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Gutter Maintenance</h4>
                            <p className="text-sm text-muted-foreground">
                              Clear gutters of fall leaves to prevent ice dams in winter.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Roof Inspection</h4>
                            <p className="text-sm text-muted-foreground">
                              Check for damage from summer storms before winter arrives.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Seal Windows & Doors</h4>
                            <p className="text-sm text-muted-foreground">
                              Check weatherstripping and caulking to prevent water infiltration.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Drain Exterior Pipes</h4>
                            <p className="text-sm text-muted-foreground">
                              Prevent freezing and bursting pipes by draining outdoor faucets.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="winter" className="mt-0">
                    <Card>
                      <CardHeader>
                        <CardTitle>Winter Storm Preparation</CardTitle>
                        <CardDescription>December - February</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Insulate Pipes</h4>
                            <p className="text-sm text-muted-foreground">
                              Protect pipes from freezing during extreme cold.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Ice Dam Prevention</h4>
                            <p className="text-sm text-muted-foreground">
                              Ensure proper attic insulation and ventilation to prevent ice dams.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Snow Removal Plan</h4>
                            <p className="text-sm text-muted-foreground">
                              Have tools ready to remove snow from roof to prevent collapse.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 rounded-lg border p-4">
                            <h4 className="font-medium">Emergency Heat</h4>
                            <p className="text-sm text-muted-foreground">
                              Have backup heating sources ready in case of power outages.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="spring">Spring</TabsTrigger>
                    <TabsTrigger value="summer">Summer</TabsTrigger>
                    <TabsTrigger value="fall">Fall</TabsTrigger>
                    <TabsTrigger value="winter">Winter</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-destructive">
                  <Home className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Home Protection Checklist</h2>
                </div>

                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="rounded-md border border-destructive/20 bg-destructive/5 p-4">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5 text-destructive" />
                          <h3 className="font-medium">Roof & Exterior</h3>
                        </div>
                        <ul className="mt-2 ml-7 list-disc space-y-1 text-sm">
                          <li>Inspect roof for loose or damaged shingles</li>
                          <li>Check flashing around chimneys and vents</li>
                          <li>Clean gutters and downspouts</li>
                          <li>Trim trees and remove dead branches near your home</li>
                          <li>Secure or store outdoor furniture and decorations</li>
                          <li>Check exterior walls for cracks or damage</li>
                        </ul>
                      </div>

                      <div className="rounded-md border p-4">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5" />
                          <h3 className="font-medium">Windows & Doors</h3>
                        </div>
                        <ul className="mt-2 ml-7 list-disc space-y-1 text-sm">
                          <li>Inspect and repair window seals and weatherstripping</li>
                          <li>Consider installing storm shutters in hurricane-prone areas</li>
                          <li>Have plywood cut to size for emergency window protection</li>
                          <li>Check door seals and thresholds</li>
                          <li>Ensure garage doors are properly secured</li>
                        </ul>
                      </div>

                      <div className="rounded-md border p-4">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5" />
                          <h3 className="font-medium">Basement & Foundation</h3>
                        </div>
                        <ul className="mt-2 ml-7 list-disc space-y-1 text-sm">
                          <li>Inspect foundation for cracks and seal as needed</li>
                          <li>Test sump pump and backup systems</li>
                          <li>Consider installing a battery backup for sump pump</li>
                          <li>Elevate valuable items stored in basement</li>
                          <li>Check basement windows for proper sealing</li>
                        </ul>
                      </div>

                      <div className="rounded-md border p-4">
                        <div className="flex items-center gap-2">
                          <CheckSquare className="h-5 w-5" />
                          <h3 className="font-medium">Utilities & Systems</h3>
                        </div>
                        <ul className="mt-2 ml-7 list-disc space-y-1 text-sm">
                          <li>Know how to shut off water, gas, and electricity</li>
                          <li>Consider installing a whole-house surge protector</li>
                          <li>Have your HVAC system inspected</li>
                          <li>Clean dryer vents and exhaust ducts</li>
                          <li>Check smoke and carbon monoxide detectors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-destructive">
                  <List className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Storm-Specific Preparation</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="hurricane">
                    <AccordionTrigger>Hurricane Preparation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <p className="text-sm text-muted-foreground">
                          Hurricanes can bring devastating winds, heavy rainfall, and flooding. Preparation is essential
                          for these powerful storms.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">Before Hurricane Season</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Review insurance policies</li>
                              <li>Install hurricane shutters or prepare plywood</li>
                              <li>Identify evacuation routes</li>
                              <li>Trim trees and shrubs</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">72 Hours Before</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Monitor weather reports</li>
                              <li>Fill vehicles with gas</li>
                              <li>Stock up on non-perishable food</li>
                              <li>Fill prescriptions</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">24-48 Hours Before</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Install storm shutters</li>
                              <li>Bring in outdoor furniture</li>
                              <li>Charge electronic devices</li>
                              <li>Fill bathtubs with water</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">During & After</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Stay indoors away from windows</li>
                              <li>Listen for official instructions</li>
                              <li>Document damage for insurance</li>
                              <li>Be cautious of downed power lines</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="tornado">
                    <AccordionTrigger>Tornado Preparation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <p className="text-sm text-muted-foreground">
                          Tornadoes can form quickly with little warning. Having a plan in place is crucial for these
                          violent storms.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">Before Tornado Season</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Identify safe room or shelter location</li>
                              <li>Create a family communication plan</li>
                              <li>Secure outdoor items that could become projectiles</li>
                              <li>Consider a NOAA weather radio</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">During Watch/Warning</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Monitor local weather alerts</li>
                              <li>Be ready to take shelter immediately</li>
                              <li>Keep shoes on and have flashlights ready</li>
                              <li>Move vehicles into garage if possible</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">During a Tornado</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Go to basement or interior room</li>
                              <li>Stay away from windows</li>
                              <li>Cover yourself with blankets or mattress</li>
                              <li>Put on helmet if available</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">After a Tornado</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Check for injuries and provide first aid</li>
                              <li>Watch for downed power lines</li>
                              <li>Document damage for insurance</li>
                              <li>Be careful entering damaged buildings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="flood">
                    <AccordionTrigger>Flood Preparation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <p className="text-sm text-muted-foreground">
                          Flooding can cause extensive damage to homes and property. Proper preparation can minimize
                          damage and keep your family safe.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">Before Flood Season</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Purchase flood insurance</li>
                              <li>Install check valves in plumbing</li>
                              <li>Elevate electrical systems</li>
                              <li>Waterproof basement walls</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">When Flooding Threatens</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Move valuable items to higher floors</li>
                              <li>Fill bathtubs with clean water</li>
                              <li>Charge electronic devices</li>
                              <li>Prepare evacuation kit</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">During a Flood</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Evacuate if instructed</li>
                              <li>Avoid walking or driving through floodwaters</li>
                              <li>Move to higher ground</li>
                              <li>Listen to emergency broadcasts</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">After a Flood</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Document damage for insurance</li>
                              <li>Remove wet items to prevent mold</li>
                              <li>Disinfect everything that got wet</li>
                              <li>Check for structural damage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="winter">
                    <AccordionTrigger>Winter Storm Preparation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <p className="text-sm text-muted-foreground">
                          Winter storms can bring freezing temperatures, heavy snow, and ice that can damage your home
                          and create dangerous conditions.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">Before Winter</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Insulate pipes and walls</li>
                              <li>Clean chimneys and heating systems</li>
                              <li>Install weather stripping</li>
                              <li>Stock up on ice melt and snow removal tools</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">When Storm Approaches</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Stock up on food, water, and medicine</li>
                              <li>Charge electronic devices</li>
                              <li>Fill vehicles with gas</li>
                              <li>Prepare alternative heating sources</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">During a Winter Storm</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Stay indoors and keep warm</li>
                              <li>Let faucets drip to prevent freezing</li>
                              <li>Use generators outdoors only</li>
                              <li>Check on elderly neighbors</li>
                            </ul>
                          </div>
                          <div className="rounded-md border p-3">
                            <h4 className="text-sm font-medium">After a Winter Storm</h4>
                            <ul className="mt-1 ml-5 list-disc text-xs space-y-1 text-muted-foreground">
                              <li>Clear snow from roof to prevent collapse</li>
                              <li>Check for frozen pipes</li>
                              <li>Remove ice dams from gutters</li>
                              <li>Document any damage for insurance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-destructive">
                  <Calendar className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Emergency Supplies Checklist</h2>
                </div>

                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Basic Emergency Kit</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">
                              Water (one gallon per person per day for at least three days)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Non-perishable food (at least a three-day supply)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Battery-powered or hand crank radio</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Flashlight and extra batteries</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">First aid kit</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Whistle to signal for help</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Dust mask, plastic sheeting, and duct tape</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Moist towelettes, garbage bags, and plastic ties</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Wrench or pliers to turn off utilities</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Manual can opener for food</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Local maps</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Cell phone with chargers and backup battery</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardContent className="border-t md:border-t-0 md:border-l p-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Additional Items to Consider</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Prescription medications and glasses</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Infant formula and diapers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Pet food and extra water for your pet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Cash or traveler's checks</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Important family documents in waterproof container</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Sleeping bag or warm blanket for each person</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Complete change of clothing and sturdy shoes</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Fire extinguisher</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Matches in a waterproof container</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckSquare className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Feminine supplies and personal hygiene items</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-destructive">
                  <ExternalLink className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Additional Resources</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Government Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="https://www.ready.gov"
                            target="_blank"
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Ready.gov - Official Disaster Preparedness
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.fema.gov"
                            target="_blank"
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            FEMA - Federal Emergency Management Agency
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.weather.gov"
                            target="_blank"
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            National Weather Service
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Insurance & Documentation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <Link
                            href="https://www.floodsmart.gov"
                            target="_blank"
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            FloodSmart.gov - National Flood Insurance
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.disasterassistance.gov"
                            target="_blank"
                            className="flex items-center gap-2 text-primary hover:underline"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            DisasterAssistance.gov
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact" className="flex items-center gap-2 text-primary hover:underline">
                            <ExternalLink className="h-3.5 w-3.5" />
                            National Restoration Insurance Resources
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
