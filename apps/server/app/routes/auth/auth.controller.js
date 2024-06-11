import { Controller } from '../../../utils/controller-base.js';
import _ from 'lodash';
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from '../../../utils/token.js';
import {
  sendTwoFactorTokenEmail,
  sendVerificationEmail,
} from '../../services/mail.js';
import {
  findByEmail,
  getTwoFactorConfirmationByUserId,
  getTwoFactorTokenByEmail,
} from './auth.utils.js';
import { error, success } from '../../../utils/responseHandlers.js';
import {
  BadRequestError,
  InternalServerError,
} from '../../../utils/api-errors.js';
import { httpStatus } from '../../../utils/httpStatus.js';

export class AuthController extends Controller {
  constructor() {
    super();
  }

  async register() {
    try {
      const { email, password, code } = this.req.body;
      // Find user by email
      const existingUser = await findByEmail(email);

      if (
        (_.isEmpty(existingUser) && !existingUser.email) ||
        !existingUser.password
      ) {
        return error(
          this.res,
          new BadRequestError('DUPLICATE_EMAIL_OR_USERNAME')
        );
      }

      //If we found user is not verified!
      //Then request for verification token from email.
      if (!existingUser?.emailVerified) {
        const verificationToken = await generateVerificationToken(
          existingUser.email
        );

        await sendVerificationEmail(
          verificationToken.email,
          verificationToken.token
        );
        return success(this.res, httpStatus.CREATED, {
          message: 'Confirmation email sent!',
        });
      }

      if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if (code) {
          const twoFactorToken = await getTwoFactorTokenByEmail(
            existingUser.email
          );

          if (!twoFactorToken) {
            return error(this.res, new UnauthorizedError('Invalid code!'));
          }

          if (twoFactorToken.token !== code) {
            return error(this.res, new UnauthorizedError('Code expired!'));
          }

          const hasExpired = new Date(twoFactorToken.expires) < new Date();

          if (hasExpired) {
            return error(this.res, new UnauthorizedError('Code expired!'));
          }

          await db.twoFactorToken.delete({
            where: { id: twoFactorToken.id },
          });

          const existingConfirmation = await getTwoFactorConfirmationByUserId(
            existingUser.id
          );

          if (existingConfirmation) {
            await db.twoFactorConfirmation.delete({
              where: { id: existingConfirmation.id },
            });
          }

          await db.twoFactorConfirmation.create({
            data: {
              userId: existingUser.id,
            },
          });

          return success(this.res, httpStatus.OK, {
            message: 'Two-factor authentication completed!',
          });
        } else {
          const twoFactorToken = await generateTwoFactorToken(
            existingUser.email
          );
          await sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token
          );

          // return { twoFactor: true };
          return success(this.res, httpStatus.OK, {
            message: 'Two-factor authentication token sent!',
          });
        }
      }

      // await signIn('credentials', {
      //   email,
      //   password,
      //   redirect: false,
      // });

      return success(this.res, httpStatus.OK, { message: 'Login successful!' });
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async login() {
    try {
      const { email, password, code } = this.req.body;
      // Find user by email
      const existingUser = await findByEmail(email);
      if (
        (_.isEmpty(existingUser) && !existingUser.email) ||
        !existingUser.password
      ) {
        return error(
          this.res,
          new BadRequestError('DUPLICATE_EMAIL_OR_USERNAME')
        );
      }

      //If we found user is not verified!
      //Then request for verification token from email.
      if (!existingUser?.emailVerified) {
        const verificationToken = await generateVerificationToken(
          existingUser.email
        );

        await sendVerificationEmail(
          verificationToken.email,
          verificationToken.token
        );
        return success(this.res, httpStatus.CREATED, {
          message: 'Confirmation email sent!',
        });
      }

      if (existingUser.isTwoFactorEnabled && existingUser.email) {
        if (code) {
          const twoFactorToken = await getTwoFactorTokenByEmail(
            existingUser.email
          );

          if (!twoFactorToken) {
            return error(this.res, new UnauthorizedError('Invalid code!'));
          }

          if (twoFactorToken.token !== code) {
            return error(this.res, new UnauthorizedError('Code expired!'));
          }

          const hasExpired = new Date(twoFactorToken.expires) < new Date();

          if (hasExpired) {
            return error(this.res, new UnauthorizedError('Code expired!'));
          }

          await db.twoFactorToken.delete({
            where: { id: twoFactorToken.id },
          });

          const existingConfirmation = await getTwoFactorConfirmationByUserId(
            existingUser.id
          );

          if (existingConfirmation) {
            await db.twoFactorConfirmation.delete({
              where: { id: existingConfirmation.id },
            });
          }

          await db.twoFactorConfirmation.create({
            data: {
              userId: existingUser.id,
            },
          });
        } else {
          const twoFactorToken = await generateTwoFactorToken(
            existingUser.email
          );
          await sendTwoFactorTokenEmail(
            twoFactorToken.email,
            twoFactorToken.token
          );

          // return { twoFactor: true };
          return success(this.res, httpStatus.OK, {
            message: 'Two-factor authentication token sent!',
          });
        }
      }

      // await signIn('credentials', {
      //   email,
      //   password,
      //   redirect: false,
      // });
      return success(this.res, httpStatus.CREATED, {
        message: 'Login successfull !!!',
      });
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }
}
