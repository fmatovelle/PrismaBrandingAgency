/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignorar errores de ESLint durante el build de producción
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Redirigir www a non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.brandprisma.com',
          },
        ],
        destination: 'https://brandprisma.com/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
