import { getPost } from '@/action/wp.actions';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate } from '@/utils/lib';
import Breadcrumb from '@/components/Breadcrumb';
import CommentsWrapper from '@/components/CommentsWrapper';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server-safe HTML entity decoder
function decodeHTMLEntitiesServer(text: string): string {
  if (!text) return '';
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

// Server-safe date formatter
function formatDateServer(dateString: string): string {
  if (!dateString) return 'No date';
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'No date';
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
  } catch (error) {
    return 'No date';
  }
}

// Simple HTML sanitizer for server-side rendering
function sanitizeHTML(html: string): string {
  if (!html) return '';
  
  // Remove potentially dangerous tags and attributes
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/data:/gi, '');
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPost(slug);
    
    return (
      <>
        <Breadcrumb 
          currentPage={decodeHTMLEntitiesServer(post.title?.rendered || 'Blog Post')} 
          currentPagePath={`/${slug}`} 
        />
        
        <article className="container mx-auto px-6 py-12">
          {/* Post Header */}
          <header className="mb-12">
            {/* Category and Date */}
            <div className="flex items-center gap-4 mb-6">
              {post.category_names && post.category_names.length > 0 && (
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {post.category_names[0]}
                </span>
              )}
              <span className="text-muted text-sm" suppressHydrationWarning>
                {formatDateServer(post.date)}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title?.rendered ? decodeHTMLEntitiesServer(post.title.rendered) : 'No title'}
            </h1>
            
            {/* Excerpt */}
            {/* {post.excerpt?.rendered && (
              <p className="text-xl text-muted leading-relaxed max-w-4xl">
                {decodeHTMLEntitiesServer(post.excerpt.rendered)}
              </p>
            )} */}
          </header>

          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="relative mb-12 overflow-hidden rounded-2xl">
              <Image
                src={post.featured_image_url}
                alt={post.title?.rendered || 'Blog post featured image'}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          {/* Post Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(post.content?.rendered || ''),
              }}
            />
          </div>

          {/* Comments Section */}
        <div className="mt-16">
            <CommentsWrapper post={post} />
          </div> 
        </article>
      </>
    );
  } catch (error) {
    console.error('Error fetching post:', error);
    
    // Check if it's a connection issue
    const errorMessage = error instanceof Error ? error.message : String(error);
    const isConnectionError = errorMessage.includes('Connection error') || 
                             errorMessage.includes('fetch failed') ||
                             errorMessage.includes('ECONNRESET');
    
    if (isConnectionError) {
      // Show connection issue page
      return (
        <>
          <Breadcrumb 
            currentPage="Connection Issue" 
            currentPagePath={`/${slug}`} 
          />
          
          <div className="container mx-auto px-6 py-16">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <svg className="w-24 h-24 mx-auto text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold text-foreground mb-4">Connection Issue</h1>
              <p className="text-xl text-muted mb-8">
                We're experiencing temporary connection issues with our blog backend.
              </p>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-left">
                  <p className="text-yellow-800 font-medium mb-2">What this means:</p>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• The blog post may be temporarily unavailable</li>
                    <li>• Comments and posts may not load</li>
                    <li>• Please try again when the connection is restored</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 space-x-4">
                <Link 
                  href={`/${slug}`}
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Try Again
                </Link>
                
                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
    
    // Show a custom "Post Not Found" page instead of 404
    return (
      <>
        <Breadcrumb 
          currentPage="Post Not Found" 
          currentPagePath={`/${slug}`} 
        />
        
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <svg className="w-24 h-24 mx-auto text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-xl text-muted mb-8">
              The blog post you're looking for doesn't exist or hasn't been published yet.
            </p>
            
            <div className="space-y-4">
              <p className="text-muted">
                This could be because:
              </p>
              <ul className="text-muted space-y-2">
                <li>• The post hasn't been created yet</li>
                <li>• The post URL has changed</li>
                <li>• The post has been removed</li>
              </ul>
            </div>
            
            <div className="mt-8 space-x-4">
              <Link 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
