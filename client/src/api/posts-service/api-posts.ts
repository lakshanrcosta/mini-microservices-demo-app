import { PostDto } from '../../types/post-types/post-dto-types';
import { createPostsApiInstance } from './api-config-posts';

const apiPosts = createPostsApiInstance();

export const createPost = (dto: PostDto) => {
  return apiPosts.post('/createPost', dto);
};

export const getPosts = () => {
  return apiPosts.get('/getPosts');
};

export default apiPosts;
