import { wrapAsync } from '@common/wrapAsync';
import { Router } from 'express';
import UserController from './UserController';
import { registerValidate } from './UserValidator';

const router = Router();
const userController = new UserController();

router.post('/reg', registerValidate, wrapAsync(userController.registerUser));
router.post('/unreg', wrapAsync(userController.unregisterUser));

export default router;
