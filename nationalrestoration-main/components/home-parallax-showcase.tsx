"use client"
import ParallaxHero from "./parallax-hero"
import ParallaxSection from "./parallax-section"
import ParallaxShapes from "./parallax-shapes"
import ParallaxImageGallery from "./parallax-image-gallery"
import ParallaxCta from "./parallax-cta"
import ParallaxElement from "./parallax-element"
import { useParallaxSupport } from "@/hooks/use-parallax-support"

export default function HomeParallaxShowcase() {
  const isParallaxSupported = useParallaxSupport()

  // Example gallery images
  const galleryImages = [
    {
      src: "/roof-restoration-crew.png",
      alt: "Roof restoration crew",
      speed: 0.1,
    },
    {
      src: "/residential-roof-install.png",
      alt: "Residential roof installation",
      speed: 0.15,
    },
    {
      src: "/modern-window-install.png",
      alt: "Modern window installation",
      speed: 0.12,
    },
    {
      src: "/newly-sided-home.png",
      alt: "Newly sided home",
      speed: 0.18,
    },
    {
      src: "/seamless-gutter-install.png",
      alt: "Seamless gutter installation",
      speed: 0.14,
    },
    {
      src: "/storm-damaged-roof.png",
      alt: "Storm damaged roof",
      speed: 0.16,
    },
  ]

  return (
    <div>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        backgroundSrc="/modern-metal-roof-home.png"
        title="National Restoration"
        subtitle="Your trusted partner for all your restoration needs"
        height="80vh"
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/services"
            className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </ParallaxHero>

      {/* Services Section with Parallax Background */}
      <ParallaxSection className="py-20" backgroundImage="/weathered-asphalt-texture.png" bgClassName="opacity-10">
        <div className="container mx-auto px-4">
          <ParallaxElement speed={0.1} direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </ParallaxElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Roofing",
                description: "Expert roof installation and repair services",
                icon: "🏠",
                link: "/services/roofing",
              },
              {
                title: "Siding",
                description: "Quality siding solutions for your home",
                icon: "🏡",
                link: "/services/siding",
              },
              {
                title: "Windows",
                description: "Energy-efficient window installation",
                icon: "🪟",
                link: "/services/windows",
              },
              {
                title: "Gutters",
                description: "Seamless gutter installation and repair",
                icon: "🌧️",
                link: "/services/gutters",
              },
              {
                title: "Storm Damage",
                description: "Emergency storm damage restoration",
                icon: "⛈️",
                link: "/services/storm-damage",
              },
              {
                title: "Commercial",
                description: "Commercial restoration services",
                icon: "🏢",
                link: "/services/commercial",
              },
              {
                title: "Solar",
                description: "Clean energy solutions and solar installation",
                icon: "☀️",
                link: "/services/solar",
              },
            ].map((service, index) => (
              <ParallaxElement
                key={index}
                speed={0.05 * (index + 1)}
                direction="up"
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="text-primary hover:underline font-medium">
                  Learn more →
                </a>
              </ParallaxElement>
            ))}
          </div>
        </div>

        {isParallaxSupported && <ParallaxShapes count={8} />}
      </ParallaxSection>

      {/* Image Gallery with Parallax */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ParallaxElement speed={0.1} direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          </ParallaxElement>

          <ParallaxImageGallery images={galleryImages} columns={3} className="max-w-5xl mx-auto" />
        </div>
      </section>

      {/* CTA Section with Parallax */}
      <ParallaxCta
        backgroundSrc="/storm-damaged-home-restoration.png"
        title="Ready to restore your property?"
        description="Contact us today for a free consultation and estimate."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        height="50vh"
      />
    </div>
  )
}
