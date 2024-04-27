import { redirect } from 'next/navigation';
import { db } from '@/src/lib/db';
import { UNAUTHORIZED_REDIRECT } from '@/routes';
import { currentUser } from '@/src/lib/auth';

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect(UNAUTHORIZED_REDIRECT);
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: user.name,
      imageUrl: user.image,
      email: user.email,
    },
  });

  return newProfile;
};
