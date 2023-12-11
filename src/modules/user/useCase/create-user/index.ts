import * as Prisma from '../../repositories/implementation/ServiceUser';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const PrismaUserRepository = new Prisma.ServiceUser();

const createUserUseCase = new CreateUserUseCase(PrismaUserRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
