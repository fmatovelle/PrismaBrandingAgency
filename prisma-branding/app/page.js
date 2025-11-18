'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Palette, Globe, TrendingUp, Check, Mail, Instagram, Linkedin, ChevronLeft, ChevronRight, Target, Users, Lightbulb, Rocket, Camera, Package, Newspaper, FileText, MessageSquare, Phone, Calendar, ChevronDown, Plus, Minus, Send } from 'lucide-react';

// Schema JSON-LD para SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prisma Branding",
  "description": "Agencia de branding y diseño web en Barcelona especializada en identidad de marca, diseño web profesional y estrategia digital",
  "url": "https://brandprisma.com",
  "logo": "https://brandprisma.com/logo.png",
  "image": "https://brandprisma.com/og-image.jpg",
  "telephone": "+34637738054",
  "email": "contact@brandprisma.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Ejemplo 123",
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
    "name": "Servicios de Branding y Diseño Web",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Identidad de Marca Profesional",
          "description": "Diseño completo de identidad visual corporativa incluyendo logotipo, manual de marca y paleta de colores"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diseño Web Profesional",
          "description": "Páginas web modernas, responsive y optimizadas para conversión con SEO incluido"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estrategia Digital",
          "description": "Marketing digital, gestión de redes sociales y estrategia de contenidos"
        }
      }
    ]
  }
};

// Breadcrumb Schema
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

