import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { TestError } from '@/core';

@injectable()
export class TodoController {
  constructor() {}

  list(req: Request, res: Response) {
    res.send('Hello, world!');
  }

  err(_req: Request, _res: Response) {
    throw new TestError('Message here!');
  }
}
