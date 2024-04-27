
import { ApplicationEntity } from "../entity/ApplicationEntity";
import { ApplicationRepository } from "../repositories/ApplicationRepository";

export class ApplicationService {
    async createApplication(applicationData: ApplicationEntity): Promise<ApplicationEntity> {
        return await ApplicationRepository.save(applicationData);
    }

    async getAllApplications(): Promise<ApplicationEntity[]> {
        return await ApplicationRepository.find({ relations: ['job', 'applicant'] });
    }
}


