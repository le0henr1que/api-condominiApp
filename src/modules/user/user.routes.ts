import Router from 'express';
import { findAllUserController } from './useCase/find-all-users';
import { findUserController } from './useCase/find-user';
import { resolver } from '../../shered/appError';
import { createUserController } from './useCase/create-user';

const user = Router();

user.get(
  '/',

  resolver((request, response) => {
    return findAllUserController.handle(request, response);
  })
);

user.get(
  '/:id',
  resolver((request, response) => {
    return findUserController.handle(request, response);
  })
);

user.post(
  '/',
  resolver((request, response) => {
    return createUserController.handle(request, response);
  })
);

export { user };
