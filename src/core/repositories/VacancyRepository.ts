import { AppDataSource } from '../../configs/app-data-source';
import { VacancyEntity } from '../entity/VacancyEntity';

export const VacancyRepository = AppDataSource.manager.getRepository(VacancyEntity);



