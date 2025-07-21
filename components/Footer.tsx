import Link from 'next/link'
import { getContact } from '@/lib/cosmic'

export default async function Footer() {
  const contactInfo = await getContact()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <span className="text-xl font-bold">Pawsome Walks</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional dog walking services you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/basic-dog-walking" className="text-gray-400 hover:text-white transition-colors">
                  Basic Walking
                </Link>
              </li>
              <li>
                <Link href="/services/premium-dog-walking" className="text-gray-400 hover:text-white transition-colors">
                  Premium Walking
                </Link>
              </li>
              <li>
                <Link href="/services/dog-sitting-extended-care" className="text-gray-400 hover:text-white transition-colors">
                  Dog Sitting
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            {contactInfo && (
              <ul className="space-y-2 text-sm text-gray-400">
                <li>{contactInfo.metadata.phone}</li>
                <li>{contactInfo.metadata.email}</li>
                <li className="whitespace-pre-line">
                  {contactInfo.metadata.address}
                </li>
              </ul>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 {contactInfo?.metadata.business_name || 'Pawsome Walks'}. All rights reserved.
          </p>
          
          <a
            href={`https://www.cosmicjs.com?utm_source=bucket_dog-walkers-inc-production&utm_medium=referral&utm_campaign=app_footer&utm_content=built_with_cosmic`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cosmic-dark hover:bg-cosmic-dark-hover text-white px-4 py-2 rounded-md text-sm font-medium no-underline inline-flex items-center gap-2 transition-colors duration-200 mt-4 sm:mt-0"
          >
            <img 
              src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg" 
              alt="Cosmic Logo" 
              className="w-5 h-5"
            />
            Built with Cosmic
          </a>
        </div>
      </div>
    </footer>
  )
}