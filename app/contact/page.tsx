import type { Metadata } from 'next'
import { getContact } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Contact Us - Pawsome Walks',
  description: 'Get in touch with Pawsome Walks for professional dog walking services. Contact us for a free consultation and quote.',
}

export default async function ContactPage() {
  const contactInfo = await getContact()
  
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to give your dog the care they deserve? Contact us for a free consultation and personalized quote.
          </p>
        </div>
        
        {contactInfo && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">{contactInfo.metadata.phone}</p>
                    {contactInfo.metadata.emergency_phone && (
                      <p className="text-sm text-gray-500">
                        Emergency: {contactInfo.metadata.emergency_phone}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">{contactInfo.metadata.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-primary-600 text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {contactInfo.metadata.address}
                    </p>
                  </div>
                </div>
              </div>
              
              {contactInfo.metadata.hours && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Business Hours
                  </h2>
                  <div className="card p-6">
                    <div className="space-y-3">
                      {Object.entries(contactInfo.metadata.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between">
                          <span className="font-medium text-gray-900">{day}</span>
                          <span className="text-gray-600">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              {contactInfo.metadata.service_areas && contactInfo.metadata.service_areas.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Service Areas
                  </h2>
                  <div className="card p-6">
                    <p className="text-gray-600 mb-4">
                      We proudly serve the following areas:
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {contactInfo.metadata.service_areas.map((area, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-blue-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us today for a free consultation. We'll discuss your dog's needs and create a personalized care plan.
                </p>
                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.metadata.phone?.replace(/\D/g, '')}`}
                    className="btn btn-primary w-full"
                  >
                    Call Now
                  </a>
                  <a
                    href={`mailto:${contactInfo.metadata.email}`}
                    className="btn btn-secondary w-full"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}