import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Sun,
  Battery,
  TrendingDown,
  Shield,
  Clock,
  FileText,
  Users,
  Award,
  DollarSign,
  Leaf,
  Home,
  Building2,
  Settings,
  BarChart3,
  Wrench,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Solar Solutions | National Builders Corporation",
  description:
    "Turnkey solar energy solutions for residential and commercial properties. Custom-designed PV systems, battery storage, and ongoing maintenance. Reduce costs and increase energy independence.",
}

export default function SolarPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Solar Solutions"
        description="Harness the power of the sun with turnkey solar energy solutions"
        backgroundImage="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-panels-on-roof"
      />

      {/* Introduction Section */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <Badge className="mb-3">Clean Energy Partner</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Trusted Partner for Solar Energy</h2>
              <p className="text-sm text-muted-foreground mb-3">
                At National Builders Corporation, we're committed to helping property owners harness the power of the
                sun with turnkey solar energy solutions that reduce costs, increase efficiency, and add long-term value.
                Our solar division specializes in custom-designed photovoltaic (PV) systems, battery storage
                integration, and ongoing maintenance programs for both residential and commercial applications.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Whether you're looking to offset utility costs, gain energy independence, or meet sustainability goals,
                we deliver clean, reliable solar power—built to last.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                From the first energy audit to final connection, our certified solar professionals handle every step of
                the process: system design, permitting, installation, monitoring, and support. We combine premium solar
                technology, precision engineering, and industry-leading warranties to create systems that perform
                efficiently for decades.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Solar Consultation</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-residential-rooftop-installation"
                alt="Residential solar installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solar Energy Services */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Solar Energy Services</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Comprehensive Solar Solutions</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              From panel installation to battery storage and ongoing monitoring, we provide complete solar energy
              services for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Solar Panel Installation */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-panel-installation-crew"
                  alt="Solar panel installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Sun className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Solar Panel Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Our solar panel installations are engineered for maximum performance, safety, and return on
                  investment. Every project begins with a detailed site assessment and solar feasibility analysis to
                  ensure optimal panel placement, sun exposure, and system size for your specific energy needs.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Roof-mounted systems for homes, offices, and warehouses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ground-mounted systems for properties with ample space</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Carport and canopy arrays that provide shade while generating power</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>NABCEP-certified technicians and Tier-1 solar panels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Energy Audits & System Design */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-energy-audit-consultation"
                  alt="Energy audit and consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Energy Audits & System Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Before installation, our energy specialists conduct a comprehensive audit of your property to evaluate
                  current energy use and identify savings opportunities.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Utility bill analysis and energy consumption profiling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Roof structure and shading analysis using solar irradiance mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>System sizing and performance modeling (kWh output, ROI, payback period)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Design customization with consideration for aesthetics and zoning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Battery Storage Systems */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-battery-storage-system"
                  alt="Battery storage system"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Battery className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Battery Storage Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Pairing your solar array with battery storage gives you true energy independence and resilience. Our
                  integrated battery systems allow you to store excess solar energy during the day and use it when the
                  sun isn't shining—reducing grid dependence and keeping your lights on during outages.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tesla Powerwall, Enphase IQ Battery, and Generac PWRcell systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Hybrid solar + battery configurations with seamless switching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Smart energy management systems for remote monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Qualifies for federal and state incentives</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Maintenance & Monitoring */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-monitoring-dashboard"
                  alt="Solar monitoring dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Settings className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Maintenance & Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Solar systems are low-maintenance, but performance verification ensures consistent energy yield. We
                  offer proactive maintenance plans to keep your system performing at its peak.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Annual inspections (panel cleaning, connection checks, inverter diagnostics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 system monitoring through online portals and mobile apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Production alerts and performance tuning to maximize efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Warranty support and repair services for any component issues</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Residential & Commercial Solar */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Residential Solar */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-residential-home-installation"
                  alt="Residential solar installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Residential Solar Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Homeowners across the region are choosing National Builders for their residential solar installations.
                  We make the transition to renewable energy simple and stress-free.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom rooftop and ground-mounted systems designed to fit your energy profile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Battery backup options for reliable power during outages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integration with smart-home systems for energy management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Financing programs to make solar affordable (including zero-down options)</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Residential solar adds more than energy savings—it increases property value and qualifies for the
                  Federal Solar Investment Tax Credit (ITC), which can offset up to 30% of installation costs.
                </p>
              </CardContent>
            </Card>

            {/* Commercial Solar */}
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-commercial-building-installation"
                  alt="Commercial solar installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Commercial & Industrial Solar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Businesses today face rising energy costs and growing sustainability expectations. National Builders
                  delivers scalable commercial solar systems designed for performance, reliability, and return.
                </p>
                <p className="text-sm font-semibold mb-2">We serve:</p>
                <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Office buildings & corporate campuses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Retail centers & mixed-use developments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Warehouses, factories & logistics facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Schools, churches, and public institutions</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Commercial solar benefits include reduced operating expenses, tax credits and accelerated depreciation
                  (MACRS), improved ESG scores, and backup power with integrated battery storage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Installation Process</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Streamlined Solar Process</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              From consultation to activation, we make transitioning to solar power smooth and predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-consultation-site-assessment"
                  alt="Solar consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  1
                </div>
                <CardTitle className="text-base">Free Consultation & Site Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We evaluate your energy usage, property layout, and financial goals to determine the best solar
                  solution for your needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-system-design-proposal" alt="System design" fill className="object-cover" />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  2
                </div>
                <CardTitle className="text-base">Custom System Design & Proposal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You receive a tailored design with production estimates, ROI analysis, and incentive details specific
                  to your property.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-permitting-utility-coordination"
                  alt="Permitting"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  3
                </div>
                <CardTitle className="text-base">Permitting & Utility Coordination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We handle all paperwork, permits, and interconnection approvals so you don't have to navigate the
                  bureaucracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-professional-installation-crew"
                  alt="Professional installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  4
                </div>
                <CardTitle className="text-base">Professional Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Certified crews install your system with precision and safety compliance, ensuring optimal performance
                  and longevity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-inspection-activation"
                  alt="Inspection and activation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  5
                </div>
                <CardTitle className="text-base">Inspection & Activation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We manage inspections and commission your system for operation, connecting it to the grid and
                  activating monitoring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-monitoring-maintenance-support"
                  alt="Ongoing support"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-2">
                  6
                </div>
                <CardTitle className="text-base">Monitoring & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your system is connected to our remote monitoring platform to ensure ongoing performance and maximize
                  energy savings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financing & Incentives */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <Badge className="mb-3">Financing & Incentives</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Flexible Payment Options</h2>
              <p className="text-sm text-muted-foreground mb-3">
                National Builders makes going solar easy with flexible payment options and guidance on available
                incentives.
              </p>

              <h3 className="text-lg font-semibold mb-2">Financing Options</h3>
              <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Zero-down financing with low monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Short- and long-term loans (5–25 years)</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Power Purchase Agreements (PPA) and leases for commercial clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Upfront purchase for maximum ROI and full incentive benefit</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Incentives & Tax Benefits</h3>
              <ul className="space-y-1 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Federal Solar Investment Tax Credit (ITC):</strong> Up to 30% off installation cost
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>State and local rebates:</strong> Vary by location and utility provider
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Net Metering:</strong> Earn credits for excess energy sent back to the grid
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Accelerated depreciation (MACRS)</strong> for qualifying commercial installations
                  </span>
                </li>
              </ul>

              <Button asChild size="lg">
                <Link href="/contact">Learn About Financing Options</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-financing-consultation"
                alt="Solar financing consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Financial Benefits */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Benefits</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Environmental & Financial Benefits</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Installing solar energy is one of the smartest financial and environmental decisions property owners can
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Reduce Carbon Emissions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Offset tens of thousands of pounds of CO₂ emissions over your system's 25-year lifespan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <TrendingDown className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Protect Against Rising Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lock in predictable energy costs and protect against rising electricity rates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Long-Term ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most clients save 50–70% on electricity costs over a system's 25-year lifespan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Home className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Boost Property Value</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Solar installations increase property value with a sustainable upgrade buyers love.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workmanship & Warranties */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-quality-installation-warranty"
                alt="Quality installation with warranty"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-3">Workmanship & Warranties</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Comprehensive Warranties & Support</h2>
              <p className="text-sm text-muted-foreground mb-3">
                We stand behind every solar installation with comprehensive warranties and dedicated customer support.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>25-Year Panel Performance Warranty</strong> ensuring 80–90% power output retention
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>10–25-Year Inverter Warranty</strong> depending on manufacturer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>10-Year Workmanship & Labor Warranty</strong> covering installation integrity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Monitoring support</strong> and on-call service for quick troubleshooting
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mb-4">
                All installations comply with NEC, UL, and local building codes and are performed by licensed, insured
                professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose National Builders */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Why Choose Us</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Why Property Owners Choose National Builders for Solar
            </h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              We combine certified expertise, premium products, and transparent communication to deliver solar solutions
              that perform for decades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Certified Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  NABCEP-certified installers and licensed electricians ensure the highest safety and quality standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Wrench className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Comprehensive Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Design, install, monitor, and maintain—one point of contact for your entire solar journey.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Sun className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Proven Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Premium Tier-1 panels and top-rated inverters from trusted manufacturers for lasting performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Transparent Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed proposals, clear timelines, and no hidden fees—you'll always know what to expect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A+ BBB rating, local references, and five-star reviews from satisfied residential and commercial
                  clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-base">Decades of Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Systems engineered to perform efficiently for 25+ years with minimal maintenance required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Testimonials</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "National Builders made our solar project seamless—from the energy audit to activation. Our energy
                  bill dropped by 70%, and the installation looks great."
                </p>
                <p className="text-sm font-semibold">– Lauren M., Homeowner</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "We partnered with National Builders for a 200kW rooftop solar system on our warehouse. Their team
                  handled design, permitting, and installation flawlessly. We're saving thousands monthly."
                </p>
                <p className="text-sm font-semibold">– David H., Operations Manager</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <Badge className="mb-2">Our Work</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Solar Installation Examples</h2>
            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              See the quality and precision of our solar installations across residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-commercial-office-250kw"
                  alt="Commercial solar installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Commercial Solar – Office Complex</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Large office complex outfitted with a 250kW flat-roof array using high-efficiency monocrystalline
                  panels and advanced string inverters, reducing energy costs by over 40%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-installation-technicians-work"
                  alt="Expert installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Expert Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Skilled technicians installing tilt-mount solar panels on a commercial roof with optimized
                  south-facing exposure and secure ballast system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-battery-storage-commercial"
                  alt="Battery storage integration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Battery Storage Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Commercial facility integrating a solar + battery system with Enphase IQ batteries and inverter
                  control for load shifting and peak demand reduction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <div className="relative aspect-video">
                <Image
                  src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-residential-black-on-black"
                  alt="Residential solar"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Residential Solar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Single-family home with sleek black-on-black solar modules flush-mounted to asphalt shingles,
                  providing clean energy and aesthetic appeal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Images Gallery */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-ground-mount-array"
                alt="Ground-mounted solar array"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-carport-installation"
                alt="Solar carport installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-inverter-installation"
                alt="Solar inverter installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-panel-close-up" alt="Solar panel close-up" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-warehouse-rooftop" alt="Warehouse rooftop solar" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-residential-neighborhood"
                alt="Residential solar neighborhood"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-battery-powerwall" alt="Tesla Powerwall battery" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/solar-team-installation" alt="Solar installation team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Schedule Your Free Solar Consultation</h2>
          <p className="text-base mb-6 max-w-2xl mx-auto opacity-90">
            Ready to take control of your energy costs and join the clean energy revolution? Call 1-800-RESTORE today to
            schedule your FREE Solar Consultation and Energy Audit.
          </p>
          <p className="text-sm mb-6 max-w-2xl mx-auto opacity-90">
            Our solar experts will analyze your property, calculate potential savings, and provide a complete proposal
            outlining system design, incentives, and financing options. No pressure. No surprises. Just a clear path to
            renewable energy and long-term savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="tel:1-800-RESTORE">Call 1-800-RESTORE</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
