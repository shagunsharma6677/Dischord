import express from 'express';
import AuthValidators from './auth.validators.js';
import { AuthController } from './auth.controller.js';
const router = express.Router();

router.post(
  '/users/register',
  AuthValidators.userSignupValidator(),
  AuthValidators.validate,
  (req, res, next) => {
    const authObj = new AuthController().boot(req, res);
    return authObj.register();
  }
);

router.post(
  '/users/login',
  AuthValidators.loginValidator(),
  AuthValidators.validate,
  (req, res, next) => {
    const authObj = new AuthController().boot(req, res);
    return authObj.login();
  }
);

export default router;
