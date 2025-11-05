"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import DamageTypeSelector from "@/components/damage-type-selector"
import DamageLocationMarker from "@/components/damage-location-marker"
import DamageDocumentation from "@/components/damage-documentation"
import DamageReport from "@/components/damage-report"
import DamageEducation from "@/components/damage-education"
import { AlertTriangle, Camera, FileText, MapPin } from "lucide-react"
import { useLocalStorage } from "@/hooks/use-local-storage"

// Define the assessment steps
const STEPS = [
  { id: "type", label: "Damage Type", icon: <AlertTriangle className="h-5 w-5" /> },
  { id: "location", label: "Damage Location", icon: <MapPin className="h-5 w-5" /> },
  { id: "documentation", label: "Documentation", icon: <Camera className="h-5 w-5" /> },
  { id: "report", label: "Assessment Report", icon: <FileText className="h-5 w-5" /> },
]

// Define the damage types
export type DamageType = "roof" | "siding" | "windows" | "gutters" | "structural" | "water" | "other"

// Define the damage location
export type DamageLocation = {
  area: string
  position: { x: number; y: number }
  notes: string
}

// Define the damage documentation
export type DamageDocumentationItem = {
  id: string
  type: "photo" | "note" | "voice"
  content: string
  timestamp: Date
  duration?: number // for voice recordings
  location?: {
    latitude: number
    longitude: number
  }
  analysis?: {
    severity: "low" | "medium" | "high"
    severityScore: number
    details: string
    recommendations: string
    timestamp: string
  }
}

// Define the assessment data
export type AssessmentData = {
  damageTypes: DamageType[]
  damageLocations: DamageLocation[]
  documentation: DamageDocumentationItem[]
  contactInfo: {
    name: string
    email: string
    phone: string
    address: string
  }
}

export default function StormDamageAssessmentTool() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeTab, setActiveTab] = useState(STEPS[0].id)
  const [assessmentData, setAssessmentData] = useLocalStorage<AssessmentData>("storm-damage-assessment", {
    damageTypes: [],
    damageLocations: [],
    documentation: [],
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  })

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
  const updateAssessmentData = (data: Partial<AssessmentData>) => {
    setAssessmentData((prev) => ({ ...prev, ...data }))
  }

  useEffect(() => {
    // Update the URL hash to enable back button navigation
    window.location.hash = STEPS[currentStep].id

    // Listen for hash changes (browser back/forward)
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      const stepIndex = STEPS.findIndex((step) => step.id === hash)
      if (stepIndex >= 0) {
        setCurrentStep(stepIndex)
        setActiveTab(STEPS[stepIndex].id)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [currentStep])

  return (
    <div className="container py-12">
      <div className="mb-8 flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight">Storm Damage Assessment Tool</h2>
        <p className="text-muted-foreground">
          Follow the steps below to identify, document, and report storm damage to your property.
        </p>

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
        <Card>
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              {STEPS.map((step) => (
                <TabsTrigger key={step.id} value={step.id} className="flex items-center justify-center p-2">
                  {step.icon}
                  <span className="sr-only">{step.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="p-4 pt-6 pb-0">
              <h3 className="text-lg font-medium mb-2">{STEPS[currentStep].label}</h3>
            </div>
            <CardContent className="pt-0">
              <TabsContent value="type" className="mt-0">
                <DamageTypeSelector
                  selectedTypes={assessmentData.damageTypes}
                  onSelectionChange={(types) => updateAssessmentData({ damageTypes: types })}
                />
              </TabsContent>
              <TabsContent value="location" className="mt-0">
                <DamageLocationMarker
                  damageTypes={assessmentData.damageTypes}
                  locations={assessmentData.damageLocations}
                  onLocationsChange={(locations) => updateAssessmentData({ damageLocations: locations })}
                />
              </TabsContent>
              <TabsContent value="documentation" className="mt-0">
                <DamageDocumentation
                  documentation={assessmentData.documentation}
                  onDocumentationChange={(docs) => updateAssessmentData({ documentation: docs })}
                  contactInfo={assessmentData.contactInfo}
                  onContactInfoChange={(info) => updateAssessmentData({ contactInfo: info })}
                />
              </TabsContent>
              <TabsContent value="report" className="mt-0">
                <DamageReport assessmentData={assessmentData} />
              </TabsContent>
            </CardContent>
            <div className="flex justify-between p-6 pt-0 sticky bottom-0 bg-background border-t">
              <Button variant="outline" onClick={handlePrevStep} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button onClick={handleNextStep} disabled={currentStep === STEPS.length - 1}>
                {currentStep === STEPS.length - 2 ? "Generate Report" : "Next"}
              </Button>
            </div>
          </Tabs>
        </Card>

        {/* Education panel - collapsed on mobile */}
        <details className="bg-muted rounded-lg">
          <summary className="p-4 font-medium cursor-pointer">View Damage Information</summary>
          <div className="p-4 pt-0">
            <DamageEducation selectedDamageTypes={assessmentData.damageTypes} />
          </div>
        </details>
      </div>
    </div>
  )
}
