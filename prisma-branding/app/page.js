'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowRight, Sparkles, Palette, Code, TrendingUp, Mail, Phone, Instagram, MapPin } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const services = [
    {
      icon: Palette,
      title: "Identidad de Marca",
      description: "Creamos identidades visuales memorables que conectan con tu audiencia y diferencian tu marca."
    },
    {
      icon: Code,
      title: "Diseño Web",
      description: "Sitios web modernos y funcionales que convierten visitantes en clientes."
    },
    {
      icon: TrendingUp,
      title: "Estrategia Digital",
      description: "Desarrollamos estrategias de branding coherentes para potenciar tu presencia digital."
    }
  ]

  const projects = [
    { title: "Tech Startup Rebrand", category: "Branding", color: "from-purple-500 to-pink-500" },
    { title: "E-commerce Platform", category: "Web Design", color: "from-blue-500 to-cyan-500" },
    { title: "Restaurant Identity", category: "Brand Identity", color: "from-orange-500 to-red-500" },
    { title: "SaaS Dashboard", category: "UI/UX", color: "from-green-500 to-emerald-500" },
    { title: "Fashion Brand Launch", category: "Branding", color: "from-pink-500 to-rose-500" },
    { title: "Mobile App Design", category: "Product Design", color: "from-indigo-500 to-purple-500" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Prisma Branding
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Inicio', 'Servicios', 'Portfolio', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {['Inicio', 'Servicios', 'Portfolio', 'Contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Sparkles className="text-purple-600" size={20} />
                <span className="text-purple-600 font-medium">Estudio Creativo en Barcelona</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transformamos
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> ideas </span>
                en marcas memorables
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Estudio creativo especializado en identidad de marca, diseño web profesional y estrategia digital. 
                Transformamos tu negocio con branding que conecta y convierte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Comenzar Proyecto</span>
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
                >
                  Ver Portfolio
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Proyectos", value: "50+", color: "purple" },
                    { label: "Clientes", value: "30+", color: "pink" },
                    { label: "Años", value: "Nuevo", color: "blue" },
                    { label: "Satisfacción", value: "100%", color: "green" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white"
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-400 bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales de branding y diseño digital para hacer crecer tu negocio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Portfolio <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Destacado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Algunos de nuestros proyectos más recientes que transformaron marcas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-80"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
                    <span className="text-sm font-medium opacity-90 mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Ver proyecto</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">transformar</span> tu marca?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a destacar en el mercado.
              </p>

              <div className="space-y-6">
                <a 
                  href="mailto:contact@brandprisma.com"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@brandprisma.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+34637738054"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono / WhatsApp</div>
                    <div className="text-gray-600">+34 637 73 80 54</div>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/prismabranding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <div className="text-gray-600">@prismabranding</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600">Barcelona, España (Remoto)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
            >
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value="02efd0d3-bcec-40f9-a6fc-63b6d42927fd" />
                <input type="hidden" name="subject" value="Nuevo contacto desde Prisma Branding" />
                <input type="hidden" name="from_name" value="Formulario Web - Prisma Branding" />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Prisma Branding
              </h3>
              <p className="text-gray-400">
                Estudio creativo en Barcelona especializado en branding y diseño digital.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-purple-400 transition-colors">Branding</button></li>
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-purple-400 transition-colors">Diseño Web</button></li>
                <li><button onClick={() => scrollToSection('servicios')} className="hover:text-purple-400 transition-colors">Estrategia Digital</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-purple-400 transition-colors">Sobre Nosotros</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-400 transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="hover:text-purple-400 transition-colors">Contacto</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:contact@brandprisma.com" className="hover:text-purple-400 transition-colors">
                    contact@brandprisma.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34637738054" className="hover:text-purple-400 transition-colors">
                    +34 637 73 80 54
                  </a>
                </li>
                <li>Barcelona, España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Prisma Branding. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://instagram.com/prismabranding" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/34637738054" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Prisma Branding",
            "description": "Estudio creativo en Barcelona especializado en identidad de marca, diseño web profesional y estrategia digital",
            "url": "https://brandprisma.com",
            "telephone": "+34637738054",
            "email": "contact@brandprisma.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barcelona",
              "addressCountry": "ES"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.3874",
              "longitude": "2.1686"
            },
            "foundingDate": "2025",
            "sameAs": [
              "https://instagram.com/prismabranding"
            ],
            "priceRange": "€€"
          })
        }}
      />
    </div>
  )
}
