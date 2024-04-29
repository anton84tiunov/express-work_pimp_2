import { AppDataSource } from '../app-data-source';
import { UserEntity } from "../entity/UserEntity";

export const UserRepository = AppDataSource.manager.getRepository(UserEntity);





