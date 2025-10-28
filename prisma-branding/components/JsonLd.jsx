// components/JsonLd.jsx
// Componente para agregar datos estructurados Schema.org

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://brandprisma.com/#organization",
    "name": "Prisma Branding",
    "alternateName": "Prisma",
    "url": "https://brandprisma.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://brandprisma.com/logo.png", // ✅ Corregido: sin doble //
      "width": 250,
      "height": 60
    },
    "image": "https://brandprisma.com/og-image.jpg", // ✅ Corregido: sin doble //
    "description": "Estudio creativo en Barcelona especializado en branding, diseño gráfico, diseño web y estrategia digital. Transformamos ideas en marcas memorables.",
    
    // ⚠️ ACTUALIZAR: Dirección completa si tienes oficina física
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gran de Gracia 134", // CAMBIAR si tienes oficina
      "addressLocality": "Barcelona",
      "addressRegion": "Catalunya",
      "postalCode": "08012", // CAMBIAR a tu código postal
      "addressCountry": "ES"
    },
    
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@brandprisma.com", // ✅ Corregido: dominio correcto
      "telephone": "+34637738054", // ⚠️ CAMBIAR a tu teléfono real
      "availableLanguage": ["Spanish", "English"]
    },
    
    // ⚠️ VERIFICAR: URLs de redes sociales
    "sameAs": [
      "https://www.instagram.com/prismabranding/", // Ya tienes esta
      "https://www.facebook.com/prismabranding/",  // Ya tienes esta
      "https://www.linkedin.com/prismabranding" // Verificar si es correcta
    ],
    
    "areaServed": [
      {
        "@type": "Country",
        "name": "España"
      },
      {
        "@type": "Country",
        "name": "Ecuador"
      },
      {
        "@type": "Continent",
        "name": "Europa"
      }
    ],
    
    "knowsAbout": [
      "Branding",
      "Diseño Gráfico",
      "Identidad Visual",
      "Estrategia Digital",
      "Diseño Web",
      "Marketing Digital",
      "Identidad Corporativa",
      "Naming",
      "Branding Corporativo"
    ],
    
    // ⚠️ AGREGAR: Año de fundación
    "foundingDate": "2025" // CAMBIAR al año real
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
    "image": "https://brandprisma.com/og-image.jpg", // ✅ Corregido
    "url": "https://brandprisma.com",
    "telephone": "+34637738054", // ⚠️ CAMBIAR a tu teléfono real
    "email": "contact@brandprisma.com", // ✅ Corregido
    "priceRange": "€€",
    
    // ⚠️ ACTUALIZAR: Dirección completa
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gran de Gracia 134", // CAMBIAR si tienes oficina física
      "addressLocality": "Barcelona",
      "addressRegion": "Catalunya",
      "postalCode": "08012", // CAMBIAR
      "addressCountry": "ES"
    },
    
    // ⚠️ ACTUALIZAR: Coordenadas GPS de tu ubicación exacta
    // Cómo obtenerlas: Google Maps → Busca tu dirección → Click derecho → Copiar coordenadas
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.40167665238958,  // CAMBIAR a tu ubicación exacta
      "longitude": 2.153398526986166   // CAMBIAR a tu ubicación exacta
    },
    
    
    // ⚠️ VERIFICAR: Horarios de atención
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00", // Ajusta si abres a otra hora
      "closes": "18:00" // Ajusta si cierras a otra hora
    },
    
    // Servicios ofrecidos
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Branding y Diseño",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding Corporativo",
            "description": "Creación y desarrollo de identidad de marca completa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Web",
            "description": "Diseño y desarrollo de sitios web profesionales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estrategia Digital",
            "description": "Consultoría y estrategia de marketing digital"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Identidad Visual",
            "description": "Diseño de logotipos y sistemas de identidad visual"
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
      "@id": "https://brandprisma.com/#organization" // Referencia al OrganizationSchema
    },
    "inLanguage": "es-ES",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://brandprisma.com/search?q={search_term_string}" // ✅ Corregido
      },
      "query-input": "required name=search_term_string"
    }
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

// ✨ NUEVO: FAQSchema para páginas con preguntas frecuentes
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

// ✨ NUEVO: ServiceSchema para páginas individuales de servicios
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