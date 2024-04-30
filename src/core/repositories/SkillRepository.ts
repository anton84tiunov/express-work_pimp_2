import { AppDataSource } from '../../configs/app-data-source';
import { SkillEntity } from '../entity/SkillEntity';

export const SkillRepository = AppDataSource.manager.getRepository(SkillEntity);








