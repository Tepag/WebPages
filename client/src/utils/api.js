// API utility functions for making requests to the backend
// In development: proxied through Vite to http://localhost:3001
// In production: uses Vercel serverless functions at /api/*

const API_BASE = '/api';

/**
 * Fetch wrapper with error handling
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Parsed JSON response
 */
async function fetchAPI(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Test API connection
 * @returns {Promise<object>} - Hello message
 */
export async function testConnection() {
  return fetchAPI('/hello');
}

/**
 * Get all data or filtered by type
 * @param {string} [type] - Optional filter by type
 * @returns {Promise<object>} - Data array
 */
export async function getData(type = null) {
  const query = type ? `?type=${encodeURIComponent(type)}` : '';
  return fetchAPI(`/data${query}`);
}

/**
 * Create new data
 * @param {object} data - Data to create
 * @returns {Promise<object>} - Created data
 */
export async function createData(data) {
  return fetchAPI('/data', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Update existing data
 * @param {object} data - Data to update
 * @returns {Promise<object>} - Update confirmation
 */
export async function updateData(data) {
  return fetchAPI('/data', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Delete data by ID
 * @param {number|string} id - ID of data to delete
 * @returns {Promise<object>} - Delete confirmation
 */
export async function deleteData(id) {
  return fetchAPI(`/data?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
  });
}

