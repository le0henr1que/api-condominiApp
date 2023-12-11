import { Request, Response } from 'express';

import { LoginUseCase } from './loginUseCase';

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const dataUser: any = {
      email,
      password,
    };
    const user = await this.loginUseCase.execute(dataUser);

    return response.status(200).send({ error: false, ...user });
  }
}
