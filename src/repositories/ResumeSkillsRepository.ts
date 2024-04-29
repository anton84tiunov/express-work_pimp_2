import { AppDataSource } from '../app-data-source';
import { ResumeSkillsEntity } from '../entity/ResumeSkillsEntity';

export const ResumeSkillsRepository = AppDataSource.manager.getRepository(ResumeSkillsEntity);





