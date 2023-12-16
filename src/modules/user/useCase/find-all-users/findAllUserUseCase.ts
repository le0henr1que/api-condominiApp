import { IUser } from '../../repositories/IUser';

export class FindAllUserUseCase {
  constructor(public actionModule: IUser) {}

  async execute(): Promise<any> {
    const users: any = await this.actionModule.findAllUser();
    return users;
  }
}
