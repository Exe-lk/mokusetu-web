"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
};

// Placeholder blog posts for future integration
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Japanese Business Culture: A Complete Guide",
    excerpt: "Navigate the complexities of Japanese business etiquette, communication styles, and decision-making processes to accelerate your market entry success.",
    category: "Cultural Insights",
    readTime: "8 min read",
    date: "Coming Soon",
    image: "/api/placeholder/400/250"
  },
  {
    id: "2",
    title: "Market Entry Strategies: From Planning to Execution",
    excerpt: "Comprehensive strategies for entering the Japanese market, including market research, partner identification, and regulatory compliance.",
    category: "Market Entry",
    readTime: "12 min read",
    date: "Coming Soon",
    image: "/api/placeholder/400/250"
  },
  {
    id: "3",
    title: "Supplier Sourcing in Japan: Quality Meets Reliability",
    excerpt: "Discover how to identify and partner with trusted Japanese suppliers while maintaining quality standards and cost efficiency.",
    category: "Supply Chain",
    readTime: "10 min read",
    date: "Coming Soon",
    image: "/api/placeholder/400/250"
  }
];

export default function Blog() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();

  return (
    <section id="blog" className="section section-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`}>
            <span className="gradient-text-brand">Insights & Knowledge</span>
          </h2>
          <p className={`text-xl text-muted max-w-3xl mx-auto ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.2s' }}>
            Expert insights on Japanese business culture, market entry strategies, and industry best practices.
          </p>
        </div>
        
        {/* Unique Section Divider */}
        <div className="section-divider mb-12"></div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`floating-paper p-6 rounded-3xl group hover-lift service-card-unique ${sectionVisible ? 'stagger-in visible' : 'stagger-in'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Blog Post Image Placeholder */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <p className="text-sm font-medium">Blog Image</p>
                  </div>
                </div>
              </div>
              
              {/* Blog Post Content */}
              <div className="space-y-4">
                {/* Category and Read Time */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted">{post.readTime}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Date and Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-accent/30">
                  <span className="text-sm text-muted font-medium">{post.date}</span>
                  <button className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Coming Soon Message */}
        <div className={`text-center mt-12 ${sectionVisible ? 'fade-in visible' : 'fade-in'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/50 border border-primary/20 rounded-full">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text-secondary font-medium">Blog section coming soon with real content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
