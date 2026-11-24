// components/JsonLd.jsx
// Componente para agregar datos estructurados Schema.org

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://brandprisma.com/#organization",
    "name": "Prisma Branding",
    "alternateName": "Prisma",
    "url": "https://brandprisma.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://brandprisma.com/logo.png",
      "width": 250,
      "height": 60
    },
    "image": "https://brandprisma.com/og-image.jpg",
    "description": "Estudio creativo en Barcelona especializado en branding, diseño web profesional y estrategia digital. Full-stack development con React, Next.js y diseño gráfico 3D.",
    
    // 🆕 FUNDADOR
    "founder": {
      "@type": "Person",
      "name": "Federico Matovelle",
      "jobTitle": "Creative Director & Full-Stack Developer",
      "description": "Full-stack developer especializado en React, Next.js, TypeScript y diseño gráfico 3D. Fundador de Prisma Branding.",
      "sameAs": [
        "https://www.linkedin.com/in/fmatovelle" // Cambia a tu LinkedIn real
      ]
    },
    
    "foundingDate": "2023",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressRegion": "Catalonia",
      "addressCountry": "ES"
    },
    
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@brandprisma.com",
      "availableLanguage": ["Spanish", "English"]
    },
    
    "sameAs": [
      "https://www.instagram.com/prismabranding/",
      "https://www.facebook.com/prismabranding/",
      "https://www.linkedin.com/company/prismabranding/"
    ],
    
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "41.3851",
          "longitude": "2.1734"
        },
        "geoRadius": "50000"
      },
      {
        "@type": "Country",
        "name": "España"
      },
      {
        "@type": "Country",
        "name": "Ecuador"
      }
    ],
    
    "knowsAbout": [
      "Branding",
      "Web Design",
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Diseño Gráfico",
      "Identidad Visual",
      "Estrategia Digital",
      "Full-Stack Development",
      "3D Design"
    ],
    
    "serviceType": [
      "Diseño Web",
      "Desarrollo Web",
      "Identidad de Marca",
      "Diseño de Logo",
      "Identidad Visual",
      "Branding Digital",
      "Full-Stack Development"
    ],
    
    // 🆕 PRECIOS Y OFERTAS (CRÍTICO PARA IA)
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidad de Marca - Starter",
          "description": "Logo profesional + paleta de colores + tipografías + formatos para redes sociales"
        },
        "price": "899",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidad de Marca - Professional",
          "description": "Branding completo: logo, papelería, manual de marca, aplicaciones digitales"
        },
        "price": "1499",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sitio Web Profesional",
          "description": "Diseño y desarrollo web personalizado con Next.js, React y diseño responsive"
        },
        "price": "1999",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rebranding Completo",
          "description": "Renovación total de identidad de marca + sitio web + estrategia digital"
        },
        "price": "3500",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding Premium + Web",
          "description": "Paquete completo: identidad de marca + sitio web profesional + materiales digitales"
        },
        "price": "4500",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asistente de WhatsApp con IA",
          "description": "Asistente de WhatsApp con inteligencia artificial para consultas, clínicas y negocios: responde 24/7 con tu información, ayuda a reservar y avisa de cada interesado.",
          "url": "https://asistente.brandprisma.com/"
        },
        "url": "https://asistente.brandprisma.com/#precios",
        "price": "25",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    ],
    
    "priceRange": "€€€"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://brandprisma.com/#localbusiness",
    "name": "Prisma Branding",
    "image": "https://brandprisma.com/og-image.jpg",
    "url": "https://brandprisma.com",
    "email": "info@brandprisma.com",
    "priceRange": "€€€",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressRegion": "Catalonia",
      "addressCountry": "ES"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.3851,
      "longitude": 2.1734
    },
    
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Branding y Diseño Web",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Identidad de Marca",
            "description": "Creación de identidad de marca completa desde €899"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Web Profesional",
            "description": "Sitios web con Next.js y React desde €1,999"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rebranding Completo",
            "description": "Renovación total de marca y presencia digital desde €3,500"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Development",
            "description": "Desarrollo web personalizado con React, TypeScript y bases de datos"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://brandprisma.com/#website",
    "name": "Prisma Branding",
    "url": "https://brandprisma.com",
    "description": "Estudio creativo en Barcelona que transforma ideas en marcas memorables con diseño, estrategia y branding profesional",
    "publisher": {
      "@id": "https://brandprisma.com/#organization"
    },
    "inLanguage": "es-ES"
    // No SearchAction: the site has no /search page (it answered 404).
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ service }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@id": "https://brandprisma.com/#organization"
    },
    "serviceType": service.type,
    "areaServed": {
      "@type": "City",
      "name": "Barcelona"
    },
    "url": service.url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}