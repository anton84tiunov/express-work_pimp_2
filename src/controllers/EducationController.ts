import { Request, Response } from "express";
import { EducationService } from "../services/EducationService";
import { EducationEntity } from "../entity/EducationEntity";

const educationService = new EducationService();

export const createEducation = async (req: Request, res: Response): Promise<void> => {
    try {
        const newEducationData: EducationEntity = req.body;
        // Установка user_id из запроса
        newEducationData.user = req.body.user_id;
        const newEducation = await educationService.createEducation(newEducationData);
        res.status(201).json(newEducation);
    } catch (error) {
        console.error('Ошибка при создании образования:', error);
        res.status(500).json({ error: 'Ошибка при создании образования' });
    }
}

export const  getAllEducations =  async (req: Request, res: Response): Promise<void> => {
    try {
        const educations = await educationService.getAllEducations();
        console.log(educations);
        res.json(educations);
    } catch (error) {
        console.error('Ошибка при получении образования:', error);
        res.status(500).json({ error: 'Ошибка при получении образования' });
    }
}

