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



// Connection monitoring
let connectionStats = {
  totalRequests: 0,
  successfulRequests: 0,
  failedRequests: 0,
  lastError: null,
  lastSuccess: null
};

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Helper function to create fetch with proper configuration and retry logic
async function fetchWithTimeout(url, options = {}, timeout = 15000, retries = 3) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  connectionStats.totalRequests++;
  
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`WordPress API request attempt ${attempt}/${retries}: ${url}`);
      
      // Use different headers for browser vs server environments
      const headers = isBrowser ? {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        ...options.headers,
      } : {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
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
      
      connectionStats.successfulRequests++;
      connectionStats.lastSuccess = new Date().toISOString();
      console.log(`WordPress API request successful: ${url}`);
      
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      
      if (error.name === 'AbortError') {
        console.error(`WordPress API request timeout: ${url}`);
        throw new Error('Request timeout');
      }
      
      // If it's a connection error and we have retries left, try again
      if ((error.code === 'ECONNRESET' || error.message.includes('fetch failed')) && attempt < retries) {
        console.warn(`WordPress API attempt ${attempt} failed, retrying... (${error.message})`);
        // Wait a bit before retrying (exponential backoff)
        const delay = Math.pow(2, attempt) * 1000;
        console.log(`Waiting ${delay}ms before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      connectionStats.failedRequests++;
      connectionStats.lastError = {
        message: error.message,
        code: error.code,
        timestamp: new Date().toISOString(),
        url: url
      };
      
      console.error(`WordPress API request failed after ${retries} attempts: ${url}`, error);
      throw error;
    }
  }
}

// Alternative connection method using XMLHttpRequest (browser only)
async function fetchWithXHR(url, options = {}) {
  if (!isBrowser) {
    throw new Error('XHR method only available in browser environment');
  }
  
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText);
          resolve({
            ok: true,
            status: xhr.status,
            json: () => Promise.resolve(data),
            headers: {
              get: (name) => xhr.getResponseHeader(name)
            }
          });
        } catch (e) {
          reject(new Error('Invalid JSON response'));
        }
      } else {
        reject(new Error(`HTTP error! status: ${xhr.status}`));
      }
    };
    
    xhr.onerror = function() {
      reject(new Error('Network error'));
    };
    
    xhr.ontimeout = function() {
      reject(new Error('Request timeout'));
    };
    
    xhr.timeout = 15000;
    xhr.send();
  });
}

// Health check function to monitor WordPress connection
export async function checkWordPressHealth() {
  const startTime = Date.now();
  
  try {
    // Test basic API access
    const apiTest = await fetchWithTimeout(`${WORDPRESS_URL}/wp-json`, {}, 10000, 1);
    const apiData = await apiTest.json();
    
    // Test posts endpoint
    const postsTest = await fetchWithTimeout(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=1`, 
      {}, 
      10000, 
      1
    );
    
    const responseTime = Date.now() - startTime;
    
    return {
      status: 'healthy',
      responseTime,
      apiVersion: apiData.namespaces?.includes('wp/v2') ? 'v2' : 'unknown',
      postsEndpoint: postsTest.ok ? 'working' : 'failing',
      timestamp: new Date().toISOString(),
      connectionStats,
      environment: isBrowser ? 'browser' : 'server'
    };
  } catch (error) {
    const responseTime = Date.now() - startTime;
    
    return {
      status: 'unhealthy',
      responseTime,
      error: error.message,
      errorCode: error.code,
      timestamp: new Date().toISOString(),
      connectionStats,
      environment: isBrowser ? 'browser' : 'server'
    };
  }
}

// Get connection statistics
export async function getConnectionStats() {
  return connectionStats;
}

// Test function to check if WordPress site is accessible
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
