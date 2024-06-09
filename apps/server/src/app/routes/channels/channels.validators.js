import { validationResult } from 'express-validator';

export default class Validators {
  static channelValidator() {
    try {
      return [
        ...Validators.channelNameValidator(),
        // ...Validators.serverInfoValidator(),
      ];
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static channelNameValidator() {
    try {
      return [check('name').exists().withMessage('name')];
    } catch (error) {
      return error;
    }
  }

  //   static channelInfoValidator() {
  //     try {
  //       return [
  //         check('imageUrl').optional().exists().withMessage('REQUIRED imageUrl'),
  //       ];
  //     } catch (error) {
  //       return error;
  //     }
  //   }

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
