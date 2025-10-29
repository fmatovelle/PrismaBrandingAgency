// app/sitemap.js
// Genera sitemap.xml dinámicamente en Next.js

export default function sitemap() {
  const baseUrl = 'https://brandprisma.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
