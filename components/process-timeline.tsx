"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, FileCheck, Hammer, ClipboardCheck, ArrowRight, Phone, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: "inspection",
      title: "Free Inspection",
      icon: <Search className="h-6 w-6 text-primary" />,
      description: "Comprehensive home inspection at no cost with detailed damage documentation.",
      details:
        "Our experienced specialists assess your property for storm damage, leaks, or other issues. We document everything with photos and detailed notes, then explain findings in plain language with no obligation.",
    },
    {
      id: "documentation",
      title: "Documentation Support",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      description: "Professional documentation and claim support assistance.",
      details:
        "We prepare thorough, itemized estimates using industry-standard software and provide comprehensive documentation including photos and damage reports to help your claim process go smoothly.",
    },
    {
      id: "adjuster",
      title: "Adjuster Meeting",
      icon: <Handshake className="h-6 w-6 text-primary" />,
      description: "We coordinate with your insurance adjuster for proper damage assessment.",
      details:
        "Our project manager can attend the adjuster's inspection at your request, walking through all damage areas to ensure nothing is missed and providing technical expertise about necessary repairs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bDCwBO2AL3ZXZerw4E4b66UNMvecQE.png",
      imageAlt: "Contractor and insurance adjuster meeting at residential property",
    },
    {
      id: "restoration",
      title: "Restoration Work",
      icon: <Hammer className="h-6 w-6 text-primary" />,
      description: "Licensed, bonded, and insured team completes quality repairs.",
      details:
        "We handle all permits, use high-quality materials, and complete most projects in just a few days while following all safety guidelines. No surprise costs – work stays within insurance budget.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QmzHdNU1NraBnQGMJ3agqo1TGbO9dG.png",
      imageAlt: "Construction crew working on residential property at dusk",
    },
    {
      id: "completion",
      title: "Completion & Warranty",
      icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
      description: "Thorough cleanup, final walkthrough, and comprehensive warranty coverage.",
      details:
        "We perform detailed final inspection, walk through every repair with you, help with remaining insurance paperwork, and provide our 5-year workmanship warranty (10-year on roof replacements).",
    },
    {
      id: "support",
      title: "Ongoing Support",
      icon: <Phone className="h-6 w-6 text-primary" />,
      description: "Continued support and follow-up after project completion.",
      details:
        "We check in after completion to ensure everything is working perfectly, register all warranties, provide maintenance guidance, and offer priority service for any future needs.",
    },
  ]

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <span className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-2 sm:mb-3">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground text-balance">
            From Claim to Completion
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our streamlined process ensures a hassle-free experience from initial consultation to project completion.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-6 sm:mb-8">
          <div className="absolute top-12 left-0 right-0 h-1 bg-border hidden lg:block" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full mx-auto flex items-center justify-center transition-all ${
                    activeStep === index
                      ? "bg-primary text-white shadow-xl scale-110"
                      : "bg-card text-primary border-2 border-border hover:border-primary/50 surface-elevated"
                  }`}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <div className="flex flex-col items-center">
                    {step.icon}
                    <span className="font-bold mt-1 text-sm sm:text-base">{index + 1}</span>
                  </div>
                </button>

                <h3
                  className={`text-center font-semibold text-xs sm:text-sm md:text-sm mt-2 sm:mt-3 ${
                    activeStep === index ? "text-primary" : "text-foreground"
                  }`}
                >
                  {step.title}
                </h3>

                <p className="text-center text-muted-foreground text-xs mt-2 md:hidden line-clamp-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-muted/30 rounded-xl p-3 sm:p-4 md:p-6 max-w-3xl mx-auto surface-elevated border"
        >
          {steps[activeStep].image && (
            <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden shadow-premium-lg">
              <img
                src={steps[activeStep].image || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
                alt={steps[activeStep].imageAlt || steps[activeStep].title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-primary text-white flex-shrink-0 shadow-md">
              {steps[activeStep].icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{steps[activeStep].title}</h3>
          </div>
          <p className="text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4 text-pretty">
            {steps[activeStep].details}
          </p>
          <div className="flex justify-end">
            <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
              <Link href="/about/process">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
