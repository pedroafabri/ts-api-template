import { Router } from 'express';
import { container } from 'tsyringe';
import { TodoController } from './todo.controller';
import { wrapRoute } from '@/core/utils';

export const todoRouter = Router();
const controller = container.resolve(TodoController);

todoRouter.get('/', wrapRoute(controller.list));
todoRouter.get('/err', wrapRoute(controller.err));
