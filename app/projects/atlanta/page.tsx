import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Filter, Search, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata = {
  title: "Atlanta Restoration Projects | National Restoration",
  description:
    "Explore our portfolio of completed restoration projects throughout Atlanta, including residential, commercial, and historic properties.",
}

export default function AtlantaProjectsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Atlanta Projects"
        description="Explore our portfolio of completed restoration projects throughout Atlanta"
        backgroundImage="/atlanta-projects-header.png"
      />

      {/* Project Search & Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-9" />
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="text-sm font-medium">Filter:</span>
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="historic">Historic</SelectItem>
                  <SelectItem value="storm">Storm Damage</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="roofing">Roofing</SelectItem>
                  <SelectItem value="siding">Siding</SelectItem>
                  <SelectItem value="windows">Windows</SelectItem>
                  <SelectItem value="gutters">Gutters</SelectItem>
                  <SelectItem value="storm">Storm Damage</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="atlanta">Atlanta</SelectItem>
                  <SelectItem value="buckhead">Buckhead</SelectItem>
                  <SelectItem value="midtown">Midtown</SelectItem>
                  <SelectItem value="marietta">Marietta</SelectItem>
                  <SelectItem value="alpharetta">Alpharetta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Highlighted Atlanta Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our most impressive restoration projects throughout the Atlanta metro area.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="historic">Historic</TabsTrigger>
              <TabsTrigger value="storm">Storm Damage</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/buckhead-estate-project.png"
                      alt="Buckhead Estate Restoration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Buckhead, Atlanta</span>
                    </div>
                    <CardTitle>Historic Buckhead Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior restoration of a 1920s estate following significant storm damage. Project
                      included custom copper gutters, slate roof restoration, and period-accurate window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Roofing</Badge>
                      <Badge variant="outline">Windows</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/buckhead-estate">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 2 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/midtown-commercial-project.png"
                      alt="Midtown Commercial Complex"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Midtown, Atlanta</span>
                    </div>
                    <CardTitle>Midtown Office Complex</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Energy-efficient renovation of a three-building office complex. Project featured cool roofing
                      technology, high-performance window systems, and updated facade elements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Commercial</Badge>
                      <Badge variant="outline">Energy Efficiency</Badge>
                      <Badge variant="outline">Facade</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/midtown-commercial">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 3 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/marietta-neighborhood-project.png"
                      alt="Marietta Neighborhood Recovery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Marietta, GA</span>
                    </div>
                    <CardTitle>Marietta Neighborhood Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive restoration of 27 homes following severe hail and wind damage. Project included
                      coordinated insurance claims, roofing, siding, and window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Storm Recovery</Badge>
                      <Badge variant="outline">Multi-Property</Badge>
                      <Badge variant="outline">Insurance Claims</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/marietta-neighborhood">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 4 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/inman-park-victorian.png"
                      alt="Inman Park Victorian Restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Inman Park, Atlanta</span>
                    </div>
                    <CardTitle>Inman Park Victorian</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Meticulous restoration of a Queen Anne Victorian home in the historic Inman Park neighborhood.
                      Project included ornate trim restoration, custom millwork, and period-appropriate paint colors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Exterior</Badge>
                      <Badge variant="outline">Custom Millwork</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/inman-park-victorian">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 5 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/alpharetta-retail-center.png"
                      alt="Alpharetta Retail Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Alpharetta, GA</span>
                    </div>
                    <CardTitle>Alpharetta Retail Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior renovation of a 45,000 sq ft retail center. Project included facade updates, new
                      storefront systems, and energy-efficient roofing with minimal disruption to tenant operations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Commercial</Badge>
                      <Badge variant="outline">Facade</Badge>
                      <Badge variant="outline">Roofing</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/alpharetta-retail">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Project 6 */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/decatur-craftsman.png"
                      alt="Decatur Craftsman Renovation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Decatur, GA</span>
                    </div>
                    <CardTitle>Decatur Craftsman Renovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive exterior renovation of a 1920s Craftsman bungalow. Project included cedar shake
                      siding restoration, custom-built front porch, and period-appropriate color scheme.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Residential</Badge>
                      <Badge variant="outline">Siding</Badge>
                      <Badge variant="outline">Historic</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/decatur-craftsman">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="residential">
              {/* Residential projects content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Include residential projects here */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/buckhead-estate-project.png"
                      alt="Buckhead Estate Restoration"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Buckhead, Atlanta</span>
                    </div>
                    <CardTitle>Historic Buckhead Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior restoration of a 1920s estate following significant storm damage. Project
                      included custom copper gutters, slate roof restoration, and period-accurate window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Roofing</Badge>
                      <Badge variant="outline">Windows</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/buckhead-estate">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/decatur-craftsman.png"
                      alt="Decatur Craftsman Renovation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Decatur, GA</span>
                    </div>
                    <CardTitle>Decatur Craftsman Renovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive exterior renovation of a 1920s Craftsman bungalow. Project included cedar shake
                      siding restoration, custom-built front porch, and period-appropriate color scheme.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Residential</Badge>
                      <Badge variant="outline">Siding</Badge>
                      <Badge variant="outline">Historic</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/decatur-craftsman">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="commercial">
              {/* Commercial projects content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Include commercial projects here */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/midtown-commercial-project.png"
                      alt="Midtown Commercial Complex"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Midtown, Atlanta</span>
                    </div>
                    <CardTitle>Midtown Office Complex</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Energy-efficient renovation of a three-building office complex. Project featured cool roofing
                      technology, high-performance window systems, and updated facade elements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Commercial</Badge>
                      <Badge variant="outline">Energy Efficiency</Badge>
                      <Badge variant="outline">Facade</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/midtown-commercial">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/alpharetta-retail-center.png"
                      alt="Alpharetta Retail Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Alpharetta, GA</span>
                    </div>
                    <CardTitle>Alpharetta Retail Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior renovation of a 45,000 sq ft retail center. Project included facade updates, new
                      storefront systems, and energy-efficient roofing with minimal disruption to tenant operations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Commercial</Badge>
                      <Badge variant="outline">Facade</Badge>
                      <Badge variant="outline">Roofing</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/alpharetta-retail">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="historic">
              {/* Historic projects content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Include historic projects here */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/inman-park-victorian.png"
                      alt="Inman Park Victorian Restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Inman Park, Atlanta</span>
                    </div>
                    <CardTitle>Inman Park Victorian</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Meticulous restoration of a Queen Anne Victorian home in the historic Inman Park neighborhood.
                      Project included ornate trim restoration, custom millwork, and period-appropriate paint colors.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Exterior</Badge>
                      <Badge variant="outline">Custom Millwork</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/inman-park-victorian">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/buckhead-estate-project.png"
                      alt="Buckhead Estate Restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Buckhead, Atlanta</span>
                    </div>
                    <CardTitle>Historic Buckhead Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior restoration of a 1920s estate following significant storm damage. Project
                      included custom copper gutters, slate roof restoration, and period-accurate window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Roofing</Badge>
                      <Badge variant="outline">Windows</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/buckhead-estate">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="storm">
              {/* Storm damage projects content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Include storm damage projects here */}
                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/marietta-neighborhood-project.png"
                      alt="Marietta Neighborhood Recovery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Marietta, GA</span>
                    </div>
                    <CardTitle>Marietta Neighborhood Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive restoration of 27 homes following severe hail and wind damage. Project included
                      coordinated insurance claims, roofing, siding, and window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Storm Recovery</Badge>
                      <Badge variant="outline">Multi-Property</Badge>
                      <Badge variant="outline">Insurance Claims</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/marietta-neighborhood">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/buckhead-estate-project.png"
                      alt="Buckhead Estate Restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Buckhead, Atlanta</span>
                    </div>
                    <CardTitle>Historic Buckhead Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Complete exterior restoration of a 1920s estate following significant storm damage. Project
                      included custom copper gutters, slate roof restoration, and period-accurate window replacements.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Historic</Badge>
                      <Badge variant="outline">Roofing</Badge>
                      <Badge variant="outline">Windows</Badge>
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/projects/buckhead-estate">View Project Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Map */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Project Locations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Atlanta Project Map</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our completed projects throughout the Atlanta metro area.
            </p>
          </div>

          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image src="/atlanta-projects-map.png" alt="Map of Atlanta projects" fill className="object-cover" />
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              This map shows a selection of our recently completed projects in the Atlanta metro area. Click on a
              project marker to view details.
            </p>
            <Button asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Project Case Study */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Case Study</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Buckhead Estate Restoration</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              An in-depth look at one of our most challenging and rewarding Atlanta projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/buckhead-estate-before-after.png"
                alt="Buckhead Estate before and after restoration"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
              <p className="text-lg text-muted-foreground mb-6">
                This historic 1920s estate in Buckhead suffered significant damage during a severe storm, including a
                fallen tree that damaged the roof, water intrusion, and damage to the home's historic facade elements.
              </p>

              <h4 className="text-xl font-semibold mb-2">Challenges</h4>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
                <li>Matching historic materials and craftsmanship techniques</li>
                <li>Coordinating with insurance for proper coverage of historic elements</li>
                <li>Preventing further water damage during restoration</li>
                <li>Meeting historic district preservation requirements</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Solutions</h4>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
                <li>Sourced authentic slate roofing materials to match the original</li>
                <li>Engaged master craftsmen specializing in historic restoration</li>
                <li>Installed temporary protection systems during restoration</li>
                <li>Worked closely with the Atlanta Urban Design Commission</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Results</h4>
              <p className="text-lg text-muted-foreground mb-6">
                The completed restoration not only repaired the storm damage but enhanced the home's historic character
                and improved its resilience against future weather events. The project was completed on time and on
                budget, with full insurance coverage secured for the homeowners.
              </p>

              <Button asChild size="lg">
                <Link href="/projects/buckhead-estate">Read Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Atlanta Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners and businesses throughout Atlanta who have experienced the National Restoration
              difference.
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
                  "National Restoration's attention to detail on our historic home renovation was exceptional. They
                  understood the unique challenges of working with a 100-year-old structure and preserved its character
                  while modernizing its performance."
                </p>
                <div>
                  <p className="font-semibold">James & Elizabeth T.</p>
                  <p className="text-sm text-muted-foreground">Inman Park, Atlanta</p>
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
                  "As the property manager for a retail center in Alpharetta, I was impressed by National Restoration's
                  ability to complete our exterior renovation with minimal disruption to our tenants. Their team worked
                  nights and coordinated carefully with each business."
                </p>
                <div>
                  <p className="font-semibold">Michael R., Property Manager</p>
                  <p className="text-sm text-muted-foreground">Alpharetta, GA</p>
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
                  "After the hailstorm hit our Marietta neighborhood, National Restoration coordinated with all 27
                  homeowners and our insurance companies. Their organization and communication made a stressful
                  situation much easier to handle."
                </p>
                <div>
                  <p className="font-semibold">Sarah W., HOA Board Member</p>
                  <p className="text-sm text-muted-foreground">Marietta, GA</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Start Your Project CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-lg p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary text-primary-foreground">Get Started</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Atlanta Project?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our Atlanta team today to schedule a free consultation and estimate for your restoration
                project. Our local experts are ready to help with any size project throughout the metro area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services/atlanta">Explore Atlanta Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
