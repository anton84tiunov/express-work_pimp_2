import { JobEntity } from "../entity/JobEntity";
import { JobRepository } from "../repositories/JobRepository";

export class JobService {
    createJob = async (jobData: JobEntity): Promise<JobEntity> => {
        return await JobRepository.save(jobData);
    }

    getAllJobs = async (): Promise<JobEntity[]> => {
        return await JobRepository.find({ relations: ['employer', 'applications'] });
    }
}

