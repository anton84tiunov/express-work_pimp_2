import { AppDataSource } from '../app-data-source';
import { EducationEntity } from '../entity/EducationEntity';

export const EducationRepository = AppDataSource.manager.getRepository(EducationEntity);

