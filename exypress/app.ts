import config from './config';
import app from './loaders/server';

import logger from './loaders/logger';
import messages from '../common/messages';
import { createServer } from 'http';

async function startServer() {
  const server = createServer(app);

  server
    .listen(config.port, () => {
      logger.info(messages.SERVER_RUNNING(config.port));
    })
    .on('error', (err) => {
      logger.error(err);
      process.exit(1);
    });
}

startServer();
