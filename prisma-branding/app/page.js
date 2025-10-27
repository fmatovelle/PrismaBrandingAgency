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
  "url": "https://brandprisma.com",
  "logo": "https://brandprisma.com/logo.png",
  "image": "https://brandprisma.com/og-image.jpg",
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

// Breadcrumb Schema para home
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://brandprisma.com"
    }
  ]
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
    title: "Planes y Precios",
    subtitle: "Elige el paquete perfecto para tus necesidades",
    starter: {
      name: "Starter",
      price: "1.500€",
      description: "Perfecto para startups y pequeños negocios",
      features: [
        "Diseño de Logotipo",
        "Paleta de Colores",
        "Tipografía",
        "Tarjetas de Visita",
        "2 Revisiones"
      ]
    },
    professional: {
      name: "Professional",
      price: "3.500€",
      description: "Ideal para negocios en crecimiento",
      features: [
        "Identidad de Marca Completa",
        "Diseño Web (5 páginas)",
        "Gestión de Redes Sociales (1 mes)",
        "Fotografía de Producto",
        "Revisiones Ilimitadas"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      price: "Personalizado",
      description: "Para marcas establecidas con necesidades complejas",
      features: [
        "Todo del plan Professional",
        "Estrategia de Marca 360°",
        "Desarrollo Web Avanzado",
        "Consultoría Continua",
        "Soporte Prioritario"
      ]
    },
    cta: "Comenzar Ahora",
    contact: "Contactar Ventas"
  },
  work: {
    title: "Nuestro Trabajo",
    subtitle: "Proyectos destacados que transformaron marcas",
    cta: "Ver Proyecto Completo"
  },
  testimonials: {
    title: "Lo Que Dicen Nuestros Clientes",
    subtitle: "Historias de éxito reales de marcas que han crecido con nosotros",
    items: [
      {
        text: "Prisma Branding transformó completamente nuestra identidad visual. Su profesionalismo y creatividad superaron nuestras expectativas.",
        author: "María González",
        role: "CEO, TechStart",
        rating: 5
      },
      {
        text: "El equipo de Prisma entendió perfectamente nuestra visión y la hizo realidad. Nuestro sitio web ahora convierte 3x más que antes.",
        author: "Carlos Rodríguez",
        role: "Fundador, EcoLife",
        rating: 5
      },
      {
        text: "Desde el branding hasta la estrategia digital, Prisma ha sido un socio invaluable para nuestro crecimiento.",
        author: "Ana Martínez",
        role: "Marketing Director, StyleHub",
        rating: 5
      }
    ]
  },
  team: {
    title: "Nuestro Equipo",
    subtitle: "Conoce a los creativos detrás de las marcas",
    members: [
      {
        name: "Laura Sánchez",
        role: "Directora Creativa",
        bio: "15 años de experiencia en branding"
      },
      {
        name: "David Torres",
        role: "Lead Designer",
        bio: "Especialista en identidad visual"
      },
      {
        name: "Sara López",
        role: "Estratega Digital",
        bio: "Experta en marketing digital y growth"
      },
      {
        name: "Miguel Ruiz",
        role: "Desarrollador Web",
        bio: "Full-stack developer apasionado por UX"
      }
    ]
  },
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre trabajar con nosotros",
    items: [
      {
        q: "¿Cuánto tiempo toma un proyecto de branding?",
        a: "Un proyecto típico de branding toma entre 4-8 semanas, dependiendo del alcance. Proyectos más complejos pueden extenderse hasta 12 semanas."
      },
      {
        q: "¿Ofrecen soporte después del lanzamiento?",
        a: "Sí, todos nuestros proyectos incluyen 30 días de soporte post-lanzamiento. También ofrecemos paquetes de mantenimiento continuo."
      },
      {
        q: "¿Trabajan con clientes internacionales?",
        a: "Absolutamente. Trabajamos con clientes en España, Ecuador y toda Europa. La comunicación se realiza de forma remota o presencial según prefieras."
      },
      {
        q: "¿Qué incluye un proyecto de diseño web?",
        a: "Incluye diseño responsivo, desarrollo, optimización SEO básica, integración de CMS y capacitación para gestionar el contenido."
      },
      {
        q: "¿Puedo ver ejemplos de su trabajo anterior?",
        a: "Por supuesto. Navega a nuestra sección de 'Trabajos' o contáctanos para ver casos de estudio específicos de tu industria."
      }
    ]
  },
  blog: {
    title: "Últimas Insights",
    subtitle: "Consejos y tendencias en branding y diseño",
    cta: "Leer Más"
  },
  contact: {
    title: "Hablemos de Tu Proyecto",
    subtitle: "¿Listo para llevar tu marca al siguiente nivel? Contáctanos hoy.",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    service: "Servicio de Interés",
    message: "Mensaje",
    messagePlaceholder: "Cuéntanos sobre tu proyecto...",
    send: "Enviar Mensaje",
    services: {
      branding: "Identidad de Marca",
      web: "Diseño Web",
      strategy: "Estrategia Digital",
      photography: "Fotografía y Video",
      consulting: "Consultoría",
      notSure: "No estoy seguro"
    },
    success: "¡Gracias! Te contactaremos pronto.",
    schedule: "Agenda una Llamada",
    calendar: "¿Prefieres programar una reunión?"
  },
  footer: {
    description: "Estudio creativo especializado en transformar marcas a través del diseño y la estrategia.",
    services: "Servicios",
    company: "Empresa",
    aboutUs: "Sobre Nosotros",
    ourWork: "Nuestro Trabajo",
    team: "Equipo",
    blog: "Blog",
    contact: "Contacto",
    location: "Barcelona, España",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio"
  }
};

