import { body, check, query, header, param } from 'express-validator';
import { validationResult } from 'express-validator';

export default class Validators {
  static serverValidator() {
    try {
      return [
        ...Validators.serverNameValidator(),
        ...Validators.serverInfoValidator(),
      ];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static serverNameValidator() {
    try {
      return [check('name').exists().withMessage('name')];
    } catch (error) {
      return error;
    }
  }

  static serverInfoValidator() {
    try {
      return [
        check('imageUrl').optional().exists().withMessage('REQUIRED imageUrl'),
      ];
    } catch (error) {
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
