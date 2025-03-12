import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import { Comments } from '../types/types';

const commentsByPostId: Comments = {};

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Comments OK!');
};

export const getComments = (req: Request, res: Response) => {
  const comments = commentsByPostId[req.params.postId] || [];
  res.status(200).send(comments);
};

export const createCommentByPostId = (req: Request, res: Response) => {
  const id = randomBytes(6).toString('hex');
  const postId = req.params.postId;
  const { content } = req.body;
  const comments = commentsByPostId[postId] || [];
  comments.push({ id, postId, content });
  commentsByPostId[postId] = comments;

  res.status(201).send(comments);
};

export const getCommentsByPostId = (req: Request, res: Response) => {
  const { postId } = req.params;
  const comments = commentsByPostId[postId] || [];

  res.status(200).send(comments);
};
