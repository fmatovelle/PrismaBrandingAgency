import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/JsonLd'

const GA_MEASUREMENT_ID = 'G-WM6R6V3B74'
const META_PIXEL_ID = '929179482862034'

// 🚀 NUEVO: Configurar fuente Inter con display swap
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://brandprisma.com'),
  title: { default: 'Prisma Branding | Estudio Creativo en Barcelona', template: '%s | Prisma Branding' },
  description: 'Estudio creativo en Barcelona que impulsa marcas con diseño, estrategia y branding profesional. Expertos en identidad visual y diseño web.',
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
  verification: {
  // Verificado por DNS en Cloudflare
},
  category: 'business',
  classification: 'Business',
  other: {
    'geo.region': 'ES-CT',
    'geo.placename': 'Barcelona',
    'geo.position': '41.3874;2.1686',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema />
        
        {/* Preload de imagen hero crítica para mejorar LCP */}
        <link 
          rel="preload" 
          as="image" 
          href="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
          fetchPriority="high"
        />
        
        {/* Preconnect a Unsplash para cargar imágenes más rápido */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });` }} />
        
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}