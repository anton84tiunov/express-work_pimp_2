import express from 'express';
import MatchRouter from './routes/MatchesRouter';
import NotificationRouter from './routes/NotificationsRouter';
import ResumeRouter from './routes/ResumesRouter';
import ResumeSkillsRouter from './routes/ResumeSkillsRouter';
import SkillRouter from './routes/SkillRouter';
import UserRouter from './routes/UserRouter';
import VacancyRouter from './routes/VacancyRouter';
import VacancySkillsRouter from './routes/VacancySkillsRouter';

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

