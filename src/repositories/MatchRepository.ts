import { AppDataSource } from '../app-data-source';
import { MatchEntity } from '../entity/MatchEntity';

export const MatchRepository = AppDataSource.manager.getRepository(MatchEntity);