import { CommentCreatedEventDto } from '../types/commentEvents';
import { createCommentEventsApiInstance } from './apiConfig';

const apiPostEvents = createCommentEventsApiInstance();

export const emitCommentCreatedEvent = (dto: CommentCreatedEventDto) => {
  return apiPostEvents.post('/events', dto);
};

export default apiPostEvents;
