import { body, check, query, header, param } from 'express-validator';
import commonlyUsedPasswords from '../../../config/commonlyUsedPasswords.js';
import { validationResult } from 'express-validator';

export default class Validators {
  static userSignupValidator() {
    try {
      return [
        ...Validators.emailValidator(),
        ...Validators.userNameValidator(),
        ...Validators.basicInfoValidator(),
      ];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }
  static emailValidator() {
    try {
      return [check('email').isEmail().withMessage('VALID_EMAIL')];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }

  static userNameValidator() {
    try {
      return [check('name').exists().withMessage('name')];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }
  static authUserPasswordValidator() {
    try {
      return [
        check('password')
          .not()
          .isIn(commonlyUsedPasswords)
          .withMessage('COMMONLY_USED_PASSWORD')
          .isLength({ min: 4 })
          .withMessage('PASSWORD_VALIDATION_LENGTH')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d].*/)
          .withMessage('PASSWORD_VALIDATION'),
      ];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }
  static basicInfoValidator() {
    try {
      return [check('code').optional().exists().withMessage('REQUIRED code')];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }

  static loginValidator() {
    try {
      return [
        ...Validators.emailValidator(),
        ...Validators.authUserPasswordValidator(),
      ];
    } catch (error) {
      console.log('errpr', error);
      return error;
    }
  }

  static validate(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ status: 0, message: errors.array() });
      }
      next();
    } catch (error) {
      console.log('error', error);
      return res.send({ status: 0, message: error });
    }
  }
}
