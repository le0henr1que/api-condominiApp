import { IActionModule1 } from '../IActionModule1';

export class ServiceModule1 implements IActionModule1 {
  async actionModule1(ping: string): Promise<string> {
    if (ping == 'ping') return 'pong';
  }
}
