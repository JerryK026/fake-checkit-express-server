import statusCodes from '../messages/statusCodes';
import { Error500 } from './HttpErrors';

export default class DBError extends Error500 {
  constructor(name: string, statusCode = statusCodes.INTERNAL_SERVER_ERROR, description = 'DB Connection Error') {
    super(name, statusCode, description);
  }
}
