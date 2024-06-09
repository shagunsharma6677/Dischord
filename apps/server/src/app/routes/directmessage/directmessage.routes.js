import express from 'express';
import { DMController } from './directmessage.controller';
const router = express.Router();

router.get('dm/:cursor/:conversationId', (req, res, next) => {
  const authObj = new DMController().boot(req, res);
  return authObj.getDMs();
});
