import { IAuthentication } from '../../repositories/IAuthentication';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { jwtModule } from '../../../../config/jwt';
import { HttpError } from '../../../../shered/appError';

export class LoginUseCase {
  constructor(private authenticationRepository: IAuthentication) {}

  async execute(dataUser: any) {
    const { password, email, name } = dataUser;

    const searchUser = await this.authenticationRepository.findEmail(email);

    if (!searchUser) {
      throw new HttpError(
        'Ooops! Parece que suas credenciais de login estão incorretas. Por favor, verifique se digitou corretamente ou redefina sua senha se tiver esquecido.',
        404,
      );
    }

    if (!(await compare(password, searchUser.password))) {
      throw new HttpError(
        'Ooops! Parece que suas credenciais de login estão incorretas. Por favor, verifique se digitou corretamente ou redefina sua senha se tiver esquecido.',
        401,
      );
    }

    const user: any = {
      username: searchUser.username,
      email: searchUser.email,
      token: sign(
        { id: searchUser.id, role: searchUser.role },
        jwtModule.secret,
        {
          expiresIn: jwtModule.expireIn,
        },
      ),
    };

    return user;
  }
}
