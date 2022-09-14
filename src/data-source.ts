import logger from '@exypress/loaders/logger';
import config from 'exypress/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './domain/user/entity/User';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  port: 27017,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  synchronize: true,
  logging: !!config.DB_LOGGING,
  entities: [User],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize().catch((error) => logger.error(error));
