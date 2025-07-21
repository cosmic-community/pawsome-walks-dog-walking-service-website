import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-blue-600">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Give Your Dog the Best Care?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of happy pet parents who trust us with their furry family members. 
          Get started with a free consultation today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Get Free Quote
          </Link>
          <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}