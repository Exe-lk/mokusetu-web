"use client";
import React, { useState, useEffect } from "react";
import { getPosts, getCategories, getPostsByCategoryName } from "@/action/wp.client";
import Link from "next/link";
import Image from "next/image";
import { decodeHTMLEntities } from "@/utils/lib";
import { formatDate } from "@/utils/lib";

interface BlogPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  date: string;
  category_names: string[];
  featured_image_url?: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchCategories = async () => {
      // Only fetch categories in browser environment
      if (typeof window === 'undefined') return;
      
      try {
        const categoriesData = await getCategories();
        console.log('Categories fetched:', categoriesData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      // Only fetch posts in browser environment
      if (typeof window === 'undefined') return;
      
      setLoading(true);
      try {
        let result;
        if (selectedCategory === 'all') {
          result = await getPosts(currentPage, postsPerPage);
        } else {
          result = await getPostsByCategoryName(selectedCategory, currentPage, postsPerPage);
        }
        
        console.log('Posts fetched:', result);
        
        // Handle both array and object return types
        if (Array.isArray(result)) {
          setPosts(result);
          setTotalPages(1);
        } else {
          setPosts(result.posts || []);
          setTotalPages(result.totalPages || 1);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Categories Filter */}
      {categories.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.slug)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Posts Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className="text-gray-500 mt-4">Loading blog posts...</p>
        </div>
      ) : posts.length > 0 ? (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featured_image_url || `https://picsum.photos/400/250?random=${post.id}`}
                    alt={post.title?.rendered || 'Blog post image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-bold text-gray-900 bg-white rounded-full shadow-sm">
                      {post.category_names && post.category_names.length > 0 ? post.category_names[0] : 'Uncategorized'}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3" suppressHydrationWarning>
                    {post.date ? formatDate(post.date) : 'No date'}
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title?.rendered ? decodeHTMLEntities(post.title.rendered) : 'No title'}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt?.rendered ? decodeHTMLEntities(post.excerpt.rendered) : 'No excerpt available'}
                  </p>

                  {/* Continue Reading Button */}
                  <div className="flex justify-end">
                    <Link
                      href={`/${post.slug || '#'}`}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-300 group"
                    >
                      Continue Reading
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                    currentPage === page
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-sm'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Blog Coming Soon!</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              {selectedCategory === 'all' 
                ? "We're working hard to bring you insightful content about Japanese business culture, market strategies, and industry best practices. Check back soon for our first blog posts!"
                : `No posts found in the "${selectedCategory}" category yet. We're working on creating content for this category.`
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
