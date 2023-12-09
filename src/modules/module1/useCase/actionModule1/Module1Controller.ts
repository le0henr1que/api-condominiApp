import { Request, Response } from 'express';
import { Module1UseCase } from './Module1UseCase';

export class Module1Controller {
  constructor(public module1UseCase: Module1UseCase) {}

  async handle(
    request: Request,
    response: Response,
  ): Promise<Response | Error> {
    const { ping } = request.body;
    const pong: string = await this.module1UseCase.execute(ping);
    return response.status(200).json({ error: false, message: pong });
  }
}
