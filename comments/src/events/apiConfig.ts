import axios, { AxiosInstance } from 'axios';

export const apiConfig = {
  BASE_URL: 'http://localhost:3305/api',
  ENABLE_LOGGING: false
};

export const createCommentEventsApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfig.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  api.interceptors.request.use(
    (config) => {
      if (apiConfig.ENABLE_LOGGING) {
        console.log('[API Request]', config.method?.toUpperCase(), config.url, config);
      }
      return config;
    },
    (error) => {
      if (apiConfig.ENABLE_LOGGING) {
        console.error('[API Request Error]', error);
      }
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => {
      if (apiConfig.ENABLE_LOGGING) {
        console.log('[API Response]', response.config.url, response.data);
      }
      return response;
    },
    (error) => {
      if (apiConfig.ENABLE_LOGGING) {
        console.error('[API Response Error]', error.response?.config.url, error);
      }
      return Promise.reject(error);
    }
  );

  return api;
};
