import { generatePageMetadata } from '@/lib/seo-config'
import { BreadcrumbSchema } from '@/components/JsonLd'

export const metadata = generatePageMetadata('about')

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: 'https://prisma-branding.web.app' },
          { name: 'Sobre Nosotros', url: 'https://prisma-branding.web.app/about' }
        ]} 
      />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 mb-8">
            Conoce al equipo detrás de Prisma Branding en Barcelona.
          </p>
          {/* Agrega aquí tu contenido */}
        </div>
      </main>
    </>
  )
}
