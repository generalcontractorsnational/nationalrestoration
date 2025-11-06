"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { useProperty } from "@/contexts/property-context"
import { useAssessment } from "@/contexts/assessment-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertTriangle,
  Building,
  CheckCircle,
  Clock,
  FileText,
  Filter,
  Home,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sliders,
} from "lucide-react"
import { format } from "date-fns"

export default function PropertyDashboard() {
  const router = useRouter()
  const { properties, addProperty, deleteProperty } = useProperty()
  const { assessments, getAssessmentsByPropertyId } = useAssessment()
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<string>("all")
  const [sortOrder, setSortOrder] = useState<string>("newest")

  // Calculate dashboard metrics
  const totalProperties = properties.length
  const totalAssessments = assessments.length
  const pendingAssessments = assessments.filter((a) => a.status !== "submitted").length
  const submittedAssessments = assessments.filter((a) => a.status === "submitted").length

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    return properties
      .filter((property) => {
        // Apply search filter
        const matchesSearch =
          property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.address.toLowerCase().includes(searchQuery.toLowerCase())

        // Apply property type filter
        const matchesType = propertyTypeFilter === "all" || property.type === propertyTypeFilter

        return matchesSearch && matchesType
      })
      .sort((a, b) => {
        // Apply sorting
        if (sortOrder === "newest") {
          return b.createdAt.getTime() - a.createdAt.getTime()
        } else if (sortOrder === "oldest") {
          return a.createdAt.getTime() - b.createdAt.getTime()
        } else if (sortOrder === "name-asc") {
          return a.name.localeCompare(b.name)
        } else if (sortOrder === "name-desc") {
          return b.name.localeCompare(a.name)
        } else if (sortOrder === "most-assessments") {
          const aCount = getAssessmentsByPropertyId(a.id).length
          const bCount = getAssessmentsByPropertyId(b.id).length
          return bCount - aCount
        }
        return 0
      })
  }, [properties, searchQuery, propertyTypeFilter, sortOrder, getAssessmentsByPropertyId])

  // Get recent assessments (last 5)
  const recentAssessments = useMemo(() => {
    return [...assessments].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 5)
  }, [assessments])

  // Navigate to property detail page
  const navigateToPropertyDetail = (propertyId: string) => {
    router.push(`/storm-damage-assessment/properties/${propertyId}`)
  }

  // Navigate to assessment detail page
  const navigateToAssessment = (assessmentId: string) => {
    router.push(`/storm-damage-assessment/${assessmentId}`)
  }

  // Navigate to add property page
  const navigateToAddProperty = () => {
    router.push("/storm-damage-assessment/properties")
  }

  // Navigate to create assessment page
  const navigateToCreateAssessment = (propertyId?: string) => {
    if (propertyId) {
      router.push(`/storm-damage-assessment/new?propertyId=${propertyId}`)
    } else {
      router.push("/storm-damage-assessment/new")
    }
  }

  // Get property type icon
  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "residential":
        return <Home className="h-5 w-5" />
      case "commercial":
        return <Building className="h-5 w-5" />
      default:
        return <Building className="h-5 w-5" />
    }
  }

  // Get assessment status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "draft":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "submitted":
        return <FileText className="h-4 w-4 text-blue-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-muted-foreground" />
    }
  }

  // Get property image or placeholder
  const getPropertyImage = (property: any) => {
    return property.image || `/placeholder.svg?height=200&width=300&query=property ${property.type}`
  }

  return (
    <div className="container py-12">
      {/* Dashboard Header with Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">Properties</h3>
                <Building className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{totalProperties}</div>
              <p className="text-xs md:text-sm text-muted-foreground">Total properties registered</p>
              <Button
                variant="outline"
                className="w-full mt-2 text-xs md:text-sm active-press"
                onClick={navigateToAddProperty}
              >
                <Plus className="mr-2 h-3 w-3 md:h-4 md:w-4" /> Add Property
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">Assessments</h3>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{totalAssessments}</div>
              <p className="text-xs md:text-sm text-muted-foreground">Total assessments</p>
              <Button
                variant="outline"
                className="w-full mt-2 text-xs md:text-sm active-press"
                onClick={() => navigateToCreateAssessment()}
              >
                <Plus className="mr-2 h-3 w-3 md:h-4 md:w-4" /> New Assessment
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">Pending</h3>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{pendingAssessments}</div>
              <p className="text-xs md:text-sm text-muted-foreground">In progress</p>
              <Button
                variant="outline"
                className="w-full mt-2 text-xs md:text-sm active-press"
                onClick={() => router.push("/storm-damage-assessment")}
                disabled={pendingAssessments === 0}
              >
                View Pending
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="text-base md:text-lg font-medium">Submitted</h3>
                <CheckCircle className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{submittedAssessments}</div>
              <p className="text-xs md:text-sm text-muted-foreground">Completed</p>
              <Button
                variant="outline"
                className="w-full mt-2 text-xs md:text-sm active-press"
                onClick={() => router.push("/storm-damage-assessment")}
                disabled={submittedAssessments === 0}
              >
                View Submitted
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Properties Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Your Properties</h2>

          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search properties..."
                className="pl-8 w-full sm:w-[200px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Select value={propertyTypeFilter} onValueChange={setPropertyTypeFilter}>
                <SelectTrigger className="w-full sm:w-[130px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full sm:w-[130px]">
                  <Sliders className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="most-assessments">Most Assessments</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={navigateToAddProperty} className="active-press">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {properties.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
              <Building className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-center text-muted-foreground mb-4">You haven't added any properties yet.</p>
              <Button onClick={navigateToAddProperty} className="active-press">
                <Plus className="mr-2 h-4 w-4" /> Add Your First Property
              </Button>
            </CardContent>
          </Card>
        ) : filteredProperties.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
              <Search className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-center text-muted-foreground mb-4">No properties match your search criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setPropertyTypeFilter("all")
                }}
                className="active-press"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProperties.map((property) => {
              const propertyAssessments = getAssessmentsByPropertyId(property.id)
              const pendingCount = propertyAssessments.filter((a) => a.status !== "submitted").length

              return (
                <Card key={property.id} className="overflow-hidden transition-smooth hover:shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-base md:text-lg truncate mb-1" title={property.name}>
                            {property.name}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary">
                              {getPropertyTypeIcon(property.type)}
                              <span className="ml-1 capitalize">{property.type}</span>
                            </span>
                            {pendingCount > 0 && (
                              <span className="inline-flex items-center rounded-full bg-amber-500/20 px-2 py-1 text-xs font-medium text-amber-700">
                                <AlertTriangle className="h-3 w-3 mr-1" />
                                {pendingCount} Pending
                              </span>
                            )}
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 active-press">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigateToPropertyDetail(property.id)}>
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigateToCreateAssessment(property.id)}>
                              New Assessment
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-destructive focus:text-destructive"
                              onClick={() => deleteProperty(property.id)}
                            >
                              Delete Property
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground truncate mb-3" title={property.address}>
                        {property.address}
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs md:text-sm">
                          {propertyAssessments.length} {propertyAssessments.length === 1 ? "Assessment" : "Assessments"}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-4">
                        Added on {format(property.createdAt, "MMM d, yyyy")}
                      </p>

                      <div className="flex gap-2 mt-auto">
                        <Button
                          variant="outline"
                          className="flex-1 text-xs md:text-sm active-press"
                          onClick={() => navigateToPropertyDetail(property.id)}
                        >
                          Details
                        </Button>
                        <Button
                          className="flex-1 text-xs md:text-sm active-press"
                          onClick={() => navigateToCreateAssessment(property.id)}
                        >
                          New Assessment
                        </Button>
                      </div>
                    </div>

                    {/* Image section - now on the right side */}
                    <div className="md:w-1/3 relative h-auto md:h-auto">
                      <div className="h-40 md:h-full relative">
                        <Image
                          src={getPropertyImage(property) || "/placeholder.svg"}
                          alt={property.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>

      {/* Recent Activity Section */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Recent Activity</h2>

        <Tabs defaultValue="recent-assessments">
          <TabsList className="mb-4">
            <TabsTrigger value="recent-assessments">Recent Assessments</TabsTrigger>
            <TabsTrigger value="pending-assessments">Pending Assessments</TabsTrigger>
          </TabsList>

          <TabsContent value="recent-assessments" className="mt-0">
            {recentAssessments.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
                  <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground mb-4">No assessments found.</p>
                  <Button onClick={() => navigateToCreateAssessment()}>
                    <Plus className="mr-2 h-4 w-4" /> Create New Assessment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {recentAssessments.map((assessment) => {
                  const property = properties.find((p) => p.id === assessment.propertyId)

                  return (
                    <Card key={assessment.id} className="overflow-hidden">
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              {getStatusIcon(assessment.status)}
                              <span className="ml-1 capitalize">{assessment.status}</span>
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {format(assessment.updatedAt, "MMM d, yyyy")}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => navigateToAssessment(assessment.id)}>
                              View Details
                            </Button>
                            {assessment.status === "draft" && (
                              <Button size="sm" onClick={() => navigateToAssessment(assessment.id)}>
                                Continue
                              </Button>
                            )}
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2">{assessment.name}</h3>

                        {property && (
                          <div className="flex items-center gap-2 mb-3">
                            {getPropertyTypeIcon(property.type)}
                            <span className="text-sm font-medium">{property.name}</span>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1 mt-2">
                          {assessment.damageTypes.map((type, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold border-transparent bg-secondary/20 text-secondary"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )
                })}

                <div className="flex justify-center">
                  <Button variant="outline" onClick={() => router.push("/storm-damage-assessment")}>
                    View All Assessments
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="pending-assessments" className="mt-0">
            {assessments.filter((a) => a.status !== "submitted").length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
                  <Clock className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-center text-muted-foreground mb-4">No pending assessments found.</p>
                  <Button onClick={() => navigateToCreateAssessment()}>
                    <Plus className="mr-2 h-4 w-4" /> Create New Assessment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {assessments
                  .filter((a) => a.status !== "submitted")
                  .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
                  .slice(0, 5)
                  .map((assessment) => {
                    const property = properties.find((p) => p.id === assessment.propertyId)

                    return (
                      <Card key={assessment.id} className="overflow-hidden">
                        <div className="p-4 sm:p-6">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                {getStatusIcon(assessment.status)}
                                <span className="ml-1 capitalize">{assessment.status}</span>
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {format(assessment.updatedAt, "MMM d, yyyy")}
                              </span>
                            </div>

                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => navigateToAssessment(assessment.id)}>
                                View Details
                              </Button>
                              <Button size="sm" onClick={() => navigateToAssessment(assessment.id)}>
                                Continue
                              </Button>
                            </div>
                          </div>

                          <h3 className="text-lg font-semibold mb-2">{assessment.name}</h3>

                          {property && (
                            <div className="flex items-center gap-2 mb-3">
                              {getPropertyTypeIcon(property.type)}
                              <span className="text-sm font-medium">{property.name}</span>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-1 mt-2">
                            {assessment.damageTypes.map((type, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold border-transparent bg-secondary/20 text-secondary"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    )
                  })}

                <div className="flex justify-center">
                  <Button variant="outline" onClick={() => router.push("/storm-damage-assessment")}>
                    View All Pending Assessments
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Actions Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
            <CardContent
              className="p-6 flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
              onClick={navigateToAddProperty}
            >
              <Plus className="h-8 w-8 text-primary" />
              <h3 className="font-medium">Add New Property</h3>
              <p className="text-sm text-muted-foreground">Register a new property for assessment</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
            <CardContent
              className="p-6 flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
              onClick={() => navigateToCreateAssessment()}
            >
              <FileText className="h-8 w-8 text-primary" />
              <h3 className="font-medium">Create Assessment</h3>
              <p className="text-sm text-muted-foreground">Start a new damage assessment</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
            <CardContent
              className="p-6 flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
              onClick={() => router.push("/storm-damage-assessment")}
            >
              <Settings className="h-8 w-8 text-primary" />
              <h3 className="font-medium">Assessment Dashboard</h3>
              <p className="text-sm text-muted-foreground">View and manage all assessments</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
            <CardContent
              className="p-6 flex flex-col items-center justify-center gap-2 text-center cursor-pointer"
              onClick={() => router.push("/storm-preparation")}
            >
              <AlertTriangle className="h-8 w-8 text-primary" />
              <h3 className="font-medium">Storm Preparation</h3>
              <p className="text-sm text-muted-foreground">Get ready for upcoming storms</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
