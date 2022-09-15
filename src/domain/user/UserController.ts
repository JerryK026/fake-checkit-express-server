import { BaseHttpError } from '@common/error/HttpErrors';
import statusCodes from '@common/messages/statusCodes';
import { Request, Response } from 'express';
import AuthService from '../auth/AuthService';
import UserService from './UserService';

const userService = new UserService();
const authService = new AuthService();

export default class UserController {
  public async registerUser(req: Request, res: Response) {
    const { name, email, key } = req.body;

    const isDuplicate = await userService.findByEmail(email);
    if (isDuplicate) {
      return res.status(statusCodes.OK).json({ status: 'user_duplicate' });
    }
    const newUser = await userService.registerUser(name, email, key);

    const token = await authService.issueToken(newUser.id).catch((err) => {
      throw new BaseHttpError(err.message, statusCodes.OK, 'nok');
    });

    return res.status(statusCodes.OK).json({ status: 'ok', token });
  }
}
