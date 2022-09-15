import { wrapAsync } from '@common/wrapAsync';
import { Router } from 'express';
import AuthController from './AuthController';
import { loginValidator } from './AuthValidator';

const router = Router();
const authController = new AuthController();

router.post('/login', loginValidator, wrapAsync(authController.login));

export default router;
