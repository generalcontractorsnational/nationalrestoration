import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nationalrestoration.com'

  const routes = [
    '',
    '/about',
    '/about/process',
    '/services',
    '/services/roofing',
    '/services/roofing/asphalt-shingles',
    '/services/roofing/metal-roofing',
    '/services/siding',
    '/services/windows',
    '/services/gutters',
    '/services/storm-damage',
    '/services/restoration',
    '/services/commercial',
    '/services/solar',
    '/services/atlanta',
    '/locations',
    '/locations/atlanta',
    '/locations/pittsburgh',
    '/locations/dc-metro',
    '/locations/ohio',
    '/locations/st-louis',
    '/locations/texas',
    '/locations/southern-california',
    '/projects/atlanta',
    '/storm-damage-assessment',
    '/storm-damage-assessment/new',
    '/storm-damage-assessment/properties',
    '/storm-preparation',
    '/maintenance-programs',
    '/financing',
    '/careers',
    '/contact',
    '/partnerships',
    '/partnerships/apply',
    '/partnerships/portal',
    '/partners/apply',
    '/partners/portal',
    '/portals',
    '/property-dashboard',
    '/blog/atlanta-storm-preparation',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : route.includes('/blog/') ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route.includes('/services') || route.includes('/locations') ? 0.8 : 0.6,
  }))
}
