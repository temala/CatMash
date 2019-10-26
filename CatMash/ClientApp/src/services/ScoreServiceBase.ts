import { IScoreService } from "./interfaces/IScoreService";

export abstract class ScoreServiceBase implements IScoreService {

    /**
    * @inheritdoc
    */
    abstract CalculateScores(leftCatActualScore: number, rightCatActualScore: number, leftCatScore: number, rightCatScore: number): number[];
}
