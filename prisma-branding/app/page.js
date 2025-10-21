'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Palette, Globe, TrendingUp, Check, Mail, Instagram, Linkedin, ChevronLeft, ChevronRight, Target, Users, Lightbulb, Rocket, Camera, Package, Newspaper, FileText, MessageSquare, Phone, Calendar, ChevronDown, Plus, Minus, Send, Languages } from 'lucide-react';

// Translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      process: "Process",
      work: "Work",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      title: "We transform ideas into brands that inspire",
      subtitle: "Creative Studio in Barcelona — Branding · Web Design · Digital Strategy",
      cta: "Start Your Project",
      viewWork: "View Our Work"
    },
    trusted: "Trusted by Leading Brands",
    about: {
      title: "About Us",
      text1: "Prisma Branding is a creative and digital studio based in Barcelona. We help brands grow through design, storytelling, and strategy.",
      text2: "Our mission is to create authentic brand experiences that resonate with audiences and drive meaningful connections. From startups to established businesses, we partner with you to unlock your brand's full potential.",
      projects: "Projects",
      years: "Years",
      satisfaction: "Satisfaction"
    },
    services: {
      title: "Our Services",
      subtitle: "Everything you need to build a remarkable brand",
      items: [
        {
          title: "Brand Identity",
          description: "Complete visual identity systems including logos, color palettes, and typography."
        },
        {
          title: "Brand Strategy",
          description: "Strategic positioning, messaging, and competitive analysis to define your brand."
        },
        {
          title: "Web Design & Development",
          description: "Modern, responsive websites with exceptional UX/UI and performance."
        },
        {
          title: "Digital Marketing",
          description: "Social media strategy, content creation, and campaign management."
        },
        {
          title: "Photography & Video",
          description: "Professional brand photography and video production for all platforms."
        },
        {
          title: "Packaging Design",
          description: "Eye-catching packaging that tells your brand story on the shelf."
        },
        {
          title: "Print Design",
          description: "Business cards, brochures, catalogs, and all marketing collateral."
        },
        {
          title: "Brand Consulting",
          description: "Expert guidance on brand evolution, repositioning, and growth strategies."
        }
      ]
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "Expertise across diverse markets",
      items: [
        "Hospitality & Restaurants",
        "Retail & E-commerce",
        "Tech Startups",
        "Health & Wellness",
        "Fashion & Beauty",
        "Real Estate"
      ]
    },
    process: {
      title: "Our Process",
      subtitle: "How we bring your brand to life",
      steps: [
        {
          title: "Discovery & Research",
          description: "We dive deep into your business, market, and audience to understand your unique challenges and opportunities."
        },
        {
          title: "Strategy & Planning",
          description: "We develop a comprehensive brand strategy with clear positioning, messaging, and visual direction."
        },
        {
          title: "Design & Development",
          description: "Our creative team brings your brand to life with stunning visuals and functional designs."
        },
        {
          title: "Launch & Growth",
          description: "We help you launch successfully and provide ongoing support to ensure your brand thrives."
        }
      ]
    },
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Transparent pricing for every stage of your journey",
      starter: {
        name: "Starter Pack",
        features: [
          "1-page website (Landing or Portfolio)",
          "Basic branding (logo, colors, typography)",
          "Contact form & social links",
          "Delivery in 2 weeks"
        ]
      },
      pro: {
        name: "Pro Pack",
        features: [
          "Up to 4 pages (Home, About, Services, Contact)",
          "Full brand style guide",
          "Copywriting support",
          "SEO setup (meta tags, structure, speed)",
          "Integration with Instagram / WhatsApp",
          "Delivery in 3–4 weeks"
        ]
      },
      premium: {
        name: "Premium Pack",
        features: [
          "Custom multi-page website with animations",
          "Advanced SEO & analytics setup",
          "Brand strategy workshop",
          "Photo/video integration",
          "1-month maintenance & updates",
          "Delivery in 4–5 weeks"
        ]
      },
      cta: "Get Started"
    },
    caseStudies: {
      title: "Case Studies",
      subtitle: "Real results for real businesses",
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      viewFull: "View Full Case Study",
      items: [
        {
          name: "Voilà Concept Store",
          category: "Complete Brand Identity",
          challenge: "A new Barcelona boutique needed to stand out in a competitive market",
          solution: "Created a sophisticated brand identity with French-inspired elegance",
          results: "300% increase in foot traffic, featured in Elle Decor Spain"
        },
        {
          name: "Terra Restaurant",
          category: "Web Design & Strategy",
          challenge: "Farm-to-table restaurant needed online presence for reservations",
          solution: "Built an immersive website showcasing their philosophy and seasonal menu",
          results: "Online reservations up 450%, doubled Instagram following"
        },
        {
          name: "Bloom Studio",
          category: "Brand Strategy & Digital",
          challenge: "Yoga studio wanted to modernize and attract younger clientele",
          solution: "Complete rebrand with fresh identity and social media strategy",
          results: "40% increase in new memberships, 5x social engagement"
        }
      ]
    },
    team: {
      title: "Meet Our Team",
      subtitle: "The creative minds behind your success",
      members: [
        {
          name: "Laura Sánchez",
          role: "Creative Director",
          bio: "15+ years shaping brands across Europe and Latin America"
        },
        {
          name: "Marc Dubois",
          role: "Lead Designer",
          bio: "Award-winning designer specializing in visual identity"
        },
        {
          name: "Ana Costa",
          role: "Strategy Director",
          bio: "Expert in brand positioning and market research"
        },
        {
          name: "David Kim",
          role: "Web Developer",
          bio: "Full-stack developer crafting exceptional digital experiences"
        }
      ]
    },
    testimonials: {
      title: "Client Love",
      subtitle: "What our clients say about us",
      items: [
        {
          quote: "Prisma Branding completely transformed our online presence. The team is professional, creative, and truly understood our vision.",
          author: "Milly Anderson",
          company: "Voilà Concept Store",
          role: "Founder"
        },
        {
          quote: "Working with Prisma was seamless. They delivered a stunning website that exceeded our expectations and helped us stand out in the Barcelona food scene.",
          author: "Carlos Martínez",
          company: "Terra Restaurant",
          role: "Owner & Chef"
        },
        {
          quote: "The brand strategy workshop was incredibly valuable. Prisma helped us clarify our message and reach our target audience effectively.",
          author: "Sofía Chen",
          company: "Bloom Studio",
          role: "Studio Director"
        }
      ]
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Tips, trends, and inspiration",
      viewAll: "View All Articles",
      readMore: "Read More",
      items: [
        {
          title: "5 Branding Mistakes to Avoid in 2025",
          category: "Brand Strategy",
          date: "Mar 15, 2025"
        },
        {
          title: "How to Choose the Perfect Color Palette",
          category: "Design Tips",
          date: "Mar 10, 2025"
        },
        {
          title: "The ROI of Professional Branding",
          category: "Business Growth",
          date: "Mar 5, 2025"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      items: [
        {
          question: "How long does a typical branding project take?",
          answer: "Most projects take 4-8 weeks depending on scope. Starter packages can be delivered in 2 weeks, while comprehensive rebranding projects may take 8-12 weeks."
        },
        {
          question: "Do you work with clients outside Barcelona?",
          answer: "Absolutely! While we're based in Barcelona, we work with clients globally. We use video calls, project management tools, and regular communication to ensure smooth collaboration."
        },
        {
          question: "What's included in a brand identity package?",
          answer: "A complete brand identity includes logo design, color palette, typography system, brand guidelines, business card designs, and digital assets. We ensure you have everything needed for consistent brand application."
        },
        {
          question: "Can you help with ongoing marketing after the launch?",
          answer: "Yes! We offer monthly retainer packages for social media management, content creation, and ongoing design support to help your brand grow continuously."
        },
        {
          question: "What if I need revisions?",
          answer: "All our packages include revision rounds (2-3 depending on package). We work closely with you to ensure you're thrilled with the final result."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans. Typically, we split payments into 50% upfront and 50% upon completion, but we can discuss custom arrangements."
        }
      ]
    },
    newsletter: {
      title: "Stay Inspired",
      subtitle: "Get branding tips, design trends, and exclusive insights delivered to your inbox monthly.",
      placeholder: "Enter your email",
      cta: "Subscribe",
      success: "Thanks for subscribing! Check your email for updates.",
      footer: "Join 2,000+ creatives. Unsubscribe anytime."
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Let's build something amazing together.",
      reach: "Fill out the form or reach us directly:",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      service: "Service Interested In",
      message: "Message",
      messagePlaceholder: "Tell us about your project...",
      send: "Send Message",
      success: "Message sent! We'll get back to you within 24 hours.",
      calendar: "Or schedule a free consultation",
      services: {
        branding: "Brand Identity",
        web: "Web Design",
        strategy: "Digital Strategy",
        photography: "Photography & Video",
        consulting: "Brand Consulting",
        notSure: "Not Sure"
      }
    },
    footer: {
      description: "Creative studio transforming brands through design and strategy.",
      services: "Services",
      company: "Company",
      aboutUs: "About Us",
      ourWork: "Our Work",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
      location: "Barcelona, Spain",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      process: "Proceso",
      work: "Trabajos",
      team: "Equipo",
      contact: "Contacto"
    },
    hero: {
      title: "Transformamos ideas en marcas que inspiran",
      subtitle: "Estudio Creativo en Barcelona — Branding · Diseño Web · Estrategia Digital",
      cta: "Iniciar Proyecto",
      viewWork: "Ver Trabajos"
    },
    trusted: "Marcas que confían en nosotros",
    about: {
      title: "Sobre Nosotros",
      text1: "Prisma Branding es un estudio creativo y digital con sede en Barcelona. Ayudamos a las marcas a crecer a través del diseño, la narrativa y la estrategia.",
      text2: "Nuestra misión es crear experiencias de marca auténticas que resuenen con las audiencias e impulsen conexiones significativas. Desde startups hasta empresas establecidas, nos asociamos contigo para desbloquear todo el potencial de tu marca.",
      projects: "Proyectos",
      years: "Años",
      satisfaction: "Satisfacción"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Todo lo que necesitas para construir una marca excepcional",
      items: [
        {
          title: "Identidad de Marca",
          description: "Sistemas completos de identidad visual incluyendo logotipos, paletas de color y tipografía."
        },
        {
          title: "Estrategia de Marca",
          description: "Posicionamiento estratégico, mensajería y análisis competitivo para definir tu marca."
        },
        {
          title: "Diseño y Desarrollo Web",
          description: "Sitios web modernos y responsivos con UX/UI excepcional y rendimiento óptimo."
        },
        {
          title: "Marketing Digital",
          description: "Estrategia de redes sociales, creación de contenido y gestión de campañas."
        },
        {
          title: "Fotografía y Video",
          description: "Fotografía y producción de video profesional para todas las plataformas."
        },
        {
          title: "Diseño de Packaging",
          description: "Packaging llamativo que cuenta la historia de tu marca en el punto de venta."
        },
        {
          title: "Diseño Gráfico",
          description: "Tarjetas de visita, folletos, catálogos y todo el material de marketing."
        },
        {
          title: "Consultoría de Marca",
          description: "Asesoramiento experto en evolución de marca, reposicionamiento y estrategias de crecimiento."
        }
      ]
    },
    industries: {
      title: "Sectores que Servimos",
      subtitle: "Experiencia en diversos mercados",
      items: [
        "Hostelería y Restaurantes",
        "Retail y E-commerce",
        "Startups Tecnológicas",
        "Salud y Bienestar",
        "Moda y Belleza",
        "Inmobiliaria"
      ]
    },
    process: {
      title: "Nuestro Proceso",
      subtitle: "Cómo damos vida a tu marca",
      steps: [
        {
          title: "Descubrimiento e Investigación",
          description: "Nos sumergimos en tu negocio, mercado y audiencia para entender tus desafíos únicos y oportunidades."
        },
        {
          title: "Estrategia y Planificación",
          description: "Desarrollamos una estrategia de marca integral con posicionamiento claro, mensajería y dirección visual."
        },
        {
          title: "Diseño y Desarrollo",
          description: "Nuestro equipo creativo da vida a tu marca con visuales impresionantes y diseños funcionales."
        },
        {
          title: "Lanzamiento y Crecimiento",
          description: "Te ayudamos a lanzar con éxito y proporcionamos soporte continuo para que tu marca prospere."
        }
      ]
    },
    pricing: {
      title: "Elige tu Plan",
      subtitle: "Precios transparentes para cada etapa de tu camino",
      starter: {
        name: "Pack Inicial",
        features: [
          "Sitio web de 1 página (Landing o Portfolio)",
          "Branding básico (logo, colores, tipografía)",
          "Formulario de contacto y enlaces sociales",
          "Entrega en 2 semanas"
        ]
      },
      pro: {
        name: "Pack Pro",
        features: [
          "Hasta 4 páginas (Inicio, Nosotros, Servicios, Contacto)",
          "Guía completa de estilo de marca",
          "Soporte de copywriting",
          "Configuración SEO (meta tags, estructura, velocidad)",
          "Integración con Instagram / WhatsApp",
          "Entrega en 3-4 semanas"
        ]
      },
      premium: {
        name: "Pack Premium",
        features: [
          "Sitio web multipágina personalizado con animaciones",
          "Configuración avanzada de SEO y analytics",
          "Taller de estrategia de marca",
          "Integración de foto/video",
          "1 mes de mantenimiento y actualizaciones",
          "Entrega en 4-5 semanas"
        ]
      },
      cta: "Comenzar"
    },
    caseStudies: {
      title: "Casos de Éxito",
      subtitle: "Resultados reales para negocios reales",
      challenge: "Desafío",
      solution: "Solución",
      results: "Resultados",
      viewFull: "Ver Caso Completo",
      items: [
        {
          name: "Voilà Concept Store",
          category: "Identidad de Marca Completa",
          challenge: "Una nueva boutique en Barcelona necesitaba destacar en un mercado competitivo",
          solution: "Creamos una identidad de marca sofisticada con elegancia de inspiración francesa",
          results: "300% de aumento en tráfico, destacado en Elle Decor España"
        },
        {
          name: "Terra Restaurant",
          category: "Diseño Web y Estrategia",
          challenge: "Restaurante de granja a mesa necesitaba presencia online para reservas",
          solution: "Construimos un sitio web inmersivo mostrando su filosofía y menú de temporada",
          results: "Reservas online subieron 450%, duplicó seguidores en Instagram"
        },
        {
          name: "Bloom Studio",
          category: "Estrategia de Marca y Digital",
          challenge: "Estudio de yoga quería modernizarse y atraer clientela más joven",
          solution: "Rebrand completo con identidad fresca y estrategia de redes sociales",
          results: "40% de aumento en nuevas membresías, 5x engagement social"
        }
      ]
    },
    team: {
      title: "Conoce Nuestro Equipo",
      subtitle: "Las mentes creativas detrás de tu éxito",
      members: [
        {
          name: "Laura Sánchez",
          role: "Directora Creativa",
          bio: "+15 años dando forma a marcas en Europa y Latinoamérica"
        },
        {
          name: "Marc Dubois",
          role: "Diseñador Principal",
          bio: "Diseñador galardonado especializado en identidad visual"
        },
        {
          name: "Ana Costa",
          role: "Directora de Estrategia",
          bio: "Experta en posicionamiento de marca e investigación de mercado"
        },
        {
          name: "David Kim",
          role: "Desarrollador Web",
          bio: "Desarrollador full-stack creando experiencias digitales excepcionales"
        }
      ]
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      subtitle: "Palabras de quienes confían en nosotros",
      items: [
        {
          quote: "Prisma Branding transformó completamente nuestra presencia online. El equipo es profesional, creativo y realmente entendió nuestra visión.",
          author: "Milly Anderson",
          company: "Voilà Concept Store",
          role: "Fundadora"
        },
        {
          quote: "Trabajar con Prisma fue perfecto. Entregaron un sitio web impresionante que superó nuestras expectativas y nos ayudó a destacar en la escena gastronómica de Barcelona.",
          author: "Carlos Martínez",
          company: "Terra Restaurant",
          role: "Propietario y Chef"
        },
        {
          quote: "El taller de estrategia de marca fue increíblemente valioso. Prisma nos ayudó a aclarar nuestro mensaje y llegar a nuestro público objetivo de manera efectiva.",
          author: "Sofía Chen",
          company: "Bloom Studio",
          role: "Directora del Estudio"
        }
      ]
    },
    blog: {
      title: "Últimas Publicaciones",
      subtitle: "Consejos, tendencias e inspiración",
      viewAll: "Ver Todos los Artículos",
      readMore: "Leer Más",
      items: [
        {
          title: "5 Errores de Branding a Evitar en 2025",
          category: "Estrategia de Marca",
          date: "15 Mar 2025"
        },
        {
          title: "Cómo Elegir la Paleta de Color Perfecta",
          category: "Consejos de Diseño",
          date: "10 Mar 2025"
        },
        {
          title: "El ROI del Branding Profesional",
          category: "Crecimiento Empresarial",
          date: "5 Mar 2025"
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber",
      items: [
        {
          question: "¿Cuánto dura un proyecto típico de branding?",
          answer: "La mayoría de proyectos tardan de 4 a 8 semanas dependiendo del alcance. Los paquetes iniciales se pueden entregar en 2 semanas, mientras que los proyectos completos de rebranding pueden tomar de 8 a 12 semanas."
        },
        {
          question: "¿Trabajan con clientes fuera de Barcelona?",
          answer: "¡Por supuesto! Aunque estamos en Barcelona, trabajamos con clientes globalmente. Usamos videollamadas, herramientas de gestión de proyectos y comunicación regular para asegurar una colaboración fluida."
        },
        {
          question: "¿Qué incluye un paquete de identidad de marca?",
          answer: "Una identidad de marca completa incluye diseño de logo, paleta de color, sistema tipográfico, guías de marca, diseño de tarjetas de visita y recursos digitales. Nos aseguramos de que tengas todo lo necesario para una aplicación consistente de la marca."
        },
        {
          question: "¿Pueden ayudar con marketing continuo después del lanzamiento?",
          answer: "¡Sí! Ofrecemos paquetes mensuales de retención para gestión de redes sociales, creación de contenido y soporte de diseño continuo para ayudar a tu marca a crecer continuamente."
        },
        {
          question: "¿Qué pasa si necesito revisiones?",
          answer: "Todos nuestros paquetes incluyen rondas de revisión (2-3 dependiendo del paquete). Trabajamos estrechamente contigo para asegurarnos de que estés encantado con el resultado final."
        },
        {
          question: "¿Ofrecen planes de pago?",
          answer: "Sí, ofrecemos planes de pago flexibles. Típicamente dividimos los pagos en 50% por adelantado y 50% al completar, pero podemos discutir arreglos personalizados."
        }
      ]
    },
    newsletter: {
      title: "Mantente Inspirado",
      subtitle: "Recibe consejos de branding, tendencias de diseño e insights exclusivos mensualmente en tu bandeja de entrada.",
      placeholder: "Ingresa tu email",
      cta: "Suscribirse",
      success: "¡Gracias por suscribirte! Revisa tu email para actualizaciones.",
      footer: "Únete a 2,000+ creativos. Cancela cuando quieras."
    },
    contact: {
      title: "Trabajemos Juntos",
      subtitle: "Construyamos algo increíble juntos.",
      reach: "Completa el formulario o contáctanos directamente:",
      name: "Nombre",
      email: "Email",
      phone: "Teléfono (opcional)",
      service: "Servicio de Interés",
      message: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto...",
      send: "Enviar Mensaje",
      success: "¡Mensaje enviado! Te responderemos dentro de 24 horas.",
      calendar: "O agenda una consulta gratuita",
      services: {
        branding: "Identidad de Marca",
        web: "Diseño Web",
        strategy: "Estrategia Digital",
        photography: "Fotografía y Video",
        consulting: "Consultoría de Marca",
        notSure: "No Estoy Seguro"
      }
    },
    footer: {
      description: "Estudio creativo transformando marcas a través del diseño y la estrategia.",
      services: "Servicios",
      company: "Empresa",
      aboutUs: "Nosotros",
      ourWork: "Trabajos",
      team: "Equipo",
      blog: "Blog",
      contact: "Contacto",
      location: "Barcelona, España",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio"
    }
  },
  ca: {
    nav: {
      home: "Inici",
      about: "Nosaltres",
      services: "Serveis",
      process: "Procés",
      work: "Treballs",
      team: "Equip",
      contact: "Contacte"
    },
    hero: {
      title: "Transformem idees en marques que inspiren",
      subtitle: "Estudi Creatiu a Barcelona — Branding · Disseny Web · Estratègia Digital",
      cta: "Iniciar Projecte",
      viewWork: "Veure Treballs"
    },
    trusted: "Marques que confien en nosaltres",
    about: {
      title: "Sobre Nosaltres",
      text1: "Prisma Branding és un estudi creatiu i digital amb seu a Barcelona. Ajudem les marques a créixer a través del disseny, la narrativa i l'estratègia.",
      text2: "La nostra missió és crear experiències de marca autèntiques que ressonin amb les audiències i impulsin connexions significatives. Des de startups fins a empreses establertes, ens associem amb tu per desbloquejar tot el potencial de la teva marca.",
      projects: "Projectes",
      years: "Anys",
      satisfaction: "Satisfacció"
    },
    services: {
      title: "Els Nostres Serveis",
      subtitle: "Tot el que necessites per construir una marca excepcional",
      items: [
        {
          title: "Identitat de Marca",
          description: "Sistemes complets d'identitat visual incloent logotips, paletes de color i tipografia."
        },
        {
          title: "Estratègia de Marca",
          description: "Posicionament estratègic, missatgeria i anàlisi competitiu per definir la teva marca."
        },
        {
          title: "Disseny i Desenvolupament Web",
          description: "Llocs web moderns i responsius amb UX/UI excepcional i rendiment òptim."
        },
        {
          title: "Màrqueting Digital",
          description: "Estratègia de xarxes socials, creació de contingut i gestió de campanyes."
        },
        {
          title: "Fotografia i Vídeo",
          description: "Fotografia i producció de vídeo professional per a totes les plataformes."
        },
        {
          title: "Disseny de Packaging",
          description: "Packaging cridaner que explica la història de la teva marca al punt de venda."
        },
        {
          title: "Disseny Gràfic",
          description: "Targetes de visita, fulletons, catàlegs i tot el material de màrqueting."
        },
        {
          title: "Consultoria de Marca",
          description: "Assessorament expert en evolució de marca, reposicionament i estratègies de creixement."
        }
      ]
    },
    industries: {
      title: "Sectors que Servim",
      subtitle: "Experiència en diversos mercats",
      items: [
        "Hostaleria i Restaurants",
        "Retail i E-commerce",
        "Startups Tecnològiques",
        "Salut i Benestar",
        "Moda i Bellesa",
        "Immobiliària"
      ]
    },
    process: {
      title: "El Nostre Procés",
      subtitle: "Com donem vida a la teva marca",
      steps: [
        {
          title: "Descobriment i Recerca",
          description: "Ens submergim en el teu negoci, mercat i audiència per entendre els teus reptes únics i oportunitats."
        },
        {
          title: "Estratègia i Planificació",
          description: "Desenvolupem una estratègia de marca integral amb posicionament clar, missatgeria i direcció visual."
        },
        {
          title: "Disseny i Desenvolupament",
          description: "El nostre equip creatiu dona vida a la teva marca amb visuals impressionants i dissenys funcionals."
        },
        {
          title: "Llançament i Creixement",
          description: "T'ajudem a llançar amb èxit i proporcionem suport continu perquè la teva marca prosperi."
        }
      ]
    },
    pricing: {
      title: "Tria el teu Pla",
      subtitle: "Preus transparents per a cada etapa del teu camí",
      starter: {
        name: "Pack Inicial",
        features: [
          "Lloc web d'1 pàgina (Landing o Portfolio)",
          "Branding bàsic (logo, colors, tipografia)",
          "Formulari de contacte i enllaços socials",
          "Lliurament en 2 setmanes"
        ]
      },
      pro: {
        name: "Pack Pro",
        features: [
          "Fins a 4 pàgines (Inici, Nosaltres, Serveis, Contacte)",
          "Guia completa d'estil de marca",
          "Suport de copywriting",
          "Configuració SEO (meta tags, estructura, velocitat)",
          "Integració amb Instagram / WhatsApp",
          "Lliurament en 3-4 setmanes"
        ]
      },
      premium: {
        name: "Pack Premium",
        features: [
          "Lloc web multipàgina personalitzat amb animacions",
          "Configuració avançada de SEO i analytics",
          "Taller d'estratègia de marca",
          "Integració de foto/vídeo",
          "1 mes de manteniment i actualitzacions",
          "Lliurament en 4-5 setmanes"
        ]
      },
      cta: "Començar"
    },
    caseStudies: {
      title: "Casos d'Èxit",
      subtitle: "Resultats reals per a negocis reals",
      challenge: "Repte",
      solution: "Solució",
      results: "Resultats",
      viewFull: "Veure Cas Complet",
      items: [
        {
          name: "Voilà Concept Store",
          category: "Identitat de Marca Completa",
          challenge: "Una nova boutique a Barcelona necessitava destacar en un mercat competitiu",
          solution: "Vam crear una identitat de marca sofisticada amb elegància d'inspiració francesa",
          results: "300% d'augment en trànsit, destacat a Elle Decor Espanya"
        },
        {
          name: "Terra Restaurant",
          category: "Disseny Web i Estratègia",
          challenge: "Restaurant de granja a taula necessitava presència online per a reserves",
          solution: "Vam construir un lloc web immersiu mostrant la seva filosofia i menú de temporada",
          results: "Reserves online van pujar 450%, va duplicar seguidors a Instagram"
        },
        {
          name: "Bloom Studio",
          category: "Estratègia de Marca i Digital",
          challenge: "Estudi de ioga volia modernitzar-se i atreure clientela més jove",
          solution: "Rebrand complet amb identitat fresca i estratègia de xarxes socials",
          results: "40% d'augment en noves membresies, 5x engagement social"
        }
      ]
    },
    team: {
      title: "Coneix el Nostre Equip",
      subtitle: "Les ments creatives darrere del teu èxit",
      members: [
        {
          name: "Laura Sánchez",
          role: "Directora Creativa",
          bio: "+15 anys donant forma a marques a Europa i Llatinoamèrica"
        },
        {
          name: "Marc Dubois",
          role: "Dissenyador Principal",
          bio: "Dissenyador guardonat especialitzat en identitat visual"
        },
        {
          name: "Ana Costa",
          role: "Directora d'Estratègia",
          bio: "Experta en posicionament de marca i recerca de mercat"
        },
        {
          name: "David Kim",
          role: "Desenvolupador Web",
          bio: "Desenvolupador full-stack creant experiències digitals excepcionals"
        }
      ]
    },
    testimonials: {
      title: "El que Diuen els Nostres Clients",
      subtitle: "Paraules de qui confia en nosaltres",
      items: [
        {
          quote: "Prisma Branding va transformar completament la nostra presència online. L'equip és professional, creatiu i realment va entendre la nostra visió.",
          author: "Milly Anderson",
          company: "Voilà Concept Store",
          role: "Fundadora"
        },
        {
          quote: "Treballar amb Prisma va ser perfecte. Van lliurar un lloc web impressionant que va superar les nostres expectatives i ens va ajudar a destacar a l'escena gastronòmica de Barcelona.",
          author: "Carlos Martínez",
          company: "Terra Restaurant",
          role: "Propietari i Xef"
        },
        {
          quote: "El taller d'estratègia de marca va ser increïblement valuós. Prisma ens va ajudar a aclarir el nostre missatge i arribar al nostre públic objectiu de manera efectiva.",
          author: "Sofía Chen",
          company: "Bloom Studio",
          role: "Directora de l'Estudi"
        }
      ]
    },
    blog: {
      title: "Últimes Publicacions",
      subtitle: "Consells, tendències i inspiració",
      viewAll: "Veure Tots els Articles",
      readMore: "Llegir Més",
      items: [
        {
          title: "5 Errors de Branding a Evitar el 2025",
          category: "Estratègia de Marca",
          date: "15 Mar 2025"
        },
        {
          title: "Com Triar la Paleta de Color Perfecta",
          category: "Consells de Disseny",
          date: "10 Mar 2025"
        },
        {
          title: "El ROI del Branding Professional",
          category: "Creixement Empresarial",
          date: "5 Mar 2025"
        }
      ]
    },
    faq: {
      title: "Preguntes Freqüents",
      subtitle: "Tot el que necessites saber",
      items: [
        {
          question: "Quant dura un projecte típic de branding?",
          answer: "La majoria de projectes tarden de 4 a 8 setmanes depenent de l'abast. Els paquets inicials es poden lliurar en 2 setmanes, mentre que els projectes complets de rebranding poden prendre de 8 a 12 setmanes."
        },
        {
          question: "Treballeu amb clients fora de Barcelona?",
          answer: "Per descomptat! Tot i que som a Barcelona, treballem amb clients globalment. Utilitzem videotrucades, eines de gestió de projectes i comunicació regular per assegurar una col·laboració fluida."
        },
        {
          question: "Què inclou un paquet d'identitat de marca?",
          answer: "Una identitat de marca completa inclou disseny de logo, paleta de color, sistema tipogràfic, guies de marca, disseny de targetes de visita i recursos digitals. Ens assegurem que tinguis tot el necessari per a una aplicació consistent de la marca."
        },
        {
          question: "Podeu ajudar amb màrqueting continu després del llançament?",
          answer: "Sí! Oferim paquets mensuals de retenció per a gestió de xarxes socials, creació de contingut i suport de disseny continu per ajudar la teva marca a créixer contínuament."
        },
        {
          question: "Què passa si necessito revisions?",
          answer: "Tots els nostres paquets inclouen rondes de revisió (2-3 depenent del paquet). Treballem estretament amb tu per assegurar-nos que estiguis encantat amb el resultat final."
        },
        {
          question: "Oferiu plans de pagament?",
          answer: "Sí, oferim plans de pagament flexibles. Típicament dividim els pagaments en 50% per avançat i 50% al completar, però podem discutir arranjaments personalitzats."
        }
      ]
    },
    newsletter: {
      title: "Mantén-te Inspirat",
      subtitle: "Rep consells de branding, tendències de disseny i insights exclusius mensualment a la teva safata d'entrada.",
      placeholder: "Introdueix el teu email",
      cta: "Subscriure's",
      success: "Gràcies per subscriure't! Revisa el teu email per a actualitzacions.",
      footer: "Uneix-te a 2.000+ creatius. Cancel·la quan vulguis."
    },
    contact: {
      title: "Treballem Junts",
      subtitle: "Construïm alguna cosa increïble junts.",
      reach: "Completa el formulari o contacta'ns directament:",
      name: "Nom",
      email: "Email",
      phone: "Telèfon (opcional)",
      service: "Servei d'Interès",
      message: "Missatge",
      messagePlaceholder: "Explica'ns sobre el teu projecte...",
      send: "Enviar Missatge",
      success: "Missatge enviat! Et respondrem dins de 24 hores.",
      calendar: "O agenda una consulta gratuïta",
      services: {
        branding: "Identitat de Marca",
        web: "Disseny Web",
        strategy: "Estratègia Digital",
        photography: "Fotografia i Vídeo",
        consulting: "Consultoria de Marca",
        notSure: "No Estic Segur"
      }
    },
    footer: {
      description: "Estudi creatiu transformant marques a través del disseny i l'estratègia.",
      services: "Serveis",
      company: "Empresa",
      aboutUs: "Nosaltres",
      ourWork: "Treballs",
      team: "Equip",
      blog: "Blog",
      contact: "Contacte",
      location: "Barcelona, Espanya",
      rights: "Tots els drets reservats.",
      privacy: "Política de Privacitat",
      terms: "Termes de Servei"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      process: "Processus",
      work: "Projets",
      team: "Équipe",
      contact: "Contact"
    },
    hero: {
      title: "Nous transformons les idées en marques qui inspirent",
      subtitle: "Studio Créatif à Barcelone — Branding · Design Web · Stratégie Digitale",
      cta: "Démarrer un Projet",
      viewWork: "Voir nos Projets"
    },
    trusted: "Marques qui nous font confiance",
    about: {
      title: "À Propos de Nous",
      text1: "Prisma Branding est un studio créatif et digital basé à Barcelone. Nous aidons les marques à se développer grâce au design, au storytelling et à la stratégie.",
      text2: "Notre mission est de créer des expériences de marque authentiques qui résonnent avec les audiences et favorisent des connexions significatives. Des startups aux entreprises établies, nous nous associons avec vous pour débloquer tout le potentiel de votre marque.",
      projects: "Projets",
      years: "Ans",
      satisfaction: "Satisfaction"
    },
    services: {
      title: "Nos Services",
      subtitle: "Tout ce dont vous avez besoin pour construire une marque remarquable",
      items: [
        {
          title: "Identité de Marque",
          description: "Systèmes complets d'identité visuelle incluant logos, palettes de couleurs et typographie."
        },
        {
          title: "Stratégie de Marque",
          description: "Positionnement stratégique, messagerie et analyse concurrentielle pour définir votre marque."
        },
        {
          title: "Design et Développement Web",
          description: "Sites web modernes et responsifs avec UX/UI exceptionnel et performance optimale."
        },
        {
          title: "Marketing Digital",
          description: "Stratégie de médias sociaux, création de contenu et gestion de campagnes."
        },
        {
          title: "Photographie et Vidéo",
          description: "Photographie et production vidéo professionnelles pour toutes les plateformes."
        },
        {
          title: "Design d'Emballage",
          description: "Emballages accrocheurs qui racontent l'histoire de votre marque au point de vente."
        },
        {
          title: "Design Graphique",
          description: "Cartes de visite, brochures, catalogues et tout le matériel marketing."
        },
        {
          title: "Conseil en Marque",
          description: "Conseil expert sur l'évolution de la marque, le repositionnement et les stratégies de croissance."
        }
      ]
    },
    industries: {
      title: "Secteurs que Nous Servons",
      subtitle: "Expertise dans divers marchés",
      items: [
        "Hôtellerie et Restaurants",
        "Commerce de Détail et E-commerce",
        "Startups Tech",
        "Santé et Bien-être",
        "Mode et Beauté",
        "Immobilier"
      ]
    },
    process: {
      title: "Notre Processus",
      subtitle: "Comment nous donnons vie à votre marque",
      steps: [
        {
          title: "Découverte et Recherche",
          description: "Nous plongeons dans votre entreprise, marché et audience pour comprendre vos défis uniques et opportunités."
        },
        {
          title: "Stratégie et Planification",
          description: "Nous développons une stratégie de marque complète avec positionnement clair, messagerie et direction visuelle."
        },
        {
          title: "Design et Développement",
          description: "Notre équipe créative donne vie à votre marque avec des visuels époustouflants et des designs fonctionnels."
        },
        {
          title: "Lancement et Croissance",
          description: "Nous vous aidons à lancer avec succès et fournissons un support continu pour que votre marque prospère."
        }
      ]
    },
    pricing: {
      title: "Choisissez Votre Plan",
      subtitle: "Tarification transparente pour chaque étape de votre parcours",
      starter: {
        name: "Pack Démarrage",
        features: [
          "Site web d'1 page (Landing ou Portfolio)",
          "Branding de base (logo, couleurs, typographie)",
          "Formulaire de contact et liens sociaux",
          "Livraison en 2 semaines"
        ]
      },
      pro: {
        name: "Pack Pro",
        features: [
          "Jusqu'à 4 pages (Accueil, À Propos, Services, Contact)",
          "Guide de style de marque complet",
          "Support de rédaction",
          "Configuration SEO (balises meta, structure, vitesse)",
          "Intégration avec Instagram / WhatsApp",
          "Livraison en 3-4 semaines"
        ]
      },
      premium: {
        name: "Pack Premium",
        features: [
          "Site web multi-pages personnalisé avec animations",
          "Configuration avancée de SEO et analytics",
          "Atelier de stratégie de marque",
          "Intégration photo/vidéo",
          "1 mois de maintenance et mises à jour",
          "Livraison en 4-5 semaines"
        ]
      },
      cta: "Commencer"
    },
    caseStudies: {
      title: "Études de Cas",
      subtitle: "Résultats réels pour des entreprises réelles",
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      viewFull: "Voir l'Étude Complète",
      items: [
        {
          name: "Voilà Concept Store",
          category: "Identité de Marque Complète",
          challenge: "Une nouvelle boutique à Barcelone avait besoin de se démarquer dans un marché compétitif",
          solution: "Nous avons créé une identité de marque sophistiquée avec une élégance d'inspiration française",
          results: "300% d'augmentation du trafic, mise en avant dans Elle Decor Espagne"
        },
        {
          name: "Terra Restaurant",
          category: "Design Web et Stratégie",
          challenge: "Restaurant de la ferme à la table avait besoin d'une présence en ligne pour les réservations",
          solution: "Nous avons construit un site web immersif montrant leur philosophie et menu de saison",
          results: "Les réservations en ligne ont augmenté de 450%, doublement des abonnés Instagram"
        },
        {
          name: "Bloom Studio",
          category: "Stratégie de Marque et Digital",
          challenge: "Studio de yoga voulait se moderniser et attirer une clientèle plus jeune",
          solution: "Rebranding complet avec identité fraîche et stratégie de médias sociaux",
          results: "40% d'augmentation des nouvelles adhésions, 5x d'engagement social"
        }
      ]
    },
    team: {
      title: "Rencontrez Notre Équipe",
      subtitle: "Les esprits créatifs derrière votre succès",
      members: [
        {
          name: "Laura Sánchez",
          role: "Directrice Créative",
          bio: "+15 ans à façonner des marques en Europe et Amérique Latine"
        },
        {
          name: "Marc Dubois",
          role: "Designer Principal",
          bio: "Designer primé spécialisé en identité visuelle"
        },
        {
          name: "Ana Costa",
          role: "Directrice de Stratégie",
          bio: "Experte en positionnement de marque et recherche de marché"
        },
        {
          name: "David Kim",
          role: "Développeur Web",
          bio: "Développeur full-stack créant des expériences digitales exceptionnelles"
        }
      ]
    },
    testimonials: {
      title: "Ce que Disent Nos Clients",
      subtitle: "Mots de ceux qui nous font confiance",
      items: [
        {
          quote: "Prisma Branding a complètement transformé notre présence en ligne. L'équipe est professionnelle, créative et a vraiment compris notre vision.",
          author: "Milly Anderson",
          company: "Voilà Concept Store",
          role: "Fondatrice"
        },
        {
          quote: "Travailler avec Prisma a été parfait. Ils ont livré un site web époustouflant qui a dépassé nos attentes et nous a aidés à nous démarquer sur la scène gastronomique de Barcelone.",
          author: "Carlos Martínez",
          company: "Terra Restaurant",
          role: "Propriétaire et Chef"
        },
        {
          quote: "L'atelier de stratégie de marque a été incroyablement précieux. Prisma nous a aidés à clarifier notre message et à atteindre notre public cible efficacement.",
          author: "Sofía Chen",
          company: "Bloom Studio",
          role: "Directrice du Studio"
        }
      ]
    },
    blog: {
      title: "Dernières Publications",
      subtitle: "Conseils, tendances et inspiration",
      viewAll: "Voir Tous les Articles",
      readMore: "Lire Plus",
      items: [
        {
          title: "5 Erreurs de Branding à Éviter en 2025",
          category: "Stratégie de Marque",
          date: "15 Mar 2025"
        },
        {
          title: "Comment Choisir la Palette de Couleurs Parfaite",
          category: "Conseils de Design",
          date: "10 Mar 2025"
        },
        {
          title: "Le ROI du Branding Professionnel",
          category: "Croissance des Affaires",
          date: "5 Mar 2025"
        }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir",
      items: [
        {
          question: "Combien de temps dure un projet de branding typique?",
          answer: "La plupart des projets prennent de 4 à 8 semaines selon la portée. Les packs de démarrage peuvent être livrés en 2 semaines, tandis que les projets complets de rebranding peuvent prendre de 8 à 12 semaines."
        },
        {
          question: "Travaillez-vous avec des clients en dehors de Barcelone?",
          answer: "Absolument! Bien que nous soyons basés à Barcelone, nous travaillons avec des clients du monde entier. Nous utilisons des appels vidéo, des outils de gestion de projet et une communication régulière pour assurer une collaboration fluide."
        },
        {
          question: "Qu'est-ce qui est inclus dans un pack d'identité de marque?",
          answer: "Une identité de marque complète comprend la conception de logo, la palette de couleurs, le système typographique, les guides de marque, la conception de cartes de visite et les actifs numériques. Nous nous assurons que vous avez tout ce dont vous avez besoin pour une application cohérente de la marque."
        },
        {
          question: "Pouvez-vous aider avec le marketing continu après le lancement?",
          answer: "Oui! Nous offrons des forfaits mensuels pour la gestion des médias sociaux, la création de contenu et le support design continu pour aider votre marque à se développer en permanence."
        },
        {
          question: "Que se passe-t-il si j'ai besoin de révisions?",
          answer: "Tous nos packs incluent des cycles de révision (2-3 selon le pack). Nous travaillons en étroite collaboration avec vous pour nous assurer que vous êtes ravi du résultat final."
        },
        {
          question: "Offrez-vous des plans de paiement?",
          answer: "Oui, nous offrons des plans de paiement flexibles. Typiquement, nous divisons les paiements en 50% d'avance et 50% à la fin, mais nous pouvons discuter d'arrangements personnalisés."
        }
      ]
    },
    newsletter: {
      title: "Restez Inspiré",
      subtitle: "Recevez des conseils de branding, des tendances de design et des insights exclusifs livrés mensuellement dans votre boîte mail.",
      placeholder: "Entrez votre email",
      cta: "S'abonner",
      success: "Merci de vous être abonné! Vérifiez votre email pour les mises à jour.",
      footer: "Rejoignez 2 000+ créatifs. Désabonnez-vous à tout moment."
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Construisons quelque chose d'incroyable ensemble.",
      reach: "Remplissez le formulaire ou contactez-nous directement:",
      name: "Nom",
      email: "Email",
      phone: "Téléphone (optionnel)",
      service: "Service d'Intérêt",
      message: "Message",
      messagePlaceholder: "Parlez-nous de votre projet...",
      send: "Envoyer le Message",
      success: "Message envoyé! Nous vous répondrons dans les 24 heures.",
      calendar: "Ou planifiez une consultation gratuite",
      services: {
        branding: "Identité de Marque",
        web: "Design Web",
        strategy: "Stratégie Digitale",
        photography: "Photographie et Vidéo",
        consulting: "Conseil en Marque",
        notSure: "Pas Sûr"
      }
    },
    footer: {
      description: "Studio créatif transformant les marques à travers le design et la stratégie.",
      services: "Services",
      company: "Entreprise",
      aboutUs: "À Propos",
      ourWork: "Projets",
      team: "Équipe",
      blog: "Blog",
      contact: "Contact",
      location: "Barcelone, Espagne",
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions de Service"
    }
  }
};

export default function PrismaBranding() {
  const [language, setLanguage] = useState('es'); // Spanish as default
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentCase, setCurrentCase] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'branding',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [formStatus, setFormStatus] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const t = translations[language];

  const { scrollYProgress } = useScroll();
  const headerBg = useTransform(scrollYProgress, [0, 0.1], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.98)']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(t.contact.success);
    setTimeout(() => setFormStatus(''), 4000);
    setFormData({ name: '', email: '', phone: '', service: 'branding', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterStatus(t.newsletter.success);
    setTimeout(() => setNewsletterStatus(''), 4000);
    setNewsletterEmail('');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ca', name: 'Català', flag: '🏴' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const languageNames = {
    en: 'English',
    es: 'Español',
    ca: 'Català',
    fr: 'Français'
  };

  const languageFlags = {
    en: '🇬🇧',
    es: '🇪🇸',
    ca: '🏴',
    fr: '🇫🇷'
  };

  return (
    <div className="font-sans antialiased bg-white text-gray-900">
      {/* Header */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className="fixed top-0 left-0 right-0 z-50 shadow-sm backdrop-blur-sm"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            Prisma Branding
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {Object.values(t.nav).map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(Object.keys(t.nav)[index])}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Languages className="w-5 h-5" />
                <span className="font-medium">{languageNames[language]}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[150px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                          language === lang.code ? 'bg-gray-100 font-semibold' : 'font-medium'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-6 py-4 space-y-4">
                {Object.values(t.nav).map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(Object.keys(t.nav)[index])}
                    className="block w-full text-left text-gray-700 hover:text-gray-900 font-medium"
                  >
                    {item}
                  </button>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500 mb-3">Language</div>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsMenuOpen(false);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          language === lang.code
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium inline-flex items-center space-x-2 hover:bg-gray-800 transition-all transform hover:scale-105"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all"
            >
              {t.hero.viewWork}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-gray-500 mb-8 uppercase text-sm tracking-wider"
          >
            {t.trusted}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {["Voilà", "Terra", "Bloom", "Urban Coffee", "Azur Hotel", "Lux Cosmetics", "Verde Market", "Casa Nova"].map((client, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
              >
                {client}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                {t.about.text1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.about.text2}
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">{t.about.projects}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">{t.about.years}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">{t.about.satisfaction}</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600">{t.services.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Palette className="w-8 h-8" /> },
              { icon: <Target className="w-8 h-8" /> },
              { icon: <Globe className="w-8 h-8" /> },
              { icon: <TrendingUp className="w-8 h-8" /> },
              { icon: <Camera className="w-8 h-8" /> },
              { icon: <Package className="w-8 h-8" /> },
              { icon: <FileText className="w-8 h-8" /> },
              { icon: <Lightbulb className="w-8 h-8" /> }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-gray-900 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{t.services.items[index].title}</h3>
                <p className="text-gray-600 text-sm">{t.services.items[index].description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.industries.title}</h2>
            <p className="text-xl text-gray-600">{t.industries.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {["🍽️", "🛍️", "💻", "🧘", "👗", "🏠"].map((icon, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className="text-sm font-medium text-gray-700">{t.industries.items[index]}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-xl text-gray-600">{t.process.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {["01", "02", "03", "04"].map((num, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-200 mb-4">{num}</div>
                <h3 className="text-2xl font-bold mb-3">{t.process.steps[index].title}</h3>
                <p className="text-gray-600">{t.process.steps[index].description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-gray-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-gray-600">{t.pricing.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { emoji: "💡", name: t.pricing.starter.name, price: "€450", features: t.pricing.starter.features },
              { emoji: "🔥", name: t.pricing.pro.name, price: "€850", features: t.pricing.pro.features, featured: true },
              { emoji: "✨", name: t.pricing.premium.name, price: "€1,200", features: t.pricing.premium.features }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 ${
                  plan.featured ? 'ring-2 ring-gray-900' : ''
                }`}
              >
                <div className="text-4xl mb-4">{plan.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.featured
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {t.pricing.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.caseStudies.title}</h2>
            <p className="text-xl text-gray-600">{t.caseStudies.subtitle}</p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"][currentCase]}
                      alt={t.caseStudies.items[currentCase].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                      {t.caseStudies.items[currentCase].category}
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{t.caseStudies.items[currentCase].name}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{t.caseStudies.challenge}</div>
                        <p className="text-gray-600">{t.caseStudies.items[currentCase].challenge}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{t.caseStudies.solution}</div>
                        <p className="text-gray-600">{t.caseStudies.items[currentCase].solution}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{t.caseStudies.results}</div>
                        <p className="text-gray-600 font-medium">{t.caseStudies.items[currentCase].results}</p>
                      </div>
                    </div>

                    <button className="text-gray-900 inline-flex items-center space-x-2 font-medium hover:underline">
                      <span>{t.caseStudies.viewFull}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentCase((prev) => (prev === 0 ? 2 : prev - 1))}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentCase ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentCase((prev) => (prev === 2 ? 0 : prev + 1))}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-600">{t.team.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
              { img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
              { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
              { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.img}
                    alt={t.team.members[index].name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{t.team.members[index].name}</h3>
                <div className="text-gray-500 mb-2">{t.team.members[index].role}</div>
                <p className="text-sm text-gray-600">{t.team.members[index].bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-12 rounded-2xl shadow-xl text-center"
              >
                <p className="text-2xl text-gray-700 mb-6 italic">
                  "{t.testimonials.items[currentTestimonial].quote}"
                </p>
                <div className="font-bold text-lg">{t.testimonials.items[currentTestimonial].author}</div>
                <div className="text-gray-500">{t.testimonials.items[currentTestimonial].role}</div>
                <div className="text-gray-500">{t.testimonials.items[currentTestimonial].company}</div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? 2 : prev - 1))}
                className="p-2 rounded-full bg-white shadow hover:shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-gray-900 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev === 2 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-white shadow hover:shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.blog.title}</h2>
              <p className="text-xl text-gray-600">{t.blog.subtitle}</p>
            </div>
            <button className="hidden md:inline-flex items-center space-x-2 text-gray-900 font-medium hover:underline">
              <span>{t.blog.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop" },
              { img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" }
            ].map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.img}
                    alt={t.blog.items[index].title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">{t.blog.items[index].category}</span>
                    <span className="text-sm text-gray-400">{t.blog.items[index].date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {t.blog.items[index].title}
                  </h3>
                  <button className="text-gray-900 inline-flex items-center space-x-2 font-medium hover:underline">
                    <span>{t.blog.readMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {t.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 flex-shrink-0 text-gray-600" />
                  ) : (
                    <Plus className="w-5 h-5 flex-shrink-0 text-gray-600" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.newsletter.title}</h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.newsletter.subtitle}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{t.newsletter.cta}</span>
              </button>
            </form>

            {newsletterStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-300"
              >
                {newsletterStatus}
              </motion.div>
            )}

            <p className="text-sm text-gray-400 mt-4">
              {t.newsletter.footer}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 mb-4">
              {t.contact.subtitle}
            </p>
            <p className="text-lg text-gray-500 mb-6">
              {t.contact.reach}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="mailto:hello@prismabranding.com"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@prismabranding.com</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+34123456789"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+34 123 456 789</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://wa.me/34123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  placeholder={t.contact.name}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  placeholder={t.contact.email}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                  placeholder="+34 123 456 789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.service}</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                >
                  <option value="branding">{t.contact.services.branding}</option>
                  <option value="web-design">{t.contact.services.web}</option>
                  <option value="digital-strategy">{t.contact.services.strategy}</option>
                  <option value="photography">{t.contact.services.photography}</option>
                  <option value="consulting">{t.contact.services.consulting}</option>
                  <option value="not-sure">{t.contact.services.notSure}</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>{t.contact.send}</span>
            </button>
            {formStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 text-green-800 rounded-lg text-center"
              >
                {formStatus}
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 text-center"
          >
            <a
              href="https://calendly.com/prismabranding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.contact.calendar}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Prisma Branding</div>
              <p className="text-gray-400 mb-4">
                {t.footer.description}
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:hello@prismabranding.com" className="hover:text-gray-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.services}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">{t.services.items[0].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">{t.services.items[2].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">{t.services.items[3].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">{t.services.items[4].title}</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.company}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">{t.footer.aboutUs}</button></li>
                <li><button onClick={() => scrollToSection('work')} className="hover:text-white transition-colors">{t.footer.ourWork}</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-white transition-colors">{t.footer.team}</button></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.location}</li>
                <li>hello@prismabranding.com</li>
                <li>+34 123 456 789</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Prisma Branding — Barcelona. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/34123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}