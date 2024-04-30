import { AppDataSource } from '../../configs/app-data-source';
import { UserEntity } from "../entity/UserEntity";

export const UserRepository = AppDataSource.manager.getRepository(UserEntity);





