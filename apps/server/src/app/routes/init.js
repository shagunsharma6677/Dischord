import authRoutes from './auth/auth.routes.js';
import serverRoutes from './server/server.routes.js';
import channelRoutes from './channels/channels.routes.js';
import dmRoutes from './directmessage/directmessage.routes.js';
import livekitRoutes from './livekit/livekit.routes.js';
import membersRoutes from './/members/members.routes.js';
const initializeRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/server', serverRoutes);
  app.use('/api/channel', channelRoutes);
  app.use('/api/dm', dmRoutes);
  app.use('/api/livekit', livekitRoutes);
  app.use('/api/members', membersRoutes);
};

export default initializeRoutes;