// Textos optimizados para SEO
const t = {
  nav: {
    home: "Inicio",
    about: "Agencia",
    services: "Servicios",
    process: "Metodología",
    work: "Portfolio",
    team: "Equipo",
    contact: "Contacto"
  },
  
  hero: {
    title: "Agencia de Branding y Diseño Web en Barcelona",
    subtitle: "Estudio creativo especializado en identidad de marca, diseño web profesional y estrategia digital. Transformamos tu negocio con branding que conecta y convierte.",
    cta: "Solicitar Presupuesto",
    viewWork: "Ver Portfolio"
  },
  
  trusted: "Empresas que confían en nuestro branding",
  
  about: {
    title: "Agencia de Branding en Barcelona con +10 Años de Experiencia",
    text1: "Prisma Branding es un estudio creativo y agencia digital especializada en Barcelona. Ayudamos a empresas y startups a crecer mediante diseño de marca profesional, desarrollo web y estrategia de marketing digital que genera resultados medibles.",
    text2: "Nuestra misión es crear identidades de marca auténticas y memorables que conectan emocionalmente con tu audiencia objetivo. Desde el diseño de logotipo hasta la estrategia digital completa, te acompañamos en cada fase para posicionar tu marca en el mercado español y europeo.",
    projects: "Proyectos Completados",
    years: "Años de Experiencia",
    satisfaction: "Clientes Satisfechos"
  },
  
  services: {
    title: "Servicios de Branding y Diseño Digital en Barcelona",
    subtitle: "Soluciones integrales para construir, posicionar y hacer crecer tu marca",
    items: [
      {
        title: "Identidad de Marca Profesional",
        description: "Diseño completo de identidad visual corporativa: logotipo único, manual de marca, paleta de colores estratégica y sistema tipográfico. Branding que refleja los valores de tu empresa."
      },
      {
        title: "Estrategia de Marca y Posicionamiento",
        description: "Definición estratégica de tu marca: análisis competitivo, posicionamiento en el mercado, propuesta de valor, naming y mensajería de marca que diferencia tu negocio."
      },
      {
        title: "Diseño Web y Desarrollo Profesional",
        description: "Páginas web modernas, responsive y optimizadas para conversión. Diseño UX/UI profesional, desarrollo en WordPress, Shopify o Next.js con SEO técnico incluido."
      },
      {
        title: "Marketing Digital y Redes Sociales",
        description: "Estrategia digital 360°: gestión de redes sociales, creación de contenido visual, campañas publicitarias en Meta Ads y Google Ads. Aumentamos tu visibilidad online."
      },
      {
        title: "Fotografía de Producto y Video Marketing",
        description: "Producción audiovisual profesional para e-commerce, redes sociales y campañas publicitarias. Fotografía de producto, sesiones corporativas y videos promocionales en Barcelona."
      },
      {
        title: "Diseño de Packaging y Etiquetas",
        description: "Packaging atractivo y funcional que destaca en el punto de venta. Diseño de etiquetas, cajas y envases personalizados para productos retail, alimentación y cosmética."
      },
      {
        title: "Diseño Gráfico y Material Corporativo",
        description: "Papelería corporativa completa: tarjetas de visita, catálogos de producto, folletos comerciales, presentaciones corporativas y todo el material gráfico para tu empresa."
      },
      {
        title: "Consultoría de Branding y Rebranding",
        description: "Asesoramiento estratégico para evolucionar tu marca: rebranding, auditoría de marca, estrategias de crecimiento y expansión a nuevos mercados. Consultores expertos en Barcelona."
      }
    ]
  },
  
  industries: {
    title: "Sectores y Empresas con las que Trabajamos",
    subtitle: "Experiencia en branding para múltiples industrias en España y Latinoamérica",
    items: [
      "Restaurantes y Hostelería en Barcelona",
      "E-commerce y Tiendas Online",
      "Startups Tecnológicas y SaaS",
      "Clínicas de Salud y Bienestar",
      "Marcas de Moda y Cosmética",
      "Sector Inmobiliario y Construcción"
    ]
  },
  
  process: {
    title: "Nuestra Metodología de Trabajo en Branding",
    subtitle: "Proceso probado en más de 200 proyectos de branding exitosos",
    steps: [
      {
        title: "Discovery: Investigación y Análisis de Marca",
        description: "Analizamos en profundidad tu negocio, competencia, mercado objetivo y audiencia. Identificamos oportunidades de diferenciación y establecemos los objetivos estratégicos del proyecto de branding."
      },
      {
        title: "Estrategia: Posicionamiento y Concepto Creativo",
        description: "Desarrollamos la estrategia de marca completa: propuesta de valor única, posicionamiento competitivo, tono de comunicación, personalidad de marca y dirección creativa visual."
      },
      {
        title: "Diseño: Creación de Identidad Visual",
        description: "Nuestro equipo creativo diseña todos los elementos visuales: logotipo, paleta cromática, tipografías, aplicaciones de marca y guidelines. Diseño profesional con múltiples revisiones incluidas."
      },
      {
        title: "Lanzamiento: Implementación y Soporte",
        description: "Lanzamos tu nueva marca al mercado con un plan de comunicación estratégico. Proporcionamos soporte continuo, formación al equipo y acompañamiento en las primeras campañas de marketing."
      }
    ]
  },
  
  pricing: {
    title: "Precios de Branding y Diseño Web",
    subtitle: "Paquetes adaptados a cada fase de tu empresa",
    starter: {
      name: "Starter",
      price: "1.500€",
      description: "Ideal para startups y pequeñas empresas que inician",
      features: [
        "Diseño de Logotipo Profesional (3 propuestas)",
        "Paleta de Colores y Tipografías",
        "Manual de Marca Básico (PDF)",
        "Tarjetas de Visita Digitales",
        "2 Rondas de Revisiones",
        "Entrega en 2-3 semanas"
      ]
    },
    professional: {
      name: "Professional",
      price: "3.500€",
      description: "El más elegido por empresas en crecimiento",
      features: [
        "Identidad de Marca Completa",
        "Diseño Web Profesional",
        "Optimización SEO Básica",
        "Estrategia de Redes Sociales (1 mes)",
        "Sesión de Fotografía de Producto",
        "Revisiones Ilimitadas",
        "Soporte 30 días post-lanzamiento"
      ],
      popular: true
    },
    enterprise: {
      name: "Enterprise",
      price: "Desde 8.000€",
      description: "Para empresas consolidadas que buscan resultados premium",
      features: [
        "Todo del Plan Professional",
        "Estrategia de Marca 360° Completa",
        "Desarrollo Web Avanzado (E-commerce, CMS)",
        "Producción Audiovisual Profesional",
        "Consultoría Estratégica Continua",
        "Account Manager Dedicado",
        "Soporte Prioritario 24/7"
      ]
    },
    cta: "Solicitar Presupuesto",
    contact: "Contactar con Ventas"
  },
  
  work: {
    title: "Portfolio: Proyectos de Branding en Barcelona",
    subtitle: "Casos de éxito de marcas que transformamos con diseño estratégico",
    cta: "Ver Caso de Estudio Completo"
  },
  
  testimonials: {
    title: "Opiniones de Clientes Sobre Nuestro Servicio de Branding",
    subtitle: "Testimonios reales de empresas que confiaron en Prisma Branding",
    items: [
      {
        text: "Prisma Branding renovó completamente nuestra identidad visual. El equipo entendió perfectamente nuestra industria tech y creó una marca moderna que triplicó nuestras conversiones en web. Profesionalismo de 10.",
        author: "María González",
        role: "CEO, TechStart Barcelona",
        rating: 5
      },
      {
        text: "Necesitábamos un diseño web que convirtiera visitas en ventas. Prisma no solo diseñó una web espectacular, sino que optimizaron todo para SEO. Ahora estamos en primera página de Google para 'productos ecológicos Barcelona'.",
        author: "Carlos Rodríguez",
        role: "Fundador, EcoLife Shop",
        rating: 5
      },
      {
        text: "Trabajar con Prisma fue una experiencia increíble. Desde el branding hasta la gestión de redes sociales, todo mejoró. Nuestras ventas online aumentaron un 250% en 6 meses. Mejor inversión que hemos hecho.",
        author: "Ana Martínez",
        role: "Directora de Marketing, StyleHub",
        rating: 5
      }
    ]
  },
  
  team: {
    title: "Equipo de Diseñadores y Estrategas en Barcelona",
    subtitle: "Profesionales creativos especializados en branding y marketing digital",
    members: [
      {
        name: "Federico Matovelle",
        role: "Senior Web Developer & Fundador",
        bio: "Full-stack developer especializado en Next.js, Shopify y WordPress",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
      },
      {
        name: "David Torres",
        role: "Lead Designer & Brand Strategist",
        bio: "Especialista en identidad visual corporativa y diseño de logotipos",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80"
      },
      {
        name: "Sara López",
        role: "Digital Marketing Manager",
        bio: "Experta en estrategia digital, SEO y campañas de performance marketing",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80"
      },
      {
        name: "Federico Matovelle",
        role: "Senior Web Developer",
        bio: "Full-stack developer especializado en Next.js, Shopify y WordPress",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
      }
    ]
  },
  
  faq: {
    title: "Preguntas Frecuentes sobre Branding y Diseño Web",
    subtitle: "Resolvemos tus dudas sobre nuestros servicios de branding en Barcelona",
    items: [
      {
        q: "¿Cuánto tiempo tarda un proyecto completo de branding?",
        a: "Un proyecto de branding completo (identidad visual + manual de marca) suele tomar entre 4 y 8 semanas. Proyectos más complejos que incluyen diseño web, estrategia digital y material corporativo pueden extenderse hasta 12 semanas. El plazo exacto depende del alcance y las revisiones necesarias."
      },
      {
        q: "¿Incluyen soporte y mantenimiento después del lanzamiento?",
        a: "Sí, todos nuestros proyectos incluyen 30 días de soporte post-lanzamiento sin coste adicional. Además, ofrecemos paquetes de mantenimiento mensual que incluyen actualizaciones de web, gestión de redes sociales y soporte técnico continuo."
      },
      {
        q: "¿Trabajan con clientes fuera de Barcelona o España?",
        a: "Absolutamente. Trabajamos con clientes en toda España, Latinoamérica (especialmente Ecuador, México y Colombia) y Europa. Nuestra metodología de trabajo remoto está optimizada para proyectos internacionales, con comunicación fluida por videollamada y herramientas colaborativas."
      },
      {
        q: "¿Qué incluye exactamente un proyecto de diseño web profesional?",
        a: "Nuestro servicio de diseño web incluye: diseño UX/UI responsive, desarrollo frontend y backend, optimización SEO técnica (on-page), integración de CMS (WordPress, Shopify o custom), formularios de contacto, Google Analytics, velocidad de carga optimizada y capacitación para gestionar contenidos."
      },
      {
        q: "¿Puedo ver casos de estudio o portfolio de proyectos anteriores?",
        a: "Por supuesto. En nuestra sección de Portfolio puedes ver proyectos destacados con casos de estudio completos. Si necesitas ver ejemplos específicos de tu industria (hostelería, tech, moda, etc.), contáctanos y te mostraremos casos relevantes y resultados medibles de clientes similares."
      }
    ]
  },
  
  blog: {
    title: "Blog de Branding y Marketing Digital",
    subtitle: "Artículos, guías y recursos sobre diseño de marca y estrategia digital",
    cta: "Leer Artículo Completo"
  },
  
  contact: {
    title: "Solicita tu Presupuesto de Branding Gratis",
    subtitle: "¿Listo para transformar tu marca? Agencia de branding en Barcelona con atención personalizada. Respuesta en menos de 24h.",
    name: "Nombre completo",
    email: "Email corporativo",
    phone: "Teléfono (WhatsApp)",
    service: "¿Qué servicio necesitas?",
    message: "Cuéntanos sobre tu proyecto",
    messagePlaceholder: "Ej: Necesito rediseñar la identidad de mi restaurante en Barcelona. Busco un logotipo moderno, menú digital y presencia en redes sociales...",
    send: "Solicitar Presupuesto Gratis",
    services: {
      branding: "Identidad de Marca Completa",
      web: "Diseño y Desarrollo Web",
      strategy: "Estrategia Digital y Marketing",
      photography: "Fotografía y Video Profesional",
      consulting: "Consultoría de Branding",
      notSure: "No estoy seguro / Asesoramiento"
    },
    success: "¡Gracias! Tu solicitud ha sido recibida. Nuestro equipo te contactará en menos de 24 horas laborables.",
    schedule: "Agendar Videollamada",
    calendar: "¿Prefieres una reunión por videollamada? Reserva tu slot aquí"
  },
  
  footer: {
    description: "Agencia de branding y diseño web en Barcelona. Especializados en transformar empresas mediante identidad de marca profesional y estrategia digital.",
    services: "Servicios de Branding",
    company: "La Agencia",
    aboutUs: "Sobre Nosotros",
    ourWork: "Portfolio de Proyectos",
    team: "Equipo Creativo",
    blog: "Blog y Recursos",
    contact: "Contacto",
    location: "Barcelona, Cataluña, España",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos y Condiciones"
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

  // Proyectos destacados con imágenes de Unsplash
  const projects = [
    {
      title: "Café Artisan",
      category: "Branding & Packaging",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "TechFlow",
      category: "Web Design & Development",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "EcoStyle",
      category: "Brand Strategy & Identity",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Urban Eats",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      color: "from-red-500 to-pink-600"
    }
  ];

  // Blog posts con imágenes de Unsplash
  const blogPosts = [
    {
      title: "10 Tendencias de Branding para 2025",
      date: "15 Ene 2025",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      excerpt: "Descubre las tendencias que definirán el diseño de marcas este año."
    },
    {
      title: "Cómo Crear una Identidad Visual Memorable",
      date: "8 Ene 2025",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80",
      excerpt: "Guía completa para desarrollar una identidad que destaque."
    },
    {
      title: "El Poder del Storytelling en el Branding",
      date: "2 Ene 2025",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80",
      excerpt: "Por qué contar historias auténticas impulsa la conexión con tu audiencia."
    }
  ];

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },  // ← Reducido de 30 a 10
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }  // ← Reducido de 0.6 a 0.3
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

