import express from 'express';
import { createJobSkill, getAllJobSkills} from '../controllers/JobSkillController';

const JobSkillRouter = express.Router();

JobSkillRouter.post('/create', createJobSkill);

JobSkillRouter.post('/get_all', getAllJobSkills);

export default JobSkillRouter;

