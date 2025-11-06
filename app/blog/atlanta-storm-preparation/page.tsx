import { Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Preparing Your Atlanta Home for Storm Season | National Restoration",
  description:
    "Expert tips for Atlanta homeowners to prepare their properties for Georgia's storm season, including roof inspections, tree maintenance, and emergency planning.",
}

export default function AtlantaStormPreparationPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Preparing Your Atlanta Home for Storm Season"
        description="Expert tips to protect your property from Georgia's severe weather"
        backgroundImage="/atlanta-storm-clouds.png"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>May 15, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By Michael Johnson, Atlanta Branch Manager</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Atlanta's storm season brings unique challenges to homeowners. From spring thunderstorms to summer
                derechos and the occasional tropical system impact, Georgia properties face a variety of severe weather
                threats. At National Restoration, we've helped thousands of Atlanta homeowners recover from storm
                damage, and we've learned that preparation is the key to minimizing that damage.
              </p>

              <p>
                This comprehensive guide will help you prepare your Atlanta home for storm season, with specific
                recommendations tailored to our region's unique weather patterns and housing styles.
              </p>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="/atlanta-storm-approaching.png"
                  alt="Storm approaching Atlanta skyline"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Understanding Atlanta's Storm Patterns</h2>

              <p>
                Atlanta's severe weather season typically runs from March through August, with different types of
                threats emerging throughout this period:
              </p>

              <ul>
                <li>
                  <strong>Spring (March-May):</strong> Characterized by severe thunderstorms, hail, and the highest
                  tornado risk of the year. The temperature contrast between lingering winter air and emerging summer
                  heat creates ideal conditions for powerful storms.
                </li>
                <li>
                  <strong>Early Summer (June-July):</strong> Brings derechos (widespread, long-lived windstorms) and
                  intense thunderstorms with damaging straight-line winds and heavy rainfall that can cause flash
                  flooding, particularly in Atlanta's many creek watersheds.
                </li>
                <li>
                  <strong>Late Summer (August-September):</strong> Hurricane season impacts, which can bring tropical
                  storm remnants with heavy rainfall and sustained winds, even though Atlanta is inland.
                </li>
              </ul>

              <p>
                Understanding these patterns helps you prepare appropriately for each season and prioritize your home
                maintenance and preparation efforts.
              </p>

              <h2>Roof Inspection and Maintenance</h2>

              <p>
                Your roof is your home's first line of defense against storms, and Atlanta's combination of hot summers,
                heavy rainfall, and occasional hail makes roof maintenance particularly important.
              </p>

              <h3>Pre-Storm Season Checklist:</h3>

              <ul>
                <li>
                  <strong>Professional inspection:</strong> Schedule a professional roof inspection in early spring
                  (February-March) before storm season begins. Atlanta's humid climate can accelerate shingle
                  deterioration, and catching issues early prevents more serious damage during storms.
                </li>
                <li>
                  <strong>Check for loose or damaged shingles:</strong> Atlanta's temperature fluctuations can cause
                  shingles to crack or become loose. Replace any damaged shingles immediately.
                </li>
                <li>
                  <strong>Inspect flashing:</strong> Ensure all flashing around chimneys, vents, and roof joints is
                  secure and sealed properly to prevent water intrusion during heavy downpours.
                </li>
                <li>
                  <strong>Clean gutters and downspouts:</strong> Atlanta's abundant tree canopy means gutters fill
                  quickly with leaves and debris. Clean gutters prevent water backup and roof damage during heavy
                  rainfall.
                </li>
                <li>
                  <strong>Check attic ventilation:</strong> Proper ventilation prevents heat and moisture buildup that
                  can damage roof structures and reduce shingle lifespan in Atlanta's hot, humid climate.
                </li>
              </ul>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="/atlanta-roof-inspection.png"
                  alt="Roof inspection in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Tree Maintenance</h2>

              <p>
                Atlanta's nickname "The City in a Forest" highlights one of our greatest assets and biggest storm risks.
                Our abundant tree canopy requires special attention before storm season.
              </p>

              <h3>Tree Safety Measures:</h3>

              <ul>
                <li>
                  <strong>Professional arborist assessment:</strong> Have a certified arborist inspect trees on your
                  property, particularly mature hardwoods common in Atlanta neighborhoods like Buckhead, Druid Hills,
                  and Decatur.
                </li>
                <li>
                  <strong>Identify hazardous trees:</strong> Look for signs of disease, decay, or structural weakness
                  that could lead to failure during storms. Atlanta's clay soil can make trees less stable during
                  saturated conditions.
                </li>
                <li>
                  <strong>Prune strategically:</strong> Remove dead or weak branches that could become projectiles in
                  high winds. Focus on branches overhanging your roof, power lines, or driveway.
                </li>
                <li>
                  <strong>Consider tree removal:</strong> While Atlanta's trees are precious, sometimes removal is
                  necessary for safety. Consult with an arborist and check local regulations, as many Atlanta
                  neighborhoods have tree protection ordinances.
                </li>
              </ul>

              <blockquote>
                "Many of the storm damage claims we see in Atlanta involve tree damage that could have been prevented
                with proper maintenance. A small investment in tree care can prevent tens of thousands in storm damage."
                <cite>— Michael Johnson, Atlanta Branch Manager</cite>
              </blockquote>

              <h2>Drainage and Flood Prevention</h2>

              <p>
                Atlanta's rolling topography and clay soils create unique drainage challenges during heavy rainfall
                events, which are becoming more common with climate change.
              </p>

              <h3>Flood Prevention Steps:</h3>

              <ul>
                <li>
                  <strong>Know your flood risk:</strong> Check FEMA flood maps to determine if your property is in a
                  flood zone. Many Atlanta neighborhoods near creeks and streams have significant flood risks that
                  homeowners may not be aware of.
                </li>
                <li>
                  <strong>Improve yard drainage:</strong> Consider French drains, rain gardens, or regrading to direct
                  water away from your foundation. Atlanta's clay soil doesn't absorb water quickly, making proper
                  drainage essential.
                </li>
                <li>
                  <strong>Install a sump pump:</strong> For homes with basements, a sump pump with battery backup can
                  prevent flooding during power outages, which are common during Atlanta storms.
                </li>
                <li>
                  <strong>Maintain storm drains:</strong> If your property has storm drains, keep them clear of debris,
                  especially after Atlanta's heavy fall leaf drop and spring pollen season.
                </li>
                <li>
                  <strong>Consider flood insurance:</strong> Even if not required by your mortgage, flood insurance can
                  be valuable in Atlanta where flash flooding can affect properties outside designated flood zones.
                </li>
              </ul>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="/atlanta-yard-drainage.png"
                  alt="Yard drainage system installation in Atlanta"
                  fill
                  className="object-cover"
                />
              </div>

              <h2>Secure Outdoor Items</h2>

              <p>
                Atlanta's sudden severe thunderstorms can produce wind gusts exceeding 60 mph with little warning.
                Secure outdoor items to prevent them from becoming dangerous projectiles.
              </p>

              <h3>Pre-Storm Checklist:</h3>

              <ul>
                <li>
                  <strong>Patio furniture:</strong> Use heavy furniture or secure lightweight pieces with straps or
                  cables. Consider storage options for severe weather alerts.
                </li>
                <li>
                  <strong>Grills and outdoor appliances:</strong> Secure propane tanks and move grills to protected
                  areas.
                </li>
                <li>
                  <strong>Planters and garden items:</strong> Move lightweight planters indoors or secure them to
                  prevent them from becoming projectiles.
                </li>
                <li>
                  <strong>Trampolines and play equipment:</strong> Anchor securely or disassemble during storm season if
                  possible.
                </li>
                <li>
                  <strong>Construction materials:</strong> If you're renovating, ensure all building materials are
                  secured or stored properly before storms.
                </li>
              </ul>

              <h2>Emergency Preparedness</h2>

              <p>
                Atlanta's storms can cause extended power outages and road closures due to fallen trees. Being prepared
                for these disruptions is essential.
              </p>

              <h3>Emergency Kit Essentials:</h3>

              <ul>
                <li>
                  <strong>Water:</strong> One gallon per person per day for at least three days. Atlanta's summer heat
                  makes adequate water supplies crucial during power outages.
                </li>
                <li>
                  <strong>Non-perishable food:</strong> At least a three-day supply.
                </li>
                <li>
                  <strong>Medications:</strong> Week-long supply of essential prescriptions.
                </li>
                <li>
                  <strong>Flashlights and batteries:</strong> Avoid candles due to fire risk.
                </li>
                <li>
                  <strong>Weather radio:</strong> Battery-powered or hand-crank NOAA weather radio.
                </li>
                <li>
                  <strong>Charging options:</strong> Portable power banks for cell phones.
                </li>
                <li>
                  <strong>Important documents:</strong> Waterproof container with insurance policies, identification,
                  and bank records.
                </li>
              </ul>

              <h3>Communication Plan:</h3>

              <ul>
                <li>
                  <strong>Family communication:</strong> Establish a plan for contacting each other if separated during
                  a storm.
                </li>
                <li>
                  <strong>Emergency contacts:</strong> Keep a physical list of important phone numbers in case your cell
                  phone dies.
                </li>
                <li>
                  <strong>Evacuation plan:</strong> Know your routes and have a designated meeting place.
                </li>
                <li>
                  <strong>Stay informed:</strong> Follow local Atlanta weather services and emergency management
                  agencies on social media and enable emergency alerts on your phone.
                </li>
              </ul>

              <div className="bg-muted p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Atlanta Emergency Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Emergency:</strong> 911
                  </li>
                  <li>
                    <strong>Atlanta Office of Emergency Management:</strong> (404) 546-7000
                  </li>
                  <li>
                    <strong>Georgia Power Outages:</strong> (888) 891-0938
                  </li>
                  <li>
                    <strong>Atlanta Watershed Management:</strong> (404) 546-0311
                  </li>
                  <li>
                    <strong>Atlanta Public Works:</strong> (404) 330-6333 (for fallen trees on public property)
                  </li>
                </ul>
              </div>

              <h2>Insurance Review</h2>

              <p>
                Before storm season, review your insurance policies to ensure you have adequate coverage for the types
                of damage common in Atlanta.
              </p>

              <h3>Insurance Checklist:</h3>

              <ul>
                <li>
                  <strong>Review coverage limits:</strong> Ensure your homeowner's policy reflects current rebuilding
                  costs, which have increased significantly in Atlanta's hot real estate market.
                </li>
                <li>
                  <strong>Understand deductibles:</strong> Many Georgia policies have separate deductibles for wind/hail
                  damage that are percentage-based rather than fixed amounts.
                </li>
                <li>
                  <strong>Document your property:</strong> Take photos or videos of your home's exterior and interior,
                  including valuable possessions, to support potential claims.
                </li>
                <li>
                  <strong>Check for exclusions:</strong> Understand what your policy doesn't cover and consider
                  additional policies if needed.
                </li>
              </ul>

              <h2>Conclusion</h2>

              <p>
                Atlanta's storm season requires specific preparation strategies tailored to our region's unique weather
                patterns and housing styles. By taking proactive steps to maintain your roof, manage trees, improve
                drainage, secure outdoor items, prepare emergency supplies, and review insurance coverage, you can
                significantly reduce your risk of storm damage.
              </p>

              <p>
                At National Restoration, we've seen firsthand how proper preparation can make the difference between
                minor repairs and major restoration projects. If you need help assessing your home's storm readiness or
                have questions about specific preparation strategies, our Atlanta team is here to help.
              </p>

              <div className="bg-primary/10 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Need Help Preparing Your Atlanta Home?</h3>
                <p className="mb-4">
                  Our Atlanta team offers free storm preparation assessments to help you identify and address
                  vulnerabilities before severe weather strikes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Schedule an Assessment
                  </a>
                  <a
                    href="/services/atlanta"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    View Atlanta Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Download Our Storm Preparation Checklist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get our comprehensive Atlanta storm preparation checklist to ensure your home is ready for severe
                  weather.
                </p>
                <a
                  href="/checklist.pdf"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow w-full"
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-sm font-medium hover:underline">
                      Understanding Atlanta's Hail Damage Patterns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-medium hover:underline">
                      5 Signs Your Roof Needs Attention Before Storm Season
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-medium hover:underline">
                      How to Document Storm Damage for Insurance Claims
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm font-medium hover:underline">
                      The Best Trees for Atlanta's Storm-Prone Climate
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border bg-card text-card-foreground shadow overflow-hidden">
              <div className="relative aspect-square">
                <Image src="/atlanta-team.png" alt="National Restoration Atlanta Team" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Meet Our Atlanta Team</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our local experts understand Atlanta's unique weather challenges and housing styles.
                </p>
                <a href="/locations/atlanta" className="text-sm font-medium text-primary hover:underline">
                  Learn more about our Atlanta branch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
