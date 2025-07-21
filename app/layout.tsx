import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pawsome Walks - Professional Dog Walking Services',
  description: 'Trusted dog walking and pet care services in your neighborhood. Licensed, insured, and passionate about keeping your furry friends happy and healthy.',
  keywords: 'dog walking, pet care, dog walker, professional pet services, dog sitting',
  openGraph: {
    title: 'Pawsome Walks - Professional Dog Walking Services',
    description: 'Trusted dog walking and pet care services in your neighborhood.',
    type: 'website',
    images: ['https://imgix.cosmicjs.com/5adc0820-6594-11f0-a051-23c10f41277a-photo-1601758228041-f3b2795255f1-1753034827988.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pawsome Walks - Professional Dog Walking Services',
    description: 'Trusted dog walking and pet care services in your neighborhood.',
    images: ['https://imgix.cosmicjs.com/5adc0820-6594-11f0-a051-23c10f41277a-photo-1601758228041-f3b2795255f1-1753034827988.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}