import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import { Comments } from '../types/types';
import { emitCommentCreatedEvent } from '../events/commentsEventsApi';

const commentsByPostId: Comments = {};

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Comments OK!');
};

export const getComments = (req: Request, res: Response) => {
  const comments = commentsByPostId[req.params.postId] || [];
  res.status(200).send(comments);
};

export const createCommentByPostId = async (req: Request, res: Response) => {
  const id = randomBytes(6).toString('hex');
  const postId = req.params.postId;
  const { content } = req.body;
  const comments = commentsByPostId[postId] || [];
  comments.push({ id, postId, content });

  try {
    await emitCommentCreatedEvent({
      type: 'CommentCreated',
      data: {
        id,
        postId,
        content
      }
    });
  } catch (error) {
    console.error('Failed to emit comment created event:', error);
  }

  commentsByPostId[postId] = comments;

  res.status(201).send(comments);
};

export const getCommentsByPostId = (req: Request, res: Response) => {
  const { postId } = req.params;
  const comments = commentsByPostId[postId] || [];

  res.status(200).send(comments);
};

export const receiveEmittedEvent = (req: Request, res: Response) => {
  console.log('Received events:', req.body.type);
  res.status(200).send({ status: 'event ok' });
};
