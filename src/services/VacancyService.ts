import { VacancyEntity } from "../entity/VacancyEntity";
import { VacancyRepository } from "../repositories/VacancyRepository";

export class VacancyService {
    async createVacancy(vacancy: VacancyEntity): Promise<VacancyEntity> {
        return await VacancyRepository.create(vacancy);
    }

    async findAllVacancy(): Promise<VacancyEntity[]> {
        return await VacancyRepository.find();
    }
}


