import { Response, Request } from 'express';
import { HttpError } from '../../../../shered/appError';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, password, role } = request.body;

    if (!username) {
      throw new HttpError(
        "Propriedade 'name' não encontrada no corpo da requisição",
        404
      );
    }

    const userArray: any = {
      username,
      email,
      password,
      role,
    };

    const user = await this.createUserUseCase.execute(userArray);
    delete user.password;
    return response.status(201).json({ error: false, user });
  }
}
