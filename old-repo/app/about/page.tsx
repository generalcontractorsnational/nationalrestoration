import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Shield, Star, PenTool as Tool, Award, Users } from "lucide-react"
import Image from "next/image"
import CTA from "@/components/cta"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="About Us"
        description="Your Trusted Restoration Partner"
        backgroundImage="/professional-restoration-team-in-front-of-company-.jpg"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our History & Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                National Restoration began as a small roofing company in Cleveland, Ohio. Our founder saw a need for a
                "one-stop" contractor who could handle not just roofing, but the full spectrum of exterior
                restoration—especially after seeing property owners struggle to coordinate multiple contractors when
                storms hit.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We expanded our services and our geographic reach. Today, with regional offices and crews in Washington
                D.C. Metro, Atlanta, Dallas, Cleveland, and beyond, we're able to bring our expertise to clients in
                various climates and communities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Despite our growth, we haven't lost sight of our roots: we treat every project, big or small, with
                personal care. Our mission is to make the restoration process easy and stress-free for our clients,
                acting as their advocate and delivering exceptional results.
              </p>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/restoration-company-founder-with-team.jpg"
                alt="National Restoration history"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              National Restoration stands out from the competition with our comprehensive approach, expertise, and
              commitment to customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Comprehensive Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We truly do it all when it comes to exterior restoration and general contracting. This means less
                  hassle for you. From the initial inspection to final walkthrough, you have a single point of contact
                  and a dedicated team that handles everything.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Insurance Claim Specialists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dealing with insurance claims can be daunting. We work directly with insurance companies on your
                  behalf to ensure all damage is documented and covered appropriately. Our detailed estimates often help
                  expedite claims.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality Craftsmanship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our crews are not just laborers—they are trained craftsmen. We invest in continual training and
                  certifications. We never cut corners; we use the best materials and proven techniques so that our work
                  stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Tool className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Safety and Professionalism</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain rigorous safety standards on every job site—protecting our workers and your property. We
                  are fully licensed and insured in every state and locality we operate in, so you can have peace of
                  mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Even though we operate across multiple states, we engage locally. We have local project managers who
                  understand regional needs. We also believe in giving back to the communities we serve.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The true measure of our success is our customers' satisfaction. We're proud to have earned stellar
                  reviews and many referrals. Much of our business comes from repeat customers or word-of-mouth
                  recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              National Restoration isn't just a faceless corporation – we're a team of professionals who care. Many of
              our key staff have been with us for 10+ years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/professional-ceo-portrait.png" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-primary font-medium">CEO & Founder</p>
              <p className="text-muted-foreground mt-2">
                Founded National Restoration with a vision to create a one-stop restoration company.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/professional-coo-portrait.png" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-primary font-medium">Chief Operations Officer</p>
              <p className="text-muted-foreground mt-2">
                Oversees all operations and ensures every project meets our high standards of quality.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/professional-construction-director-portrait.jpg"
                  alt="Director of Construction"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Michael Rodriguez</h3>
              <p className="text-primary font-medium">Director of Construction</p>
              <p className="text-muted-foreground mt-2">
                Brings 25+ years of construction experience and oversees all project execution.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/customer-service-director.png"
                  alt="Customer Service Director"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Lisa Chen</h3>
              <p className="text-primary font-medium">Customer Service Director</p>
              <p className="text-muted-foreground mt-2">
                Ensures every client receives exceptional service from first contact to project completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Certifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Credentials</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We invest in training and certifications to ensure our team delivers the highest quality work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/gaf-master-elite-logo.jpg" alt="GAF Master Elite" width={60} height={60} />
              </div>
              <p className="text-center font-medium">GAF Master Elite</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/certainteed-shinglemaster-logo.jpg"
                  alt="CertainTeed ShingleMaster"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">CertainTeed ShingleMaster</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/james-hardie-preferred-contractor-logo.jpg"
                  alt="James Hardie Preferred"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">James Hardie Preferred</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image
                  src="/owens-corning-preferred-contractor-logo.jpg"
                  alt="Owens Corning Preferred"
                  width={60}
                  height={60}
                />
              </div>
              <p className="text-center font-medium">Owens Corning Preferred</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/bbb-accredited-business-logo.jpg" alt="BBB Accredited" width={60} height={60} />
              </div>
              <p className="text-center font-medium">BBB Accredited</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                <Image src="/nrca-member-logo.jpg" alt="NRCA Member" width={60} height={60} />
              </div>
              <p className="text-center font-medium">NRCA Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Work With Us?"
        description="Contact us today for a free inspection and estimate. Our team is ready to help with your restoration needs."
        buttonText="Get Free Inspection"
        buttonLink="/contact"
      />
    </div>
  )
}
