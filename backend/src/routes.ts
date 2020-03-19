import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  return res.send('Typescript man, é nois!');
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);


export default routes;