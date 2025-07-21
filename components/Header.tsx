import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Pawsome Walks</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-primary-600 transition-colors">
              Our Team
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>
          
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}