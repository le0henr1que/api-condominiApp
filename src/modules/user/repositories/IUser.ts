import { User } from '@prisma/client';

export interface IUser {
  findAllUser(): Promise<
    { id: string; username: string; email: string; role: string }[]
  >;
  findUser({
    id,
  }: {
    id: string | number;
  }): Promise<{ id: string; username: string; email: string; role: string }>;
  createUser(dataUser: any): Promise<any>;
  verifyEmail(email: string): Promise<any>;
}
