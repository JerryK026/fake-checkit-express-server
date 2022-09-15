import statusCodes from '@common/messages/statusCodes';
import { Request, Response } from 'express';
import DoctorService from './DoctorService';

// class에 생성하면 호출될 때마다 객체 생성
const doctorService = new DoctorService();

export default class DoctorController {
  public async doctorList(req: Request, res: Response) {
    const data = await doctorService.findDoctorList();
    return res.status(statusCodes.OK).json(data);
  }

  public doctorInfo() {}
}
