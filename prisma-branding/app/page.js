'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    cta: "Ver Paquetes y Precios",
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
      price: "799€",
      description: "Presencia profesional rápida y moderna",
      features: [
        "Landing Page (1 página)",
        "Diseño responsive",
        "Formulario de contacto",
        "Google Maps integrado",
        "Optimización ligera de velocidad",
        "1 ronda de revisión",
        "Entrega en 1-2 semanas"
      ]
    },
    
    growth: {
      name: "Growth",
      price: "1.500€",
      description: "Web + identidad visual para negocios en expansión",
      features: [
        "Todo del Plan Starter",
        "Logotipo (2 propuestas)",
        "Paleta de colores y tipografías",
        "Tarjetas digitales",
        "Sitio web hasta 3 páginas",
        "Redes sociales integradas",
        "SEO On-Page básico",
        "Google Analytics",
        "Entrega en 2-3 semanas"
      ],
      popular: true
    },
    
    professional: {
      name: "Professional",
      price: "3.500€",
      description: "Branding completo + web avanzada",
      features: [
        "Todo del Plan Growth",
        "3 propuestas de logotipo",
        "Manual de marca (20-30 págs)",
        "Papelería corporativa",
        "Iconografía personalizada (6 íconos)",
        "Web de 5 páginas + blog",
        "Formularios avanzados",
        "Email marketing conectado",
        "3 rondas de revisión",
        "30 días de soporte",
        "Entrega en 4-5 semanas"
      ]
    },
    
    premium: {
      name: "Premium",
      price: "4.900€",
      description: "Estrategia + branding + web + contenido profesional",
      features: [
        "Todo del Plan Professional",
        "Estrategia de marca 360°",
        "Manual avanzado (40-50 págs)",
        "Kit visual completo + señalética",
        "Web hasta 8 páginas",
        "UX/UI avanzado con animaciones",
        "SEO avanzado + panel personalizado",
        "Fotografía profesional (4 horas)",
        "Copywriting web completo",
        "Revisiones ilimitadas",
        "60 días de soporte",
        "Entrega en 6-8 semanas"
      ]
    },
    
    cta: "Solicitar Presupuesto"
  },
  
  work: {
    title: "Portfolio: Proyectos de Branding en Barcelona",
    subtitle: "Casos de éxito de marcas que transformamos con diseño estratégico",
    cta: "Ver Caso de Estudio Completo",
    ctaMain: "Solicita tu Proyecto"
  },
  
  testimonials: {
    title: "Opiniones de Clientes Sobre Nuestro Servicio de Branding",
    subtitle: "Testimonios reales de empresas que confiaron en Prisma Branding",
    cta: "Trabajemos Juntos",
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
        image: "/federicomatovellepf.jpg"
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

// Componente para contador animado
function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime;
          let animationFrame;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };

          animationFrame = requestAnimationFrame(animate);
          
          return () => {
            if (animationFrame) {
              cancelAnimationFrame(animationFrame);
            }
          };
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

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
    
    if (formData.phone && formData.phone.length > 0) {
      const phoneRegex = /^(\+34)?[6-9]\d{8}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'Formato: +34 612345678 o 612345678';
      }
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
        setFormStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          service: 'branding', 
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
              onClick={() => scrollToSection('work')}
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
                    <AnimatedCounter end={200} />+
                  </div>
                  <div className="text-gray-600">{t.about.projects}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={10} />+
                  </div>
                  <div className="text-gray-600">{t.about.years}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={98} />%
                  </div>
                  <div className="text-gray-600">{t.about.satisfaction}</div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1400px] mx-auto">
            {/* Starter Plan */}
            <ScrollReveal delay={0}>
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all flex flex-col"
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
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all flex flex-col"
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl relative shadow-2xl border-2 border-gray-900 flex flex-col transform lg:scale-105"
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
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all flex flex-col"
              >
                <div className="flex items-center space-x-2 mb-1.5">
                  <Rocket className="w-5 h-5 text-purple-600" />
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
                      <Check className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  {t.pricing.cta}
                </motion.button>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Work/Portfolio Section */}
      <section id="work" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.work.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.work.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={`Caso de éxito de branding: ${project.title} - ${project.category} realizado por Prisma Branding en Barcelona`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} flex items-end p-8`}
                  >
                    <div className="text-white">
                      <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                      <p className="text-lg mb-4">{project.category}</p>
                      <button className="inline-flex items-center space-x-2 text-white font-medium">
                        <span>{t.work.cta}</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center space-x-2"
              >
                <span>{t.work.ctaMain}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {t.testimonials.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-normal">
                {t.testimonials.subtitle}
              </p>
            </div>
          </ScrollReveal>

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

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? t.testimonials.items.length - 1 : currentTestimonial - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(currentTestimonial === t.testimonials.items.length - 1 ? 0 : currentTestimonial + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center space-x-2"
              >
                <span>{t.testimonials.cta}</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-gray-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-6">
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

      {/* Blog Section */}
      <section className="py-24 px-6 bg-gray-50">
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
                <motion.article
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden transition-all group cursor-pointer"
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
                    <button className="inline-flex items-center space-x-2 text-gray-900 font-medium group-hover:space-x-3 transition-all">
                      <span>{t.blog.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({...formData, phone: e.target.value});
                      if (fieldErrors.phone) {
                        setFieldErrors({...fieldErrors, phone: null});
                      }
                    }}
                    placeholder="+34 612 345 678"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all ${
                      fieldErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    disabled={isSubmitting}
                  />
                  {fieldErrors.phone && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600"
                    >
                      {fieldErrors.phone}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.service} *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white"
                    disabled={isSubmitting}
                  >
                    {Object.entries(t.contact.services).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
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
            </form>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">{t.contact.calendar}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/34637738054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{t.contact.schedule}</span>
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
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  href="mailto:contact@brandprisma.com"
                  className="hover:text-gray-300 transition-colors"
                  aria-label="Envíanos un email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
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
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/34637738054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-40"
        aria-label="Contactar por WhatsApp con Prisma Branding"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>
    </div>
  );
}