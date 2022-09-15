import { BaseHttpError } from '@common/error/HttpErrors';
import statusCodes from '@common/messages/statusCodes';
import { Types } from 'mongoose';
import Std from './entity/Std';

export default class StdService {
  public async createNewStd(doctor_id: Types.ObjectId, address: string, address_code: string, store_address: string) {
    return await Std.create({ doctor_id, address, address_code, store_address });
  }
}
