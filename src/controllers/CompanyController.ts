import { Request, Response } from "express";
import { CompanyService } from "../services/CompanyService";
import { CompanyEntity } from "../entity/CompanyEntity";

const companyService = new CompanyService();

export const createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const newCompanyData: CompanyEntity = req.body;
        const newCompany = await companyService.createCompany(newCompanyData);
        res.status(201).json(newCompany);
    } catch (error) {
        console.error('Ошибка при создании компании:', error);
        res.status(500).json({ error: 'Ошибка при создании компании' });
    }
}

export const  getAllCompanies =  async (req: Request, res: Response): Promise<void> => {
    try {
        const companies = await companyService.getAllCompanies();
        res.json(companies);
    } catch (error) {
        console.error('Ошибка при получении компаний:', error);
        res.status(500).json({ error: 'Ошибка при получении компаний' });
    }
}