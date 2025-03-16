import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from '../api-interceptors/api-interceptors';

export const apiConfig = {
  BASE_URL: 'http://localhost:3000/api/posts',
  ENABLE_LOGGING: false
};

export const createPostEventsApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfig.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return setupInterceptors(api, apiConfig);
};
