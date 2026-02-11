'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Palette, Globe, Check, Mail, Instagram, Linkedin, Target, Users, Lightbulb, Rocket, Camera, Package, Newspaper, FileText, MessageSquare, Phone, Calendar, ChevronDown, Plus, Minus, Send, ExternalLink } from 'lucide-react';

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
    team: "Equipo",
    blog: "Blog",
    contact: "Contacto"
  },
  
  hero: {
    title: "Agencia de Branding y Desarrollo Web en Barcelona",
    subtitle: "Estudio creativo especializado en identidad de marca y desarrollo web profesional. Trabajamos con emprendedores y pequeños negocios para crear marcas memorables y páginas web que convierten.",
    cta: "Solicitar Presupuesto",
    viewWork: "Ver Servicios"
  },
  
  trusted: "Empresas que confían en nuestro branding",
  
  about: {
    title: "Estudio Creativo en Barcelona con Atención Personalizada",
    text1: "Prisma Branding es un estudio creativo boutique especializado en branding y desarrollo web. Trabajamos directamente con emprendedores y pequeños negocios para crear identidades de marca profesionales y páginas web que funcionan.",
    text2: "Como equipo boutique, ofrecemos algo que las agencias grandes no pueden: comunicación directa, decisiones rápidas y precios justos. Cada proyecto recibe atención personalizada desde la estrategia hasta el lanzamiento.",
    stat1: "2025",
    stat1Label: "Fundado en Barcelona",
    stat2: "100%",
    stat2Label: "Atención Directa",
    stat3: "<24h",
    stat3Label: "Tiempo de Respuesta"
  },
  
  services: {
    title: "Servicios de Branding y Desarrollo Web",
    subtitle: "Soluciones integrales para construir y hacer crecer tu marca",
    cta: "Ver Paquetes",
    items: [
      {
        title: "Identidad de Marca y Branding Corporativo",
        description: "Diseño completo de identidad visual: logotipo profesional, manual de marca, sistema de colores y tipografías. Creamos marcas memorables que comunican los valores de tu empresa."
      },
      {
        title: "Estrategia de Marca y Posicionamiento",
        description: "Definimos la estrategia completa de tu marca: análisis competitivo, propuesta de valor única, tono de comunicación y posicionamiento en el mercado."
      },
      {
        title: "Desarrollo Web Profesional con Next.js",
        description: "Desarrollo de páginas web modernas y rápidas con Next.js y React. Diseño responsive, optimización de rendimiento y SEO técnico incluido."
      },
      {
        title: "Tiendas Online y E-commerce con Shopify",
        description: "Creación de tiendas online profesionales con Shopify. Diseño personalizado, integración de pagos y envíos, optimización para conversión."
      },
      {
        title: "Diseño UX/UI y Optimización Web",
        description: "Diseño de experiencia de usuario enfocado en conversión. Interfaces intuitivas, arquitectura de información estratégica y diseño responsive profesional."
      },
      {
        title: "SEO Técnico y Marketing Digital",
        description: "Optimización SEO completa: auditoría técnica, estructura de sitio, velocidad de carga y contenido optimizado para aumentar visibilidad orgánica."
      },
      {
        title: "Diseño Gráfico y Material Corporativo",
        description: "Papelería corporativa, presentaciones empresariales, catálogos de productos y material gráfico profesional consistente con tu identidad de marca."
      },
      {
        title: "Consultoría y Mantenimiento Web",
        description: "Asesoramiento estratégico para proyectos digitales y mantenimiento mensual de páginas web. Actualizaciones, backups y soporte técnico."
      }
    ]
  },
  
  industries: {
    title: "Sectores con los que Trabajamos",
    subtitle: "Experiencia desarrollando marcas y webs para diversos negocios",
    items: [
      "Startups y Emprendedores en Fase de Lanzamiento",
      "Profesionales Independientes y Consultores",
      "Negocios Locales y Comercios en Barcelona",
      "E-commerce y Marcas Online Emergentes",
      "Empresas de Servicios Profesionales",
      "Consultorios y Profesionales de la Salud"
    ]
  },
  
  process: {
    title: "Nuestra Metodología de Trabajo",
    subtitle: "Proceso probado para proyectos de branding y desarrollo web exitosos",
    steps: [
      {
        title: "Consulta Inicial y Análisis",
        description: "Iniciamos con una reunión para entender tu negocio, objetivos y audiencia. Analizamos tu mercado y competencia para crear una estrategia efectiva."
      },
      {
        title: "Estrategia: Propuesta y Planificación",
        description: "Desarrollamos una propuesta detallada que incluye alcance del proyecto, estrategia creativa, entregables específicos, cronograma realista y presupuesto fijo."
      },
      {
        title: "Diseño y Desarrollo: Ejecución",
        description: "Nuestro equipo trabaja en tu proyecto con actualizaciones constantes y comunicación fluida. Trabajamos en rondas de revisión estructuradas para asegurar que el resultado final supere tus expectativas."
      },
      {
        title: "Lanzamiento: Entrega y Soporte",
        description: "Lanzamos tu marca o web con un plan de implementación completo. Incluye capacitación personalizada, documentación técnica y 30-60 días de soporte."
      }
    ]
  },
  
  pricing: {
    title: "Paquetes de Branding y Desarrollo Web",
    subtitle: "Soluciones profesionales adaptadas a cada fase de tu negocio",
    
    starter: {
      name: "Essential",
      price: "799€",
      description: "Landing page profesional para validar tu negocio",
      features: [
        "1 página responsive diseñada a medida",
        "Diseño moderno y profesional",
        "Formulario de contacto integrado",
        "Optimización SEO básica",
        "Google Analytics configurado",
        "Hosting incluido primer año",
        "1 ronda de revisiones",
        "Soporte 30 días",
        "Entrega en 7-10 días"
      ]
    },
    
    growth: {
      name: "Growth",
      price: "1.800€",
      description: "Web completa + identidad visual para negocios en crecimiento",
      features: [
        "Todo del plan anterior",
        "Hasta 5 páginas estratégicas",
        "Diseño de logotipo profesional",
        "Paleta de colores y tipografías",
        "Tarjetas digitales de presentación",
        "Blog opcional integrado",
        "SEO on-page completo",
        "Formularios avanzados",
        "2 rondas de revisiones",
        "Capacitación de uso",
        "Entrega en 3-4 semanas"
      ],
      popular: true
    },
    
    professional: {
      name: "Professional",
      price: "3.500€",
      description: "Branding completo + desarrollo web avanzado",
      features: [
        "Todo del plan anterior",
        "Manual de marca (15-20 páginas)",
        "3 propuestas de logotipo",
        "Papelería digital completa",
        "Iconografía personalizada",
        "Web hasta 8 páginas",
        "Animaciones y microinteracciones",
        "Optimización Core Web Vitals",
        "Integración email marketing",
        "SEO técnico avanzado",
        "3 rondas de revisiones",
        "Soporte 30 días",
        "Entrega en 5-6 semanas"
      ]
    },
    
    premium: {
      name: "Premium",
      price: "4.500€",
      description: "Tienda online Shopify completa lista para vender",
      features: [
        "Identidad de marca incluida",
        "Tienda Shopify personalizada",
        "Diseño responsive profesional",
        "Configuración hasta 50 productos",
        "Integración pasarelas de pago",
        "Sistema de envíos configurado",
        "SEO para e-commerce",
        "Email marketing automatizado",
        "Capacitación Shopify completa",
        "4 rondas de revisiones",
        "Soporte 60 días",
        "Entrega en 6-8 semanas"
      ]
    },
    
    cta: "Cuéntanos tu Proyecto",
    note: "Cada ronda de revisión incluye ajustes completos en diseño, funcionalidad y contenido."
  },
  
  
  team: {
    title: "Nuestro Equipo",
    subtitle: "Equipo core con red de colaboradores especializados",
    members: [
      {
        name: "Federico Matovelle",
        role: "Fundador & Lead Developer",
        bio: "Full-stack developer especializado en Next.js, React y Shopify. Lidera el desarrollo técnico y la estrategia digital de cada proyecto.",
        image: "/federicomatovellepf.jpg",
        type: "core"
      },
      {
        title: "Red de Colaboradores",
        role: "Talento On-Demand",
        bio: "Red curada de profesionales especializados. Cada proyecto se forma un equipo personalizado según las necesidades específicas del cliente.",
        icon: "network",
        type: "network",
        skills: [
          "Diseño Gráfico",
          "Fotografía", 
          "Copywriting",
          "Social Media"
        ]
      }
    ]
  },
  
  faq: {
    title: "Preguntas Frecuentes sobre Desarrollo Web y Branding",
    subtitle: "Dudas comunes sobre crear una página web o tienda online",
    items: [
      {
        q: "¿Cuánto cuesta hacer una página web en Barcelona?",
        a: "El precio de una página web depende de la complejidad. Una landing page profesional cuesta desde 799€. Una web completa de 5 páginas con diseño de marca 1.800€. Un proyecto con branding completo y desarrollo web avanzado 3.500€. Una tienda online Shopify 4.500€."
      },
      {
        q: "¿Cuánto tiempo tarda en desarrollarse una web profesional?",
        a: "Una landing page se entrega en 7-10 días. Una página web de 5 páginas con branding tarda 3-4 semanas. Proyectos más complejos con branding completo toman 5-6 semanas. Tiendas online pueden requerir 6-8 semanas."
      },
      {
        q: "¿Qué incluye el desarrollo de una página web con vosotros?",
        a: "Nuestro servicio incluye diseño responsive, desarrollo con código limpio, formularios de contacto, Google Analytics, optimización SEO on-page, hosting primer año y capacitación completa. Entregas el código fuente completo y todos los accesos."
      },
      {
        q: "¿Sois freelance o agencia? ¿Cuántas personas trabajáis?",
        a: "Somos un estudio creativo boutique. Actualmente el equipo core trabaja directamente en cada proyecto. Esto significa comunicación directa, decisiones rápidas y precios más eficientes que agencias grandes."
      },
      {
        q: "¿Hacéis tiendas online con Shopify?",
        a: "Sí, nos especializamos en tiendas online con Shopify. Nuestro paquete e-commerce incluye diseño personalizado, configuración completa de productos, integración de pagos, sistema de envíos y capacitación completa. Precio desde 4.500€."
      },
      {
        q: "¿La web incluye posicionamiento SEO en Google?",
        a: "Sí, todas nuestras webs incluyen optimización SEO técnica: estructura correcta del sitio, velocidad optimizada, meta tags configurados, URLs amigables y schema markup. Para posicionamiento avanzado con keywords específicas, ofrecemos servicio SEO estratégico adicional."
      }
    ]
  },
  
  blog: {
    title: "Blog de Branding y Desarrollo Web",
    subtitle: "Artículos sobre diseño, desarrollo y estrategia digital",
    cta: "Leer en Medium",
    link: "https://medium.com/@prismabranding"
  },
  
  contact: {
    title: "Cuéntanos tu Proyecto",
    subtitle: "Trabajamos con emprendedores y negocios en Barcelona. Déjanos tus datos y hablemos de cómo podemos ayudarte.",
    name: "Nombre completo",
    email: "Email",
    message: "Cuéntanos sobre tu proyecto",
    messagePlaceholder: "Ej: Necesito una identidad de marca y web para mi nueva clínica dental en Barcelona...",
    send: "Enviar Mensaje",
    success: "¡Gracias! Hemos recibido tu mensaje. Te responderemos en menos de 24 horas.",
    note: "Revisamos todos los mensajes en menos de 24h • También puedes escribirnos a contact@brandprisma.com",
    whatsappLabel: "¿Consulta rápida? Escríbenos por WhatsApp"
  },
  
  footer: {
    description: "Estudio creativo en Barcelona especializado en branding y desarrollo web para emprendedores y pequeños negocios. Creamos marcas memorables y páginas web que convierten.",
    services: "Servicios de Branding",
    company: "El Estudio",
    aboutUs: "Sobre Nosotros",
    ourWork: "Nuestro Trabajo",
    team: "Equipo",
    blog: "Blog",
    contact: "Contacto",
    location: "Barcelona, Cataluña, España",
    rights: "Todos los derechos reservados.",
    terms: "Aviso Legal",
    privacy: "Política de Privacidad",
    cookies: "Política de Cookies"
  }
};

