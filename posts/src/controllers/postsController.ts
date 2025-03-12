import { Request, Response } from 'express';
import { randomBytes } from 'crypto';
import { Post } from '../types/posts';

const posts: { [key: string]: Post } = {};

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('OK');
};

export const createPost = (req: Request, res: Response) => {
  const id = randomBytes(6).toString('hex');
  const { title, content } = req.body;
  posts[id] = {
    id,
    title,
    content
  };
  res.status(201).send(posts[id]);
};

export const getPosts = (req: Request, res: Response) => {
  res.status(200).send(posts);
};
