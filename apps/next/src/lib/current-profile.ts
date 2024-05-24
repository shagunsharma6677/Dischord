import { auth } from '@/auth';
import { db } from '@/src/lib/db';

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
