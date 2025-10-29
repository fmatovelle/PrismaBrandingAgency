import './globals.css'
import Script from 'next/script'
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/JsonLd'

const GA_MEASUREMENT_ID = 'G-WM6R6V3B74'

export const metadata = {
  metadataBase: new URL('https://brandprisma.com'),
  title: { default: 'Prisma Branding | Estudio Creativo en Barcelona', template: '%s | Prisma Branding' },
  description: 'Estudio creativo en Barcelona que transforma ideas en marcas memorables con diseño, estrategia y branding profesional. Especialistas en identidad corporativa y diseño web.',
  keywords: ['branding barcelona', 'diseño web barcelona', 'identidad de marca', 'estrategia digital', 'agencia creativa barcelona', 'diseño gráfico', 'marketing digital', 'identidad corporativa', 'estudio creativo', 'agencia de branding', 'diseño de logos barcelona', 'branding corporativo'],
  authors: [{ name: 'Prisma Branding', url: 'https://brandprisma.com' }],
  creator: 'Prisma Branding',
  publisher: 'Prisma Branding',
  formatDetection: { email: true, address: true, telephone: true },
  alternates: { canonical: 'https://brandprisma.com', languages: { 'es-ES': 'https://brandprisma.com', 'es-EC': 'https://brandprisma.com' } },
  openGraph: { type: 'website', locale: 'es_ES', url: 'https://brandprisma.com', siteName: 'Prisma Branding', title: 'Prisma Branding | Estudio Creativo en Barcelona', description: 'Estudio creativo en Barcelona especializado en branding, diseño web y estrategia digital. Transformamos ideas en marcas memorables.', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Prisma Branding - Estudio Creativo Barcelona', type: 'image/jpeg' }] },
  twitter: { card: 'summary_large_image', title: 'Prisma Branding | Estudio Creativo en Barcelona', description: 'Estudio creativo en Barcelona especializado en branding y diseño web profesional', images: ['/og-image.jpg'], creator: '@prismabranding' },
  robots: { index: true, follow: true, nocache: false, googleBot: { index: true, follow: true, noimageindex: false, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: { icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png', sizes: '32x32' }, { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }], shortcut: '/favicon-16x16.png', apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }] },
  manifest: '/manifest.json',
  verification: { google: 'tu-codigo-google-search-console' },
  category: 'business',
  classification: 'Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });` }} />
      </head>
      <body className="antialiased">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
