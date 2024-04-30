import { MatchEntity } from "../entity/MatchEntity";
import { MatchRepository } from "../repositories/MatchRepository";


export class MatchService {
    async createMatch(matchData: MatchEntity): Promise<MatchEntity> {
        return await MatchRepository.save(matchData);
    }

    async getAllMatches(): Promise<MatchEntity[]> {
        return await MatchRepository.find({ relations: ['resume', 'vacancy'] });
    }
}

