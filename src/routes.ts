import { ROLES } from './enums/roles';
import authMiddleware from './middlewares/authentications';
import { authorize } from './middlewares/authorizations';
import { authentication } from './modules/authentication/authentication.routes';
import { user } from './modules/user/user.routes';

import { Router } from 'express';
const router = Router();

router.use('/user', authMiddleware, authorize([ROLES.ADMIN]), user);
router.use('/login', authentication);

export default router;
