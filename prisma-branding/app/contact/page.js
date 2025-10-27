import { generatePageMetadata } from '@/lib/seo-config'
import { BreadcrumbSchema } from '@/components/JsonLd'

export const metadata = generatePageMetadata('contact')

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: 'https://prisma-branding.web.app' },
          { name: 'Contacto', url: 'https://prisma-branding.web.app/contact' }
        ]} 
      />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Contacto</h1>
          <p className="text-xl text-gray-600 mb-8">
            ¿Listo para potenciar tu marca? Escríbenos y trabajemos juntos.
          </p>
          {/* Agrega aquí tu contenido */}
        </div>
      </main>
    </>
  )
}
