import { Router } from 'express';
import { healthCheck, receiveEmittedEvent } from '../controllers/eventsController';

const router = Router();

router.get('/healthCheck', healthCheck);
router.post('/events', receiveEmittedEvent);

export default router;
