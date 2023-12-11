import { Request, Response } from 'express';
import { FindAllUserUseCase } from './findAllUserUseCase';
import { User } from '@prisma/client';

export class FindAllUserController {
  constructor(public findAllUserUseCase: FindAllUserUseCase) {}

  async handle(
    request: Request,
    response: Response
  ): Promise<Response | Error> {
    const user: User[] = await this.findAllUserUseCase.execute();
    return response.status(200).json({ error: false, results: user });
  }
}
