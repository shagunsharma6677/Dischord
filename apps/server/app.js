import express from 'express';
import initializeRoutes from './app/routes/init.js';
import { APIError, NotFoundError } from './utils/api-errors.js';
import { error } from './utils/responseHandlers.js';
import { log } from './utils/logger.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(cors({ origin: '*' }));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan('tiny'));

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
