import express from 'express';
import { MembersController } from './members.controller';

const router = express.Router();

router.delete('/members/:serverId/:memberId', (req, res, next) => {
  const authObj = new MembersController().boot(req, res);
  return authObj.deleteMember();
});
router.patch('/members/:serverId/:memberId', (req, res, next) => {
  const authObj = new MembersController().boot(req, res);
  return authObj.editMember();
});
