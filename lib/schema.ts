// Schema.org structured data utility functions for SEO

// Type definitions for schema objects
type Organization = {
  "@type": "Organization"
  "@id": string
  name: string
  url: string
  logo: string
  sameAs?: string[]
  address?: PostalAddress
  telephone?: string
  email?: string
  description?: string
  foundingDate?: string
  areaServed?: string[] | Place[]
}

type LocalBusiness = {
  "@type": "LocalBusiness"
  "@id": string
  name: string
  url: string
  logo: string
  image?: string
  telephone?: string
  email?: string
  description?: string
  address: PostalAddress
  geo?: GeoCoordinates
  openingHoursSpecification?: OpeningHoursSpecification[]
  priceRange?: string
  areaServed?: string[] | Place[]
  serviceArea?: Place[]
}

type Service = {
  "@type": "Service"
  "@id": string
  name: string
  url: string
  description: string
  provider: Organization | LocalBusiness
  areaServed?: string[] | Place[]
  serviceType?: string
  offers?: Offer
  image?: string
}

type WebPage = {
  "@type": "WebPage"
  "@id": string
  url: string
  name: string
  description?: string
  isPartOf?: {
    "@id": string
  }
  primaryImageOfPage?: {
    "@type": "ImageObject"
    contentUrl: string
  }
  breadcrumb?: {
    "@id": string
  }
  mainEntity?: any
}

type BreadcrumbList = {
  "@type": "BreadcrumbList"
  "@id": string
  itemListElement: BreadcrumbItem[]
}

type BreadcrumbItem = {
  "@type": "ListItem"
  position: number
  name: string
  item?: string
}

type PostalAddress = {
  "@type": "PostalAddress"
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

type GeoCoordinates = {
  "@type": "GeoCoordinates"
  latitude: number
  longitude: number
}

type OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification"
  dayOfWeek: string[]
  opens: string
  closes: string
}

type Offer = {
  "@type": "Offer"
  price?: string
  priceCurrency?: string
  priceValidUntil?: string
  availability?: string
  url?: string
  validFrom?: string
}

type Place = {
  "@type": "Place"
  address: PostalAddress
  geo?: GeoCoordinates
  name?: string
}

type FAQPage = {
  "@type": "FAQPage"
  "@id": string
  mainEntity: Question[]
}

type Question = {
  "@type": "Question"
  name: string
  acceptedAnswer: {
    "@type": "Answer"
    text: string
  }
}

type Review = {
  "@type": "Review"
  author: {
    "@type": "Person"
    name: string
  }
  reviewRating: {
    "@type": "Rating"
    ratingValue: string
    bestRating: string
  }
  datePublished?: string
  reviewBody: string
}

// Main organization schema
export const getOrganizationSchema = (): Organization => {
  return {
    "@type": "Organization",
    "@id": "https://nationalrestoration.com/#organization",
    name: "National Restoration",
    url: "https://nationalrestoration.com",
    logo: "https://nationalrestoration.com/logo.png",
    sameAs: [
      "https://www.facebook.com/nationalrestoration",
      "https://twitter.com/natrestoration",
      "https://www.linkedin.com/company/national-restoration",
      "https://www.instagram.com/nationalrestoration",
    ],
    description:
      "National Restoration provides comprehensive home and commercial restoration services including roofing, siding, windows, and storm damage repair across the US.",
    foundingDate: "2000",
    telephone: "1-800-737-8673",
    email: "info@nationalrestoration.com",
    areaServed: ["United States"],
  }
}

// Website schema
export const getWebsiteSchema = () => {
  return {
    "@type": "WebSite",
    "@id": "https://nationalrestoration.com/#website",
    url: "https://nationalrestoration.com",
    name: "National Restoration",
    description:
      "National Restoration provides comprehensive home and commercial restoration services including roofing, siding, windows, and storm damage repair across the US.",
    publisher: {
      "@id": "https://nationalrestoration.com/#organization",
    },
  }
}

