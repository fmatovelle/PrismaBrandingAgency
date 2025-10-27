import { generatePageMetadata } from '@/lib/seo-config'
import { BreadcrumbSchema } from '@/components/JsonLd'

export const metadata = generatePageMetadata('portfolio')

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: 'https://prisma-branding.web.app' },
          { name: 'Portafolio', url: 'https://prisma-branding.web.app/portfolio' }
        ]} 
      />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Nuestro Portafolio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Inspírate con nuestros casos de éxito en branding y diseño.
          </p>
          {/* Agrega aquí tu contenido */}
        </div>
      </main>
    </>
  )
}
