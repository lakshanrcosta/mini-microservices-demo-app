import { Request, Response } from 'express';
import apiPostEvents from '../api/posts-service/api-posts';
import apiCommentEvents from '../api/comments-service/api-comments';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Post Events OK!');
};

export const receiveEmittedEvent = (req: Request, res: Response) => {
  apiPostEvents.post('/events', req.body);
  apiCommentEvents.post('/events', req.body);
  res.status(200).send('Event Received!');
};
