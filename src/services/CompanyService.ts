import { CompanyEntity } from "../entity/CompanyEntity";
import { CompanyRepository } from "../repositories/CompanyRepository";

export class CompanyService {
    async createCompany(companyData: CompanyEntity): Promise<CompanyEntity> {
        return await CompanyRepository.save(companyData);
    }

    async getAllCompanies(): Promise<CompanyEntity[]> {
        return await CompanyRepository.find({ relations: ['users', 'jobs'] });
    }
}