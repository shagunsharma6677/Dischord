import { Controller } from '../../../utils/controller-base.js';
import { db } from '../../../utils/db.js';

export class MembersController extends Controller {
  constructor() {
    super();
  }
  async deleteMember() {
    try {
      const profile = await currentProfile();
      const { serverId } = this.req.params;
      const { memberId } = this.req.params;

      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }
      if (!memberId) {
        return new NextResponse('Member ID Missing', { status: 400 });
      }

      const server = await db.server.update({
        where: {
          id: serverId,
          profileId: profile.id,
        },
        data: {
          members: {
            deleteMany: {
              id: params.memberId,
              profileId: {
                not: profile.id,
              },
            },
          },
        },
        include: {
          members: {
            include: {
              profile: true,
            },
            orderBy: {
              role: 'asc',
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
  async editMember() {
    try {
      const profile = await currentProfile();
      const { serverId } = this.req.params;
      const { memberId } = this.req.params;
      const { role } = this.req.body;
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }
      if (!memberId) {
        return new NextResponse('Member ID Missing', { status: 400 });
      }

      const server = await db.server.update({
        where: {
          id: serverId,
          profileId: profile.id,
        },
        data: {
          members: {
            update: {
              where: {
                id: params.memberId,
                profileId: {
                  not: profile.id,
                },
              },
              data: {
                role,
              },
            },
          },
        },
        include: {
          members: {
            include: {
              profile: true,
            },
            orderBy: {
              role: 'asc',
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
