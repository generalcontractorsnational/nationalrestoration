"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ArrowLeft, Building, Home } from "lucide-react"
import { useAssessment } from "@/contexts/assessment-context"
import { useProperty } from "@/contexts/property-context"
import DamageTypeSelector from "@/components/damage-type-selector"
import DamageLocationMarker from "@/components/damage-location-marker"
import DamageDocumentation from "@/components/damage-documentation"
import DamageReport from "@/components/damage-report"
import DamageEducation from "@/components/damage-education"

// Define the assessment steps
const STEPS = [
  { id: "type", label: "Damage Type", icon: <AlertTriangle className="h-5 w-5" /> },
  { id: "location", label: "Damage Location", icon: <AlertTriangle className="h-5 w-5" /> },
  { id: "documentation", label: "Documentation", icon: <AlertTriangle className="h-5 w-5" /> },
  { id: "report", label: "Assessment Report", icon: <AlertTriangle className="h-5 w-5" /> },
]

export default function AssessmentDetail({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()
  const { getAssessmentById, updateAssessment, currentAssessment, setCurrentAssessment } = useAssessment()
  const { getPropertyById } = useProperty()
  const [currentStep, setCurrentStep] = useState(0)
  const [activeTab, setActiveTab] = useState(STEPS[0].id)
  const [property, setProperty] = useState<ReturnType<typeof getPropertyById>>(undefined)

  // Load assessment data
  useEffect(() => {
    const assessment = currentAssessment || getAssessmentById(assessmentId)

    if (assessment) {
      setCurrentAssessment(assessment)
      const propertyData = getPropertyById(assessment.propertyId)
      setProperty(propertyData)
    } else {
      // Assessment not found, redirect to assessment list
      router.push("/storm-damage-assessment")
    }
  }, [assessmentId, getAssessmentById, getPropertyById, currentAssessment, setCurrentAssessment, router])

  // Calculate progress percentage
  const progress = ((currentStep + 1) / STEPS.length) * 100

  // Handle next step
  const handleNextStep = () => {
    if (currentStep < STEPS.length - 1) {
      const nextStep = currentStep + 1
      setCurrentStep(nextStep)
      setActiveTab(STEPS[nextStep].id)
    }
  }

  // Handle previous step
  const handlePrevStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1
      setCurrentStep(prevStep)
      setActiveTab(STEPS[prevStep].id)
    }
  }

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    setCurrentStep(STEPS.findIndex((step) => step.id === value))
  }

  // Update assessment data
  const updateAssessmentData = (data: Partial<typeof currentAssessment>) => {
    if (currentAssessment) {
      updateAssessment(currentAssessment.id, data)
    }
  }

  // If assessment not loaded yet
  if (!currentAssessment) {
    return (
      <div className="container py-12">
        <Card>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
            <AlertTriangle className="h-10 w-10 text-amber-500 mb-4" />
            <p className="text-center text-muted-foreground mb-4">Loading assessment...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(`/storm-damage-assessment/properties/${currentAssessment.propertyId}`)}
              className="active-press md:flex hidden"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{currentAssessment.name}</h2>
          </div>
          {property && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {property.type === "residential" ? <Home className="h-4 w-4" /> : <Building className="h-4 w-4" />}
              <span className="hidden sm:inline">{property.name}</span>
              <span className="inline sm:hidden">
                {property.name.substring(0, 15)}
                {property.name.length > 15 ? "..." : ""}
              </span>
            </div>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-2">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="mb-4">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-4 w-full sticky top-0 z-10 bg-background rounded-t-lg">
              {STEPS.map((step) => (
                <TabsTrigger
                  key={step.id}
                  value={step.id}
                  className="flex items-center justify-center p-2 active-press"
                  aria-label={step.label}
                >
                  {step.icon}
                  <span className="sr-only md:not-sr-only md:ml-2 text-xs">{step.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="p-4 pt-6 pb-0">
              <h3 className="text-lg font-medium mb-2">{STEPS[currentStep].label}</h3>
            </div>
            <CardContent className="pt-0">
              <TabsContent value="type" className="mt-0">
                <DamageTypeSelector
                  selectedTypes={currentAssessment.damageTypes}
                  onSelectionChange={(types) => updateAssessmentData({ damageTypes: types })}
                />
              </TabsContent>
              <TabsContent value="location" className="mt-0">
                <DamageLocationMarker
                  damageTypes={currentAssessment.damageTypes}
                  locations={currentAssessment.damageLocations}
                  onLocationsChange={(locations) => updateAssessmentData({ damageLocations: locations })}
                />
              </TabsContent>
              <TabsContent value="documentation" className="mt-0">
                <DamageDocumentation
                  documentation={currentAssessment.documentation}
                  onDocumentationChange={(docs) => updateAssessmentData({ documentation: docs })}
                  contactInfo={currentAssessment.contactInfo}
                  onContactInfoChange={(info) => updateAssessmentData({ contactInfo: info })}
                />
              </TabsContent>
              <TabsContent value="report" className="mt-0">
                <DamageReport
                  assessmentData={{
                    damageTypes: currentAssessment.damageTypes,
                    damageLocations: currentAssessment.damageLocations,
                    documentation: currentAssessment.documentation,
                    contactInfo: currentAssessment.contactInfo,
                  }}
                  onSubmit={() =>
                    updateAssessment(currentAssessment.id, {
                      status: "submitted",
                      submittedAt: new Date(),
                    })
                  }
                />
              </TabsContent>
            </CardContent>
            <div className="flex justify-between p-6 pt-0 sticky bottom-0 bg-background border-t">
              <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 0} className="active-press">
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={currentStep === STEPS.length - 1} className="active-press">
                {currentStep === STEPS.length - 2 ? "Generate Report" : "Next"}
              </Button>
            </div>
          </Tabs>
        </Card>

        {/* Education panel - collapsed on mobile */}
        <details className="bg-muted rounded-lg mb-20 md:mb-8">
          <summary className="p-4 font-medium cursor-pointer active-press">View Damage Information</summary>
          <div className="p-4 pt-0">
            <DamageEducation selectedDamageTypes={currentAssessment.damageTypes} />
          </div>
        </details>
      </div>
    </div>
  )
}
