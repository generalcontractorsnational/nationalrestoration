"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { DamageType } from "./storm-damage-assessment-tool"
import { AlertTriangle, Droplets, Home, Info, Wind } from "lucide-react"

interface DamageEducationProps {
  selectedDamageTypes: DamageType[]
}

export default function DamageEducation({ selectedDamageTypes }: DamageEducationProps) {
  // Damage type information
  const damageInfo = {
    roof: {
      title: "Roof Damage",
      icon: <Home className="h-5 w-5 text-destructive" />,
      description:
        "Roof damage can range from missing shingles to structural issues. Look for missing, curled, or damaged shingles, exposed underlayment, or water stains on ceilings.",
      severity: [
        {
          level: "Minor",
          description: "A few missing or damaged shingles, minor leaks",
          action: "Document and schedule a professional inspection",
        },
        {
          level: "Moderate",
          description: "Multiple missing shingles, visible water damage, damaged flashing",
          action: "Cover damaged areas with tarp if possible, contact a professional immediately",
        },
        {
          level: "Severe",
          description: "Structural damage, large holes, collapsed sections",
          action: "Evacuate if unsafe, contact emergency services and a professional immediately",
        },
      ],
    },
    siding: {
      title: "Siding Damage",
      icon: <Wind className="h-5 w-5 text-amber-500" />,
      description:
        "Siding protects your home from the elements. Look for cracks, dents, holes, or sections that are loose or missing entirely.",
      severity: [
        {
          level: "Minor",
          description: "Small cracks or dents, minor discoloration",
          action: "Document and monitor for worsening conditions",
        },
        {
          level: "Moderate",
          description: "Loose panels, holes, significant dents or cracks",
          action: "Secure loose panels if possible, schedule professional repairs",
        },
        {
          level: "Severe",
          description: "Large sections missing, exposed wall structure",
          action: "Cover exposed areas if possible, contact a professional immediately",
        },
      ],
    },
    windows: {
      title: "Window Damage",
      icon: <Home className="h-5 w-5 text-blue-500" />,
      description:
        "Window damage can lead to water infiltration and security issues. Check for cracks, broken glass, damaged frames, or leaks around windows.",
      severity: [
        {
          level: "Minor",
          description: "Small cracks, minor leaks around frame",
          action: "Seal small leaks temporarily, document damage",
        },
        {
          level: "Moderate",
          description: "Cracked glass, damaged frame, significant leaks",
          action: "Cover broken glass with plywood, contact a professional",
        },
        {
          level: "Severe",
          description: "Shattered glass, frame separation from wall",
          action: "Secure the area, cover opening, contact a professional immediately",
        },
      ],
    },
    gutters: {
      title: "Gutter Damage",
      icon: <Droplets className="h-5 w-5 text-blue-700" />,
      description:
        "Gutters direct water away from your home. Look for detached sections, dents, clogs, or improper drainage.",
      severity: [
        {
          level: "Minor",
          description: "Clogs, minor misalignment, small dents",
          action: "Clear clogs, document damage for future repair",
        },
        {
          level: "Moderate",
          description: "Sections pulling away from roof, significant dents",
          action: "Secure loose sections if possible, schedule professional repairs",
        },
        {
          level: "Severe",
          description: "Completely detached sections, major structural issues",
          action: "Remove hazardous hanging sections, contact a professional",
        },
      ],
    },
    structural: {
      title: "Structural Damage",
      icon: <Home className="h-5 w-5 text-gray-700" />,
      description:
        "Structural damage affects the integrity of your home. Look for shifted foundations, cracked walls, or sagging rooflines.",
      severity: [
        {
          level: "Minor",
          description: "Hairline cracks in walls, minor settling",
          action: "Document and monitor for changes",
        },
        {
          level: "Moderate",
          description: "Visible wall cracks, door/window misalignment",
          action: "Contact a structural engineer for assessment",
        },
        {
          level: "Severe",
          description: "Major foundation shifts, wall separation, roof sagging",
          action: "Evacuate if unsafe, contact emergency services immediately",
        },
      ],
    },
    water: {
      title: "Water Damage",
      icon: <Droplets className="h-5 w-5 text-blue-400" />,
      description:
        "Water damage can lead to mold and structural issues. Look for water stains, dampness, musty odors, or standing water.",
      severity: [
        {
          level: "Minor",
          description: "Small water stains, minor dampness",
          action: "Dry affected areas, monitor for mold growth",
        },
        {
          level: "Moderate",
          description: "Larger water stains, wet drywall, minor flooding",
          action: "Remove standing water, use fans/dehumidifiers, contact a professional",
        },
        {
          level: "Severe",
          description: "Significant flooding, saturated walls/ceilings",
          action: "Turn off electricity if safe, contact water damage specialists immediately",
        },
      ],
    },
    other: {
      title: "Other Damage",
      icon: <AlertTriangle className="h-5 w-5 text-gray-500" />,
      description:
        "Other types of storm damage might include landscape damage, fence damage, or damage to outbuildings.",
      severity: [
        {
          level: "Minor",
          description: "Cosmetic damage, minor debris",
          action: "Document and clean up when safe",
        },
        {
          level: "Moderate",
          description: "Fallen tree limbs, damaged fences",
          action: "Remove hazards if safe, contact appropriate professionals",
        },
        {
          level: "Severe",
          description: "Fallen trees on structures, major landscape destruction",
          action: "Stay clear of hazards, contact emergency services if needed",
        },
      ],
    },
  }

  // Filter damage info based on selected types
  const relevantDamageInfo = selectedDamageTypes.length
    ? selectedDamageTypes.map((type) => damageInfo[type])
    : Object.values(damageInfo)

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Info className="h-5 w-5" />
            Damage Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          {relevantDamageInfo.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {relevantDamageInfo.map((info, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="flex items-center gap-2">
                    {info.icon}
                    <span>{info.title}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <p className="text-sm">{info.description}</p>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Severity Levels:</h4>
                        {info.severity.map((level, idx) => (
                          <div key={idx} className="border rounded-md p-2">
                            <p className="text-sm font-medium">{level.level}</p>
                            <p className="text-xs text-muted-foreground">{level.description}</p>
                            <p className="text-xs font-medium mt-1">Action: {level.action}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-4">
              <p className="text-muted-foreground">Select damage types to see relevant information</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Documentation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>Take photos from multiple angles</li>
            <li>Include close-ups and wide shots to show context</li>
            <li>Use a ruler or tape measure in photos to show size</li>
            <li>Document the date and time of the damage</li>
            <li>Note weather conditions when damage occurred</li>
            <li>Take "before" photos if you have them</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
