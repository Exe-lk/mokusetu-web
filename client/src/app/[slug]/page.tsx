"use client";
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate, formatCategoryName } from '@/utils/lib';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { fetchPosts } from '../store/slices/postsSlice';
import { fetchCategories } from '../store/slices/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function sanitizeHTML(html: string): string {
  if (!html) return '';

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const { categories } = useAppSelector((state) => state.categories);
  const [slug, setSlug] = useState<string>('');
  const [post, setPost] = useState<any>(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    params.then(({ slug }) => {
      // Decode in case Next/router gives us a URL-encoded slug (e.g. for non-Latin characters)
      try {
        setSlug(decodeURIComponent(slug));
      } catch {
        setSlug(slug);
      }
    });
  }, [params]);

  useEffect(() => {
    dispatch(fetchPosts({ published: true, limit: 1000 }));
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (slug && posts.length > 0) {
      const encodedSlug = encodeURIComponent(slug);

      const foundPost = posts.find(
        (p) =>
          p.published &&
          (p.slug === slug || p.slug === encodedSlug)
      );
      if (foundPost) {
        const postWithCategory = {
          ...foundPost,
          category: foundPost.categoryId
            ? categories.find((c) => c.id === foundPost.categoryId)
            : null
        };
        setPost(postWithCategory);
      } else {
        setIsNotFound(true);
      }
    }
  }, [slug, posts, categories]);

  if (isNotFound) {
    notFound();
  }

  if (loading || !post) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="text-center py-12">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-gray-500 mt-4">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error || !post.published) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        currentPage={post.title || 'Blog Post'}
        currentPagePath={`/${slug}`}
      />

      <article className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          {post.category && (
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {formatCategoryName(post.category.name)}
            </span>
          )}
          <span className="text-muted text-sm" suppressHydrationWarning>
            {post.publishedAt
              ? formatDate(post.publishedAt instanceof Date ? post.publishedAt.toISOString() : String(post.publishedAt))
              : post.createdAt
                ? formatDate(post.createdAt instanceof Date ? post.createdAt.toISOString() : String(post.createdAt))
                : 'No date'}
          </span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          {post.title || 'No title'}
        </h1>
        <div className="max-w-4xl mx-auto">



          {post.featuredImage && (
            <div className="relative mb-8 overflow-hidden rounded-2xl">
              <Image
                src={post.featuredImage}
                alt={post.title || 'Blog post featured image'}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
                unoptimized
              />
            </div>
          )}



          {post.content && (() => {
            const paragraphs = post.content.split(/\n\s*\n|\r\n\s*\r\n/).filter((p: string) => p && p.trim().length > 0);
            
            return (
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((paragraph: string, index: number) => {
                  const trimmedParagraph = paragraph.trim();
                  if (!trimmedParagraph) return null;
                  
                  const hasHTML = /<[^>]+>/.test(trimmedParagraph);
                  
                  if (hasHTML) {
                    return (
                      <div
                        key={index}
                        className="mb-6 last:mb-0 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: sanitizeHTML(trimmedParagraph),
                        }}
                      />
                    );
                  } else {
                    return (
                      <p key={index} className="mb-6 last:mb-0 leading-relaxed text-gray-700 text-base">
                        {trimmedParagraph}
                      </p>
                    );
                  }
                })}
              </div>
            );
          })()}
        </div>
      </article>
    </>
  );
}
