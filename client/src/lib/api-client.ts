
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = '/api';
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      // Check if response is JSON
      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      
      if (!isJson) {
        // If not JSON, get text to see what we got
        let text = '';
        let preview = '';
        
        try {
          text = await response.text();
          preview = text.length > 0 ? text.substring(0, 200) : '(empty response)';
        } catch (textError) {
          preview = '(unable to read response body)';
        }
        
        const errorInfo = {
          status: response.status,
          statusText: response.statusText,
          contentType: contentType || '(not set)',
          url: `${this.baseUrl}${endpoint}`,
          preview: preview
        };
        
        console.error('API returned non-JSON response:', errorInfo);
        
        // Provide more specific error messages
        if (response.status === 404) {
          // Extract just the path without query string for the error message
          const pathOnly = endpoint.split('?')[0];
          return {
            success: false,
            error: `API endpoint not found: ${this.baseUrl}${pathOnly}. Make sure the route exists at src/api${pathOnly}/route.ts. The route may need a server restart to be recognized.`,
          };
        }
        
        if (response.status >= 500) {
          return {
            success: false,
            error: `Server error (${response.status}): ${response.statusText}`,
          };
        }
        
        return {
          success: false,
          error: `Unexpected response (${response.status}): Expected JSON but received ${contentType || 'unknown content type'}`,
        };
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      // Enhanced error logging
      const errorMessage = error instanceof Error ? error.message : String(error);
      const errorDetails = {
        message: errorMessage,
        name: error instanceof Error ? error.name : typeof error,
        endpoint: `${this.baseUrl}${endpoint}`,
        type: error instanceof TypeError ? 'TypeError' : error instanceof SyntaxError ? 'SyntaxError' : 'Other'
      };
      
      console.error('API Client Error:', errorDetails, error);
      
      // Handle JSON parsing errors specifically
      if (error instanceof SyntaxError && errorMessage.includes('JSON')) {
        return {
          success: false,
          error: `Invalid JSON response from ${this.baseUrl}${endpoint}. The endpoint may not exist or may be returning HTML.`,
        };
      }
      
      // Handle network errors
      if (error instanceof TypeError && errorMessage.includes('fetch')) {
        return {
          success: false,
          error: `Network error: Unable to reach ${this.baseUrl}${endpoint}. Make sure the server is running.`,
        };
      }
      
      return {
        success: false,
        error: errorMessage || 'Unknown error occurred',
      };
    }
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    const queryString = params
      ? '?' + new URLSearchParams(params).toString()
      : '';
    
    return this.request<T>(`${endpoint}${queryString}`, {
      method: 'GET',
    });
  }

  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

export const apiClient = new ApiClient();
export default apiClient;
