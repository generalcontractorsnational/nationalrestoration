"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { generateId } from "@/lib/utils"

export type Property = {
  id: string
  name: string
  address: string
  type: "residential" | "commercial" | "other"
  image?: string
  createdAt: Date
  updatedAt: Date
}

export type PropertyContextType = {
  properties: Property[]
  currentProperty: Property | null
  setCurrentProperty: (property: Property | null) => void
  addProperty: (property: Omit<Property, "id" | "createdAt" | "updatedAt">) => Property
  updateProperty: (id: string, property: Partial<Omit<Property, "id" | "createdAt" | "updatedAt">>) => void
  deleteProperty: (id: string) => void
  getPropertyById: (id: string) => Property | undefined
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined)

// Create a flag in window to track initialization
const INIT_FLAG = "__PROPERTY_PROVIDER_INITIALIZED__"

export function PropertyProvider({ children }: { children: React.ReactNode }) {
  // Initialize properties from localStorage
  const [properties, setProperties] = useLocalStorage<Property[]>("properties", [])

  // Initialize currentProperty as null
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null)

  // Initialize with a default property if none exist
  useEffect(() => {
    // Check if we've already initialized to prevent loops
    if (typeof window !== "undefined" && !(window as any)[INIT_FLAG]) {
      ;(window as any)[INIT_FLAG] = true

      if (properties.length === 0) {
        const defaultProperty: Property = {
          id: generateId(),
          name: "My Primary Residence",
          address: "123 Main St, Anytown, USA",
          type: "residential",
          createdAt: new Date(),
          updatedAt: new Date(),
        }

        // Set the default property
        setProperties([defaultProperty])
      }
    }
  }, []) // Empty dependency array - only run once on mount

  // Set current property when properties change
  useEffect(() => {
    if (properties.length > 0 && !currentProperty) {
      setCurrentProperty(properties[0])
    }
  }, [properties, currentProperty])

  const addProperty = (propertyData: Omit<Property, "id" | "createdAt" | "updatedAt">) => {
    const newProperty: Property = {
      ...propertyData,
      id: generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    setProperties((prev) => [...prev, newProperty])
    return newProperty
  }

  const updateProperty = (id: string, propertyData: Partial<Omit<Property, "id" | "createdAt" | "updatedAt">>) => {
    setProperties((prev) =>
      prev.map((property) => {
        if (property.id === id) {
          return {
            ...property,
            ...propertyData,
            updatedAt: new Date(),
          }
        }
        return property
      }),
    )

    // Update current property if it's the one being edited
    if (currentProperty?.id === id) {
      setCurrentProperty({
        ...currentProperty,
        ...propertyData,
        updatedAt: new Date(),
      })
    }
  }

  const deleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((property) => property.id !== id))

    // If the deleted property is the current one, set the first available property as current
    if (currentProperty?.id === id) {
      const remainingProperties = properties.filter((property) => property.id !== id)
      setCurrentProperty(remainingProperties.length > 0 ? remainingProperties[0] : null)
    }
  }

  const getPropertyById = (id: string) => {
    return properties.find((property) => property.id === id)
  }

  return (
    <PropertyContext.Provider
      value={{
        properties,
        currentProperty,
        setCurrentProperty,
        addProperty,
        updateProperty,
        deleteProperty,
        getPropertyById,
      }}
    >
      {children}
    </PropertyContext.Provider>
  )
}

export function useProperty() {
  const context = useContext(PropertyContext)
  if (context === undefined) {
    throw new Error("useProperty must be used within a PropertyProvider")
  }
  return context
}
