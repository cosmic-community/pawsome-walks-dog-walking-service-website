import Link from 'next/link'
import { getBlogPosts } from '@/lib/cosmic'

export default async function BlogPreview() {
  const posts = await getBlogPosts()
  
  if (!posts.length) {
    return null
  }
  
  const recentPosts = posts.slice(0, 3)
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600">
            Tips, insights, and stories about dog care and walking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
              {post.metadata.featured_image && (
                <div className="aspect-video">
                  <img
                    src={`${post.metadata.featured_image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.metadata.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-primary-100 text-primary-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                {post.metadata.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.metadata.excerpt}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More →
                  </Link>
                  
                  {post.metadata.published_date && (
                    <span className="text-sm text-gray-500">
                      {new Date(post.metadata.published_date).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="btn btn-secondary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}