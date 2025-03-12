import { Router } from 'express';
import { createPost, getPosts, healthCheck } from '../controllers/postsController';

const router = Router();

router.get('/healthCheck', healthCheck);
router.post('/createPost', createPost);
router.get('/getPosts', getPosts);

export default router;
