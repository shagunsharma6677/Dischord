import { db } from '../../../prisma/prisma.js';
import { Controller } from '../../../utils/controller-base.js';
import { currentProfile } from '../../../utils/helper.js';

export class ChannelController extends Controller {
  constructor() {
    super();
  }

  async createChannel() {
    try {
      const profile = await currentProfile();
      const { name, type } = this.req.body;
      const { serverId } = this.req.params;
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }

      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }
      if (name === 'general') {
        return error(this.res, new BadRequestError("Name cannot be 'general'"));
      }

      const server = await db.server.update({
        where: {
          id: serverId,
          members: {
            some: {
              profileId: profile.id,
              role: {
                in: [MemberRole.ADMIN, MemberRole.MODERATOR],
              },
            },
          },
        },
        data: {
          channels: {
            create: {
              profileId: profile.id,
              name,
              type,
            },
          },
        },
      });
      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async deleteChannel() {
    try {
      const profile = await currentProfile();
      const { serverId } = this.req.params;
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }

      if (!params.channelId) {
        return error(this.res, new BadRequestError('Channel ID missing'));
      }
      const server = await db.server.update({
        where: {
          id: serverId,
          members: {
            some: {
              profileId: profile.id,
              role: {
                in: [MemberRole.ADMIN, MemberRole.MODERATOR],
              },
            },
          },
        },
        data: {
          channels: {
            delete: {
              id: params.channelId,
              name: {
                not: 'general',
              },
            },
          },
        },
      });
      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }
  async editChannel() {
    try {
      const profile = await currentProfile();
      const { name, type } = this.req.body;
      const { serverId } = this.req.params;
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }
      if (!params.channelId) {
        return error(this.res, new BadRequestError('Channel ID missing'));
      }
      if (name === 'general') {
        return error(this.res, new BadRequestError("Name cannot be 'general'"));
      }
      const server = await db.server.update({
        where: {
          id: serverId,
          members: {
            some: {
              profileId: profile.id,
              role: {
                in: [MemberRole.ADMIN, MemberRole.MODERATOR],
              },
            },
          },
        },
        data: {
          channels: {
            update: {
              where: {
                id: params.channelId,
                NOT: {
                  name: 'general',
                },
              },
              data: {
                name,
                type,
              },
            },
          },
        },
      });
      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }
}
