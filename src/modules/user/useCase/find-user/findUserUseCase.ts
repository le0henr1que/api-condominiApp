import { User } from '@prisma/client';
import { IUser } from '../../repositories/IUser';
import { HttpError } from '../../../../shered/appError';

export class FindUserUseCase {
  constructor(public serviceUser: IUser) {
    this.serviceUser = serviceUser;
  }

  async execute({ id }: any): Promise<any> {
    const user: any = await this.serviceUser.findUser({ id });
    return user;
  }
}
