import authRoutes from './auth/auth.routes.js';
import serverRoutes from './server/server.routes.js';

const initializeRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/server', serverRoutes);
};

export default initializeRoutes;
