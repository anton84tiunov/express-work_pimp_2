import { AppDataSource } from '../app-data-source';
import { JobEntity } from '../entity/JobEntity';



export const JobRepository = AppDataSource.getRepository(JobEntity);


