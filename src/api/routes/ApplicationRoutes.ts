// ApplicationRoutes.ts
import express from 'express';
import { createApplication, getAllApplications } from '../controllers/applications/ApplicationController'

const ApplicationRouter = express.Router();

ApplicationRouter.post('/create', createApplication);
ApplicationRouter.get('/get_all', getAllApplications);

export default ApplicationRouter;