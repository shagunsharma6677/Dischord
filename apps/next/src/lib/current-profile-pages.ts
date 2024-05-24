import { db } from './db';
import { auth } from '@/auth';

export const currentProfilePages = async () => {
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
