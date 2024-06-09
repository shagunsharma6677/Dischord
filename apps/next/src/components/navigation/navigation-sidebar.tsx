import { redirect } from 'next/navigation';

import { ScrollArea, Separator } from '@repo/ui';

import { NavigationAction } from './navigation-action';
import { NavigationItem } from './navigation-item';
import { db } from '../../lib/db';
import { ModeToggle } from '../mode-toggle';
// import { UserInfo } from "../../app/(protected)/_components/user-info";
import { currentProfile } from '../../lib/current-profile';
import { UserButton } from '../auth/user-button';
import { UNAUTHORIZED_REDIRECT } from '@/routes';

export const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect(UNAUTHORIZED_REDIRECT);
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="border border-blue-500  space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationAction />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full border border-green-600">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>
      <div className="flex items-center flex-col pb-3 mt-auto gap-y-4">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};