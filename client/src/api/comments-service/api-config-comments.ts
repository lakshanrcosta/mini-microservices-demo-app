import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from '../api-interceptors/api-interceptors';

export const apiConfigComments = {
  BASE_URL: import.meta.env.VITE_COMMENTS_API_BASE_URL || 'http://localhost:3000',
  ENABLE_LOGGING: import.meta.env.VITE_COMMENTS_API_ENABLE_LOGGING === 'true'
};

export const createCommentsApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfigComments.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return setupInterceptors(api, apiConfigComments);
};
