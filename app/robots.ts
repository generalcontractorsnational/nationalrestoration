import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/property-dashboard',
        '/storm-damage-assessment/properties/*',
        '/partnerships/portal',
        '/portals',
      ],
    },
    sitemap: 'https://natrestoration.com/sitemap.xml',
  }
}
