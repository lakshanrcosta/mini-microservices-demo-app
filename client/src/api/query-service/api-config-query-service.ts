import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from '../api-interceptors/api-interceptors';

export const apiConfig = {
  BASE_URL:
    import.meta.env.VITE_QUERY_SERVICE_API_BASE_URL || 'http://localhost:3310/api/query-service',
  ENABLE_LOGGING: import.meta.env.VITE_QUERY_SERVICE_API_ENABLE_LOGGING === 'true'
};

export const createQueryServiceApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfig.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return setupInterceptors(api, apiConfig);
};
