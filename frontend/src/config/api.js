/**
 * API configuration
 * 
 * This file centralizes all API endpoint configurations to make it easier to:
 * 1. Change the base URL when deploying to different environments
 * 2. Keep all API paths consistent throughout the application
 * 3. Simplify updates when API endpoints change
 */

// Determine the API base URL based on environment
const getBaseUrl = () => {
  // When in development, use localhost
  if (import.meta.env.DEV) {
    return 'http://localhost:5001';
  }
  
  // When in production, use relative URL (assumes API is on same domain)
  // or override with environment variable if specified
  return import.meta.env.VITE_API_URL || '';
};

// Chat service URL
const getChatServiceUrl = () => {
  if (import.meta.env.DEV) {
    return 'http://127.0.0.1:8000';
  }
  
  return import.meta.env.VITE_CHAT_SERVICE_URL || '';
};

const API = {
  baseUrl: getBaseUrl(),
  chatServiceUrl: getChatServiceUrl(),
  endpoints: {
    posts: '/api/posts',
    comments: '/api/comments',
    users: '/api/users',
    auth: '/api/auth',
    chat: {
      ask: '/ask'
    }
  },
  
  // Helper method to get full URL for an endpoint
  url: (endpoint) => `${API.baseUrl}${endpoint}`,
  chatUrl: (endpoint) => `${API.chatServiceUrl}${endpoint}`
};

export default API;