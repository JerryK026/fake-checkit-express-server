import statusCodes from '@common/messages/statusCodes';
import logger from '@exypress/loaders/logger';
import { Request, Response } from 'express';
import UserService from '../user/UserService';
import AuthService from './AuthService';

const userService = new UserService();
const authService = new AuthService();

export default class AuthController {
  public async login(req: Request, res: Response) {
    const { email, key } = req.body;

    const user = await userService.findByEmail(email);
    if (!user) {
      return res.status(statusCodes.OK).json({ status: 'no_user' });
    }

    const isVerified = await authService.verifyKey(key, user?.key as string);
    if (!isVerified) {
      return res.status(statusCodes.OK).json({ status: 'no_user' });
    }

    const token = await authService.issueToken(user._id).catch((err) => {
      throw new Error('nok');
    });

    return res.status(statusCodes.OK).json({ status: 'ok', token });
  }
}
