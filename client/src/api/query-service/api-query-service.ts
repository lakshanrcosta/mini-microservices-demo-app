import { createQueryServiceApiInstance } from './api-config-query-service';

const apiPosts = createQueryServiceApiInstance();

export const getPosts = () => {
  return apiPosts.get('/getPosts');
};

export default apiPosts;
