import { Router } from 'express';
import { createCommentByPostId, getComments, healthCheck } from '../controllers/commentsController';

const router = Router();

router.get('/healthCheck', healthCheck);
router.get('/posts/:postId/comments', getComments);
router.post('/posts/:postId/comments', createCommentByPostId);

export default router;
