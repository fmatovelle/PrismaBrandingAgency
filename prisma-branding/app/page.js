'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Palette, Globe, TrendingUp, Check, Mail, Instagram, Linkedin, ChevronLeft, ChevronRight, Target, Users, Lightbulb, Rocket, Camera, Package, Newspaper, FileText, MessageSquare, Phone, Calendar, ChevronDown, Plus, Minus, Send } from 'lucide-react';

// Schema JSON-LD para SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prisma Branding",
  "description": "Estudio creativo en Barcelona especializado en branding, diseño web y estrategia digital",
  "url": "https://prisma-branding.web.app",
  "logo": "https://prisma-branding.web.app/logo.png",
  "image": "https://prisma-branding.web.app/og-image.jpg",
  "telephone": "+34123456789",
  "email": "hello@prismabranding.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Barcelona",
    "addressLocality": "Barcelona",
    "addressRegion": "Cataluña",
    "postalCode": "08001",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.3874,
    "longitude": 2.1686
  },
  "priceRange": "€€€",
  "openingHours": "Mo-Fr 09:00-18:00",
  "sameAs": [
    "https://instagram.com/prismabranding",
    "https://linkedin.com/company/prismabranding"
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Branding",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidad de Marca",
          "description": "Diseño de logo, paleta de colores y sistema tipográfico"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diseño Web",
          "description": "Sitios web modernos y responsivos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estrategia Digital",
          "description": "Marketing digital y gestión de redes sociales"
        }
      }
    ]
  }
};

// Textos en Español
const t = {
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
    subtitle: "Precios transparentes para branding profesional",
    identity: {
      name: "Pack Identidad",
      features: [
        "Diseño de logo + 3 variaciones",
        "Paleta de color (5 colores)",
        "Sistema tipográfico (2-3 fuentes)",
        "Guía de marca básica (PDF)",
        "Diseño de tarjeta de visita",
        "Plantillas para redes sociales",
        "Entrega en 2-3 semanas"
      ]
    },
    brandWeb: {
      name: "Pack Marca & Web",
      features: [
        "Todo lo del Pack Identidad",
        "Guía de estilo completa (20+ páginas)",
        "Sitio web de 4 páginas responsive",
        "Configuración y optimización SEO",
        "Soporte de copywriting",
        "Integración Instagram/WhatsApp",
        "2 semanas de soporte post-lanzamiento",
        "Entrega en 4-5 semanas"
      ]
    },
    rebrand: {
      name: "Rebrand Completo",
      features: [
        "Taller de estrategia de marca",
        "Sistema completo de identidad visual",
        "Sitio web multipágina personalizado con animaciones",
        "Material de marketing (folletos, presentaciones)",
        "Dirección de arte para fotografía",
        "Kit de lanzamiento para redes sociales",
        "3 meses de soporte y actualizaciones continuas",
        "Entrega en 6-8 semanas"
      ]
    },
    cta: "Comenzar",
    custom: "¿Necesitas algo único? Desde diseño de packaging hasta campañas de marca, creamos soluciones personalizadas."
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
};

export default function PrismaBranding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '02efd0d3-bcec-40f9-a6fc-63b6d42927fd',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
          subject: 'New Contact Form Submission - Prisma Branding',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus(t.contact.success);
        setFormData({ name: '', email: '', phone: '', service: 'branding', message: '' });
      } else {
        setFormStatus('Error al enviar el mensaje. Por favor intenta de nuevo.');
      }
    } catch (error) {
      setFormStatus('Error al enviar el mensaje. Por favor intenta de nuevo.');
    }
    
    setTimeout(() => setFormStatus(''), 4000);
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
              { emoji: "💡", name: t.pricing.identity.name, price: "€800", features: t.pricing.identity.features },
              { emoji: "🔥", name: t.pricing.brandWeb.name, price: "€1,800", features: t.pricing.brandWeb.features, featured: true },
              { emoji: "✨", name: t.pricing.rebrand.name, price: "€3,500", features: t.pricing.rebrand.features }
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
              <p className="text-lg text-gray-700 mb-4">{t.pricing.custom}</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:underline"
              >
                <span>{t.contact.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
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