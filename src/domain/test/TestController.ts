import { Request, Response } from 'express';
import statusCodes from '@common/messages/statusCodes';
import { TestResponseDTO } from './entity/TestResponseDTO';

export const testRespose = async (req: Request, res: Response) => {
  const output: TestResponseDTO = {
    statusCode: 200,
    data: {},
  };
  return res.status(statusCodes.OK).json(output);
};
