import { AppDataSource } from '../../configs/app-data-source';
import { ResumeEntity } from '../entity/ResumeEntity';

export const ResumeRepository = AppDataSource.manager.getRepository(ResumeEntity);




