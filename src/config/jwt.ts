import { ModuleJWT } from '../types/common';
import env from './environment';

const { jwtSecret, jwtExpireIn } = env;

const jwtModule = <ModuleJWT>{
  secret: jwtSecret,
  expireIn: jwtExpireIn,
};

export { jwtModule };
