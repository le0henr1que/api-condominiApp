import { ServiceUser } from '../../repositories/implementation/ServiceUser';
import { FindUserController } from './findUserController';
import { FindUserUseCase } from './findUserUseCase';

const serviceUser = new ServiceUser();

const findUserUseCase = new FindUserUseCase(serviceUser);

const findUserController = new FindUserController(findUserUseCase);

export { findUserUseCase, findUserController };
