import { NotificationEntity } from "../entities/NotificationEntity";
import { NotificationRepository } from "../repositories/NotificationRepository";

export class NotificationService{
    async createNotification(notification: NotificationEntity){
        return await NotificationRepository.save(notification);
    }

    async findAllNotification(){
        return await NotificationRepository.find();
    }
}

