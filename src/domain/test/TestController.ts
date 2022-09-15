import { Request, Response } from 'express';
import statusCodes from '@common/messages/statusCodes';

export const testRespose = async (req: Request, res: Response) => {
  return res.status(statusCodes.OK).json({ data: {} });
};
