import * as dotenv from 'dotenv';
import messages from '../../common/messages';

type IConfig = {
  API_PORT: number;
  CORS_OPTIONS: {
    origin: string[] | '*';
    credential: boolean;
  };

  JWT_SECRET: string;
  KEY_SECRET: string;

  DB_USER: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_HOST: string;
  DB_LOGGING: boolean;
};

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
    return [...JSON.parse(origin)] as string[];
  } catch (error) {
    throw new Error(messages.ENV_CORS_ERROR);
  }
};

const config: IConfig = {
  API_PORT: Number(process.env.API_PORT) || 5000,

  CORS_OPTIONS: {
    origin: parseCorsOrigin(process.env.CORS_ORIGINS),
    credential: true,
  },

  JWT_SECRET: process.env.JWT_SECRET || '',
  KEY_SECRET: process.env.KEY_SECRET || '',

  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_DATABASE: process.env.DB_DATABASE || '',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_LOGGING: Boolean(process.env.DB_LOGGING) || false,
};

export default config;
