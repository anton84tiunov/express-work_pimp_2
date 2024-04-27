import express from 'express';
import {createSkill, getAllSkills} from '../controllers/SkillController';

const SkillRouter = express.Router();

SkillRouter.post('/create', createSkill);

SkillRouter.post('/get_all', getAllSkills);

export default SkillRouter;


