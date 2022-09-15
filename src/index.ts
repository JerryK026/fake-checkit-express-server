import express from 'express';
import TestRouter from './domain/test/TestRouter';
import DoctorRouter from './domain/doctor/DoctorRouter';
import UserRouter from './domain/user/UserRouter';
import AuthRouter from './domain/auth/AuthRouter';

export const routers = (app: express.Application) => {
  app.use('/v3/test', TestRouter);
  app.use('/v3/doctor', DoctorRouter);
  app.use('/v3/user', UserRouter);
  app.use('/v3/auth', AuthRouter);
};

export default routers;
