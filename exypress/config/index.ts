import * as dotenv from 'dotenv';
import messages from '../../common/messages';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error(messages.ENV_NOT_FOUND_ERROR);
}

const parseCorsOrigin = (origin: string | undefined) => {
  if (!origin) {
    return '*';
  }

  try {
    return [...JSON.parse(origin)];
  } catch (error) {
    throw new Error(messages.ENV_CORS_ERROR);
  }
};

export default {
  port: Number(process.env.PORT),

  corsOptions: {
    origin: parseCorsOrigin(process.env.corsOrigin),
    credential: true,
  },

  jwtSecret: process.env.JWT_SECRET,
};
