import express from 'express';
import {createVacancySkills, getAllVacancySkills} from '../controllers/vacancySkills/VacancySkillsController';

const VacancySkillsRouter = express.Router();

VacancySkillsRouter.post('/create', createVacancySkills);

VacancySkillsRouter.post('/get_all', getAllVacancySkills);

export default VacancySkillsRouter;


