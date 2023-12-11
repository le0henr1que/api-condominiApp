import { Prisma, PrismaClient } from '@prisma/client';
import { IUser } from '../IUser';

export class ServiceUser implements IUser {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findUser({ id }: { id: string }): Promise<{
    id: string;
    email: string;
    username: string;
    role: string;
  }> {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        password: false,
        createdAt: false,
        updatedAt: false,
      },
    });
    return user;
  }
  async findAllUser(): Promise<
    Array<{
      id: string;
      username: string;
      email: string;
      role: string;
    }>
  > {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        password: false,
        createdAt: false,
        updatedAt: false,
      },
    });
    return users;
  }
  async createUser(dataUser: any): Promise<any> {
    const { username, email, password, role } = dataUser;

    return await this.prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
        role: role,
      },
    });
  }
  async verifyEmail(email: string): Promise<any> {
    return await this.prisma.user.findMany({
      where: {
        email: email,
      },
    });
  }
}
