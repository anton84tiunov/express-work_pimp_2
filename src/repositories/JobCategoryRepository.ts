import { AppDataSource } from '../app-data-source';
import { JobCategoryEntity } from '../entity/JobCategoryEntity';

export const JobCategoryRepository = AppDataSource.manager.getRepository(JobCategoryEntity);