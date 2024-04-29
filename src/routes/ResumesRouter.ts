import express from 'express';
import {createResume, getAllResume} from '../controllers/ResumesController';

const ResumeRouter = express.Router();

ResumeRouter.post('/create', createResume);

ResumeRouter.post('/get_all', getAllResume);

export default ResumeRouter;