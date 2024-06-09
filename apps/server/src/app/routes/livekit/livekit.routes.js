import express from 'express';
import { LivekitController } from './livekit.controller';

const router = express.Router();

router.get('/lovekit/:room/:username', (req, res, next) => {
  const authObj = new LivekitController().boot(req, res);
  return authObj.getLivekit();
});
