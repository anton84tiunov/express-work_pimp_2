import { ResumeSkillsEntity } from "../entities/ResumeSkillsEntity";
import { ResumeSkillsRepository } from "../repositories/ResumeSkillsRepository";

export class ResumeSkillsService {
    async createResumeSkill(resume_skill: ResumeSkillsEntity): Promise<ResumeSkillsEntity> {
        return await ResumeSkillsRepository.create(resume_skill);
    }

    async findAllResumeSkill(): Promise<ResumeSkillsEntity[]> {
        return await ResumeSkillsRepository.find();
    }
}

