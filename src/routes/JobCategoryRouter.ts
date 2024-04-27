import express from 'express';
import { createJobCategory, getAllJobCategories} from '../controllers/JobCategoryController';

const JobCategoryRouter = express.Router();

JobCategoryRouter.post('/create', createJobCategory);

JobCategoryRouter.post('/get_all', getAllJobCategories);

export default JobCategoryRouter;