import { PostCreatedEventDto } from '../types/postEvents';
import { createPostEventsApiInstance } from './apiConfig';

const apiPostEvents = createPostEventsApiInstance();

export const emitPostCreatedEvent = (dto: PostCreatedEventDto) => {
  return apiPostEvents.post('/events', dto);
};

export default apiPostEvents;
