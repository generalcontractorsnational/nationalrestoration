"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useProperty } from "@/contexts/property-context"
import { useAssessment, type NewAssessment } from "@/contexts/assessment-context"
import Link from "next/link"

export default function NewAssessmentForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { properties, getPropertyById, createProperty } = useProperty()
  const { createAssessment, setCurrentAssessment } = useAssessment()
  const [propertyId, setPropertyId] = useState<string>("")
  const [assessmentName, setAssessmentName] = useState<string>("")
  const [eventDate, setEventDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [eventType, setEventType] = useState<string>("")
  const [showPropertyForm, setShowPropertyForm] = useState(false)
  const [newProperty, setNewProperty] = useState({ address: "", type: "residential" })

  // Check for propertyId in URL params
  useEffect(() => {
    if (!searchParams) return

    const propertyIdParam = searchParams.get("propertyId")
    if (propertyIdParam) {
      setPropertyId(propertyIdParam)
    } else if (properties.length > 0) {
      setPropertyId(properties[0].id)
    }
  }, [searchParams, properties])

  const handleAddProperty = () => {
    setShowPropertyForm(true)
  }

  const handleSaveProperty = async () => {
    await createProperty(newProperty)
    setShowPropertyForm(false)
    setNewProperty({ address: "", type: "residential" })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!propertyId || !assessmentName || !eventDate || !eventType) {
      return
    }

    const property = getPropertyById(propertyId)
    if (!property) return

    const newAssessmentData: NewAssessment = {
      propertyId: propertyId,
      name: assessmentName,
      status: "draft",
      damageTypes: [],
      damageLocations: [],
      documentation: [],
      contactInfo: {
        name: "",
        email: "",
        phone: "",
        address: property.address,
      },
      weatherEvent: {
        type: eventType,
        date: new Date(eventDate),
        description: "",
      },
    }

    const assessment = createAssessment(newAssessmentData)
    setCurrentAssessment(assessment)
    router.push(`/storm-damage-assessment/${assessment.id}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Create New Assessment</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="propertyId" className="text-base sm:text-lg font-medium">
              Select Property
            </Label>
            <Select value={propertyId} onValueChange={setPropertyId}>
              <SelectTrigger className="w-full mt-2 h-12">
                <SelectValue placeholder="Select a property" />
              </SelectTrigger>
              <SelectContent>
                {properties.map((property) => (
                  <SelectItem key={property.id} value={property.id}>
                    {property.address}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/storm-damage-assessment/properties" className="text-primary hover:underline">
                Manage Properties
              </Link>
            </div>
            <div className="text-sm">
              <Button type="button" variant="outline" onClick={handleAddProperty} className="h-10">
                Add New Property
              </Button>
            </div>
          </div>

          {showPropertyForm && (
            <div className="border rounded-lg p-4 space-y-4 bg-muted/50">
              <h3 className="font-medium">New Property Details</h3>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={newProperty.address}
                  onChange={(e) => setNewProperty({ ...newProperty, address: e.target.value })}
                  className="mt-1 h-12"
                  required
                />
              </div>
              <div>
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={newProperty.type}
                  onValueChange={(value) => setNewProperty({ ...newProperty, type: value })}
                >
                  <SelectTrigger id="propertyType" className="mt-1 h-12">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="multi-family">Multi-Family</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setShowPropertyForm(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={handleSaveProperty}>
                  Save Property
                </Button>
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="assessmentName" className="text-base sm:text-lg font-medium">
              Assessment Name
            </Label>
            <Input
              id="assessmentName"
              value={assessmentName}
              onChange={(e) => setAssessmentName(e.target.value)}
              placeholder="e.g., Roof Damage After Storm 4/15"
              className="mt-2 h-12"
              required
            />
          </div>

          <div>
            <Label htmlFor="eventDate" className="text-base sm:text-lg font-medium">
              Event Date
            </Label>
            <Input
              id="eventDate"
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="mt-2 h-12"
              required
            />
          </div>

          <div>
            <Label htmlFor="eventType" className="text-base sm:text-lg font-medium">
              Event Type
            </Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger id="eventType" className="mt-2 h-12">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hail">Hail Storm</SelectItem>
                <SelectItem value="wind">Wind Storm</SelectItem>
                <SelectItem value="rain">Heavy Rain</SelectItem>
                <SelectItem value="snow">Snow/Ice</SelectItem>
                <SelectItem value="hurricane">Hurricane</SelectItem>
                <SelectItem value="tornado">Tornado</SelectItem>
                <SelectItem value="flood">Flood</SelectItem>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            className="w-full h-12"
            disabled={!propertyId || !assessmentName || !eventDate || !eventType}
          >
            Create Assessment
          </Button>
        </div>
      </form>
    </div>
  )
}
