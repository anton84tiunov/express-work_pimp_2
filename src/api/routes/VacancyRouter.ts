import express from 'express';
import {createVacancy, getAllVacancies} from '../controllers/vacancies/VacancyController';

const VacancyRouter = express.Router();

VacancyRouter.post('/create', createVacancy);

VacancyRouter.post('/get_all', getAllVacancies);

export default VacancyRouter;


