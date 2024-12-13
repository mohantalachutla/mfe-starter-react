import axios from 'axios';
import packageJson from '../../package.json';
import { API_URL } from '../env';

class HttpClient {
  constructor(baseURL = '', defaultHeaders = {}) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...defaultHeaders,
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /**
   * Initialize request interceptor
   */
  initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem(packageJson.name + 'AccessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.error('Request Error: ', error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Initialize response interceptor
   */
  initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        console.error('Response Error: ', error);
        if (error.response) {
          // Handle 4xx, 5xx errors
          if (error.response.status === 401) {
            console.warn('Unauthorized! Redirecting to login...');
            window.location.href = '/login';
          }
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * GET request
   * @param {string} url - API endpoint
   * @param {object} params - Query parameters
   * @param {object} config - Optional axios request config
   */
  get(url, params = {}, config = {}) {
    return this.axiosInstance.get(url, { params, ...config });
  }

  /**
   * POST request
   * @param {string} url - API endpoint
   * @param {object} data - Request payload
   * @param {object} config - Optional axios request config
   */
  post(url, data = {}, config = {}) {
    return this.axiosInstance.post(url, data, config);
  }

  /**
   * PUT request
   * @param {string} url - API endpoint
   * @param {object} data - Request payload
   * @param {object} config - Optional axios request config
   */
  put(url, data = {}, config = {}) {
    return this.axiosInstance.put(url, data, config);
  }

  /**
   * PATCH request
   * @param {string} url - API endpoint
   * @param {object} data - Request payload
   * @param {object} config - Optional axios request config
   */
  patch(url, data = {}, config = {}) {
    return this.axiosInstance.patch(url, data, config);
  }

  /**
   * DELETE request
   * @param {string} url - API endpoint
   * @param {object} config - Optional axios request config
   */
  delete(url, config = {}) {
    return this.axiosInstance.delete(url, config);
  }

  /**
   * Cancels an ongoing request using AbortController
   * @param {AbortController} controller - Instance of AbortController
   */
  cancelRequest(controller) {
    controller.abort();
  }
}

// Singleton export of the HTTP client
const httpClient = new HttpClient(API_URL, {
  'Custom-Header': packageJson.name,
});

export default httpClient;
