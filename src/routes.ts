import { Router } from 'express';

import authMiddleware from '@middlewares/auth';
import UserController from '@controllers/UserController';
import TaskController from '@controllers/TaskController';
import SessionController from '@controllers/SessionController';

const routes = Router();

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/tasks', TaskController.index);

routes.post('/tasks', TaskController.store);

routes.delete('/tasks/:id', TaskController.destroy);

export default routes;
