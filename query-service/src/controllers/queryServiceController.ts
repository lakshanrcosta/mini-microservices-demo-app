import { Request, Response } from 'express';
import { PostCreatedEventDto } from '../types/posts';
import { posts } from '../models/posts';
import { CommentCreatedEventDto } from '../types/comments';

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send('Posts OK!');
};

export const createdEvents = (req: Request, res: Response) => {
  const { type, data } = req.body as PostCreatedEventDto | CommentCreatedEventDto;

  if (type === 'PostCreated') {
    posts[data.id] = { id: data.id, title: data.title, comments: [] };
    res.status(200).send('Post created event received!');
  }

  if (type === 'CommentCreated') {
    const post = posts[data.postId];
    post.comments.push({ id: data.id, postId: data.postId, content: data.content });
    res.status(200).send('Comment created event received!');
  }
};

export const getPosts = (req: Request, res: Response) => {
  res.status(200).send(posts);
};
