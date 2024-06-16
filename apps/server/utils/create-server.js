import http from 'http';
import https from 'https';
import { initializeDatabase } from './db.js';
import { log } from './logger.js';

const createServer = async (app, port) => {
  let server;

  try {
    // Attempt to start HTTPS
    server = http.createServer(app);
    server.listen(port, async () => {
      try {
        await initializeDatabase();
        log('[2] Connected to Prisma Database with http');
      } catch (err) {
        console.error('Failed to connect to Prisma Database:', err);
        process.exit(1); // Terminate process on Prisma connection error
      }
    });
    server.timeout = 18000;
  } catch (httpsError) {
    console.error('Failed to start HTTPS server:', httpsError);
    // Attempt to start HTTP server if HTTPS fails
    try {
      server = https.createServer(app);
      server.listen(port, async () => {
        try {
          await initializeDatabase();
          log('[2] Connected to Prisma Database with http');
        } catch (err) {
          console.error('Failed to connect to Prisma Database:', err);
        }
      });
      server.timeout = 18000;
    } catch (httpError) {
      console.error('Failed to start HTTP server:', httpError);
      process.exit(1); // Terminate process on server startup error
    }
  }

  return server;
};

export default createServer;
