import { UserRepository } from "../repositories/UserRepository";
import { UserEntity } from "../entity/UserEntity";

export class UserService {

    async createUser(userData: UserEntity): Promise<UserEntity> {
        return await UserRepository.save(userData);
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await UserRepository.find();
    }
}