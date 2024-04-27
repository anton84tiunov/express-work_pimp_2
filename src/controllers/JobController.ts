import { Request, Response } from "express";
import { JobService } from "../services/JobService";
import { JobEntity } from "../entity/JobEntity";

const jobService = new JobService();

export const createJob = async (req: Request, res: Response): Promise<void> => {
    try {
        const newJobData: JobEntity = req.body;
        // Установка user_id из запроса
        newJobData.employer = req.body.user_id;
        const newJob = await jobService.createJob(newJobData);
        res.json(newJob);
    } catch (error) {
        console.error('Ошибка при создании работы:', error);
        res.status(500).json({ error: 'Ошибка при создании работы' });
    }
}

export const getAllJobs = async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await jobService.getAllJobs();
        res.json(jobs);
    } catch (error) {
        console.error('Ошибка при получении работ:', error);
        res.status(500).json({ error: 'Ошибка при получении работ' });
    }
}

