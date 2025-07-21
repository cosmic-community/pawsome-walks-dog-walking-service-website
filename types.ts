// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Contact Information
export interface Contact extends CosmicObject {
  type: 'contact';
  metadata: {
    business_name: string;
    phone?: string;
    email?: string;
    address?: string;
    service_areas?: string[];
    hours?: Record<string, string>;
    emergency_phone?: string;
  };
}

// Blog Posts
export interface BlogPost extends CosmicObject {
  type: 'blog';
  metadata: {
    title: string;
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: TeamMember;
    published_date?: string;
    tags?: string[];
  };
}

// Team Members
export interface TeamMember extends CosmicObject {
  type: 'team';
  metadata: {
    name: string;
    position?: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    years_experience?: number;
    favorite_breed?: string;
    certifications?: string[];
  };
}

// Testimonials
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name: string;
    dog_name?: string;
    review: string;
    rating: {
      key: string;
      value: string;
    };
    photo?: {
      url: string;
      imgix_url: string;
    };
    location?: string;
    featured: boolean;
  };
}

// Services
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name: string;
    short_description?: string;
    description?: string;
    price?: string;
    duration?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    features?: string[];
    featured: boolean;
  };
}

// About Page
export interface About extends CosmicObject {
  type: 'about';
  metadata: {
    hero_title: string;
    hero_subtitle?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    mission?: string;
    story?: string;
    years_experience?: number;
    dogs_walked?: number;
    happy_customers?: number;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team';
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isContact(obj: CosmicObject): obj is Contact {
  return obj.type === 'contact';
}

export function isAbout(obj: CosmicObject): obj is About {
  return obj.type === 'about';
}