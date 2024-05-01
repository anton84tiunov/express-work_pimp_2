import express from 'express';
import {createMatch, getAllMatches} from '../controllers/matches/MatchesController';

const MatchRouter = express.Router();

MatchRouter.post('/create', createMatch);

MatchRouter.post('/get_all', getAllMatches);

export default MatchRouter;
