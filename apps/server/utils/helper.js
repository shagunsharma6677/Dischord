import { db } from './db.js';

export const getVerificationTokenByEmail = async (email) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const currentProfile = async () => {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: session?.user?.id,
    },
  });

  return profile;
};
