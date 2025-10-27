import { generatePageMetadata } from '@/lib/seo-config'
import { BreadcrumbSchema } from '@/components/JsonLd'

export const metadata = generatePageMetadata('services')

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: 'https://prisma-branding.web.app' },
          { name: 'Servicios', url: 'https://prisma-branding.web.app/services' }
        ]} 
      />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Servicios de Branding y Diseño</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ofrecemos identidad visual, diseño web y estrategia digital.
          </p>
          {/* Agrega aquí tu contenido */}
        </div>
      </main>
    </>
  )
}
