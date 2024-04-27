import { JobCategoryEntity } from "../entity/JobCategoryEntity";
import { JobCategoryRepository } from "../repositories/JobCategoryRepository";

export class JobCategoryService {
    async createJobCategory(jobCategoryData: JobCategoryEntity): Promise<JobCategoryEntity> {
        return await JobCategoryRepository.save(jobCategoryData);
    }

    async getAllJobCategories(): Promise<JobCategoryEntity[]> {
        return await JobCategoryRepository.find({ relations: ['jobs'] });
    }
}
  