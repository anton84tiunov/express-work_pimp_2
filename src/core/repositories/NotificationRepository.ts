import { AppDataSource } from '../../configs/app-data-source';
import { NotificationEntity } from '../entity/NotificationEntity';


export const NotificationRepository = AppDataSource.manager.getRepository(NotificationEntity);



