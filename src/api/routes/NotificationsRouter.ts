import express from 'express';
import {createNotification, getAllNotification} from '../controllers/notifications/NotificationsController';

const NotificationRouter = express.Router();

NotificationRouter.post('/create', createNotification);

NotificationRouter.post('/get_all', getAllNotification);

export default NotificationRouter;


