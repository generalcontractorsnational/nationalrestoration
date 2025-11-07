"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import type { DamageType, DamageLocation } from "./storm-damage-assessment-tool"
import { MapPin, Plus, X } from "lucide-react"

interface DamageLocationMarkerProps {
  damageTypes: DamageType[]
  locations: DamageLocation[]
  onLocationsChange: (locations: DamageLocation[]) => void
}

export default function DamageLocationMarker({ damageTypes, locations, onLocationsChange }: DamageLocationMarkerProps) {
  const [activeArea, setActiveArea] = useState<string>("exterior")
  const [newLocation, setNewLocation] = useState<Partial<DamageLocation>>({
    area: "exterior",
    notes: "",
    position: { x: 0, y: 0 },
  })
  const [isAddingMarker, setIsAddingMarker] = useState(false)

  // Areas of the home
  const areas = [
    { id: "exterior", label: "Exterior" },
    { id: "roof", label: "Roof" },
    { id: "interior", label: "Interior" },
    { id: "basement", label: "Basement" },
    { id: "garage", label: "Garage" },
    { id: "yard", label: "Yard/Property" },
  ]

  // Handle area change
  const handleAreaChange = (area: string) => {
    setActiveArea(area)
    setNewLocation((prev) => ({ ...prev, area }))
  }

  // Handle image click/touch to add marker
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isAddingMarker) return

    const rect = e.currentTarget.getBoundingClientRect()
    let clientX, clientY

    // Handle both mouse and touch events
    if ("touches" in e) {
      // Touch event
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      // Mouse event
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = ((clientX - rect.left) / rect.width) * 100
    const y = ((clientY - rect.top) / rect.height) * 100

    setNewLocation((prev) => ({
      ...prev,
      position: { x, y },
    }))
  }

  // Add a new damage location
  const addLocation = () => {
    if (newLocation.area && newLocation.position && newLocation.notes) {
      const location = newLocation as DamageLocation
      onLocationsChange([...locations, location])
      setNewLocation({
        area: activeArea,
        notes: "",
        position: { x: 0, y: 0 },
      })
      setIsAddingMarker(false)
    }
  }

  // Remove a damage location
  const removeLocation = (index: number) => {
    const updatedLocations = [...locations]
    updatedLocations.splice(index, 1)
    onLocationsChange(updatedLocations)
  }

  // Get image for the active area
  const getAreaImage = (area: string) => {
    switch (area) {
      case "exterior":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/newly-sided-home"
      case "roof":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/residential-roof-install"
      case "interior":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/cozy-reading-nook"
      case "basement":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/cozy-basement-living"
      case "garage":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/suburban-garage-organization"
      case "yard":
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/suburban-backyard-gathering"
      default:
        return "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/newly-sided-home"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Mark the locations of damage on your property</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select an area of your home, then click on the image to mark where the damage is located.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {areas.map((area) => (
          <Button
            key={area.id}
            variant={activeArea === area.id ? "default" : "outline"}
            size="sm"
            onClick={() => handleAreaChange(area.id)}
          >
            {area.label}
          </Button>
        ))}
      </div>

      <div className="relative">
        <div
          className="relative aspect-video bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${getAreaImage(activeArea)})` }}
          onClick={handleImageClick}
          onTouchStart={handleImageClick}
        >
          {/* Existing markers */}
          {locations
            .filter((loc) => loc.area === activeArea)
            .map((location, index) => (
              <div
                key={index}
                className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
                style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
              >
                <MapPin className="h-8 w-8 text-destructive" />
              </div>
            ))}

          {/* New marker being placed */}
          {isAddingMarker && newLocation.position && (
            <div
              className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center animate-pulse"
              style={{
                left: `${newLocation.position.x}%`,
                top: `${newLocation.position.y}%`,
              }}
            >
              <MapPin className="h-8 w-8 text-primary" />
            </div>
          )}

          {/* Overlay instructions */}
          {isAddingMarker && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white p-4 rounded-md shadow-lg">
                <p className="font-medium">Tap on the image to place a marker</p>
              </div>
            </div>
          )}
        </div>

        {/* Floating action button for adding markers */}
        {!isAddingMarker && (
          <Button
            onClick={() => setIsAddingMarker(true)}
            className="absolute bottom-4 right-4 rounded-full h-12 w-12 p-0 shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {isAddingMarker ? (
          <div className="space-y-4">
            <Textarea
              placeholder="Describe the damage at this location..."
              value={newLocation.notes || ""}
              onChange={(e) => setNewLocation((prev) => ({ ...prev, notes: e.target.value }))}
              className="h-24"
            />
            <div className="flex gap-2">
              <Button variant="destructive" onClick={() => setIsAddingMarker(false)} className="flex-1">
                <X className="mr-2 h-4 w-4" /> Cancel
              </Button>
              <Button onClick={addLocation} className="flex-1" disabled={!newLocation.notes}>
                Save Marker
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      {locations.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">Marked Damage Locations</h4>
          <div className="space-y-2">
            {locations.map((location, index) => (
              <Card key={index}>
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-sm font-medium">
                      {areas.find((a) => a.id === location.area)?.label || location.area}
                    </CardTitle>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => removeLocation(index)}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{location.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
