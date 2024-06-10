import express from 'express';
import ChannelValidators from './channels.validators.js';
import { ChannelController } from './channels.controller.js';

const router = express.Router();

router.post(
  '/create',
  ChannelValidators.channelValidator(),
  ChannelValidators.validate,
  (req, res, next) => {
    const channelObj = new ChannelController().boot(req, res);
    return channelObj.createChannel();
  }
);
router.delete('/:channelId/delete', (req, res, next) => {
  const channelObj = new ChannelController().boot(req, res);
  return channelObj.deleteChannel();
});

router.patch('/:channelId/edit', (req, res, next) => {
  const channelObj = new ChannelController().boot(req, res);
  return channelObj.editChannel();
});
export default router;
