import { PrismaClient, User } from '@prisma/client';

import { IAuthentication } from '../IAuthentication';

export class PrismaAuthentication implements IAuthentication {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findEmail(email: string): Promise<User> {
    const userExist = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    return userExist;
  }
}
