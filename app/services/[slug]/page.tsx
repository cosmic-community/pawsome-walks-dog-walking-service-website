// app/services/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getServices } from '@/lib/cosmic'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  
  return {
    title: `${service.metadata.name} - Pawsome Walks`,
    description: service.metadata.short_description || `Professional ${service.metadata.name.toLowerCase()} service`,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)
  
  if (!service) {
    notFound()
  }
  
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
              ← Back to Services
            </Link>
          </div>
          
          {service.metadata.image && (
            <div className="aspect-video mb-12 rounded-2xl overflow-hidden">
              <img
                src={`${service.metadata.image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={service.metadata.name}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.metadata.name}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                {service.metadata.description && (
                  <div dangerouslySetInnerHTML={{ __html: service.metadata.description }} />
                )}
              </div>
              
              {service.metadata.features && service.metadata.features.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What's Included
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.metadata.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="card p-8 sticky top-24">
                <div className="text-center mb-6">
                  {service.metadata.price && (
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {service.metadata.price}
                    </div>
                  )}
                  {service.metadata.duration && (
                    <div className="text-gray-600">
                      {service.metadata.duration}
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <Link href="/contact" className="btn btn-primary w-full">
                    Book This Service
                  </Link>
                  <Link href="/contact" className="btn btn-secondary w-full">
                    Get Free Quote
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Need Help Choosing?
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Not sure which service is right for your dog? Contact us for a free consultation.
                  </p>
                  <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}