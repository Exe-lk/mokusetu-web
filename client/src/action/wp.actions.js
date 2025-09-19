'use server';

const WORDPRESS_URL = 'https://seagreen-tapir-758954.hostingersite.com';

// Fallback data when WordPress is unavailable
const FALLBACK_DATA = {
  posts: [
    {
      id: 1,
      title: { rendered: 'Welcome to Our Blog' },
      excerpt: { rendered: 'We\'re experiencing some technical difficulties with our blog at the moment. Please check back soon for the latest updates and articles.' },
      content: { rendered: '<p>We\'re experiencing some technical difficulties with our blog at the moment. Please check back soon for the latest updates and articles.</p><p>In the meantime, feel free to explore our other services and contact us if you need assistance.</p>' },
      date: new Date().toISOString(),
      slug: 'welcome',
      category_names: ['General'],
      _embedded: {},
      featured_image_url: null
    }
  ],
  totalPages: 1
};



// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Helper function to create fetch with proper configuration and retry logic
async function fetchWithTimeout(url, options = {}, timeout = 20000, retries = 3) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`WordPress API request attempt ${attempt}/${retries}: ${url}`);
      
      // Use simplified headers to avoid CORS issues
      const headers = {
        'Accept': 'application/json',
        ...(options.method === 'POST' && { 'Content-Type': 'application/json' }),
        ...options.headers,
      };
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers,
        mode: 'cors',
        credentials: 'omit',
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      console.log(`WordPress API request successful: ${url}`);
      
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.error(`WordPress API request timeout: ${url}`);
        throw new Error('Request timeout');
      }
      
      // If it's a connection error and we have retries left, try again
      if ((error.code === 'ECONNRESET' || error.message.includes('fetch failed') || error.message.includes('ECONNRESET')) && attempt < retries) {
        console.warn(`WordPress API attempt ${attempt} failed, retrying... (${error.message})`);
        // Wait a bit before retrying (exponential backoff)
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      console.error(`WordPress API request failed after ${retries} attempts: ${url}`, error);
      throw error;
    }
  }
}

// Test function to check if WordPress site is accessible (kept for debugging purposes)
export async function testWordPressConnection() {
  try {
    const res = await fetchWithTimeout(`${WORDPRESS_URL}/wp-json`);
    const data = await res.json();
    console.log('WordPress site is accessible:', data);
    return { success: true, data };
  } catch (error) {
    console.error('WordPress site is not accessible:', error);
    return { success: false, error: error.message };
  }
}

export async function getPosts(page, perPage = 12) {
  try {
    const res = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}&_embed&status=publish`
    );
    const posts = await res.json();
    
    // Process posts to include category names
    const postsWithCategories = posts.map(post => {
      const categoryNames = post._embedded?.['wp:term']?.[0]?.map(term => term.name) || [];
      return {
        ...post,
        category_names: categoryNames
      };
    });
    
    const totalPages = res.headers.get('X-WP-TotalPages');
    return { posts: postsWithCategories, totalPages: parseInt(totalPages, 10) };
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error);
    
    // Return fallback data when WordPress is down
    return { 
      ...FALLBACK_DATA,
      error: error.message,
      isFallback: true
    };
  }
}

export async function getPost(slug) {
  try {
    const res = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed&status=publish`
    );
    const posts = await res.json();
    
    if (posts.length === 0) {
      throw new Error('Post not found');
    }
    
    const post = posts[0];
    
    // Add category names to the post
    const categoryNames = post._embedded?.['wp:term']?.[0]?.map(term => term.name) || [];
    const postWithCategories = {
      ...post,
      category_names: categoryNames
    };
    
    return postWithCategories;
  } catch (error) {
    console.error('Error fetching post from WordPress:', error);
    
    // Return a more specific error message
    if (error.message === 'Post not found') {
      throw new Error('Post not found');
    } else if (error.code === 'ECONNRESET' || error.message.includes('fetch failed')) {
      throw new Error('Connection error. Please try again later.');
    } else {
      throw new Error('Unable to fetch post at this time. Please try again later.');
    }
  }
}

export async function getPostsByCategoryName(categoryName, page, perPage = 12) {
  try {
    const categoryResponse = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/categories?slug=${categoryName}`
    );
    const categories = await categoryResponse.json();

    if (categories.length === 0) {
      console.log('Category not found');
      return { posts: [], totalPages: 0 };
    }

    const categoryId = categories[0].id;

    const postsResponse = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed&status=publish`
    );
    const posts = await postsResponse.json();
    
    // Process posts to include category names
    const postsWithCategories = posts.map(post => {
      const categoryNames = post._embedded?.['wp:term']?.[0]?.map(term => term.name) || [];
      return {
        ...post,
        category_names: categoryNames
      };
    });
    
    const totalPages = postsResponse.headers.get('X-WP-TotalPages');
    return { posts: postsWithCategories, totalPages: parseInt(totalPages, 10) };
  } catch (error) {
    console.error('Error fetching posts by category from WordPress:', error);
    
    // Return fallback data when WordPress is down
    return { 
      ...FALLBACK_DATA,
      error: error.message,
      isFallback: true
    };
  }
}

export async function getCategories() {
  try {
    const res = await fetchWithTimeout(`${WORDPRESS_URL}/wp-json/wp/v2/categories`);
    const categories = await res.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories from WordPress:', error);
    
    // Return fallback categories when WordPress is down
    return [
      { id: 1, name: 'General', slug: 'general', count: 1 }
    ];
  }
}

export async function getCommentss(postId) {
  try {
    const res = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&status=approved`
    );
    const comments = await res.json();
    return comments;
  } catch (error) {
    console.error('Error fetching comments from WordPress:', error);
    
    // Return empty array when WordPress is down
    return [];
  }
}

export async function postComment(data) {
  try {
    const res = await fetchWithTimeout(`${WORDPRESS_URL}/wp-json/wp/v2/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        post: data.post,
        author_name: data.author_name,
        author_email: data.author_email,
        content: data.content,
      }),
    });
    const comments = await res.json();
    console.log(comments);
    return comments;
  } catch (error) {
    console.error('Error posting comment to WordPress:', error);
    
    // Return error when WordPress is down
    throw new Error('Unable to post comment at this time. Please try again later.');
  }
}
