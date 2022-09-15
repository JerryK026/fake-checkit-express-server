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
      logger.error(err);
      process.exit(1);
    });
}

startServer();
