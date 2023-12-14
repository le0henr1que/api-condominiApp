import { ServiceUser } from '../../repositories/implementation/ServiceUser';
import { FindAllUserController } from './findAllUserController';
import { FindAllUserUseCase } from './findAllUserUseCase';

const serviceModule = new ServiceUser();

const findAllUserUseCase = new FindAllUserUseCase(serviceModule);

const findAllUserController = new FindAllUserController(findAllUserUseCase);

export { findAllUserUseCase, findAllUserController };
