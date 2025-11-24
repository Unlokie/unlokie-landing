import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://unlokie.com').replace(/\/+$/, '')
  const lastModified = new Date().toISOString()

  // Only list real crawlable URLs; fragment identifiers are removed by crawlers
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
