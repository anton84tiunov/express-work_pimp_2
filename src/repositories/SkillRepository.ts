import { AppDataSource } from '../app-data-source';
import { SkillEntity } from '../entity/SkillEntity';

export const SkillRepository = AppDataSource.manager.getRepository(SkillEntity);




