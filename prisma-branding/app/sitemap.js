export const dynamic = 'force-static';

export default function sitemap() {
  return [
    {
      url: 'https://brandprisma.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
