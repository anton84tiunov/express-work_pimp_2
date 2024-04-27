import { EducationEntity } from "../entity/EducationEntity";
import { EducationRepository } from "../repositories/EducationRepository";


export class EducationService {
    createEducation = async (educationData: EducationEntity): Promise<EducationEntity> => {
        return await EducationRepository.save(educationData);
    }

    getAllEducations = async (): Promise<EducationEntity[]> => {
        return await EducationRepository.find({ relations: ['user_created'] });
    }
}


