import * as express from 'express';
import userRouter from './users'

function routerApi(app: express.Application) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
}

export default routerApi;