import { Router } from 'express';
import {
  createCommentByPostId,
  getComments,
  receiveEmittedEvent,
  healthCheck
} from '../controllers/commentsController';

const router = Router();

router.get('/healthCheck', healthCheck);
router.get('/posts/:postId/comments', getComments);
router.post('/posts/:postId/comments', createCommentByPostId);
router.post('/events', receiveEmittedEvent);

export default router;
