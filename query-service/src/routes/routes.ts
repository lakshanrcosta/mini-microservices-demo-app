import { Router } from 'express';
import { healthCheck } from '../controllers/queryServiceController';

const router = Router();

router.get('/query-service/healthCheck', healthCheck);

export default router;
