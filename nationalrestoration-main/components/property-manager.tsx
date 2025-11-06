"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useProperty, type Property } from "@/contexts/property-context"
import { useAssessment } from "@/contexts/assessment-context"
import { Building, Home, Plus, Edit, Trash2, ClipboardList, AlertTriangle } from "lucide-react"
import { format } from "date-fns"

export default function PropertyManager() {
  const router = useRouter()
  const { properties, addProperty, updateProperty, deleteProperty } = useProperty()
  const { getAssessmentsByPropertyId } = useAssessment()
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    type: "residential" as "residential" | "commercial" | "other",
  })

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle property type selection
  const handleTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, type: value as "residential" | "commercial" | "other" }))
  }

  // Handle add property form submission
  const handleAddProperty = () => {
    addProperty(formData)
    setFormData({ name: "", address: "", type: "residential" })
    setIsAddDialogOpen(false)
  }

  // Handle edit property
  const handleEditProperty = (property: Property) => {
    setSelectedProperty(property)
    setFormData({
      name: property.name,
      address: property.address,
      type: property.type,
    })
    setIsEditDialogOpen(true)
  }

  // Handle edit property form submission
  const handleUpdateProperty = () => {
    if (selectedProperty) {
      updateProperty(selectedProperty.id, formData)
      setIsEditDialogOpen(false)
    }
  }

  // Handle delete property
  const handleDeleteProperty = (property: Property) => {
    setSelectedProperty(property)
    setIsDeleteDialogOpen(true)
  }

  // Confirm delete property
  const confirmDeleteProperty = () => {
    if (selectedProperty) {
      deleteProperty(selectedProperty.id)
      setIsDeleteDialogOpen(false)
    }
  }

  // Navigate to property detail page
  const navigateToPropertyDetail = (propertyId: string) => {
    router.push(`/storm-damage-assessment/properties/${propertyId}`)
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

  return (
    <div className="container py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Your Properties</h2>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Property
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Property Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g., My Home, Rental Property"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Property Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Full address"
                />
              </div>
              <div className="space-y-2">
                <Label>Property Type</Label>
                <RadioGroup value={formData.type} onValueChange={handleTypeChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential" id="residential" />
                    <Label htmlFor="residential" className="cursor-pointer">
                      Residential
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercial" id="commercial" />
                    <Label htmlFor="commercial" className="cursor-pointer">
                      Commercial
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">
                      Other
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleAddProperty} disabled={!formData.name || !formData.address}>
                Add Property
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {properties.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
            <Building className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-center text-muted-foreground mb-4">You haven't added any properties yet.</p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Your First Property
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => {
            const assessments = getAssessmentsByPropertyId(property.id)
            const pendingAssessments = assessments.filter((a) => a.status !== "submitted").length

            return (
              <Card key={property.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      {getPropertyTypeIcon(property.type)}
                      <CardTitle className="text-lg">{property.name}</CardTitle>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEditProperty(property)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive"
                        onClick={() => handleDeleteProperty(property)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">{property.address}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {assessments.length} {assessments.length === 1 ? "Assessment" : "Assessments"}
                    </span>
                    {pendingAssessments > 0 && (
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {pendingAssessments} Pending
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Added on {format(property.createdAt, "MMM d, yyyy")}
                  </p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full" onClick={() => navigateToPropertyDetail(property.id)}>
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      )}

      {/* Edit Property Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Property</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Property Name</Label>
              <Input
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., My Home, Rental Property"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-address">Property Address</Label>
              <Input
                id="edit-address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Full address"
              />
            </div>
            <div className="space-y-2">
              <Label>Property Type</Label>
              <RadioGroup value={formData.type} onValueChange={handleTypeChange}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="residential" id="edit-residential" />
                  <Label htmlFor="edit-residential" className="cursor-pointer">
                    Residential
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="commercial" id="edit-commercial" />
                  <Label htmlFor="edit-commercial" className="cursor-pointer">
                    Commercial
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="edit-other" />
                  <Label htmlFor="edit-other" className="cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleUpdateProperty} disabled={!formData.name || !formData.address}>
              Update Property
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Property Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Property</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p>
              Are you sure you want to delete <strong>{selectedProperty?.name}</strong>? This will also delete all
              assessments associated with this property.
            </p>
            <p className="text-destructive mt-2">This action cannot be undone.</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDeleteProperty}>
              Delete Property
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
