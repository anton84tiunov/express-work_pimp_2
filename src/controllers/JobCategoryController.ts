import { Request, Response } from "express";
import { JobCategoryService } from "../services/JobCategoryService";
import { JobCategoryEntity } from "../entity/JobCategoryEntity";

const jobCategoryService = new JobCategoryService();

export const createJobCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const newJobCategoryData: JobCategoryEntity = req.body;
        const newJobCategory = await jobCategoryService.createJobCategory(newJobCategoryData);
        res.status(201).json(newJobCategory);
    } catch (error) {
        console.error('Ошибка при создании категории:', error);
        res.status(500).json({ error: 'Ошибка при создании категории' });
    }
}

export const  getAllJobCategories =  async (req: Request, res: Response): Promise<void> => {
    try {
        const jobCategories = await jobCategoryService.getAllJobCategories();
        res.json(jobCategories);
    } catch (error) {
        console.error('Ошибка при получении категорий:', error);
        res.status(500).json({ error: 'Ошибка при получении категорий' });
    }
}