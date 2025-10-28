import './globals.css'
import { OrganizationSchema, WebsiteSchema, LocalBusinessSchema } from '@/components/JsonLd'

export const metadata = {
  // URL base para todas las rutas
  metadataBase: new URL('https://brandprisma.com'),
  
  // Meta básicos
  title: {
    default: 'Prisma Branding | Estudio Creativo en Barcelona',
    template: '%s | Prisma Branding'
  },
  description: 'Estudio creativo en Barcelona que transforma ideas en marcas memorables con diseño, estrategia y branding profesional. Especialistas en identidad corporativa y diseño web.',
  
  keywords: [
    'branding barcelona', 
    'diseño web barcelona', 
    'identidad de marca', 
    'estrategia digital', 
    'agencia creativa barcelona', 
    'diseño gráfico',
    'marketing digital',
    'identidad corporativa',
    'estudio creativo',
    'agencia de branding',
    'diseño de logos barcelona',
    'branding corporativo'
  ],
  
  authors: [{ name: 'Prisma Branding', url: 'https://brandprisma.com' }],
  creator: 'Prisma Branding',
  publisher: 'Prisma Branding',
  
  // Formato de detección
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // Idioma y región
  alternates: {
    canonical: 'https://brandprisma.com',
    languages: {
      'es-ES': 'https://brandprisma.com',
      'es-EC': 'https://brandprisma.com',
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://brandprisma.com',
    siteName: 'Prisma Branding',
    title: 'Prisma Branding | Estudio Creativo en Barcelona',
    description: 'Estudio creativo en Barcelona especializado en branding, diseño web y estrategia digital. Transformamos ideas en marcas memorables.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prisma Branding - Estudio Creativo Barcelona',
        type: 'image/jpeg',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Prisma Branding | Estudio Creativo en Barcelona',
    description: 'Estudio creativo en Barcelona especializado en branding y diseño web profesional',
    images: ['/og-image.jpg'],
    creator: '@prismabranding',
  },

  // Robots y indexación
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon-16x16.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Manifest
  manifest: '/manifest.json',

  // Verificación - ACTUALIZAR con tu código real cuando lo tengas
  verification: {
    google: 'tu-codigo-google-search-console', // ⚠️ CAMBIAR después
  },

  // Otros metadatos
  category: 'business',
  classification: 'Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Schema.org JSON-LD para Google Rich Snippets */}
        <OrganizationSchema />
        <WebsiteSchema />
        <LocalBusinessSchema /> {/* ✅ AGREGADO para mejor SEO local */}
        
        {/* Preconnect para optimización */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics 4 - ⚠️ ACTUALIZAR con tu ID real */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {/* ✅ AGREGADO: Navegación */}
        
        {/* Contenido principal con altura mínima */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* ✅ AGREGADO: Footer */}
      </body>
    </html>
  )
}