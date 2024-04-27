import { AppDataSource } from '../app-data-source';
import { JobSkillEntity } from '../entity/JobSkillEntity';

export const JobSkillRepository = AppDataSource.manager.getRepository(JobSkillEntity);