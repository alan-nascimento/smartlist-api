const express = require('express');

const routes = express.Router();
const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');
const AppController = require('./controllers/AppController');
const authMiddleware = require('./middlewares/auth.js');

//routes.use(authMiddleware);

//routes.get('/ok', AppController.ok);

routes.post('/register', UserController.store);
routes.post('/authenticate', UserController.auth);

routes.get('/tasks', TaskController.index);
routes.get('/tasks/:id', TaskController.show);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.destroy);

module.exports = routes;
 