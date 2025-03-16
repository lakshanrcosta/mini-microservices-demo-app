import { CommentCreatedEvent } from '../../types/commentEvents';
import { PostCreatedEvent } from '../../types/postEvents';
import { createPostEventsApiInstance } from './api-config-query-service';

const apiQueryServiceEvents = createPostEventsApiInstance();

export const emitQueryServiceEvent = (event: PostCreatedEvent | CommentCreatedEvent) => {
  return apiQueryServiceEvents.post('/createdEvents', event);
};

export default apiQueryServiceEvents;
