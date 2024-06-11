import { Controller } from '../../../utils/controller-base.js';
import _ from 'lodash';

import { error, success } from '../../../utils/responseHandlers.js';
import {
  BadRequestError,
  InternalServerError,
} from '../../../utils/api-errors.js';
import { httpStatus } from '../../../utils/httpStatus.js';
import { currentProfile } from '../../../utils/helper.js';
import { db } from '../../../utils/db.js';

export class ServerController extends Controller {
  constructor() {
    super();
  }

  async createServer() {
    try {
      const { name, imageUrl } = this.req.body;
      const profile = await currentProfile();
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }

      const server = await db.server.create({
        data: {
          profileId: profile.id,
          name,
          imageUrl,
          inviteCode: uuidv4(),
          channels: {
            create: [{ name: 'general', profileId: profile.id }],
          },
          members: {
            create: [{ profileId: profile.id, role: MemberRole.ADMIN }],
          },
        },
      });

      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async deleteServer() {
    try {
      const { serverId } = this.req.params;
      const profile = await currentProfile();
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }

      const server = await db.server.delete({
        where: {
          id: serverId,
          profileId: profile.id,
        },
      });

      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async editServer() {
    try {
      const { serverId } = this.req.params;
      const profile = await currentProfile();
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }

      const server = await db.server.update({
        where: {
          id: params.serverId,
          profileId: profile.id,
        },
        data: {
          name,
          imageUrl,
        },
      });

      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async inviteCode() {
    try {
      const { serverId } = this.req.params;
      const profile = await currentProfile();
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }

      const server = await db.server.update({
        where: {
          id: params.serverId,
          profileId: profile.id,
        },
        data: {
          inviteCode: uuidv4(),
        },
      });

      return success(this.res, httpStatus.OK, server);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }

  async leaveServer() {
    try {
      const { serverId } = this.req.params;
      const profile = await currentProfile();
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!serverId) {
        return new NextResponse('Server ID Missing', { status: 400 });
      }

      const server = await db.server.update({
        where: {
          id: params.serverId,
          profileId: {
            not: profile.id,
          },
          members: {
            some: {
              profileId: profile.id,
            },
          },
        },
        data: {
          members: {
            deleteMany: {
              profileId: profile.id,
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
