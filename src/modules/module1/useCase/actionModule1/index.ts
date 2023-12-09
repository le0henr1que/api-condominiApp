import { ServiceModule1 } from '../../repositories/actionModule1/implementation/ServiceModule1';
import { Module1Controller } from './Module1Controller';
import { Module1UseCase } from './Module1UseCase';

const serviceModule = new ServiceModule1();

const module1UseCase = new Module1UseCase(serviceModule);

const module1Controller = new Module1Controller(module1UseCase);

export { module1UseCase, module1Controller };
