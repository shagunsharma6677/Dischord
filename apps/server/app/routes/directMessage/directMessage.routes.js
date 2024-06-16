import express from 'express';
import { DirectMessageController } from './directMessage.controller.js';

const router = express.Router();

router.get('directMessage/:cursor/:conversationId', (req, res, next) => {
  const directMessageObj = new DirectMessageController().boot(req, res);
  return directMessageObj.getDirectMessages();
});

export default router;
