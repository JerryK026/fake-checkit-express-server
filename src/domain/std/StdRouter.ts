import { wrapAsync } from '@common/wrapAsync';
import { Router } from 'express';
import StdController from './StdController';

const router = Router();
const stdController = new StdController();
router.post('/reg', wrapAsync(stdController.stdRegister));

export default router;
