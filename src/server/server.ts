import express from 'express';
import { errorHandlerMiddleware } from '@/core/errors/error-handler-middleware';
import { env, logger } from '@/core';
import { RegisterRoutes } from './tsoa-generated/routes';

export function startServer() {
  const app = express();
  app.use(express.json());

  RegisterRoutes(app);

  app.use(errorHandlerMiddleware);

  app.listen(env.PORT, () => {
    logger.info(`Server listening on PORT ${env.PORT}`);
  });
}
