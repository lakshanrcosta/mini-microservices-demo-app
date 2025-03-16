import { PostCreatedEvent } from '../../types/postEvents';
import { createPostEventsApiInstance } from './api-config-posts';

const apiPostEvents = createPostEventsApiInstance();

export const emitPostEvent = (event: PostCreatedEvent) => {
  return apiPostEvents.post('/events', event);
};

export default apiPostEvents;
