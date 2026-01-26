"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate, formatCategoryName } from "@/utils/lib";
import { fetchPosts } from '../app/store/slices/postsSlice';
import { fetchCategories } from '../app/store/slices/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../app/store/hooks';

export default function Blog() {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const { categories } = useAppSelector((state) => state.categories);
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  useEffect(() => {
    dispatch(fetchPosts({ page: 1, limit: 3, published: true }));
    dispatch(fetchCategories());
  }, [dispatch]);
  
  const recentPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">Recent Blog Posts</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            Stay updated with our latest insights on Japanese business culture, market entry strategies, and industry best practices.
          </p>
        </div>
        
        <div className="section-divider mb-12"></div>
        
        {loading ? (
          <div className="text-center py-12">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="text-muted mt-4">Loading recent blog posts...</p>
          </div>
        ) : recentPosts.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`floating-paper p-6 rounded-3xl group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl h-48 bg-gray-200">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title || 'Blog post image'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={`https://picsum.photos/400/250?random=${post.id}`}
                      alt={post.title || 'Blog post image'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-bold text-gray-900 bg-white rounded-full shadow-sm">
                      {formatCategoryName(categories.find(cat => cat.id === post.categoryId)?.name || 'Uncategorized')}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-muted" suppressHydrationWarning>
                      {post.publishedAt 
                        ? formatDate(post.publishedAt instanceof Date ? post.publishedAt.toISOString() : String(post.publishedAt))
                        : post.createdAt 
                          ? formatDate(post.createdAt instanceof Date ? post.createdAt.toISOString() : String(post.createdAt))
                          : 'No date'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground line-clamp-2">
                    {post.title || 'No title'}
                  </h3>
                  
                  <p className="text-muted leading-relaxed line-clamp-3">
                    {post.excerpt || 'No excerpt available'}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-accent/30">
                    <div className="flex items-center gap-2 text-primary">
                      <Link 
                        href={`/${post.slug || '#'}`}
                        className="text-sm font-medium hover:underline"
                      >
                        Read More
                      </Link>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {error ? 'Unable to Load Blog Posts' : 'Blog Coming Soon!'}
              </h3>
              <p className="text-muted text-lg leading-relaxed">
                {error 
                  ? 'We\'re experiencing technical difficulties loading our blog content. Please try refreshing the page or check back later.'
                  : 'We\'re working hard to bring you insightful content about Japanese business culture, market strategies, and industry best practices. Check back soon for our first blog posts!'
                }
              </p>
              {error && (
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        )}
        
        <div className={`text-center mt-12 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.7s' }}>
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md transition-all duration-300">
            <div className="text-center">
              <p className="text-sm text-muted mb-3">Ready to explore our full blog content?</p>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-secondary/20 text-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-primary hover:text-white hover:border-secondary rounded-xl transition-all duration-300 font-medium group shadow-sm hover:shadow-md hover:scale-105"
              >
                <span>View Full Blog Page</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
