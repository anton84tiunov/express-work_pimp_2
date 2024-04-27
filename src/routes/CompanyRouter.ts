import express from 'express';
import { createCompany, getAllCompanies} from '../controllers/CompanyController';

const CompanyRouter = express.Router();

CompanyRouter.post('/create', createCompany);

CompanyRouter.post('/get_all', getAllCompanies);

export default CompanyRouter;