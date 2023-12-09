import Router from 'express';
import { module1Controller } from './useCase/actionModule1';

const module1 = Router();

module1.post('/', (request, response) => {
  return module1Controller.handle(request, response);
});

export { module1 };
