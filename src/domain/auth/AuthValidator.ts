import { body } from 'express-validator';

import validate from '../../../common/validate';

export const loginValidator = [
  body('email').isEmail().withMessage('email 형식이어야 합니다.'),
  body('key').notEmpty().withMessage('패스워드가 존재하지 않습니다.'),
  validate,
];
