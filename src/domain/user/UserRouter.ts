import { Router } from 'express';
import UserController from './UserController';
import { registerValidate } from './UserValidator';

const router = Router();
const userController = new UserController();

router.post('/reg', registerValidate, userController.registerUser);
router.post('/unreg', userController.unRegisterUser);

export default router;
