import { ScoreServiceBase } from "./ScoreServiceBase";
import { Injectable } from "@angular/core";

@Injectable()
export class EloScoreService extends ScoreServiceBase {

    private readonly k: number = 10;

    private leftActualScore: number;

    private rightActualScore: number;

    private leftGameScore: number;

    private rightGameScore: number;

    private expectedLeftScore: number;

    private expectedRightScore: number;

    private getExpectedScores(leftCatRank: number, rightCatRank: number): number[] {

        let expectedLeftScore = 1 / (1 + (Math.pow(10, (rightCatRank - leftCatRank) / 400)));
        let expectedRightScore = 1 / (1 + (Math.pow(10, (leftCatRank - rightCatRank) / 400)));

        return [expectedLeftScore, expectedRightScore];
    }

    private getNewScores(leftCurrentScore: number, rightCurrentRank: number, leftExpected: number, rightExpected: number, leftGameScore: number, rightGameScore: number) {

        let newLeftScore = leftCurrentScore + (this.k * (leftGameScore - leftExpected));
        let newRightScore = rightCurrentRank + (this.k * (rightGameScore - rightExpected));

        return [newLeftScore, newRightScore];
    }

    constructor() {
        super();
    }

    public CalculateScores(leftCatActualScore: number, rightCatActualScore: number, leftCatScore: number, rightCatScore: number): number[] {

        this.leftActualScore = leftCatActualScore;
        this.rightActualScore = rightCatActualScore;

        this.leftGameScore = leftCatScore;
        this.rightGameScore = rightCatScore;

        let expectedScores = this.getExpectedScores(this.leftActualScore, this.rightActualScore);

        this.expectedLeftScore = expectedScores[0];
        this.expectedRightScore = expectedScores[1];

        return this.getNewScores(this.leftActualScore, this.rightActualScore, this.expectedLeftScore, this.expectedRightScore, this.leftGameScore, this.rightGameScore);
    }
}
