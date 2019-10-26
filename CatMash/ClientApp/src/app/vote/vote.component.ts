import { Component } from '@angular/core';
import { IDuel } from '../../models/interfaces/IDuel';
import { ICatsManager } from '../../models/interfaces/ICatsManager';
import { CatManagerBase } from '../../models/CatManagerBase';
import { IOpponent } from '../../models/interfaces/IOpponent';
import { IScoreService } from '../../services/interfaces/IScoreService';
import { ScoreServiceBase } from '../../services/ScoreServiceBase';

@Component({
    selector: 'app-vote-component',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']
})
export class VoteComponent {

    /**
     * The cats manager
     * Used to get the cat list and to update their scores.
     * */
    private catsManager: ICatsManager;

    /**
     * The service that provide the score calculation algo.
     * */
    private scoreService: IScoreService;

    /**
     * The default weight value of winning a duel
     * */
    private readonly WIN = 1;

    /**
    * The default weight value of loosing a duel
    * */
    private readonly LOOSE = 0;

    /**
     * Create an instance of a vote componenet
     * @param catsManager The cat list manager
     * @param scoreService The service that provide the scoring algo
     */
    constructor(catsManager: CatManagerBase, scoreService: ScoreServiceBase) {

        if (!catsManager) {
            throw new Error("The catsManager parameter of type CatsManager is not defined. File vote.component.ts");
        }

        if (!scoreService) {
            throw new Error("The catsManager parameter of type CatsManager is not defined. File vote.component.ts");
        }

        this.catsManager = catsManager;

        this.scoreService = scoreService;
    }

    /**
     * Represents the current cat tuple shown on the screen.
     * */
    CurrentCatDuel: IDuel;

    /**
     * Represent the cat with maximum score.
     * */
    Winner: IOpponent;

    /**
    * Indicates if all the cats has a score
    * */
    public get IsGameStarted() {

        return this.Winner != null;
    }

    /**
     * Indicates if the cats manager is initialized and initialize the first duel.
     * */
    public get IsInitialized() {

        let init = this.catsManager.IsInitialized;

        if (init && !this.CurrentCatDuel) {

            this.GetNextCatDuel();
        }

        return init;
    }

    /**
    * Get the next cat duel to show on the screen. 
    * */
    private GetNextCatDuel() {

        try {
            this.CurrentCatDuel = this.catsManager.GetNewDuel();

            this.Winner = this.catsManager.GetWinner();
        }
        catch (e) {
            if (e.message == "All cat duels are scored !") {
                this.Winner = this.catsManager.GetWinner();
            }
        }
    }

    /**
     * Update the score of the current cats duel and generate a new duel.
     * 
     * @param selectedCatId The winner cat id.
     */
    public Vote(selectedCatId: string) {

        if (selectedCatId != this.CurrentCatDuel.LeftOpponenet.Id && selectedCatId != this.CurrentCatDuel.RightOpponenet.Id) {
            throw new Error("The selected cat is not part of the current duel");
        }

        let newLeftScore = this.CurrentCatDuel.LeftOpponenet.Id === selectedCatId ? this.WIN : this.LOOSE;
        let newRightScore = this.CurrentCatDuel.RightOpponenet.Id === selectedCatId ? this.WIN : this.LOOSE;

        let newScores = this.scoreService.CalculateScores(this.CurrentCatDuel.LeftOpponenet.Score, this.CurrentCatDuel.RightOpponenet.Score, newLeftScore, newRightScore);

        this.catsManager.UpdateCatScore(this.CurrentCatDuel.LeftOpponenet.Id, newScores[0]);
        this.catsManager.UpdateCatScore(this.CurrentCatDuel.RightOpponenet.Id, newScores[1]);

        this.GetNextCatDuel();
    }
}
