import { CommentCreatedEvent } from '../../types/commentEvents';
import { createCommentEventApiInstance } from './api-config-comments';

const apiCommentEvents = createCommentEventApiInstance();

export const emitCommentEvent = (event: CommentCreatedEvent) => {
  return apiCommentEvents.post('/events', event);
};

export default apiCommentEvents;
