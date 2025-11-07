"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Cloud, Building, Umbrella, Wrench, ArrowRight, Sun } from "lucide-react"

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: "storm",
      title: "Storm Damage",
      icon: <Cloud className="h-5 w-5 sm:h-6 sm:w-6" />,
      description:
        "Emergency response and comprehensive restoration for properties damaged by storms, hail, wind, and water.",
      image: "/images/projects/storm-tree-damage-street.jpg",
      link: "/services/storm-damage",
      features: ["24/7 Emergency Response", "Insurance Specialists", "Temporary Repairs", "Complete Restoration"],
      gallery: [
        {
          src: "/images/projects/storm-hail-damage-closeup.png",
          alt: "Close-up of hail damage on asphalt shingles with hailstones",
          caption: "Hail Damage",
        },
        {
          src: "/images/projects/storm-emergency-tarp-installation.jpg",
          alt: "Workers installing emergency blue tarp on storm-damaged residential roof",
          caption: "Emergency Protection",
        },
        {
          src: "/images/projects/storm-roof-damage-inspection.jpg",
          alt: "Professional inspector examining storm damage on residential roof",
          caption: "Damage Assessment",
        },
        {
          src: "/images/projects/storm-restored-home-golden-hour.jpg",
          alt: "Beautifully restored suburban home at golden hour after storm repairs",
          caption: "Full Restoration",
        },
      ],
    },
    {
      id: "roofing",
      title: "Roofing Services",
      icon: <Home className="h-6 w-6" />,
      description:
        "Complete roofing solutions including repairs, replacements, and new installations for all roofing types.",
      image: "/images/projects/commercial-metal-roof-standing-seam.jpg",
      link: "/services/roofing",
      features: ["Asphalt Shingles", "Metal Roofing", "Flat Roofs", "Slate & Tile"],
      gallery: [
        {
          src: "/images/projects/commercial-mixed-roofing-aerial.jpg",
          alt: "Aerial view of commercial buildings with various roofing types",
          caption: "Commercial Roofing",
        },
        {
          src: "/images/projects/commercial-flat-roof-tpo-install.jpg",
          alt: "Professional crew installing TPO flat roof on commercial building",
          caption: "Flat Roof Systems",
        },
        {
          src: "/images/projects/residential-shingle-crew-work.jpg",
          alt: "Expert crew installing asphalt shingles on residential roof",
          caption: "Residential Roofing",
        },
        {
          src: "/images/projects/residential-slate-tile-luxury.jpg",
          alt: "Luxury home slate and tile roof installation",
          caption: "Premium Materials",
        },
      ],
    },
    {
      id: "siding",
      title: "Siding & Exteriors",
      icon: <Umbrella className="h-6 w-6" />,
      description:
        "Durable, beautiful siding options including vinyl, fiber cement, and engineered wood to protect and enhance your property.",
      image: "/images/projects/siding-gray-farmhouse.jpg",
      link: "/services/siding",
      features: ["Vinyl Siding", "Fiber Cement", "Engineered Wood", "Exterior Trim"],
      gallery: [
        {
          src: "/images/projects/siding-worker-installation.jpg",
          alt: "Contractor installing white vertical siding panels on residential exterior",
          caption: "Expert Installation",
        },
        {
          src: "/images/projects/siding-beige-craftsman.jpg",
          alt: "Beige craftsman home with vertical siding and white trim",
          caption: "Classic Elegance",
        },
        {
          src: "/images/projects/siding-beige-colonial-home.jpg",
          alt: "Beige colonial home with contractor truck showing siding project",
          caption: "Traditional Style",
        },
        {
          src: "/images/projects/siding-wood-tone-modern.jpg",
          alt: "Modern wood-tone vertical siding home with contractor truck",
          caption: "Premium Options",
        },
      ],
    },
    {
      id: "commercial",
      title: "Commercial Services",
      icon: <Building className="h-6 w-6" />,
      description:
        "Specialized restoration and contracting services for office buildings, retail centers, and industrial facilities.",
      image: "/images/projects/commercial-mixed-use-development.jpg",
      link: "/services/commercial",
      features: ["Multi-Family Housing", "Office Buildings", "Retail Centers", "Industrial Facilities"],
      gallery: [
        {
          src: "/images/projects/commercial-multifamily-apartment.jpg",
          alt: "Modern multi-family apartment building under construction with contractor van",
          caption: "Multi-Family Housing",
        },
        {
          src: "/images/projects/commercial-office-facade-work.jpg",
          alt: "Office building facade restoration with construction crew and equipment",
          caption: "Office Buildings",
        },
        {
          src: "/images/projects/commercial-retail-mertil-center.jpg",
          alt: "Retail center exterior maintenance and restoration work in progress",
          caption: "Retail Centers",
        },
        {
          src: "/images/projects/commercial-industrial-warehouse.jpg",
          alt: "Industrial warehouse facility with workers performing exterior restoration",
          caption: "Industrial Facilities",
        },
      ],
    },
    {
      id: "restoration",
      title: "Restoration Services",
      icon: <Wrench className="h-6 w-6" />,
      description:
        "Complete property restoration services for fire, water, and structural damage with expert craftsmanship and attention to detail.",
      image: "/images/projects/restoration-fire-water-damage-interior.jpg",
      link: "/services/restoration",
      features: ["Fire Damage Restoration", "Water Damage Repair", "Structural Repairs", "Full Renovations"],
      gallery: [
        {
          src: "/images/projects/restoration-water-damage-cleanup.jpg",
          alt: "Commercial water damage cleanup with extraction equipment",
          caption: "Water Damage Cleanup",
        },
        {
          src: "/images/projects/restoration-fire-damage-exterior.jpg",
          alt: "Commercial building fire damage restoration with crews on site",
          caption: "Fire Damage Restoration",
        },
        {
          src: "/images/projects/restoration-structural-rebuild.jpg",
          alt: "Commercial building structural restoration and framing work",
          caption: "Structural Repairs",
        },
        {
          src: "/images/projects/restoration-commercial-progress.jpg",
          alt: "Modern commercial building showing restoration progress with scaffolding and completed sections",
          caption: "Complete Renovations",
        },
      ],
    },
    {
      id: "solar",
      title: "Solar Solutions",
      icon: <Sun className="h-6 w-6" />,
      description:
        "Professional solar panel installation and energy solutions to reduce costs and increase property value with clean, renewable energy.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_Photorealistic_horizontal_image_of_a_suburban_Was_0-pauqrCPjioDfzKlmUdA50nZvt6qamO.jpg",
      link: "/services/solar",
      features: ["Solar Panel Installation", "Energy Audits", "Battery Storage Systems", "Maintenance & Monitoring"],
      gallery: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_Photorealistic_horizontal_image_of_a_mediumsized__0-AXJoUj15yZGFbtHL9UeLH0UPlOr44g.jpg",
          alt: "Large commercial building with extensive solar panel arrays on flat roof",
          caption: "Commercial Solar",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_Photorealistic_horizontal_image_showing_a_complet_0-kMstX7UxTMLQFp4n8KSN9zNMMr8KJG.jpg",
          alt: "Commercial building solar panel installation with workers on roof",
          caption: "Expert Installation",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lucid_Origin_Photorealistic_horizontal_image_of_a_commercial_b_0-vsWga93PPLHz2FzATTMffAafiGGjcd.jpg",
          alt: "Commercial solar installation with battery storage inverter system",
          caption: "Battery Storage",
        },
        {
          src: "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/photorealistic-aerial-view-of-suburban-residential",
          alt: "Residential home in DC metro area with professional solar panel installation",
          caption: "Residential Solar",
        },
      ],
    },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block bg-primary/10 text-primary text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3">
            Our Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-900 text-balance">
            Professional Restoration & Construction
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto text-pretty">
            Full-service restoration and general contracting for residential and commercial properties throughout the
            region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-3 sm:p-4 border-b border-gray-100 last:border-b-0 transition-all flex items-center gap-2 sm:gap-3 ${
                    activeService === index
                      ? "bg-primary text-white"
                      : "hover:bg-gray-50 text-gray-700 hover:text-primary"
                  }`}
                  aria-label={`View ${service.title} details`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      activeService === index ? "bg-white/20" : "bg-primary/10"
                    } flex-shrink-0`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base">{service.title}</h3>
                    <p
                      className={`text-xs ${activeService === index ? "text-white/80" : "text-gray-500"} line-clamp-1 hidden sm:block`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`ml-auto h-4 w-4 flex-shrink-0 transform transition-transform ${
                      activeService === index ? "rotate-90" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={services[activeService].image || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
                    alt={services[activeService].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 75vw"
                    priority={activeService === 0}
                    loading={activeService === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                        {services[activeService].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {services[activeService].features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-gray-900">Our Work</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {services[activeService].gallery.map((image, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-lg aspect-square">
                          <Image
                            src={image.src || "https://res.cloudinary.com/dhegnhnyn/image/upload/f_auto,q_auto/placeholder"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white text-xs font-medium p-2 leading-tight">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full sm:w-auto" size="sm">
                    <Link href={services[activeService].link}>
                      Learn More About {services[activeService].title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
