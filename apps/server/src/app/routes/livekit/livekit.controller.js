export class AuthController extends Controller {
  constructor() {
    super();
  }
  async getLivekit() {
    try {
      const { room } = this.req.params;
      const { username } = this.req.params;
      if (!room) {
        return error(
          this.res,
          new BadRequestError('Missing "room" query parameter')
        );
      } else if (!username) {
        return error(
          this.res,
          new BadRequestError('Missing "username" query parameter')
        );
      }
      const apiKey = process.env.LIVEKIT_API_KEY;
      const apiSecret = process.env.LIVEKIT_API_SECRET;
      const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

      if (!apiKey || !apiSecret || !wsUrl) {
        return error(this.res, new BadRequestError('Server unconfigured!'));
      }
      const at = new AccessToken(apiKey, apiSecret, { identity: username });
      at.addGrant({
        room,
        roomJoin: true,
        canPublish: true,
        canSubscribe: true,
      });
      return success(this.res, httpStatus.OK, { token: at.toJwt() });
    } catch (err) {
      console.error(err);
      return error(this.res, new InternalServerError('Something went wrong!'));
    }
  }
}
