import { Router } from 'express';

import UserController from './app/controllers/UserController';
// const TaskController = require('./controllers/TaskController');
// const AppController = require('./controllers/AppController');
// const authMiddleware = require('./middlewares/auth.js');

const routes = Router();

routes.get('/', (req, res) => res.send('Hello World!'));

//routes.use(authMiddleware);

routes.post('/register', UserController.store);

routes.post('/authenticate', UserController.auth);

// routes.get('/tasks', TaskController.index);

// routes.get('/tasks/:id', TaskController.show);

// routes.post('/tasks', TaskController.store);

// routes.put('/tasks/:id', TaskController.update);

// routes.delete('/tasks/:id', TaskController.destroy);

export default routes;
