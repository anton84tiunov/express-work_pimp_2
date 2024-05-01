// ApplicationService.ts
import { ApplicationEntity } from '../entities/ApplicationEntity';
import { ApplicationRepository } from '../repositories/ApplicationRepository';

export class ApplicationService {
  async createApplication(applicationData: ApplicationEntity): Promise<ApplicationEntity> {
    return await ApplicationRepository.save(applicationData);
  }

  async getAllApplications(): Promise<ApplicationEntity[]> {
    return await ApplicationRepository.find({ relations: ['user', 'vacancy'] });
  }

  // Другие методы для работы с заявками (update, delete, etc.)
}