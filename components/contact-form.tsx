"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {
  withBackground?: boolean
  withShadow?: boolean
  labelSize?: "sm" | "md" | "lg"
}

export default function ContactForm({
  withBackground = false,
  withShadow = false,
  labelSize = "md",
  className,
  ...props
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Form submitted",
        description: "We'll be in touch with you shortly.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  const labelClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "space-y-4 sm:space-y-6",
        withBackground && "bg-card p-6 rounded-lg",
        withShadow && "shadow-md",
        className,
      )}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName" className={cn("font-medium", labelClasses[labelSize])}>
            First Name
          </Label>
          <Input id="firstName" name="firstName" required className="h-10 sm:h-11 bg-background" aria-required="true" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className={cn("font-medium", labelClasses[labelSize])}>
            Last Name
          </Label>
          <Input id="lastName" name="lastName" required className="h-10 sm:h-11 bg-background" aria-required="true" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className={cn("font-medium", labelClasses[labelSize])}>
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          className="h-10 sm:h-11 bg-background"
          aria-required="true"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className={cn("font-medium", labelClasses[labelSize])}>
          Phone
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          className="h-10 sm:h-11 bg-background"
          aria-required="true"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address" className={cn("font-medium", labelClasses[labelSize])}>
          Address
        </Label>
        <Input id="address" name="address" required className="h-10 sm:h-11 bg-background" aria-required="true" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service" className={cn("font-medium", labelClasses[labelSize])}>
          Service Interested In
        </Label>
        <Select name="service">
          <SelectTrigger className="h-10 sm:h-11 bg-background">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="roofing">Roofing</SelectItem>
            <SelectItem value="windows">Windows</SelectItem>
            <SelectItem value="siding">Siding</SelectItem>
            <SelectItem value="gutters">Gutters</SelectItem>
            <SelectItem value="storm-damage">Storm Damage</SelectItem>
            <SelectItem value="commercial">Commercial Services</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className={cn("font-medium", labelClasses[labelSize])}>
          Message
        </Label>
        <Textarea id="message" name="message" rows={4} className="min-h-[100px] bg-background" />
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="insurance" name="insurance" className="mt-1" />
        <Label htmlFor="insurance" className="text-xs sm:text-sm font-normal">
          I'm working with an insurance company for this project
        </Label>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="terms" name="terms" required className="mt-1" />
        <Label htmlFor="terms" className="text-xs sm:text-sm font-normal">
          I agree to the{" "}
          <a href="/terms" className="text-primary hover:underline focus-visible">
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit" className="w-full h-11 sm:h-12 mt-2 font-medium shadow-sm" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  )
}