// Local business schema for each location
export const getLocalBusinessSchema = (
  locationName: string,
  city: string,
  state: string,
  streetAddress: string,
  postalCode: string,
  phone: string,
  email: string,
  latitude: number,
  longitude: number,
  locationUrl: string,
  locationImage: string,
): LocalBusiness => {
  const locationId = locationName.toLowerCase().replace(/\s+/g, "-")

  return {
    "@type": "LocalBusiness",
    "@id": `https://nationalrestoration.com/#${locationId}`,
    name: `National Restoration - ${locationName}`,
    url: locationUrl,
    logo: "https://nationalrestoration.com/logo.png",
    image: locationImage,
    telephone: phone,
    email: email,
    description: `National Restoration provides comprehensive restoration services in ${locationName} including roofing, siding, windows, and storm damage repair.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress,
      addressLocality: city,
      addressRegion: state,
      postalCode: postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: latitude,
      longitude: longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "$$",
  }
}

// Service schema for each service
export const getServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  serviceImage: string,
): Service => {
  const serviceId = serviceName.toLowerCase().replace(/\s+/g, "-")

  return {
    "@type": "Service",
    "@id": `https://nationalrestoration.com/#service-${serviceId}`,
    name: serviceName,
    url: serviceUrl,
    description: serviceDescription,
    provider: {
      "@id": "https://nationalrestoration.com/#organization",
    },
    serviceType: "Restoration Services",
    image: serviceImage,
  }
}

// WebPage schema for individual pages
export const getWebPageSchema = (
  pageName: string,
  pageUrl: string,
  pageDescription: string,
  pageImage?: string,
): WebPage => {
  const pageId = pageName.toLowerCase().replace(/\s+/g, "-")

  const schema: WebPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageName,
    description: pageDescription,
    isPartOf: {
      "@id": "https://nationalrestoration.com/#website",
    },
  }

  if (pageImage) {
    schema.primaryImageOfPage = {
      "@type": "ImageObject",
      contentUrl: pageImage,
    }
  }

  return schema
}

// BreadcrumbList schema for navigation
export const getBreadcrumbSchema = (items: { name: string; url: string }[]): BreadcrumbList => {
  return {
    "@type": "BreadcrumbList",
    "@id": "https://nationalrestoration.com/#breadcrumb",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// FAQ schema for FAQ sections
export const getFAQSchema = (faqs: { question: string; answer: string }[]): FAQPage => {
  return {
    "@type": "FAQPage",
    "@id": "https://nationalrestoration.com/#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// Review schema for testimonials
export const getReviewSchema = (
  reviewAuthor: string,
  reviewRating: number,
  reviewText: string,
  datePublished?: string,
): Review => {
  return {
    "@type": "Review",
    author: {
      "@type": "Person",
      name: reviewAuthor,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating.toString(),
      bestRating: "5",
    },
    datePublished: datePublished,
    reviewBody: reviewText,
  }
}

// Generate schema for the homepage
export const getHomePageSchema = () => {
  const organization = getOrganizationSchema()
  const website = getWebsiteSchema()
  const webpage = getWebPageSchema(
    "National Restoration Services | Your One-Stop Contracting Partner",
    "https://nationalrestoration.com/",
    "National Restoration provides comprehensive home and commercial restoration services including roofing, siding, windows, and storm damage repair across the US.",
    "https://nationalrestoration.com/roof-restoration-crew.png",
  )

  // Services offered
  const services = [
    getServiceSchema(
      "Roofing Services",
      "Expert roof replacement, repair and installation services for residential and commercial properties.",
      "https://nationalrestoration.com/services/roofing",
      "https://nationalrestoration.com/residential-roof-install.png",
    ),
    getServiceSchema(
      "Window Replacement",
      "Energy-efficient window solutions that enhance comfort, reduce utility bills, and improve your home's appearance.",
      "https://nationalrestoration.com/services/windows",
      "https://nationalrestoration.com/modern-window-install.png",
    ),
    getServiceSchema(
      "Siding Replacement",
      "Durable, beautiful siding options including vinyl, fiber cement, and engineered wood to protect and enhance your property.",
      "https://nationalrestoration.com/services/siding",
      "https://nationalrestoration.com/newly-sided-home.png",
    ),
    getServiceSchema(
      "Storm Damage Repair",
      "Emergency response and comprehensive restoration for properties damaged by storms, hail, wind, and water.",
      "https://nationalrestoration.com/services/storm-damage",
      "https://nationalrestoration.com/roof-repair-after-storm.png",
    ),
  ]

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, webpage, ...services],
  }
}

// Generate schema for service pages
export const getServicePageSchema = (
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string,
  serviceImage: string,
  faqs?: { question: string; answer: string }[],
  reviews?: { author: string; rating: number; text: string; date?: string }[],
) => {
  const organization = getOrganizationSchema()
  const website = getWebsiteSchema()
  const webpage = getWebPageSchema(
    `${serviceName} | National Restoration`,
    serviceUrl,
    serviceDescription,
    serviceImage,
  )
  const service = getServiceSchema(serviceName, serviceDescription, serviceUrl, serviceImage)
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "https://nationalrestoration.com/" },
    { name: "Services", url: "https://nationalrestoration.com/services/" },
    { name: serviceName, url: serviceUrl },
  ])

  const schemaGraph = [organization, website, webpage, service, breadcrumb]

  // Add FAQ schema if FAQs are provided
  if (faqs && faqs.length > 0) {
    const faqSchema = getFAQSchema(faqs)
    schemaGraph.push(faqSchema)
  }

  // Add review schema if reviews are provided
  if (reviews && reviews.length > 0) {
    const reviewSchemas = reviews.map((review) =>
      getReviewSchema(review.author, review.rating, review.text, review.date),
    )
    schemaGraph.push(...reviewSchemas)
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  }
}

