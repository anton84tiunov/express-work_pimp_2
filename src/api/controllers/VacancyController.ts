import { Request, Response } from "express";
import { VacancyService } from "../../core/services/VacancyService";
import { VacancyEntity } from "../../core/entity/VacancyEntity";

const vacancyService = new VacancyService();

export const createVacancy = async (req: Request, res: Response): Promise<void> => {
    try {
        const newVacancyData: VacancyEntity = req.body;
        const newVacancy = await vacancyService.createVacancy(newVacancyData);
        res.json(newVacancy);
    } catch (error) {
        console.error('Ошибка при создании вакансии:', error);
        res.status(500).json({ error: 'Ошибка при создании вакансии' });
    }
}


export const getAllVacancies = async (req: Request, res: Response): Promise<void> => {
    try {
        const vacancies = await vacancyService.findAllVacancy();
        res.json(vacancies);
    } catch (error) {
        console.error('Ошибка при получении вакансий:', error);
        res.status(500).json({ error: 'Ошибка при получении вакансий' });
    }
}

