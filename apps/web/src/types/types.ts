import { Member, Profile, Server } from '../prisma/src/generated/client';

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
