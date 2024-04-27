import { Request, Response } from "express";
import { JobSkillService } from "../services/JobSkillService";
import { JobSkillEntity } from "../entity/JobSkillEntity";

const jobSkillService = new JobSkillService();

export const createJobSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        const newJobSkillData: JobSkillEntity = req.body;
        const newJobSkill = await jobSkillService.createJobSkill(newJobSkillData);
        res.status(201).json(newJobSkill);
    } catch (error) {
        console.error('Ошибка при создании навыка:', error);
        res.status(500).json({ error: 'Ошибка при создании навыка' });
    }
}

export const  getAllJobSkills =  async (req: Request, res: Response): Promise<void> => {
    try {
        const jobSkills = await jobSkillService.getAllJobSkills();
        res.json(jobSkills);
    } catch (error) {
        console.error('Ошибка при получении навыков:', error);
        res.status(500).json({ error: 'Ошибка при получении навыков' });
    }
}