import express from 'express';
import { errorHandlerMiddleware } from '@/core/errors/error-handler-middleware';
import { env, logger } from '@/core';
import { todoRouter } from '@/domains/todo';

export function startServer() {
  const app = express();
  app.use(express.json());

  // Domain routers
  app.use('/todo', todoRouter);

  app.use(errorHandlerMiddleware);

  app.listen(env.PORT, () => {
    logger.info(`Server listening on PORT ${env.PORT}`);
  });
}
