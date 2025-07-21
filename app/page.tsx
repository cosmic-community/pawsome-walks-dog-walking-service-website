import Hero from '@/components/Hero'
import ServicesList from '@/components/ServicesList'
import TestimonialsList from '@/components/TestimonialsList'
import BlogPreview from '@/components/BlogPreview'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesList />
      <TestimonialsList />
      <BlogPreview />
      <CTASection />
    </div>
  )
}