import { SkillEntity } from "../entity/SkillEntity";
import { SkillRepository } from "../repositories/SkillRepository";


export class SkillService {
    async createSkill(skillData: SkillEntity): Promise<SkillEntity> {
        return await SkillRepository.save(skillData);
    }

    async getAllSkills(): Promise<SkillEntity[]> {
        return await SkillRepository.find({ relations: ['user'] });
    }
} 