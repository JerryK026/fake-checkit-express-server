import { Router } from 'express';
import { testRespose } from './TestController';

const router = Router();

router.get('/', testRespose);

export default router;
