import express from 'express';
import sampleRouter from './domain/sample/sampleRouter';

export const routers = (app: express.Application) => {
  app.use('/test', sampleRouter);
};

export default routers;
