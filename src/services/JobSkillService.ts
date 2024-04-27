import { JobSkillEntity } from "../entity/JobSkillEntity";
import { JobSkillRepository } from "../repositories/JobSkillRepository";


export class JobSkillService {
    async createJobSkill(jobSkillData: JobSkillEntity): Promise<JobSkillEntity> {
        return await JobSkillRepository.save(jobSkillData);
    }

    async getAllJobSkills(): Promise<JobSkillEntity[]> {
        return await JobSkillRepository.find({ relations: ['job','skill'] });
    }
}
