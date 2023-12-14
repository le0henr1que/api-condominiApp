import * as Prisma from '../../repositories/implementation/ServiceAuthentication';
import { LoginController } from './loginController';
import { LoginUseCase } from './loginUseCase';

const PrismaUserRepositoryAuthentication = new Prisma.PrismaAuthentication();

const loginUseCase = new LoginUseCase(PrismaUserRepositoryAuthentication);

const loginController = new LoginController(loginUseCase);

export { loginUseCase, loginController };
