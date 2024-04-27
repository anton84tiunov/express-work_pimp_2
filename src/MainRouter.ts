import express from 'express';
import JobRouter from './routes/JobRouter';
import ApplicationRouter from './routes/ApplicationRouter';
import CompanyRouter from "./routes/CompanyRouter";
import EducationRouter from './routes/EducationRouter';
import SkillRouter from './routes/SkillRouter';
import JobCategoryRouter from './routes/JobCategoryRouter';
import JobSkillRouter from './routes/JobSkillRouter';
import UserRouter from './routes/UserRouter';

const MainRouter = express.Router();


MainRouter.use('/job', JobRouter);
MainRouter.use('/application', ApplicationRouter);
MainRouter.use('/company', CompanyRouter);
MainRouter.use('/education', EducationRouter);
MainRouter.use('/skill', SkillRouter);
MainRouter.use('/job_category', JobCategoryRouter);
MainRouter.use('/job_skill', JobSkillRouter);
MainRouter.use('/user', UserRouter);


export default MainRouter;

