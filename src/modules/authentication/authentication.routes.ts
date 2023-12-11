import Router from 'express';

import { resolver } from '../../shered/appError';
import { loginController } from './use-cases/login';

const authentication = Router();

authentication.post(
  '/',
  resolver((request, response) => {
    return loginController.handle(request, response);
  })
);

export { authentication };
