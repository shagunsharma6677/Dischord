import express from 'express';
import ChannelValidators from './channels.validators';
import { ChannelController } from './channels.controller';
const router = express.Router();

router.post(
  '/create',
  ChannelValidators.channelValidator(),
  ChannelValidators.validate,
  (req, res, next) => {
    const authObj = new ChannelController().boot(req, res);
    return authObj.createChannel();
  }
);
router.delete('/:channelId/delete', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.deleteChannel();
});

router.patch('/:channelId/edit', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.editChannel();
});
export default router;
