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
        priority: 0.5,
      },
      {
        url: 'https://gasplum.com/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.4,
      },
      {
        url: 'https://gasplum.com/Services',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
      },
      {
        url: 'https://gasplum.com/Designings',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.2,
      },
      {
          url: 'https://gasplum.com/Processes',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.2,
        },
      {
          url: 'https://gasplum.com/about',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.1,
        },
        {
          url: 'https://gasplum.com/Contact',
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.1,
        },
  ]
}