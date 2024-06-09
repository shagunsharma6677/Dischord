import express from 'express';
import { LivekitController } from './livekit.controller.js';

const router = express.Router();

router.get('/lovekit/:room/:username', (req, res, next) => {
  const livekitObj = new LivekitController().boot(req, res);
  return livekitObj.getLivekit();
});

export default router;
