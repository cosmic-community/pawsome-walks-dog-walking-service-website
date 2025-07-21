import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  BlogPost, 
  TeamMember, 
  Service, 
  Testimonial, 
  Contact, 
  About,
  CosmicResponse 
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
})

// Helper for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all blog posts
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'blog' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as BlogPost[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch blog posts')
  }
}

// Fetch single blog post
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'blog',
      slug
    }).depth(1)
    
    return response.object as BlogPost
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch blog post: ${slug}`)
  }
}

// Fetch all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

// Fetch single team member
export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'team',
      slug
    }).depth(1)
    
    return response.object as TeamMember
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch team member: ${slug}`)
  }
}

// Fetch all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

// Fetch single service
export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'services',
      slug
    }).depth(1)
    
    return response.object as Service
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error(`Failed to fetch service: ${slug}`)
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

// Fetch contact information
export async function getContact(): Promise<Contact | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'contact'
    }).depth(1)
    
    return response.object as Contact
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch contact information')
  }
}

// Fetch about page content
export async function getAbout(): Promise<About | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'about'
    }).depth(1)
    
    return response.object as About
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch about page content')
  }
}