import express from 'express';
import {createVacancy, getAllVacancies} from '../controllers/VacancyController';

const VacancyRouter = express.Router();

VacancyRouter.post('/create', createVacancy);

VacancyRouter.post('/get_all', getAllVacancies);

export default VacancyRouter;