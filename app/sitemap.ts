import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gasplum.com/es',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://gasplum.com/es/Services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://gasplum.com/es/Designings',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
        url: 'https://gasplum.com/es/Processes',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    {
        url: 'https://gasplum.com/es/about',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
      },
      {
        url: 'https://gasplum.com/es/Contact',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
  ]
}