import { Request, Response } from 'express';
import { emitPostEvent } from '../api/posts-service/api-posts';
import { emitCommentEvent } from '../api/comments-service/api-comments';
import { emitQueryServiceEvent } from '../api/query-service/api-query';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Post Events OK!');
};

export const receiveEmittedEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    await emitPostEvent(req.body);
  } catch (error) {
    console.error('Error emitting post event:', error);
    res.status(500).send('Error emitting post event');
  }

  try {
    await emitCommentEvent(req.body);
  } catch (error) {
    console.error('Error emitting comment event:', error);
    res.status(500).send('Error emitting comment event');
  }

  try {
    await emitQueryServiceEvent(req.body);
  } catch (error) {
    console.error('Error emitting query service event:', error);
    res.status(500).send('Error emitting query service event');
  }

  res.status(200).send('Event Received!');
};
