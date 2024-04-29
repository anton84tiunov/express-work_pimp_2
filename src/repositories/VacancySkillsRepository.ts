import { AppDataSource } from '../app-data-source';
import { VacancySkillsEntity } from '../entity/VacancySkillsEntity';

export const VacancySkillsRepository = AppDataSource.manager.getRepository(VacancySkillsEntity);


