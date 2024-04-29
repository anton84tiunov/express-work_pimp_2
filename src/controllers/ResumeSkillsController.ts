import { Request, Response } from "express";
import { ResumeSkillsService } from "../services/ResumeSkillsService";
import { ResumeSkillsEntity } from "../entity/ResumeSkillsEntity";

const resumeSkillsService = new ResumeSkillsService();

export const createResumeSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const newResumeSkillsData: ResumeSkillsEntity = req.body;
        const newResumeSkills = await resumeSkillsService.createResumeSkill(newResumeSkillsData);
        res.json(newResumeSkills);
    } catch (error) {
        console.error('Ошибка при создании совпадения:', error);
        res.status(500).json({ error: 'Ошибка при создании совпадения' });
    }
}

export const getAllResumeSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        const resumeSkills = await resumeSkillsService.findAllResumeSkill();
        res.json(resumeSkills);
    } catch (error) {
        console.error('Ошибка при получении совпадений:', error);
        res.status(500).json({ error: 'Ошибка при получении совпадений' });
    }
}