// Hook personalizado para animaciones al scroll (SIN flasheo, super ligero)
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
}


// Componente ScrollReveal optimizado (solo opacity + scale, muy ligero)
function ScrollReveal({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.97)',
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

export default function PrismaBrandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState(null); // 'aviso' | 'privacidad' | 'cookies' | null
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  // Blog posts con slugs para Medium
  const blogPosts = [
    {
      title: "10 Tendencias de Branding para 2025",
      date: "15 Ene 2025",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      excerpt: "Descubre las tendencias que definirán el diseño de marcas este año.",
      slug: "10-tendencias-branding-2025"
    },
    {
      title: "Cómo Crear una Identidad Visual Memorable",
      date: "8 Ene 2025",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&q=80",
      excerpt: "Guía completa para desarrollar una identidad que destaque.",
      slug: "crear-identidad-visual-memorable"
    },
    {
      title: "El Poder del Storytelling en el Branding",
      date: "2 Ene 2025",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80",
      excerpt: "Por qué contar historias auténticas impulsa la conexión con tu audiencia.",
      slug: "storytelling-branding"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'work', 'team', 'blog', 'contact'];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFieldErrors({});
    setFormStatus('');
    
    const errors = {};
    
    if (formData.name.length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    }
    
    if (formData.message.length < 20) {
      errors.message = `Mensaje muy corto (${formData.message.length}/20 caracteres mínimos)`;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }
    
    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '02efd0d3-bcec-40f9-a6fc-63b6d42927fd');
    formDataToSend.append('subject', 'Nuevo proyecto desde Prisma Branding');
    formDataToSend.append('from_name', 'Formulario Web - Prisma Branding');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          message: '' 
        });
        setTimeout(() => setFormStatus(''), 8000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="font-sans antialiased">
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
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900"
            >
              Prisma Branding
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'home' ? 'home' : key)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === key ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:scale-105"
              >
                {t.hero.cta}
              </motion.button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 space-y-4 overflow-hidden"
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
        
        {/* Gradient animado de fondo (simplificado - solo 1 capa) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-normal max-w-4xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center space-x-2"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('services')}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all"
            >
              {t.hero.viewWork}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section con ScrollReveal */}
      <section id="about" className="py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                {t.about.text1}
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                {t.about.text2}
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {t.about.stat1}
                  </div>
                  <div className="text-gray-600">{t.about.stat1Label}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {t.about.stat2}
                  </div>
                  <div className="text-gray-600">{t.about.stat2Label}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {t.about.stat3}
                  </div>
                  <div className="text-gray-600">{t.about.stat3Label}</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Equipo de Prisma Branding trabajando en diseño de marca en Barcelona"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
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
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.services.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-xl hover:shadow-xl transition-all group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors"
                  >
                    <Palette className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 hover:text-white transition-all inline-flex items-center space-x-2"
              >
                <span>{t.services.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.industries.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.industries.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {t.industries.items.map((industry, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, borderColor: "#111827" }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-gray-900 transition-all cursor-pointer"
                >
                  <Globe className="w-8 h-8 text-gray-900 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {industry}
                  </h3>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                {t.process.title}
              </h2>
              <p className="text-xl text-gray-400">
                {t.process.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.pricing.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.pricing.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto items-stretch">
            {/* Essential Plan */}
            <ScrollReveal delay={0}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                  {t.pricing.starter.name}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-2.5">
                  {t.pricing.starter.price}
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-snug min-h-[40px]">
                  {t.pricing.starter.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.pricing.starter.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  {t.pricing.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Growth Plan */}
            <ScrollReveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                  {t.pricing.growth.name}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-2.5">
                  {t.pricing.growth.price}
                </div>
                <p className="text-gray-600 text-sm mb-5 leading-snug min-h-[40px]">
                  {t.pricing.growth.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.pricing.growth.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  {t.pricing.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Professional Plan (Most Popular) */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl relative shadow-2xl border-2 border-gray-900 flex flex-col h-full"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                  Más Popular
                </div>
                <h3 className="text-xl font-bold mb-1.5 mt-1">
                  {t.pricing.professional.name}
                </h3>
                <div className="text-3xl font-bold mb-2.5">
                  {t.pricing.professional.price}
                </div>
                <p className="text-gray-300 text-sm mb-5 leading-snug min-h-[40px]">
                  {t.pricing.professional.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.pricing.professional.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-gray-900 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-all shadow-lg"
                >
                  {t.pricing.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Premium Plan */}
            <ScrollReveal delay={0.3}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-300 hover:border-gray-500 transition-all flex flex-col h-full"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <Rocket className="w-5 h-5 text-gray-900" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {t.pricing.premium.name}
                  </h3>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2.5">
                  {t.pricing.premium.price}
                </div>
                <p className="text-gray-700 text-sm mb-5 leading-snug min-h-[40px]">
                  {t.pricing.premium.description}
                </p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {t.pricing.premium.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gray-900 text-white py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                  {t.pricing.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Nota aclaratoria sobre revisiones */}
          {t.pricing.note && (
            <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
              * {t.pricing.note}
            </p>
          )}
        </div>
      </section>




      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.team.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.team.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.team.members.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                {member.type === 'core' ? (
                  // Card de miembro core (con foto)
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden transition-all group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={member.image}
                        alt={`${member.name} - ${member.role} en Prisma Branding Barcelona`}
                        className="w-full h-full object-cover"
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
                ) : (
                  // Card de red de colaboradores (con imagen de equipo)
                  <motion.div
                    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden transition-all group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                        alt="Red de colaboradores especializados - Prisma Branding"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.title}
                      </h3>
                      <div className="text-gray-600 mb-3">{member.role}</div>
                      <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 sm:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.faq.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.faq.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {t.faq.items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {item.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedFaq === index ? (
                        <Minus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-900 flex-shrink-0" />
                      )}
                    </motion.div>
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
                        <div className="p-6 pt-0 text-gray-600">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section - CON LINKS A MEDIUM */}
      <section id="blog" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.blog.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.blog.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.a
                  href={`${t.blog.link}/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden transition-all group cursor-pointer block"
                >
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={post.image}
                      alt={`Artículo sobre branding: ${post.title} - Prisma Branding Barcelona`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center space-x-2 text-gray-900 font-medium group-hover:space-x-3 transition-all">
                      <span>{t.blog.cta}</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.contact.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({...formData, name: e.target.value});
                      if (fieldErrors.name) {
                        setFieldErrors({...fieldErrors, name: null});
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all ${
                      fieldErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {fieldErrors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({...formData, email: e.target.value});
                      if (fieldErrors.email) {
                        setFieldErrors({...fieldErrors, email: null});
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all ${
                      fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {fieldErrors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t.contact.message} *
                  </label>
                  <span className={`text-sm transition-colors ${
                    formData.message.length < 20 ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {formData.message.length}/20 min
                  </span>
                </div>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({...formData, message: e.target.value});
                    if (fieldErrors.message) {
                      setFieldErrors({...fieldErrors, message: null});
                    }
                  }}
                  placeholder={t.contact.messagePlaceholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none ${
                    fieldErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                />
                {fieldErrors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {fieldErrors.message}
                  </motion.p>
                )}
              </div>

              <div className="flex flex-col items-center space-y-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.send}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="text-center p-6 rounded-xl bg-gray-50 text-gray-900 border-2 border-gray-900 w-full max-w-md"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="flex items-center justify-center mb-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                        <motion.svg
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </motion.svg>
                      </div>
                    </motion.div>
                    <p className="font-bold text-xl mb-2">¡Mensaje enviado!</p>
                    <p className="text-gray-600">{t.contact.success}</p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="text-center p-4 rounded-lg bg-red-50 text-red-800 border border-red-200 w-full max-w-md"
                  >
                    <p className="font-semibold">Error al enviar</p>
                    <p className="text-sm">Por favor intenta de nuevo en unos momentos.</p>
                  </motion.div>
                )}
              </div>

              {/* Nota de respuesta rápida */}
              <p className="text-center text-sm text-gray-500 mt-6">
                {t.contact.note}
              </p>
            </form>

            <div className="mt-8 text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/34637738054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.contact.whatsappLabel}</span>
              </motion.a>
            </div>
          </ScrollReveal>
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
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="https://instagram.com/prismabranding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="https://www.linkedin.com/company/prismabranding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Síguenos en LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <a
                  href="mailto:contact@brandprisma.com"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('mailto:contact@brandprisma.com', '_self');
                  }}
                  className="hover:text-gray-300 transition-all inline-block hover:scale-110 hover:-translate-y-0.5"
                  aria-label="Envíanos un email"
                >
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
                <li><a href={t.blog.mediumUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.location}</li>
                <li>
                  <a 
                    href="mailto:contact@brandprisma.com"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('mailto:contact@brandprisma.com', '_self');
                    }}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    contact@brandprisma.com
                  </a>
                </li>
                <li>+34 637 73 80 54</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Prisma Branding — Barcelona. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button onClick={() => setLegalModal('aviso')} className="hover:text-white transition-colors">{t.footer.terms}</button>
              <button onClick={() => setLegalModal('privacidad')} className="hover:text-white transition-colors">{t.footer.privacy}</button>
              <button onClick={() => setLegalModal('cookies')} className="hover:text-white transition-colors">{t.footer.cookies}</button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/34637738054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-40"
        aria-label="¿Consulta rápida? Escríbenos por WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* Modal Legal */}
      {legalModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={() => setLegalModal(null)}
        >
          <div className="fixed inset-0 bg-black bg-opacity-50"></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {legalModal === 'aviso' && 'Aviso Legal'}
                  {legalModal === 'privacidad' && 'Política de Privacidad'}
                  {legalModal === 'cookies' && 'Política de Cookies'}
                </h2>
                <button
                  onClick={() => setLegalModal(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-6 py-8">
                {legalModal === 'aviso' && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">Última actualización: Enero 2026</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Identificación del Responsable</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Responsable:</strong> Federico Matovelle<br />
                      <strong>Actividad:</strong> Servicios de branding y desarrollo web (actividad en fase de lanzamiento)<br />
                      <strong>País de residencia:</strong> España<br />
                      <strong>Contacto:</strong> contact@brandprisma.com<br />
                      <strong>Teléfono:</strong> +34 637 73 80 54
                    </p>
                    <p className="text-gray-700 mb-6">
                      Este sitio web es operado por una persona física que actualmente desarrolla su actividad profesional 
                      de forma independiente. No se trata de una empresa constituida formalmente.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Objeto</h3>
                    <p className="text-gray-700 mb-6">
                      Este sitio web tiene como finalidad la presentación de servicios profesionales de diseño de identidad 
                      de marca y desarrollo web. La información aquí publicada tiene carácter informativo y no vinculante, 
                      salvo acuerdo expreso entre las partes.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Condiciones de Uso</h3>
                    <p className="text-gray-700 mb-6">
                      El acceso y uso de este sitio web implica la aceptación de estas condiciones de uso. 
                      El usuario se compromete a utilizar el sitio y sus contenidos de forma lícita y conforme a la legislación vigente.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Propiedad Intelectual</h3>
                    <p className="text-gray-700 mb-6">
                      Todos los contenidos de este sitio web (textos, diseños, imágenes, código) son propiedad 
                      de Prisma Branding o se utilizan con la licencia correspondiente. Queda prohibida su reproducción, 
                      distribución o modificación sin autorización expresa.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">5. Limitación de Responsabilidad</h3>
                    <p className="text-gray-700 mb-6">
                      El responsable no se hace responsable de posibles errores u omisiones en la información publicada, 
                      ni de los daños que pudieran derivarse del uso de la información contenida en este sitio web.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">6. Legislación Aplicable</h3>
                    <p className="text-gray-700 mb-6">
                      Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, 
                      las partes se someterán a los Juzgados y Tribunales de Barcelona, España.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">7. Contacto</h3>
                    <p className="text-gray-700">
                      Para cualquier duda: <a href="mailto:contact@brandprisma.com" className="text-gray-900 hover:underline">contact@brandprisma.com</a>
                    </p>
                  </div>
                )}

                {legalModal === 'privacidad' && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">Última actualización: Enero 2026</p>
                    <p className="text-gray-700 mb-6">
                      En cumplimiento del RGPD (UE 2016/679) y LOPDGDD, informamos sobre el tratamiento de datos personales.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Responsable</h3>
                    <p className="text-gray-700 mb-6">
                      <strong>Responsable:</strong> Federico Matovelle<br />
                      <strong>Email:</strong> contact@brandprisma.com
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Datos que Recopilamos</h3>
                    <p className="text-gray-700 mb-3"><strong>Formulario de contacto:</strong></p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Nombre completo</li>
                      <li>Email</li>
                      <li>Teléfono (opcional)</li>
                      <li>Información del proyecto</li>
                    </ul>
                    <p className="text-gray-700 mb-6"><strong>Google Analytics:</strong> Información anónima sobre tu visita.</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Finalidad</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li>Responder solicitudes de información</li>
                      <li>Gestionar relación comercial</li>
                      <li>Análisis estadístico</li>
                      <li>Cumplir obligaciones legales</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Base Legal</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li><strong>Consentimiento:</strong> Al enviar el formulario</li>
                      <li><strong>Interés legítimo:</strong> Análisis con Analytics</li>
                      <li><strong>Ejecución de contrato:</strong> Si contratas servicios</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">5. Tus Derechos</h3>
                    <p className="text-gray-700 mb-3">Tienes derecho a:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                      <li>Acceso, rectificación y supresión</li>
                      <li>Oposición y limitación</li>
                      <li>Portabilidad de datos</li>
                      <li>Revocación del consentimiento</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      Contacto: <a href="mailto:contact@brandprisma.com" className="text-gray-900 hover:underline">contact@brandprisma.com</a><br />
                      Reclamaciones: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">www.aepd.es</a>
                    </p>
                  </div>
                )}

                {legalModal === 'cookies' && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 mb-6">Última actualización: Enero 2026</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. ¿Qué son las Cookies?</h3>
                    <p className="text-gray-700 mb-6">
                      Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Cookies que Utilizamos</h3>
                    <p className="text-gray-700 mb-3"><strong>Técnicas (Necesarias):</strong></p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-gray-700"><strong>Nombre:</strong> prisma_session</p>
                      <p className="text-gray-700"><strong>Finalidad:</strong> Mantener sesión</p>
                      <p className="text-gray-700"><strong>Duración:</strong> Sesión</p>
                    </div>

                    <p className="text-gray-700 mb-3"><strong>Analíticas:</strong></p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-gray-700"><strong>Proveedor:</strong> Google Analytics</p>
                      <p className="text-gray-700"><strong>Cookies:</strong> _ga, _gid, _gat</p>
                      <p className="text-gray-700"><strong>Finalidad:</strong> Análisis estadístico</p>
                      <p className="text-gray-700"><strong>Duración:</strong> Hasta 2 años</p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cómo Gestionarlas</h3>
                    <p className="text-gray-700 mb-3">Puedes configurar cookies en tu navegador:</p>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                      <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Chrome</a></li>
                      <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Firefox</a></li>
                      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Safari</a></li>
                    </ul>

                    <p className="text-gray-700">
                      Contacto: <a href="mailto:contact@brandprisma.com" className="text-gray-900 hover:underline">contact@brandprisma.com</a>
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-500 text-center">© 2025 Prisma Branding — Barcelona</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}