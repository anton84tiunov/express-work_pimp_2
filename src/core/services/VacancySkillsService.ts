import { VacancySkillsEntity } from "../entity/VacancySkillsEntity";
import { VacancySkillsRepository } from "../repositories/VacancySkillsRepository";

export class VacancySkillsService {
    async createVacancySkill(vacancySkills: VacancySkillsEntity): Promise<VacancySkillsEntity> {
        return await VacancySkillsRepository.create(vacancySkills);
    }

    async findAllVacancySkill(): Promise<VacancySkillsEntity[]> {
        return await VacancySkillsRepository.find();
    }
}


