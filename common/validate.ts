import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import statusCodes from './messages/statusCodes';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(statusCodes.BAD_REQUEST).json({ message: errors.array()[0].msg });
};

export default validate;
