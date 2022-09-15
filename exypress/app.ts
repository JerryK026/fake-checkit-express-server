import config from './config';
import app from './loaders/server';

import logger from './loaders/logger';
import messages from '../common/messages';

async function startServer() {
  app
    .listen(config.API_PORT, () => {
      logger.info(messages.SERVER_RUNNING(config.API_PORT));
    })
    .on('error', (err) => {
      // app 자체가 crash날 경우 cli에 로그가 뜨지 않는 버그 발생
      console.log(err);
      logger.error(err);
      process.exit(1);
    });
}

startServer();
