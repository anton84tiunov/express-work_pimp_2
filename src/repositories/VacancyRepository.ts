import { AppDataSource } from '../app-data-source';
import { VacancyEntity } from '../entity/VacancyEntity';

export const VacancyRepository = AppDataSource.manager.getRepository(VacancyEntity);



