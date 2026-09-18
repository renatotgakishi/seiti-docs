import { type MetadataRoute } from 'next/types'
import { PageRoutes } from '@/lib/pageroutes'
import { Settings } from '@/types/settings'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = Settings.metadataBase || 'https://doc.seiti.com.br'

  const blacklist = [
    '/structure',
    '/markdown',
    '/navigation',
  ]

  const filteredRoutes: MetadataRoute.Sitemap = PageRoutes
    .filter((page) => !blacklist.some((blocked) => page.href.includes(blocked)))
    .map((page) => {
      const isHome = page.href === '/'
      const isPortfolio = page.href.includes('/portfolio')

      return {
        url: `${baseUrl}${page.href}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: isHome ? 1 : isPortfolio ? 0.9 : 0.8,
      }
    })

  const hasHome = filteredRoutes.some((r) => r.url === `${baseUrl}/`)

  if (!hasHome) {
    filteredRoutes.unshift({
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    })
  }

  return filteredRoutes
}