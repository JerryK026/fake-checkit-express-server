import config from '@exypress/config';
import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import crypto from 'crypto';

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

  public async verifyToken(token: string) {
    const tokenPromise = new Promise((resolve, reject) => {
      jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });

    return tokenPromise;
  }

  public async verifyKey(key: string, dbKey: string) {
    const encrypted = crypto.createHmac('sha1', config.KEY_SECRET).update(key).digest('base64');
    return encrypted === dbKey;
  }

  public hashingKey(key: string) {
    return crypto.createHmac('sha1', config.KEY_SECRET).update(key).digest('base64');
  }
}
