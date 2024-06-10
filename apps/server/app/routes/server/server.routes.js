import express from 'express';
import ServerValidators from './server.validators.js';
import { ServerController } from './server.controller.js';
const router = express.Router();

router.post(
  '/create',
  ServerValidators.serverValidator(),
  ServerValidators.validate,
  (req, res, next) => {
    const serverObj = new ServerController().boot(req, res);
    return serverObj.createServer();
  }
);

router.delete('/:serverId/delete', (req, res, next) => {
  const serverObj = new ServerController().boot(req, res);
  return serverObj.deleteServer();
});

router.patch('/:serverId/edit', (req, res, next) => {
  const serverObj = new ServerController().boot(req, res);
  return serverObj.editServer();
});

router.patch('/:serverId/invite-code', (req, res, next) => {
  const serverObj = new ServerController().boot(req, res);
  return serverObj.inviteCode();
});

router.patch('/:serverId/leave-server', (req, res, next) => {
  const serverObj = new ServerController().boot(req, res);
  return serverObj.leaveServer();
});

export default router;
