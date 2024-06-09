import { v4 as uuidv4 } from 'uuid';
import { getVerificationTokenByEmail } from './helper.js';
import { getTwoFactorTokenByEmail } from '../app/routes/auth/auth.utils.js';

export const generateVerificationToken = async (email) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // Will expire in 1 hour.

  const existingToken = await getVerificationTokenByEmail(email);

  // Will see if if token is already present or not in database.
  // If exist then will delete it.
  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const verficationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verficationToken;
};

export const generateTwoFactorToken = async (email) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString(); // For 6 digit token
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
};
