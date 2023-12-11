import { User } from '@prisma/client';

export interface IAuthentication {
  findEmail(email: string): Promise<User>;
}
