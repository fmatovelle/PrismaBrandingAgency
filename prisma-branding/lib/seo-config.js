// lib/seo-config.js
// Configuración centralizada de SEO para Prisma Branding

export const siteConfig = {
  name: "Prisma Branding",
  url: "https://brandprisma.com/",
  ogImage: "/og-image.jpg",
  description: "Estudio creativo en Barcelona que transforma ideas en marcas memorables con diseño, estrategia y branding profesional",
  keywords: [
    "branding Barcelona",
    "diseño gráfico Barcelona",
    "identidad visual",
    "estrategia de marca",
    "diseño web Barcelona",
    "estudio creativo",
    "marketing digital",
    "branding Europa",
    "diseño corporativo"
  ],
  creator: "Prisma Branding",
  authors: [{ name: "Prisma Branding", url: "https://brandprisma.com/" }],
  locale: "es_ES",
  alternateLocales: ["es_EC", "en_US"],
}

export const pageMetadata = {
  home: {
    title: "Prisma Branding | Estudio Creativo en Barcelona",
    description: "Estudio creativo en Barcelona que transforma ideas en marcas memorables con diseño, estrategia y branding profesional",
    keywords: "branding Barcelona, diseño gráfico, identidad visual, estudio creativo",
  },
  about: {
    title: "Sobre Nosotros | Prisma Branding",
    description: "Conoce al equipo detrás de Prisma Branding en Barcelona, expertos en diseño y estrategia que crean marcas auténticas",
    keywords: "equipo creativo, diseñadores Barcelona, estudio de branding",
  },
  services: {
    title: "Servicios de Branding y Diseño | Prisma Branding",
    description: "Ofrecemos identidad visual, diseño web y estrategia digital para marcas que buscan destacar en Europa y Latinoamérica",
    keywords: "servicios de branding, diseño web, identidad corporativa, estrategia digital",
  },
  process: {
    title: "Nuestro Proceso | Prisma Branding",
    description: "Descubre cómo en Prisma Branding convertimos tu visión en una marca sólida mediante investigación, diseño y estrategia",
    keywords: "proceso de diseño, metodología branding, estrategia creativa",
  },
  portfolio: {
    title: "Portafolio | Prisma Branding",
    description: "Inspírate con nuestros casos de éxito en branding, diseño y marketing que ayudaron a negocios a crecer con propósito",
    keywords: "portafolio diseño, casos de éxito, proyectos de branding",
  },
  team: {
    title: "Equipo Creativo | Prisma Branding",
    description: "Conoce a los profesionales detrás de Prisma Branding: diseñadores, estrategas y creativos con experiencia global",
    keywords: "equipo diseño, creativos Barcelona, diseñadores profesionales",
  },
  blog: {
    title: "Blog de Branding y Diseño | Prisma Branding",
    description: "Tendencias, consejos y estrategias de branding y diseño para empresas y emprendedores creativos",
    keywords: "blog branding, tendencias diseño, marketing digital",
  },
  contact: {
    title: "Contacto | Prisma Branding",
    description: "¿Listo para potenciar tu marca? Escríbenos en Prisma Branding y trabajemos juntos en tu próximo proyecto",
    keywords: "contacto Barcelona, consulta branding, presupuesto diseño",
  },
}

// Función para generar metadata de Next.js
export function generatePageMetadata(page) {
  const pageData = pageMetadata[page] || pageMetadata.home
  
  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      alternateLocale: siteConfig.alternateLocales,
      url: siteConfig.url,
      title: pageData.title,
      description: pageData.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageData.title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.description,
      images: [siteConfig.ogImage],
      creator: '@prismabranding',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: 'TU_CODIGO_GOOGLE_SEARCH_CONSOLE',
      // Agrega más verificaciones según necesites
    },
  }
}
