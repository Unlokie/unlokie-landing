import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://unlokie.com').replace(/\/+$/, '')
  const lastModified = new Date().toISOString()
  const legalRoutes = ['/privacy-policy', '/cookie-policy', '/terms-and-conditions']

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...legalRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