export default function PrismaBrandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'branding',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Proyectos destacados
  const projects = [
    {
      title: "Café Artisan",
      category: "Branding & Packaging",
      image: "/api/placeholder/600/400",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "TechFlow",
      category: "Web Design & Development",
      image: "/api/placeholder/600/400",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "EcoStyle",
      category: "Brand Strategy & Identity",
      image: "/api/placeholder/600/400",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Urban Eats",
      category: "Digital Strategy",
      image: "/api/placeholder/600/400",
      color: "from-red-500 to-pink-600"
    }
  ];

  // Blog posts
  const blogPosts = [
    {
      title: "10 Tendencias de Branding para 2025",
      date: "15 Ene 2025",
      image: "/api/placeholder/400/300",
      excerpt: "Descubre las tendencias que definirán el diseño de marcas este año."
    },
    {
      title: "Cómo Crear una Identidad Visual Memorable",
      date: "8 Ene 2025",
      image: "/api/placeholder/400/300",
      excerpt: "Guía completa para desarrollar una identidad que destaque."
    },
    {
      title: "El Poder del Storytelling en el Branding",
      date: "2 Ene 2025",
      image: "/api/placeholder/400/300",
      excerpt: "Por qué contar historias auténticas impulsa la conexión con tu audiencia."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'work', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === t.testimonials.items.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(t.contact.success);
    setTimeout(() => setFormStatus(''), 3000);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="font-sans antialiased">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900"
            >
              Prisma Branding
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key === 'home' ? 'home' : key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === key ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {value}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                {t.hero.cta}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 space-y-4"
              >
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key === 'home' ? 'home' : key)}
                    className="block w-full text-left text-gray-700 hover:text-gray-900 py-2"
                  >
                    {value}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
            >
              {t.hero.viewWork}
            </button>
          </motion.div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-10 blur-3xl"
          />
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
            {t.trusted}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-2xl font-bold text-gray-400">
                Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.text1}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.about.text2}
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600">{t.about.projects}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
                  <div className="text-gray-600">{t.about.years}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600">{t.about.satisfaction}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/api/placeholder/600/600"
                  alt="Prisma Branding Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-gray-900" />
                  <div>
                    <div className="font-bold text-gray-900">Enfoque 360°</div>
                    <div className="text-sm text-gray-600">Branding completo</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.services.items.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <Palette className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.industries.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.industries.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-6"
          >
            {t.industries.items.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all"
              >
                <Globe className="w-8 h-8 text-gray-900 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.process.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.process.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute -left-4 top-0 text-8xl font-bold text-gray-800 opacity-30">
                  {index + 1}
                </div>
                <div className="relative z-10 pt-12">
                  <h3 className="text-xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.pricing.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Starter Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.pricing.starter.name}
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                {t.pricing.starter.price}
              </div>
              <p className="text-gray-600 mb-6">
                {t.pricing.starter.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.pricing.starter.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                {t.pricing.cta}
              </button>
            </motion.div>

            {/* Professional Plan (Popular) */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-900 text-white p-8 rounded-2xl relative transform scale-105 shadow-2xl"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Más Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {t.pricing.professional.name}
              </h3>
              <div className="text-4xl font-bold mb-4">
                {t.pricing.professional.price}
              </div>
              <p className="text-gray-300 mb-6">
                {t.pricing.professional.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.pricing.professional.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-white" />
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-gray-900 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
                {t.pricing.cta}
              </button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t.pricing.enterprise.name}
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">
                {t.pricing.enterprise.price}
              </div>
              <p className="text-gray-600 mb-6">
                {t.pricing.enterprise.description}
              </p>
              <ul className="space-y-3 mb-8">
                {t.pricing.enterprise.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                {t.pricing.contact}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.work.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.work.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-8`}>
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-lg mb-4">{project.category}</p>
                    <button className="inline-flex items-center space-x-2 text-white font-medium">
                      <span>{t.work.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-12 rounded-2xl shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(t.testimonials.items[currentTestimonial].rating)].map((_, i) => (
                    <TrendingUp key={i} className="w-6 h-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 mb-8 text-center italic">
                  "{t.testimonials.items[currentTestimonial].text}"
                </p>
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg">
                    {t.testimonials.items[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {t.testimonials.items[currentTestimonial].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 space-x-2">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-gray-900 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? t.testimonials.items.length - 1 : currentTestimonial - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === t.testimonials.items.length - 1 ? 0 : currentTestimonial + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.team.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.team.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t.team.members.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src="/api/placeholder/400/400"
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-gray-600 mb-3">{member.role}</div>
                  <p className="text-sm text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.faq.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="space-y-4"
          >
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {item.q}
                  </h3>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.blog.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="inline-flex items-center space-x-2 text-gray-900 font-medium group-hover:space-x-3 transition-all">
                    <span>{t.blog.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <a
              href="mailto:hello@prismabranding.com"
              className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+34123456789"
              className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Teléfono</span>
            </a>
            <a
              href="https://wa.me/34123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl hover:shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
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