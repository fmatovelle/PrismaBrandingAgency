/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brandprisma.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin*', '/private*'], // Excluye páginas privadas
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}