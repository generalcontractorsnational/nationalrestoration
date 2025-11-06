"use client"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import type { DamageType } from "./storm-damage-assessment-tool"
import { Home, Droplets, Wind, Cloud, Snowflake } from "lucide-react"

// Define the damage type options
const DAMAGE_TYPES = [
  {
    id: "roof",
    label: "Roof Damage",
    description: "Missing shingles, damaged flashing, leaks, or visible holes",
    icon: <Home className="h-8 w-8 text-destructive" />,
  },
  {
    id: "siding",
    label: "Siding Damage",
    description: "Cracked, dented, loose, or missing siding panels",
    icon: <Wind className="h-8 w-8 text-amber-500" />,
  },
  {
    id: "windows",
    label: "Window Damage",
    description: "Broken glass, damaged frames, or leaking around windows",
    icon: <Cloud className="h-8 w-8 text-blue-500" />,
  },
  {
    id: "gutters",
    label: "Gutter Damage",
    description: "Detached, dented, or clogged gutters and downspouts",
    icon: <Droplets className="h-8 w-8 text-blue-700" />,
  },
  {
    id: "structural",
    label: "Structural Damage",
    description: "Damage to the foundation, walls, or structural components",
    icon: <Home className="h-8 w-8 text-gray-700" />,
  },
  {
    id: "water",
    label: "Water Damage",
    description: "Interior water damage, flooding, or moisture issues",
    icon: <Droplets className="h-8 w-8 text-blue-400" />,
  },
  {
    id: "other",
    label: "Other Damage",
    description: "Any other storm-related damage not listed above",
    icon: <Snowflake className="h-8 w-8 text-gray-500" />,
  },
]

interface DamageTypeSelectorProps {
  selectedTypes: DamageType[]
  onSelectionChange: (types: DamageType[]) => void
}

export default function DamageTypeSelector({ selectedTypes, onSelectionChange }: DamageTypeSelectorProps) {
  const handleCheckboxChange = (type: DamageType, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedTypes, type])
    } else {
      onSelectionChange(selectedTypes.filter((t) => t !== type))
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">What type of storm damage are you experiencing?</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Select all types of damage you've observed on your property.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {DAMAGE_TYPES.map((type) => (
          <Card
            key={type.id}
            className={`overflow-hidden transition-all ${
              selectedTypes.includes(type.id as DamageType) ? "ring-2 ring-primary ring-offset-2" : "hover:shadow-md"
            }`}
            onClick={() => {
              const isSelected = selectedTypes.includes(type.id as DamageType)
              handleCheckboxChange(type.id as DamageType, !isSelected)
            }}
          >
            <CardHeader className="p-4 flex flex-row items-center space-y-0 gap-4">
              <div className="p-2 rounded-md bg-muted">{type.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{type.label}</CardTitle>
                  <Checkbox
                    id={`damage-type-${type.id}`}
                    checked={selectedTypes.includes(type.id as DamageType)}
                    onCheckedChange={(checked) => handleCheckboxChange(type.id as DamageType, checked === true)}
                    className="h-5 w-5"
                  />
                </div>
                <CardDescription className="text-xs mt-1">{type.description}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
