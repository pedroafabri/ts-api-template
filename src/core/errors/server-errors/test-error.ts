import { ServerError } from '@/core';

export class TestError extends ServerError {
  constructor(msg: string) {
    super('TestError', 420, msg);
  }
}
