import 'dotenv/config';
import initializeSocket from './app/services/socker.js';
import createServer from './utils/create-server.js';
import { Server as ServerIO } from 'socket.io';
import { log } from './utils/logger.js';
import app from './app.js';

createServer(app, process.env.PORT)
  .then((server) => {
    log(`[3] Server running on ${process.env.PORT}`);
    const io = new ServerIO(server, {
      cors: {
        allowedHeaders: ['*'],
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
        transports: ['websocket', 'polling'],
      },
      allowEIO3: true,
      // addTrailingSlash: false,
    });
    // Initialize Socket.IO functionality
    initializeSocket(io);
    log('[4] Socket.IO initialized.');
  })
  .catch((error) => {
    console.error('Error occurred while starting server:', error);
  });
