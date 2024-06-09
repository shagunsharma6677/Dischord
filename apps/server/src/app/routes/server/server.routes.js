import express from 'express';
import ServerValidators from './server.validators.js';
import { ServerController } from './server.controller.js';
const router = express.Router();

router.post(
  '/create',
  ServerValidators.serverValidator(),
  ServerValidators.validate,
  (req, res, next) => {
    const authObj = new ServerController().boot(req, res);
    return authObj.createServer();
  }
);

router.delete('/:serverId/delete', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.deleteServer();
});

router.patch('/:serverId/edit', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.editServer();
});

router.patch('/:serverId/invite-code', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.inviteCode();
});

router.patch('/:serverId/leave-server', (req, res, next) => {
  const authObj = new ServerController().boot(req, res);
  return authObj.leaveServer();
});

export default router;
