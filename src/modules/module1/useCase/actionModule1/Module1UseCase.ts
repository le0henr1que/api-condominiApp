import { IActionModule1 } from '../../repositories/actionModule1/IActionModule1';

export class Module1UseCase {
  constructor(public actionModule: IActionModule1) {}

  async execute(ping: string): Promise<string> {
    const pong: string = await this.actionModule.actionModule1(ping);
    return pong;
  }
}
