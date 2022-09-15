import config from '@exypress/config';
import mongoose from 'mongoose';
import logger from './logger';

const dbUrl = `mongodb://${config.DB_USER}:${config.DB_PASSWORD}@${config.DB_HOST}:27017/${config.DB_DATABASE}?authSource=admin`;

const connect = async () => {
  if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }

  mongoose
    .connect(dbUrl, { autoIndex: true })
    .then(() => logger.info(`DB 연결에 성공했습니다.`))
    .catch((error) => logger.error(`DB 연결 에러 발생 : ${error}`));
};

mongoose.connection.on('error', (error) => {
  logger.error(`DB 연결 에러 발생 : ${error}`);
});

mongoose.connection.on('disconnected', () => {
  logger.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

export default connect;
