/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
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
