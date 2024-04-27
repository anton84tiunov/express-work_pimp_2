import express from 'express';
import { createApplication, getAllApplications} from '../controllers/ApplicationController';

const ApplicationRouter = express.Router();

ApplicationRouter.post('/create', createApplication);

ApplicationRouter.post('/get_all', getAllApplications);

export default ApplicationRouter;

