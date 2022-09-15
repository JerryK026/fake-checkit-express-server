import DBError from '@common/error/DBError';
import { BaseHttpError } from '@common/error/HttpErrors';
import statusCodes from '@common/messages/statusCodes';
import { Types } from 'mongoose';
import User from './entity/User';

export default class UserService {
  public async findByEmail(email: string) {
    return await User.findOne({ email }).catch((err) => {
      throw new BaseHttpError(err.message, statusCodes.OK, 'nok');
    });
  }

  // 비밀번호 암호화 추가
  public async registerUser(name: string, email: string, key: string) {
    return await User.create({ email, key, name }).catch((err) => {
      throw new BaseHttpError(err.message, statusCodes.OK, 'nok');
    });
  }

  public async deleteUser(_id: Types.ObjectId) {
    return await User.findByIdAndDelete({ _id });
  }
}
