import { AppDataSource } from '../app-data-source';
import { ApplicationEntity } from '../entity/ApplicationEntity';

export const ApplicationRepository = AppDataSource.manager.getRepository(ApplicationEntity);



