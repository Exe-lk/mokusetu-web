// Client-side WordPress API functions
// This file is safe to import in client components

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

// Generate placeholder image URL based on post data
function generatePlaceholderImage(post) {
  if (post.featured_image_url) {
    return post.featured_image_url;
  }
  
  // Use post title or ID to generate a consistent placeholder
  const seed = post.id || post.title?.rendered?.length || 1;
  return `https://picsum.photos/400/250?random=${seed}`;
}

// Client-side fetch function for WordPress API with better CORS handling
async function fetchWordPressAPI(endpoint, options = {}) {
  try {
    // Try with CORS mode first
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/${endpoint}`, {
      ...options,
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        ...options.headers,
      },
    });

    if (!response.ok) {
      // Handle specific error cases
      if (response.status === 401) {
        console.warn('WordPress API requires authentication for this endpoint:', endpoint);
        throw new Error('Authentication required');
      }
      if (response.status === 403) {
        console.warn('WordPress API access forbidden for this endpoint:', endpoint);
        throw new Error('Access forbidden');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('WordPress API request failed:', error);
    
    // If CORS fails, try without CORS mode
    try {
      console.log('Retrying without CORS mode...');
      const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/${endpoint}`, {
        ...options,
        mode: 'no-cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok && response.status !== 0) { // no-cors returns status 0
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (corsError) {
      console.error('Both CORS and no-cors attempts failed:', corsError);
      throw error; // Throw the original error
    }
  }
}

// Utility function to get image URL for a post
export function getPostImageUrl(post) {
  if (post.featured_image_url) {
    return post.featured_image_url;
  }
  
  // Generate placeholder based on post data
  const seed = post.id || post.title?.rendered?.length || 1;
  return `https://picsum.photos/400/250?random=${seed}`;
}

// Utility function to check if an image URL is valid
export async function isImageUrlValid(url) {
  if (!url) return false;
  
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.log('Image URL validation failed:', url, error);
    return false;
  }
}

