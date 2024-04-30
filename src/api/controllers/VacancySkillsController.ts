import { Request, Response } from "express";
import { VacancySkillsService } from "../../core/services/VacancySkillsService";
import { VacancySkillsEntity } from "../../core/entity/VacancySkillsEntity";

const vacancySkillsService = new VacancySkillsService();

export const createVacancySkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const newVacancySkillsData: VacancySkillsEntity = req.body;
        const newVacancySkills = await vacancySkillsService.createVacancySkill(newVacancySkillsData);
        res.json(newVacancySkills);
    } catch (error) {
        console.error('Ошибка при создании вакансии:', error);
        res.status(500).json({ error: 'Ошибка при создании вакансии' });
    }
}


export const getAllVacancySkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const vacancySkills = await vacancySkillsService.findAllVacancySkill();
        res.json(vacancySkills);
    } catch (error) {
        console.error('Ошибка при получении вакансий:', error);
        res.status(500).json({ error: 'Ошибка при получении вакансий' });
    }
}
