import type { Metadata } from 'next'
import Link from 'next/link'
import { getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Dog Walking Services - Pawsome Walks',
  description: 'Professional dog walking and pet care services including basic walks, premium care, puppy visits, and extended dog sitting.',
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional dog walking and pet care services designed to keep your furry friend happy, healthy, and well-exercised
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-8 hover:shadow-lg transition-shadow">
              {service.metadata.image && (
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={`${service.metadata.image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={service.metadata.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {service.metadata.name}
                </h2>
                {service.metadata.price && (
                  <span className="text-2xl font-bold text-primary-600">
                    {service.metadata.price}
                  </span>
                )}
              </div>
              
              {service.metadata.duration && (
                <p className="text-gray-500 mb-4">
                  Duration: {service.metadata.duration}
                </p>
              )}
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {service.metadata.short_description}
              </p>
              
              {service.metadata.features && service.metadata.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {service.metadata.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-5 h-5 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <Link
                href={`/services/${service.slug}`}
                className="btn btn-primary"
              >
                Learn More & Book
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="card p-8 bg-gradient-to-br from-primary-50 to-blue-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Every dog is unique. Contact us to discuss custom care plans tailored to your pet's specific needs.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}