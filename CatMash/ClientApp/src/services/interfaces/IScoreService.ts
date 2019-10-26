
/**
 * This is the definition of the game score service.
 * */
export interface IScoreService {

    /**
     * Calculate the score of the duels
     * */
    CalculateScores(leftCatActualScore: number, rightCatActualScore: number, leftCatScore: number, rightCatScore: number): number[];
}
