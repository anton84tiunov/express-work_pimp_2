import express from 'express';
import { createEducation, getAllEducations} from "../controllers/EducationController"

const EducationRouter = express.Router();

EducationRouter.post('/create', createEducation);

EducationRouter.post('/get_all', getAllEducations);

export default EducationRouter;




