/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de redirects para evitar contenido duplicado
  async redirects() {
    return [
      // Redirigir www a non-www (301 permanente)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.brandprisma.com',
          },
        ],
        destination: 'https://brandprisma.com/:path*',
        permanent: true, // Esto crea un redirect 301
      },
    ]
  },

  // Optimizaciones de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuración de compresión
  compress: true,

  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig