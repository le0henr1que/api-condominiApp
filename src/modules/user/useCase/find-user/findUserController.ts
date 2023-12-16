import { Request, Response } from 'express';
import { FindUserUseCase } from './findUserUseCase';
import { User } from '@prisma/client';

export class FindUserController {
  constructor(public findUserUseCase: FindUserUseCase) {}

  async handle(
    request: Request,
    response: Response,
  ): Promise<Response | Error> {
    const { id } = request.params;
    const user: User = await this.findUserUseCase.execute({ id });
    return response.status(200).json({ error: false, result: user });
  }
}
