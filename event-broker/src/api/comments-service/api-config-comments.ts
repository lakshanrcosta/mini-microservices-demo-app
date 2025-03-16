import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from '../api-interceptors/api-interceptors';

export const apiConfigComments = {
  BASE_URL: 'http://localhost:3300/api/comments',
  ENABLE_LOGGING: false
};

export const createCommentEventApiInstance = (): AxiosInstance => {
  const api = axios.create({
    baseURL: apiConfigComments.BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return setupInterceptors(api, apiConfigComments);
};
