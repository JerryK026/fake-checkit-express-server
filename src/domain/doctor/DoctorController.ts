import statusCodes from '@common/messages/statusCodes';
import logger from '@exypress/loaders/logger';
import { Request, Response } from 'express';
import AuthService from '../auth/AuthService';
import DoctorService from './DoctorService';

// class에 생성하면 호출될 때마다 객체 생성
const doctorService = new DoctorService();
const authService = new AuthService();

export default class DoctorController {
  public async doctorList(req: Request, res: Response) {
    const token = req.headers['authorization']?.split(' ')[1] as string;

    await authService.verifyToken(token).catch((err) => {
      logger.error(err);
      return res.status(statusCodes.OK).json();
    });

    const doctors = await doctorService.findDoctorList();

    res.status(statusCodes.OK).json({ status: 'ok', data: { doctors } });
  }

  public async doctorInfo(req: Request, res: Response) {
    const token = req.headers['authorization']?.split(' ')[1] as string;

    await authService.verifyToken(token).catch((err) => {
      logger.error(err);
      return res.status(statusCodes.OK).json();
    });

    const doctor = await doctorService.findByDoctorId(req.query.doctor_id as string);
    return res.status(statusCodes.OK).json({ status: 'ok', data: { doctor } });
  }
}