// Generate schema for location pages
export const getLocationPageSchema = (
  locationName: string,
  city: string,
  state: string,
  streetAddress: string,
  postalCode: string,
  phone: string,
  email: string,
  latitude: number,
  longitude: number,
  locationUrl: string,
  locationImage: string,
  locationDescription: string,
  services?: { name: string; url: string; description: string; image: string }[],
) => {
  const organization = getOrganizationSchema()
  const website = getWebsiteSchema()
  const webpage = getWebPageSchema(
    `${locationName} Restoration Services | National Restoration`,
    locationUrl,
    locationDescription,
    locationImage,
  )
  const localBusiness = getLocalBusinessSchema(
    locationName,
    city,
    state,
    streetAddress,
    postalCode,
    phone,
    email,
    latitude,
    longitude,
    locationUrl,
    locationImage,
  )
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "https://nationalrestoration.com/" },
    { name: "Locations", url: "https://nationalrestoration.com/locations/" },
    { name: locationName, url: locationUrl },
  ])

  const schemaGraph = [organization, website, webpage, localBusiness, breadcrumb]

  // Add service schemas if services are provided
  if (services && services.length > 0) {
    const serviceSchemas = services.map((service) =>
      getServiceSchema(service.name, service.description, service.url, service.image),
    )
    schemaGraph.push(...serviceSchemas)
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemaGraph,
  }
}

export function getStormPreparationSchema() {
  return {
    "@type": "HowTo",
    name: "Storm Preparation Guide for Homeowners",
    description:
      "A comprehensive guide to help homeowners prepare for storm season with checklists, tips, and emergency resources.",
    step: [
      {
        "@type": "HowToStep",
        name: "Seasonal Storm Preparation",
        text: "Prepare your home for storms based on the current season (spring, summer, fall, winter).",
      },
      {
        "@type": "HowToStep",
        name: "Home Protection Checklist",
        text: "Complete a comprehensive home protection checklist to secure your property before storms.",
      },
      {
        "@type": "HowToStep",
        name: "Storm-Specific Preparation",
        text: "Follow specific preparation steps for different types of storms (hurricanes, tornadoes, floods, winter storms).",
      },
      {
        "@type": "HowToStep",
        name: "Emergency Supplies Checklist",
        text: "Gather essential emergency supplies to be prepared for any storm emergency.",
      },
    ],
  }
}
