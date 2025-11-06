"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProperty } from "@/contexts/property-context"
import { useAssessment } from "@/contexts/assessment-context"
import { Building, Home, Plus, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { format } from "date-fns"

export default function StormDamageAssessmentDashboard() {
  const router = useRouter()
  const { properties } = useProperty()
  const { assessments, getAssessmentsByPropertyId } = useAssessment()

  // Navigate to property management
  const navigateToProperties = () => {
    router.push("/storm-damage-assessment/properties")
  }

  // Navigate to new assessment
  const createNewAssessment = () => {
    router.push("/storm-damage-assessment/new")
  }

  // Navigate to assessment detail
  const viewAssessment = (assessmentId: string) => {
    router.push(`/storm-damage-assessment/${assessmentId}`)
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

  // Get recent assessments (last 5)
  const recentAssessments = [...assessments].sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()).slice(0, 5)

  // Get draft assessments
  const draftAssessments = assessments.filter((a) => a.status === "draft")

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Properties</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">{properties.length}</div>
            <p className="text-sm text-muted-foreground">Total properties registered</p>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="outline" className="w-full" onClick={navigateToProperties}>
              Manage Properties
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Assessments</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">{assessments.length}</div>
            <p className="text-sm text-muted-foreground">Total assessments created</p>
          </CardContent>
          <CardFooter className="pt-2">
            <Button variant="outline" className="w-full" onClick={createNewAssessment}>
              New Assessment
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Pending</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="text-3xl font-bold">{draftAssessments.length}</div>
            <p className="text-sm text-muted-foreground">Assessments in progress</p>
          </CardContent>
          <CardFooter className="pt-2">
            {draftAssessments.length > 0 ? (
              <Button variant="outline" className="w-full" onClick={() => viewAssessment(draftAssessments[0].id)}>
                Continue Latest
              </Button>
            ) : (
              <Button variant="outline" className="w-full" disabled>
                No Pending Assessments
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold tracking-tight">Your Properties</h3>
        <Button onClick={navigateToProperties}>
          <Plus className="mr-2 h-4 w-4" /> Add Property
        </Button>
      </div>

      {properties.length === 0 ? (
        <Card className="border-dashed mb-8">
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
            <Building className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-center text-muted-foreground mb-4">You haven't added any properties yet.</p>
            <Button onClick={navigateToProperties}>
              <Plus className="mr-2 h-4 w-4" /> Add Your First Property
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {properties.slice(0, 3).map((property) => {
            const propertyAssessments = getAssessmentsByPropertyId(property.id)
            const pendingAssessments = propertyAssessments.filter((a) => a.status !== "submitted").length

            return (
              <Card key={property.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    {getPropertyTypeIcon(property.type)}
                    <CardTitle className="text-lg">{property.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">{property.address}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {propertyAssessments.length} {propertyAssessments.length === 1 ? "Assessment" : "Assessments"}
                    </span>
                    {pendingAssessments > 0 && (
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {pendingAssessments} Pending
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => router.push(`/storm-damage-assessment/properties/${property.id}`)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
          {properties.length > 3 && (
            <Button variant="outline" className="h-full min-h-[200px] border-dashed" onClick={navigateToProperties}>
              View All Properties ({properties.length})
            </Button>
          )}
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-2xl font-bold tracking-tight">Recent Assessments</h3>
      </div>

      <Tabs defaultValue="recent">
        <TabsList className="mb-4">
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="draft">In Progress</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="mt-0">
          {recentAssessments.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
                <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">No assessments found.</p>
                <Button onClick={createNewAssessment}>
                  <Plus className="mr-2 h-4 w-4" /> Create New Assessment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentAssessments.map((assessment) => {
                const property = properties.find((p) => p.id === assessment.propertyId)

                return (
                  <Card key={assessment.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{assessment.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      {property && (
                        <div className="flex items-center gap-2 mb-2">
                          {getPropertyTypeIcon(property.type)}
                          <span className="text-sm">{property.name}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        {getStatusIcon(assessment.status)}
                        <span className="text-sm capitalize">{assessment.status}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Last updated: {format(assessment.updatedAt, "MMM d, yyyy")}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="outline" className="w-full" onClick={() => viewAssessment(assessment.id)}>
                        View Assessment
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="draft" className="mt-0">
          {draftAssessments.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
                <Clock className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">No assessments in progress.</p>
                <Button onClick={createNewAssessment}>
                  <Plus className="mr-2 h-4 w-4" /> Create New Assessment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {draftAssessments.map((assessment) => {
                const property = properties.find((p) => p.id === assessment.propertyId)

                return (
                  <Card key={assessment.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{assessment.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      {property && (
                        <div className="flex items-center gap-2 mb-2">
                          {getPropertyTypeIcon(property.type)}
                          <span className="text-sm">{property.name}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">In Progress</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Last updated: {format(assessment.updatedAt, "MMM d, yyyy")}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-2">
                      <Button variant="outline" className="w-full" onClick={() => viewAssessment(assessment.id)}>
                        Continue Assessment
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="submitted" className="mt-0">
          {assessments.filter((a) => a.status === "submitted").length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
                <FileText className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-center text-muted-foreground mb-4">No submitted assessments.</p>
                <Button onClick={createNewAssessment}>
                  <Plus className="mr-2 h-4 w-4" /> Create New Assessment
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assessments
                .filter((a) => a.status === "submitted")
                .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
                .slice(0, 6)
                .map((assessment) => {
                  const property = properties.find((p) => p.id === assessment.propertyId)

                  return (
                    <Card key={assessment.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{assessment.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        {property && (
                          <div className="flex items-center gap-2 mb-2">
                            {getPropertyTypeIcon(property.type)}
                            <span className="text-sm">{property.name}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Submitted</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Submitted on: {format(assessment.submittedAt || assessment.updatedAt, "MMM d, yyyy")}
                        </p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <Button variant="outline" className="w-full" onClick={() => viewAssessment(assessment.id)}>
                          View Assessment
                        </Button>
                      </CardFooter>
                    </Card>
                  )
                })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
