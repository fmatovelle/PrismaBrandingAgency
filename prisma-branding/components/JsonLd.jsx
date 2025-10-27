// components/JsonLd.jsx
// Componente para agregar datos estructurados Schema.org

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prisma Branding",
    "url": "https://prisma-branding.web.app",
    "logo": "https://prisma-branding.web.app/logo.png",
    "description": "Estudio creativo en Barcelona especializado en branding, diseño gráfico y estrategia digital",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Barcelona",
      "addressRegion": "Cataluña",
      "addressCountry": "ES"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hola@prismabranding.com",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/prismabranding",
      "https://www.instagram.com/prismabranding",
      "https://twitter.com/prismabranding"
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
      "Marketing Digital"
    ]
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
    "name": "Prisma Branding",
    "image": "https://prisma-branding.web.app/og-image.jpg",
    "url": "https://prisma-branding.web.app",
    "telephone": "+34-XXX-XXX-XXX",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tu Dirección",
      "addressLocality": "Barcelona",
      "addressRegion": "Catalunya",
      "postalCode": "08001",
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
    "name": "Prisma Branding",
    "url": "https://prisma-branding.web.app",
    "description": "Estudio creativo en Barcelona que transforma ideas en marcas memorables",
    "publisher": {
      "@type": "Organization",
      "name": "Prisma Branding",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prisma-branding.web.app/logo.png"
      }
    },
    "inLanguage": "es-ES",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prisma-branding.web.app/search?q={search_term_string}",
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
