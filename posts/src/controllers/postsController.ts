import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import { Post } from '../types/posts';
import { emitPostCreatedEvent } from '../events/postEventsApi';

const posts: { [key: string]: Post } = {};

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Posts OK!');
};

export const createPost = async (req: Request, res: Response) => {
  const id = randomBytes(6).toString('hex');
  const { title, content } = req.body;
  posts[id] = {
    id,
    title,
    content
  };

  try {
    await emitPostCreatedEvent({
      type: 'PostCreated',
      data: {
        id,
        title,
        content
      }
    });
  } catch (error) {
    console.error('Failed to emit post created event:', error);
  }

  res.status(201).send(posts[id]);
};

export const getPosts = (req: Request, res: Response) => {
  res.status(200).send(posts);
};

export const receiveEmittedEvent = (req: Request, res: Response) => {
  console.log('Received events:', req.body.type);
  res.status(200).send({ status: 'event ok' });
};
