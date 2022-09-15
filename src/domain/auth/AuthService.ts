import config from '@exypress/config';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import User from '../user/entity/User';

export default class AuthService {
  public async issueToken(userId: Types.ObjectId) {
    const tokenPromise = new Promise((resolve, reject) => {
      jwt.sign(
        {
          _id: userId,
        },
        config.JWT_SECRET,
        {
          expiresIn: '1d',
          issuer: 'checkit.com',
        },
        (err, token) => {
          if (err) reject(err);
          resolve(token);
        },
      );
    });
    return tokenPromise;
  }

  public async verifyKey(key: string, userKey: string) {
    return key === userKey;
  }
}
