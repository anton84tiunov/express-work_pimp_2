import { Request, Response } from "express";
import { ApplicationService } from "../services/ApplicationService";
import { ApplicationEntity } from "../entity/ApplicationEntity";

const applicationService = new ApplicationService();

export const createApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const newApplicationData: ApplicationEntity = req.body;
        // Установка user_id и job_id из запроса
        newApplicationData.applicant = req.body.user_id;
        newApplicationData.job = req.body.job_id;
        const newApplication = await applicationService.createApplication(newApplicationData);
        res.status(201).json(newApplication);
    } catch (error) {
        console.error('Ошибка при создании заявки:', error);
        res.status(500).json({ error: 'Ошибка при создании заявки' });
    }
}

export const  getAllApplications =  async (req: Request, res: Response): Promise<void> => {
    try {
        const applications = await applicationService.getAllApplications();
        console.log(applications);
        res.json(applications);
    } catch (error) {
        console.error('Ошибка при получении заявок:', error);
        res.status(500).json({ error: 'Ошибка при получении заявок' });
    }
}


