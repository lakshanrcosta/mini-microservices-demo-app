import { Router } from 'express';
import {
  createPost,
  getPosts,
  healthCheck,
  receiveEmittedEvent
} from '../controllers/postsController';

const router = Router();

router.get('/posts/healthCheck', healthCheck);
router.post('/posts/createPost', createPost);
router.get('/posts/getPosts', getPosts);
router.post('/posts/events', receiveEmittedEvent);

export default router;