// Get posts with fallback and better image handling
export async function getPosts(page, perPage = 12) {
  try {
    const response = await fetchWordPressAPI(`posts?page=${page}&per_page=${perPage}&_embed&status=publish`);
    const posts = await response.json();
    
    // Process posts to include category names and handle images
    const postsWithCategories = posts.map(post => {
      const categoryNames = post._embedded?.['wp:term']?.[0]?.map(term => term.name) || [];
      
      // Handle featured image with better fallback logic
      let featured_image_url = null;
      if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        featured_image_url = post._embedded['wp:featuredmedia'][0].source_url;
      } else if (post.featured_media && post.featured_media > 0) {
        // Try to construct a URL, but this might not work due to server restrictions
        featured_image_url = `${WORDPRESS_URL}/wp-content/uploads/featured-${post.featured_media}.jpg`;
      }
      
      return {
        ...post,
        category_names: categoryNames,
        featured_image_url: featured_image_url || null
      };
    });
    
    const totalPages = response.headers.get('X-WP-TotalPages');
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

// Get posts by category name
export async function getPostsByCategoryName(categoryName, page, perPage = 12) {
  try {
    const categoryResponse = await fetchWordPressAPI(`categories?slug=${categoryName}`);
    const categories = await categoryResponse.json();

    if (categories.length === 0) {
      console.log('Category not found');
      return { posts: [], totalPages: 0 };
    }

    const categoryId = categories[0].id;

    const postsResponse = await fetchWordPressAPI(`posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed&status=publish`);
    const posts = await postsResponse.json();
    
    // Process posts to include category names and handle images
    const postsWithCategories = posts.map(post => {
      const categoryNames = post._embedded?.['wp:term']?.[0]?.map(term => term.name) || [];
      
      // Handle featured image
      let featured_image_url = null;
      if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        featured_image_url = post._embedded['wp:featuredmedia'][0].source_url;
      } else if (post.featured_media && post.featured_media > 0) {
        featured_image_url = `${WORDPRESS_URL}/wp-content/uploads/featured-${post.featured_media}.jpg`;
      }
      
      return {
        ...post,
        category_names: categoryNames,
        featured_image_url: featured_image_url || null
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

// Get categories
export async function getCategories() {
  try {
    const response = await fetchWordPressAPI('categories');
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories from WordPress:', error);
    
    // Return fallback categories when WordPress is down
    return [
      { id: 1, name: 'General', slug: 'general', count: 1 }
    ];
  }
}

// Get comments for a post
export async function getComments(postId) {
  try {
    console.log('Fetching comments for post ID:', postId);
    
    // First try to get all comments (including pending ones) for debugging
    const allCommentsResponse = await fetchWordPressAPI(`comments?post=${postId}`);
    const allCommentsText = await allCommentsResponse.text();
    console.log('All comments response text:', allCommentsText);
    
    let allComments = [];
    try {
      allComments = JSON.parse(allCommentsText);
      console.log('All comments parsed:', allComments);
    } catch (parseError) {
      console.error('Failed to parse all comments response:', parseError);
    }
    
    // Now get approved comments
    const response = await fetchWordPressAPI(`comments?post=${postId}&status=approved`);
    
    // Check if response has content
    const text = await response.text();
    console.log('Approved comments response text:', text);
    
    if (!text || text.trim() === '') {
      console.warn('WordPress API returned empty response for approved comments');
      return [];
    }
    
    // Try to parse as JSON
    let comments;
    try {
      comments = JSON.parse(text);
      console.log('Approved comments parsed:', comments);
    } catch (parseError) {
      console.error('Failed to parse comments response as JSON:', parseError);
      console.log('Raw response:', text);
      return [];
    }
    
    const result = Array.isArray(comments) ? comments : [];
    console.log('Final comments result:', result);
    return result;
  } catch (error) {
    console.error('Error fetching comments:', error);
    
    // Handle specific error cases
    if (error.message === 'Authentication required') {
      console.warn('Comments endpoint requires authentication - returning empty array');
      return [];
    }
    
    if (error.message === 'Access forbidden') {
      console.warn('Comments endpoint access forbidden - returning empty array');
      return [];
    }
    
    // For other errors, return empty array
    return [];
  }
}

// Get all comments for a post (including pending ones) - for debugging
export async function getAllCommentsForPost(postId) {
  try {
    console.log('Fetching ALL comments for post ID:', postId);
    
    const response = await fetchWordPressAPI(`comments?post=${postId}`);
    const text = await response.text();
    console.log('All comments response text:', text);
    
    if (!text || text.trim() === '') {
      console.warn('WordPress API returned empty response for all comments');
      return [];
    }
    
    let comments;
    try {
      comments = JSON.parse(text);
      console.log('All comments parsed:', comments);
    } catch (parseError) {
      console.error('Failed to parse all comments response as JSON:', parseError);
      console.log('Raw response:', text);
      return [];
    }
    
    const result = Array.isArray(comments) ? comments : [];
    console.log('Final all comments result:', result);
    
    // Log each comment's status for debugging
    result.forEach((comment, index) => {
      console.log(`Comment ${index + 1}:`, {
        id: comment.id,
        author: comment.author_name,
        status: comment.status,
        date: comment.date,
        content: comment.content?.rendered?.substring(0, 50) + '...'
      });
    });
    
    return result;
  } catch (error) {
    console.error('Error fetching all comments:', error);
    return [];
  }
}

// Post a new comment
export async function postComment(data) {
  try {
    const response = await fetchWordPressAPI('comments', {
      method: 'POST',
      body: JSON.stringify({
        post: data.post,
        author_name: data.author_name,
        author_email: data.author_email,
        content: data.content,
      }),
    });

    // Check if response has content
    const text = await response.text();
    if (!text || text.trim() === '') {
      console.warn('WordPress API returned empty response for comment submission');
      throw new Error('Empty response from server');
    }
    
    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error('Failed to parse comment response as JSON:', parseError);
      console.log('Raw response:', text);
      throw new Error('Invalid response from server');
    }
    
    return result;
  } catch (error) {
    console.error('Error posting comment:', error);
    
    // Handle specific error cases
    if (error.message === 'Authentication required') {
      throw new Error('WordPress requires authentication for comments. Please contact the administrator to enable anonymous commenting in WordPress Settings → Discussion.');
    }
    
    if (error.message === 'Access forbidden') {
      throw new Error('Comment posting is currently disabled. Please contact the administrator.');
    }
    
    if (error.message === 'Empty response from server') {
      throw new Error('WordPress returned an empty response. This usually means commenting is disabled or requires authentication. Please check WordPress Settings → Discussion.');
    }
    
    // Handle 401 Unauthorized specifically
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      throw new Error('WordPress requires authentication for comments. Please contact the administrator to enable anonymous commenting in WordPress Settings → Discussion → Uncheck "Users must be registered and logged in to comment".');
    }
    
    if (error.message === 'Invalid response from server') {
      throw new Error('WordPress returned an invalid response. Please try again.');
    }
    
    // For connection errors
    if (error.message.includes('Failed to fetch') || error.message.includes('ERR_CONNECTION_RESET')) {
      throw new Error('Unable to connect to WordPress. Please check your internet connection and try again.');
    }
    
    // For WordPress-specific errors
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      throw new Error('WordPress requires authentication for comments. Please contact the administrator to enable anonymous commenting in WordPress Settings → Discussion.');
    }
    
    // For other errors
    throw new Error('Unable to post comment at this time. Please try again later.');
  }
}



// Test WordPress connection from client
export async function testWordPressConnection() {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json`);
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('WordPress connection test failed:', error);
    return { success: false, error: error.message };
  }
}

// Test specific WordPress API endpoints
export async function testWordPressEndpoints() {
  const endpoints = [
    'posts',
    'categories', 
    'comments'
  ];
  
  const results = {};
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/${endpoint}`);
      results[endpoint] = {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText
      };
    } catch (error) {
      results[endpoint] = {
        error: error.message
      };
    }
  }
  
  return results;
}
