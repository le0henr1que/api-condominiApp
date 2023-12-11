import { IUser } from '../../repositories/IUser';
import { hash } from 'bcryptjs';
import { HttpError } from '../../../../shered/appError';

export class CreateUserUseCase {
  constructor(private createUserRepository: IUser) {}

  async execute(dataUser: any) {
    const { email, password, username, role } = dataUser;

    dataUser.password = await hash(password, 8);

    const findEmail = await this.createUserRepository.verifyEmail(email);

    if (findEmail.length >= 1) {
      throw new HttpError('Usuário já existente', 400);
    }

    return await this.createUserRepository.createUser(dataUser);
  }
}
