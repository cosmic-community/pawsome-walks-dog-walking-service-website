import Link from 'next/link'
import { getServices } from '@/lib/cosmic'

export default async function ServicesList() {
  const services = await getServices()
  
  if (!services.length) {
    return null
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional dog walking and pet care services tailored to your furry friend's needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card p-6 hover:shadow-lg transition-shadow">
              {service.metadata.image && (
                <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                  <img
                    src={`${service.metadata.image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                    alt={service.metadata.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.metadata.name}
                </h3>
                {service.metadata.price && (
                  <span className="text-lg font-bold text-primary-600">
                    {service.metadata.price}
                  </span>
                )}
              </div>
              
              {service.metadata.duration && (
                <p className="text-sm text-gray-500 mb-3">
                  Duration: {service.metadata.duration}
                </p>
              )}
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.metadata.short_description}
              </p>
              
              {service.metadata.features && service.metadata.features.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {service.metadata.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-4 h-4 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3 text-xs">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <Link
                href={`/services/${service.slug}`}
                className="btn btn-primary w-full"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}