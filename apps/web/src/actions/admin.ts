'use server';

import { currentRole } from '@/src/lib/auth';
import { UserRole } from '../prisma/src/generated/client';

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return { success: 'Allowed Server Action!' };
  }

  return { error: 'Forbidden Server Action!' };
};
