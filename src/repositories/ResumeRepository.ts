import { AppDataSource } from '../app-data-source';
import { ResumeEntity } from '../entity/ResumeEntity';

export const ResumeRepository = AppDataSource.manager.getRepository(ResumeEntity);




