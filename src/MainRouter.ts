import express from 'express';
import MatchRouter from './api/routes/MatchesRouter';
import NotificationRouter from './api/routes/NotificationsRouter';
import ResumeRouter from './api/routes/ResumesRouter';
import ResumeSkillsRouter from './api/routes/ResumeSkillsRouter';
import SkillRouter from './api/routes/SkillRouter';
import UserRouter from './api/routes/UserRouter';
import VacancyRouter from './api/routes/VacancyRouter';
import VacancySkillsRouter from './api/routes/VacancySkillsRouter';

const MainRouter = express.Router();

MainRouter.use('/matches', MatchRouter);
MainRouter.use('/notifications', NotificationRouter);
MainRouter.use('/resumes', ResumeRouter);
MainRouter.use('/resume_skills', ResumeSkillsRouter);
MainRouter.use('/skills', SkillRouter);
MainRouter.use('/users', UserRouter);
MainRouter.use('/vacancies', VacancyRouter);
MainRouter.use('/vacancy_skills', VacancySkillsRouter);



export default MainRouter;

