import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { jwtModule } from '../../config/jwt';

const { secret } = jwtModule;
export const authorize = (allowedRoles: string[]) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(401).json({ message: 'Token não fornecido' });
    }

    try {
      const [, onlyToken] = request.headers.authorization.split(' ');

      const decoded: any = verify(onlyToken, secret);

      const userRoles = decoded.role;

      const hasPermission = allowedRoles.some((role) =>
        userRoles.includes(role),
      );

      if (!hasPermission) {
        return response
          .status(403)
          .json({ message: 'Sem permissão para acessar este recurso' });
      }

      next();
    } catch (error) {
      return response.status(401).json({ message: 'Token inválido' });
    }
  };
};
