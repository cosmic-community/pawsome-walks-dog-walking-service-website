import { getTestimonials } from '@/lib/cosmic'

export default async function TestimonialsList() {
  const testimonials = await getTestimonials()
  
  if (!testimonials.length) {
    return null
  }
  
  // Show featured testimonials first, then others
  const sortedTestimonials = testimonials.sort((a, b) => {
    if (a.metadata.featured && !b.metadata.featured) return -1
    if (!a.metadata.featured && b.metadata.featured) return 1
    return 0
  })
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by hundreds of pet parents in our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedTestimonials.slice(0, 6).map((testimonial) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.metadata.rating.value}
                </span>
              </div>
              
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.metadata.review}"
              </blockquote>
              
              <div className="flex items-center">
                {testimonial.metadata.photo && (
                  <img
                    src={`${testimonial.metadata.photo.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.customer_name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.metadata.customer_name}
                  </div>
                  {testimonial.metadata.dog_name && (
                    <div className="text-sm text-gray-600">
                      Pet parent of {testimonial.metadata.dog_name}
                    </div>
                  )}
                  {testimonial.metadata.location && (
                    <div className="text-xs text-gray-500">
                      {testimonial.metadata.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}