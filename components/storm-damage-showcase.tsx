"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"
import BeforeAfterSlider from "./before-after-slider"

export default function StormDamageShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: "roof", label: "Roof Damage" },
    { id: "siding", label: "Siding Repair" },
    { id: "water", label: "Water Damage" },
  ]

  const tabContent = [
    {
      title: "Roof Storm Damage Restoration",
      description:
        "Our expert team quickly secures and restores roofs damaged by storms, preventing further damage to your property.",
      beforeImage: "/images/before-after/roof-damage-before.jpg",
      afterImage: "/images/before-after/roof-damage-after.jpg",
      features: [
        "Emergency tarping to prevent water infiltration",
        "Complete damage assessment and documentation",
        "Insurance claim assistance and coordination",
        "High-quality materials and expert installation",
      ],
    },
    {
      title: "Siding Storm Damage Repair",
      description:
        "From hail impacts to wind damage, we restore your home's exterior to protect and beautify your property.",
      beforeImage: "/images/before-after/siding-damage-before.jpg",
      afterImage: "/images/before-after/siding-damage-after.jpg",
      features: [
        "Comprehensive siding damage assessment",
        "Color and style matching for seamless repairs",
        "Energy-efficient replacement options",
        "Complete exterior restoration services",
      ],
    },
    {
      title: "Water Damage Restoration",
      description:
        "Our rapid response team mitigates water damage and restores your property to pre-loss condition quickly and efficiently.",
      beforeImage: "/images/before-after/water-damage-before.jpg",
      afterImage: "/images/before-after/water-damage-after.jpg",
      features: [
        "24/7 emergency water extraction",
        "Professional drying and dehumidification",
        "Mold prevention and remediation",
        "Complete structural repairs and restoration",
      ],
    },
  ]

  // Ensure we have valid image sources
  const beforeImage =
    tabContent[activeTab].beforeImage && tabContent[activeTab].beforeImage.trim() !== ""
      ? tabContent[activeTab].beforeImage
      : "/storm-damaged-house.png"

  const afterImage =
    tabContent[activeTab].afterImage && tabContent[activeTab].afterImage.trim() !== ""
      ? tabContent[activeTab].afterImage
      : "/restored-historic-home.png"

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block bg-destructive/10 text-destructive text-sm font-medium px-3 py-1 rounded-full mb-4">
            Emergency Response
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Storm Damage Restoration</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            When disaster strikes, our rapid response team is ready 24/7 to secure your property and begin the
            restoration process.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === index
                    ? "bg-white text-destructive shadow-sm font-medium"
                    : "text-gray-600 hover:text-destructive"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            key={`content-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{tabContent[activeTab].title}</h3>
            <p className="text-gray-600 mb-4">{tabContent[activeTab].description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-900">Key Features</h4>
              <ul className="space-y-2">
                {tabContent[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-destructive hover:bg-destructive/90">
                <Link href="/services/storm-damage">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-destructive/50 text-destructive hover:bg-destructive/5 bg-transparent"
              >
                <a href="tel:1-800-737-8673">
                  <Phone className="mr-2 h-4 w-4" /> Emergency Hotline
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            key={`slider-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeAlt="Before restoration"
              afterAlt="After restoration"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
