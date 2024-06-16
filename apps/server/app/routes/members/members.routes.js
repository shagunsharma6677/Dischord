import express from 'express';
import { MembersController } from './members.controller.js';

const router = express.Router();

router.delete('/members/:serverId/:memberId', (req, res, next) => {
  const memberObj = new MembersController().boot(req, res);
  return memberObj.deleteMember();
});
router.patch('/members/:serverId/:memberId', (req, res, next) => {
  const memberObj = new MembersController().boot(req, res);
  return memberObj.editMember();
});

export default router;
