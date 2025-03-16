import { CommentCreatedEvent } from '../../types/commentEvents';
import { createCommentEventApiInstance } from './api-config-comments';

const apiCommentEvents = createCommentEventApiInstance();

export const createComment = (event: CommentCreatedEvent) => {
  return apiCommentEvents.post('/events', event);
};

export default apiCommentEvents;
