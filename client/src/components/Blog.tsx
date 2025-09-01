"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useState } from "react";
import { getPosts, getPostImageUrl } from "@/action/wp.client";
import Link from "next/link";
import Image from "next/image";
import { decodeHTMLEntities } from "@/utils/lib";
import { formatDate } from "@/utils/lib";
import WordPressImage from "@/components/WordPressImage";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  category_names: string[];
  featured_image_url?: string | null;
}

interface BlogResponse {
  posts: BlogPost[];
  totalPages: number;
  error?: string;
  isFallback?: boolean;
}

export default function Blog() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      // Only fetch posts in browser environment
      if (typeof window === 'undefined') return;
      
      try {
        const response: BlogResponse = await getPosts(1, 3); // Get first 3 posts
        console.log('Recent posts fetched:', response);
        
        if (response.isFallback) {
          setIsFallback(true);
          setError(response.error || 'WordPress temporarily unavailable');
        } else {
          setIsFallback(false);
          setError(null);
        }
        
        setRecentPosts(response.posts);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
        setError('Failed to load blog posts');
        setIsFallback(false);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPosts();
  }, []);

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
        
        {/* Unique Section Divider */}
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
          <>
            {/* Fallback Warning */}
            {isFallback && (
              <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-amber-800">
                    <strong>Note:</strong> We're experiencing temporary connectivity issues with our blog. 
                    Showing fallback content. Please check back soon for the latest posts.
                  </p>
                </div>
              </div>
            )}
            
            <div className="grid lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className={`floating-paper p-6 rounded-3xl group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Blog Post Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl h-48">
                    <WordPressImage
                      src={post.featured_image_url || null}
                      alt={post.title?.rendered || 'Blog post image'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      fallbackSeed={post.id}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-bold text-gray-900 bg-white rounded-full shadow-sm">
                        {post.category_names && post.category_names.length > 0 ? post.category_names[0] : 'Uncategorized'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Blog Post Content */}
                  <div className="space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-muted group-hover:text-white transition-colors duration-300" suppressHydrationWarning>
                        {post.date ? formatDate(post.date) : 'No date'}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300 line-clamp-2">
                      {post.title?.rendered ? decodeHTMLEntities(post.title.rendered) : 'No title'}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-muted leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                      {post.excerpt?.rendered ? decodeHTMLEntities(post.excerpt.rendered) : 'No excerpt available'}
                    </p>
                    
                    {/* Read More Link */}
                    <div className="flex items-center justify-between pt-4 border-t border-accent/30">
                      <div className="flex items-center gap-2 text-primary group-hover:text-white transition-colors duration-300">
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
          </>
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
        
        {/* Enhanced View Full Page Link */}
        <div className={`text-center mt-12 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.7s' }}>
          <div className="inline-flex flex-col items-center gap-4 p-6 bg-white border border-primary/20 rounded-2xl shadow-md group hover:bg-gradient-to-r hover:from-secondary hover:to-primary transition-all duration-300">
            <div className="text-center">
              <p className="text-sm text-muted mb-3 group-hover:text-white transition-colors duration-300">Ready to explore our full blog content?</p>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-secondary/20 text-secondary hover:bg-secondary/5 hover:border-secondary/30 rounded-xl transition-all duration-300 font-medium group shadow-sm hover:shadow-md hover:scale-105"
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
