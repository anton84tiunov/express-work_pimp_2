import express from 'express';
import { createJob, getAllJobs} from '../controllers/JobController';

const JobRouter = express.Router();

JobRouter.post('/create', createJob);

JobRouter.post('/get_all', getAllJobs);

export default JobRouter;

