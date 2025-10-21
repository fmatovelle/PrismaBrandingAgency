import './globals.css'

export const metadata = {
  title: 'Prisma Branding | Creative Studio in Barcelona',
  description: 'Creative and digital studio helping brands grow through design, storytelling, and strategy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}