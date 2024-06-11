import express from 'express';
import initializeRoutes from './app/routes/init.js';
import { APIError, NotFoundError } from './utils/api-errors.js';
import { error } from './utils/responseHandlers.js';
import { log } from './utils/logger.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

// Initialize routes
initializeRoutes(app);
log('[1] Routes initialized.');

app.use((req, res, next) => {
  next(new NotFoundError('Page not found'));
});

app.use((err, req, res, next) => {
  if (err instanceof APIError) {
    error(res, err);
  } else {
    error(res, new APIError(500, 'Internal Server Error'));
  }
});

export default app;
