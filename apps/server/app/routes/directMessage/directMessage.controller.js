import { db } from '../../../prisma/prisma.js';
import { Controller } from '../../../utils/controller-base.js';
import { currentProfile } from '../../../utils/helper.js';

export class DirectMessageController extends Controller {
  constructor() {
    super();
  }
  async getDirectMessages() {
    try {
      const MESSAGES_BATCH = 10;
      const profile = await currentProfile();

      const { cursor } = this.req.params;
      //     const conversationId = searchParams.get('conversationId');
      const { conversationId } = this.req.params;
      if (!profile) {
        return error(this.res, new BadRequestError('Unauthorized'));
      }
      if (!conversationId) {
        return error(this.res, new BadRequestError('Conversation ID missing'));
      }
      let messages = [];
      if (cursor) {
        messages = await db.directMessage.findMany({
          take: MESSAGES_BATCH,
          skip: 1,
          cursor: {
            id: cursor,
          },
          where: {
            conversationId,
          },
          include: {
            member: {
              include: {
                profile: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
      } else {
        messages = await db.directMessage.findMany({
          take: MESSAGES_BATCH,
          where: {
            conversationId,
          },
          include: {
            member: {
              include: {
                profile: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        });
      }
      let nextCursor = null;
      if (messages.length === MESSAGES_BATCH) {
        nextCursor = messages[MESSAGES_BATCH - 1]?.id;
      }
      return success(this.res, httpStatus.OK, nextCursor);
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }
}
