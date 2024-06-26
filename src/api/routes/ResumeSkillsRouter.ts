import express from 'express';
import {createResumeSkills, getAllResumeSkills} from '../controllers/resumeSkills/ResumeSkillsController';

const ResumeSkillsRouter = express.Router();

ResumeSkillsRouter.post('/create', createResumeSkills);

ResumeSkillsRouter.post('/get_all', getAllResumeSkills);

export default ResumeSkillsRouter;


