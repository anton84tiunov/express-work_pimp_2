// ApplicationRepository.ts
import { AppDataSource } from '../../configs/app-data-source';
import { ApplicationEntity } from '../entity/ApplicationEntity';

export const ApplicationRepository = AppDataSource.getRepository(ApplicationEntity);