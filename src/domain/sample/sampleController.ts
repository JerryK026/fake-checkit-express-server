import statusCodes from '../../../common/messages/statusCodes';
import { Request, Response } from 'express';
import SampleService from './sampleService';

const sampleService = new SampleService();

export const getSample = async (req: Request, res: Response) => {
  const data = await sampleService.getSample();
  return res.status(statusCodes.OK).json(data);
};

export const getError = async (req: Request, res: Response) => {
  let e;
  e = await setTimeout(() => {
    throw new Error('my error');
  }, 0);
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: e });
};

export const validateSample = async (req: Request, res: Response) => {
  return res.status(statusCodes.OK).json(req.body);
};
