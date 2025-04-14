import { Request, Response, NextFunction, RequestHandler } from 'express';

type HandlerFn = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

export const wrapRoute =
  (fn: HandlerFn): RequestHandler =>
  (req, res, next) =>
    fn(req, res, next);
