import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PageHeader from "@/components/page-header"
import { UserCog, User, CheckCircle2, Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "Portals | National Restoration",
  description: "Access all National Restoration portals for clients, subcontractors, employees, and affiliates.",
}

export default function PortalsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Access Portals"
        description="Secure access to dedicated portals for our clients, subcontractors, employees, and affiliates"
        backgroundImage="/portal-header-image.png"
      />

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge className="mb-4">Secure Access</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Gateway to Seamless Collaboration</h2>
          <p className="text-lg text-muted-foreground">
            National Restoration provides dedicated portals for all stakeholders to streamline communication, project
            management, and documentation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {/* Client Portal Card */}
          <Card className="flex flex-col h-full border-t-4 border-blue-500">
            <CardHeader className="pb-4">
              <div className="mb-2 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle>Client Portal</CardTitle>
              <CardDescription>For homeowners and property managers</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                Track your project progress, view documentation, make payments, and communicate with your project team.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Project updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Document access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Payment processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                  <span>Service requests</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/client-portal">Access Client Portal</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Subcontractor Portal Card */}
          <Card className="flex flex-col h-full border-t-4 border-purple-600">
            <CardHeader className="pb-4">
              <div className="mb-2 w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center">
                <UserCog className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Subcontractor Portal</CardTitle>
              <CardDescription>For independent contractors and service providers</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                Access project tools, resources, training materials, and job management systems.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Project management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Training materials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Job tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Team collaboration</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/sub-contractor-portal">Access Subcontractor Portal</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Employee Portal Card */}
          <Card className="flex flex-col h-full border-t-4 border-indigo-600">
            <CardHeader className="pb-4">
              <div className="mb-2 w-12 h-12 rounded-full bg-indigo-600/10 flex items-center justify-center">
                <UserCog className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Employee Portal</CardTitle>
              <CardDescription>For National Restoration employees</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                Access internal systems, HR resources, training materials, and company information.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>HR resources</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Training materials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Project management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 mr-2 flex-shrink-0" />
                  <span>Company resources</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/employee-portal">Access Employee Portal</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Affiliate Portal Card */}
          <Card className="flex flex-col h-full border-t-4 border-primary">
            <CardHeader className="pb-4">
              <div className="mb-2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Handshake className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Affiliate Portal</CardTitle>
              <CardDescription>For business partners and affiliates</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground mb-4">
                Manage referrals, track commissions, access marketing materials, and grow your partnership.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>Referral tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>Commission reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>Marketing materials</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  <span>Performance analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/affiliate-portal">Access Affiliate Portal</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground">
              Our support team is available to assist you with any questions or issues you may have.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