const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Preparar datos para Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '02efd0d3-bcec-40f9-a6fc-63b6d42927fd');
    formDataToSend.append('subject', 'Nuevo contacto desde Prisma Branding');
    formDataToSend.append('from_name', 'Formulario Web - Prisma Branding');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'No proporcionado');
    formDataToSend.append('service', formData.service);
    formDataToSend.append('message', formData.message);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus(t.contact.success);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          service: 'branding', 
          message: '' 
        });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('Error al enviar. Por favor intenta de nuevo.');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Error al enviar. Por favor intenta de nuevo.');
      setTimeout(() => setFormStatus(''), 5000);
    }
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
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
          className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
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

    {/* Trusted Brands
<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
      {t.trusted}
    </p>
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
      {[
        { name: 'VOILÀ Concept Store', logo: '/logos/voila.svg' },
        { name: 'Cliente 2', logo: '/logos/client2.svg' },
        { name: 'Cliente 3', logo: '/logos/client3.svg' },
        { name: 'Cliente 4', logo: '/logos/client4.svg' },
        { name: 'Cliente 5', logo: '/logos/client5.svg' },
        { name: 'Cliente 6', logo: '/logos/client6.svg' },
      ].map((client, i) => (
        <div 
          key={i} 
          className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
        >
          <img
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</section> */}

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05, margin: "0px" }}
              variants={fadeInUp}
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
              viewport={{ once: true, amount: 0.05, margin: "0px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipo de Prisma Branding trabajando en diseño de marca en Barcelona"
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.industries.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.industries.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
              {t.process.title}
            </h2>
            <p className="text-xl text-gray-400">
              {t.process.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.pricing.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
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
                    <Check className="w-5 h-5 text-white flex-shrink-0" />
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
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0" />
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.work.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.work.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
                    alt={`Proyecto de branding ${project.title} - ${project.category}`}
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
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? t.testimonials.items.length - 1 : currentTestimonial - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentTestimonial(currentTestimonial === t.testimonials.items.length - 1 ? 0 : currentTestimonial + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.team.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.team.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
                    src={member.image}
                    alt={`${member.name} - ${member.role} en Prisma Branding Barcelona`}
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
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.faq.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.blog.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <a
              href="mailto:contact@brandprisma.com"
              className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+34637738054"
              className="flex items-center justify-center space-x-2 bg-white p-4 rounded-xl hover:shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Teléfono</span>
            </a>
            <a
              href="https://wa.me/34637738054"
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
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
                  placeholder="+34 637 73 80 54"
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
            viewport={{ once: true, amount: 0.05, margin: "0px" }}
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
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">Prisma Branding</div>
              <p className="text-gray-400 mb-4">
                {t.footer.description}
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com/prismabranding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/prismabranding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:contact@brandprisma.com" className="hover:text-gray-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.services}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left leading-relaxed">{t.services.items[0].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left leading-relaxed">{t.services.items[2].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left leading-relaxed">{t.services.items[3].title}</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors text-left leading-relaxed">{t.services.items[4].title}</button></li>
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
                <li>contact@brandprisma.com</li>
                <li>+34 637 73 80 54</li>
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
        href="https://wa.me/34637738054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 z-40"
        aria-label="Contactar por WhatsApp con Prisma Branding"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </div>
  );
}