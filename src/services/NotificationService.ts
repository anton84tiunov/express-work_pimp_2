import { NotificationEntity } from "../entity/NotificationEntity";
import { NotificationRepository } from "../repositories/NotificationRepository";

export class NotificationService{
    async createNotification(notification: NotificationEntity){
        return await NotificationRepository.save(notification);
    }

    async findAllNotification(){
        return await NotificationRepository.find();
    }
}

