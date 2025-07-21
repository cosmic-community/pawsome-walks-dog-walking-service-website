# Pawsome Walks Dog Walking Service Website

![App Preview](https://imgix.cosmicjs.com/5adc0820-6594-11f0-a051-23c10f41277a-photo-1601758228041-f3b2795255f1-1753034827988.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional Next.js website for Pawsome Walks Dog Walking Service, showcasing services, team expertise, client testimonials, and educational blog content. Built with Next.js 15, TypeScript, and Tailwind CSS, powered by [Cosmic](https://www.cosmicjs.com).

## Features

- 🏠 **Professional Homepage** with hero section, services overview, and testimonials
- 🐕 **Service Pages** with detailed descriptions, pricing, and features
- 👥 **Team Profiles** showcasing walker expertise and certifications  
- ⭐ **Customer Testimonials** with ratings and reviews
- 📝 **Educational Blog** with dog care tips and company updates
- 📞 **Contact Information** with service areas and business hours
- 📱 **Fully Responsive** design for all devices
- ⚡ **Server-Side Rendering** for optimal performance and SEO
- 🎨 **Modern UI** with Tailwind CSS and smooth animations

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=687d2f3bace2d34c4e959833&clone_repository=687de5f61b6d49375f9ed7a1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> add 2 new blog articles

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: staging in cosmic config

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: [Cosmic](https://www.cosmicjs.com/docs) headless CMS
- **Deployment**: Optimized for Vercel, Netlify, or any Node.js hosting
- **Performance**: Server-side rendering, image optimization, and caching

## Getting Started

### Prerequisites

- Node.js 18+ (recommend using [bun](https://bun.sh))
- A Cosmic account and bucket

### Installation

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd pawsome-walks-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=dog-walkers-inc-production
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const response = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const services = response.objects
```

### Fetching Blog Posts with Authors
```typescript
const response = await cosmic.objects
  .find({ type: 'blog' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Includes connected team member data

const posts = response.objects
```

### Fetching Single Page Content
```typescript
const response = await cosmic.objects.findOne({
  type: 'about',
  slug: 'about-pawsome-walks'
}).depth(1)

const aboutPage = response.object
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Services**: Dog walking service offerings with pricing and features
- **Team**: Walker profiles with photos, bios, and certifications
- **Testimonials**: Customer reviews with ratings and photos
- **Blog**: Educational content about dog care and company updates
- **About**: Company information, mission, and statistics
- **Contact**: Business information, hours, and service areas

All content is managed through your Cosmic dashboard and automatically updates on the website.

## Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with automatic builds on git push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Environment Variables
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->