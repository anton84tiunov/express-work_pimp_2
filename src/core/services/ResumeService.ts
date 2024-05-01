import { ResumeEntity } from "../entities/ResumeEntity";
import { ResumeRepository } from "../repositories/ResumeRepository";

export class ResumeService {
    async createResume(resume: ResumeEntity): Promise<ResumeEntity> {
        return await ResumeRepository.create(resume);
    }

    async findAlResumel(): Promise<ResumeEntity[]> {
        return await ResumeRepository.find();
    }
}


