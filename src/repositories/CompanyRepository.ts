import { AppDataSource } from '../app-data-source';
import { CompanyEntity } from '../entity/CompanyEntity';

export const CompanyRepository = AppDataSource.manager.getRepository(CompanyEntity);