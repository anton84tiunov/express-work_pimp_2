import { Request, Response } from "express";
import { SkillService } from "../services/SkillService";
import { SkillEntity } from "../entity/SkillEntity";

const skillService = new SkillService();

export const createSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const newSkillData: SkillEntity = req.body;
        // Установка user_id из запроса
        newSkillData.user = req.body.user_id;
        const newSkill = await skillService.createSkill(newSkillData);
        res.json(newSkill);
    } catch (error) {
        console.error('Ошибка при создании навыка:', error);
        res.status(500).json({ error: 'Ошибка при создании навыка' });
    }
}

export const getAllSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const skills = await skillService.getAllSkills();
        res.json(skills);
    } catch (error) {
        console.error('Ошибка при получении навыков:', error);
        res.status(500).json({ error: 'Ошибка при получении навыков' });
    }
}


