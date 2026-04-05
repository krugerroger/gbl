import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin'], // Ajoute ici les dossiers que tu veux cacher
    },
    sitemap: 'https://www.gabriellaindependante.com/sitemap.xml',
  }
}