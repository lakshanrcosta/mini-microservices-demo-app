import { Router } from 'express';
import { healthCheck, createdEvents, getPosts } from '../controllers/queryServiceController';

const router = Router();

router.get('/query-service/healthCheck', healthCheck);
router.post('/query-service/createdEvents', createdEvents);
router.get('/query-service/getPosts', getPosts);

export default router;
