import { BaseHttpError } from '@common/error/HttpErrors';
import statusCodes from '@common/messages/statusCodes';
import { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import AuthService from '../auth/AuthService';
import { UserRegisterDTO } from './entity/UserRegisterDTO';
import { UserUnregisterDTO } from './entity/UserUnregisterDTO';
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

    const token = (await authService.issueToken(newUser.id).catch((err) => {
      throw new BaseHttpError(err.message, statusCodes.OK, 'nok');
    })) as string;

    const output: UserRegisterDTO = {
      statusCode: statusCodes.OK,
      json: {
        status: 'ok',
        data: {
          token,
        },
      },
    };

    return res.status(statusCodes.OK).json(output);
  }

  public async unregisterUser(req: Request, res: Response) {
    const token = req.headers['authorization']?.split(' ')[1] as string;

    const decoded = (await authService.verifyToken(token).catch((err) => {
      throw new BaseHttpError(err.message, statusCodes.OK, 'nok');
    })) as JwtPayload;

    await userService.deleteUser(decoded._id);

    const output: UserUnregisterDTO = {
      statusCode: statusCodes.OK,
      json: {
        status: 'ok',
      },
    };

    return res.status(statusCodes.OK).json(output);
  }
}
