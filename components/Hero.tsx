import Link from 'next/link'
import { getAbout } from '@/lib/cosmic'

export default async function Hero() {
  const aboutData = await getAbout()
  
  if (!aboutData) {
    return null
  }
  
  const { metadata } = aboutData
  
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-blue-50 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 text-balance">
              {metadata.hero_title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {metadata.hero_subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn btn-primary px-8 py-3">
                View Our Services
              </Link>
              <Link href="/contact" className="btn btn-secondary px-8 py-3">
                Get Free Quote
              </Link>
            </div>
            
            {(metadata.years_experience || metadata.dogs_walked || metadata.happy_customers) && (
              <div className="flex flex-wrap gap-8 mt-12">
                {metadata.years_experience && (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      {metadata.years_experience}+
                    </div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                )}
                {metadata.dogs_walked && (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      {metadata.dogs_walked.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600">Dogs Walked</div>
                  </div>
                )}
                {metadata.happy_customers && (
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600">
                      {metadata.happy_customers}+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="relative">
            {metadata.hero_image && (
              <img
                src={`${metadata.hero_image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
                alt="Professional dog walker with happy dogs"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl w-full"
              />
            )}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-4xl">🐕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}