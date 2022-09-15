import statusCodes from '@common/messages/statusCodes';
import logger from '@exypress/loaders/logger';
import { Request, Response } from 'express';
import StdService from './StdService';

const stdService = new StdService();

export default class StdController {
  public async stdRegister(req: Request, res: Response) {
    const { doctor_id, address, address_code, store_address } = req.body;
    await stdService.createNewStd(doctor_id, address, address_code, store_address).catch((err) => {
      logger.error(err);
      return res.status(statusCodes.OK).json({ stats: 'nok', message: '검사 신청에 실패했습니다.' });
    });

    return res.status(statusCodes.OK).json({ status: 'ok' });
  }
}
