import { CommentDto } from '../../types/comment-types/comment-dto-types';
import { createCommentsApiInstance } from './api-config-comments';

const apiComments = createCommentsApiInstance();

export const createComment = (postId: string, dto: CommentDto) => {
  return apiComments.post(`/posts/${postId}/comments`, dto);
};

export const getComments = (postId: string) => {
  return apiComments.get(`/posts/${postId}/comments`);
};

export default apiComments;
