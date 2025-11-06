"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { generateId } from "@/lib/utils"
import type { DamageType, DamageLocation, DamageDocumentationItem } from "@/components/storm-damage-assessment-tool"

export type Assessment = {
  id: string
  propertyId: string
  name: string
  status: "draft" | "completed" | "submitted"
  damageTypes: DamageType[]
  damageLocations: DamageLocation[]
  documentation: DamageDocumentationItem[]
  contactInfo: {
    name: string
    email: string
    phone: string
    address: string
  }
  createdAt: Date
  updatedAt: Date
  submittedAt?: Date
  weatherEvent?: {
    type: string
    date: Date
    description: string
  }
}

export type NewAssessment = Omit<Assessment, "id" | "createdAt" | "updatedAt">

export type AssessmentContextType = {
  assessments: Assessment[]
  currentAssessment: Assessment | null
  setCurrentAssessment: (assessment: Assessment | null) => void
  createAssessment: (assessment: NewAssessment) => Assessment
  updateAssessment: (id: string, assessment: Partial<Assessment>) => void
  deleteAssessment: (id: string) => void
  getAssessmentsByPropertyId: (propertyId: string) => Assessment[]
  getAssessmentById: (id: string) => Assessment | undefined
  submitAssessment: (id: string) => void
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined)

export function AssessmentProvider({ children }: { children: React.ReactNode }) {
  const [assessments, setAssessments] = useLocalStorage<Assessment[]>("assessments", [])
  const [currentAssessment, setCurrentAssessment] = useState<Assessment | null>(null)

  // Create a new assessment
  const createAssessment = (assessmentData: NewAssessment) => {
    const newAssessment: Assessment = {
      ...assessmentData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setAssessments((prev) => [...prev, newAssessment])
    return newAssessment
  }

  // Update an existing assessment
  const updateAssessment = (id: string, assessmentData: Partial<Assessment>) => {
    setAssessments((prev) =>
      prev.map((assessment) => {
        if (assessment.id === id) {
          return {
            ...assessment,
            ...assessmentData,
            updatedAt: new Date(),
          }
        }
        return assessment
      }),
    )

    // Update current assessment if it's the one being edited
    if (currentAssessment?.id === id) {
      setCurrentAssessment({
        ...currentAssessment,
        ...assessmentData,
        updatedAt: new Date(),
      })
    }
  }

  // Delete an assessment
  const deleteAssessment = (id: string) => {
    setAssessments((prev) => prev.filter((assessment) => assessment.id !== id))

    // If the deleted assessment is the current one, clear the current assessment
    if (currentAssessment?.id === id) {
      setCurrentAssessment(null)
    }
  }

  // Get assessments for a specific property
  const getAssessmentsByPropertyId = (propertyId: string) => {
    return assessments.filter((assessment) => assessment.propertyId === propertyId)
  }

  // Get a specific assessment by ID
  const getAssessmentById = (id: string) => {
    return assessments.find((assessment) => assessment.id === id)
  }

  // Submit an assessment
  const submitAssessment = (id: string) => {
    updateAssessment(id, {
      status: "submitted",
      submittedAt: new Date(),
    })
  }

  return (
    <AssessmentContext.Provider
      value={{
        assessments,
        currentAssessment,
        setCurrentAssessment,
        createAssessment,
        updateAssessment,
        deleteAssessment,
        getAssessmentsByPropertyId,
        getAssessmentById,
        submitAssessment,
      }}
    >
      {children}
    </AssessmentContext.Provider>
  )
}

export function useAssessment() {
  const context = useContext(AssessmentContext)
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider")
  }
  return context
}
