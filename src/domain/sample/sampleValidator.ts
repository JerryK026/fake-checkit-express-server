import { body, param } from 'express-validator';

import validate from '../../../common/validate';

export const userValidate = [
  body('name').trim().isLength({ min: 2 }).withMessage('name have to be at least 2 characters'),
  body('email').isEmail().withMessage('email have to follow email form'),
  param('id').isInt().withMessage('Id have to be an int'),
  validate,
];
