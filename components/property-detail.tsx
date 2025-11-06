"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useProperty } from "@/contexts/property-context"
import { useAssessment, type Assessment } from "@/contexts/assessment-context"
import { Building, Home, Plus, FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { format } from "date-fns"

export default function PropertyDetail({ propertyId }: { propertyId: string }) {
  const router = useRouter()
  const { getPropertyById } = useProperty()
  const { getAssessmentsByPropertyId, setCurrentAssessment } = useAssessment()
  const [property, setProperty] = useState<ReturnType<typeof getPropertyById>>(undefined)
  const [assessments, setAssessments] = useState<Assessment[]>([])
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    const propertyData = getPropertyById(propertyId)
    setProperty(propertyData)

    if (propertyData) {
      const propertyAssessments = getAssessmentsByPropertyId(propertyId)
      setAssessments(propertyAssessments)
    }
  }, [propertyId, getPropertyById, getAssessmentsByPropertyId])

  // Filter assessments based on active tab
  const filteredAssessments = assessments.filter((assessment) => {
    if (activeTab === "all") return true
    if (activeTab === "draft") return assessment.status === "draft"
    if (activeTab === "completed") return assessment.status === "completed"
    if (activeTab === "submitted") return assessment.status === "submitted"
    return true
  })

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

  // Get assessment status label
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "draft":
        return "Draft"
      case "completed":
        return "Completed"
      case "submitted":
        return "Submitted"
      default:
        return "Unknown"
    }
  }

  // Create a new assessment for this property
  const createNewAssessment = () => {
    router.push(`/storm-damage-assessment/new?propertyId=${propertyId}`)
  }

  // View an assessment
  const viewAssessment = (assessment: Assessment) => {
    setCurrentAssessment(assessment)
    router.push(`/storm-damage-assessment/${assessment.id}`)
  }

  // If property not found
  if (!property) {
    return (
      <div className="container py-12">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
            <AlertTriangle className="h-10 w-10 text-amber-500 mb-4" />
            <p className="text-center text-muted-foreground mb-4">Property not found.</p>
            <Button onClick={() => router.push("/storm-damage-assessment/properties")}>Back to Properties</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-2">
            {getPropertyTypeIcon(property.type)}
            <CardTitle>{property.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{property.address}</p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div>
              <p className="text-sm text-muted-foreground">Property Type</p>
              <p className="font-medium capitalize">{property.type}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Added On</p>
              <p className="font-medium">{format(property.createdAt, "MMM d, yyyy")}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Assessments</p>
              <p className="font-medium">{assessments.length}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={createNewAssessment}>
            <Plus className="mr-2 h-4 w-4" /> Create New Assessment
          </Button>
        </CardFooter>
      </Card>

      <div className="mb-4">
        <h3 className="text-2xl font-bold tracking-tight">Assessments</h3>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          {filteredAssessments.length === 0 ? (
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
              {filteredAssessments.map((assessment) => (
                <Card key={assessment.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{assessment.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(assessment.status)}
                      <span className="text-sm">{getStatusLabel(assessment.status)}</span>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">
                        Created: {format(assessment.createdAt, "MMM d, yyyy")}
                      </p>
                      {assessment.submittedAt && (
                        <p className="text-xs text-muted-foreground">
                          Submitted: {format(assessment.submittedAt, "MMM d, yyyy")}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {assessment.damageTypes.map((type, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full" onClick={() => viewAssessment(assessment)}>
                      View Assessment
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
