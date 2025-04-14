import { ErrorRequestHandler } from 'express';
import { logger } from '@/core';
import { ServerError } from '../server-errors';

export const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof ServerError) {
    const se = err as ServerError;
    res.status(se.statusCode).json({
      error: se.name,
      message: se.message,
    });
    return;
  }

  logger.error({ err, url: req.url, method: req.method }, 'Unhandled error');
  res.status(500).json({
    error: 'InternalServerError',
    message: "Oops... something went wrong. We've been notified.",
  });
};
