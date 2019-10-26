import { ICatService } from "../services/interfaces/ICatService";
import { CatService } from "../services/CatService";
import { IDuel } from "./interfaces/IDuel";
import { Cat } from "./Cat";
import { Injectable, OnInit } from "@angular/core";
import { CatManagerBase } from "./CatManagerBase";
import { CatDuel } from "./CatDuel";
import { IOpponent } from "./interfaces/IOpponent";

@Injectable({
    providedIn: 'root',
})
export class CatsManager extends CatManagerBase {

    /**
    * The list of the cats opponentes
    * */
    private catList: Cat[];

    /**
     * The service used to query the http api for cat list.
     * */
    private catService: ICatService;

    /**
     * The matrix of possible at duels.
     * */
    private possibleDuels: IDuel[];

    /**
     * Create a new instance of a vote component.
     * @param service The service used to request cat list
     */
    constructor(service: CatService) {
        super();

        if (!service) {
            throw new Error("The service parameter of type CatService is not defined. File CatsManager.ts");
        }

        this.catService = service;

        this.possibleDuels = [];

        this.InitCatList();
    }

    /**
    * Initialize the list of cats
    * */
    private InitCatList(): void {
        this.catService.GetCatList()
            .subscribe(results => {
                this.catList = results.images.map(cat => new Cat(cat.id, cat.url));

                this.BuildDuelsMatrix();

                this.IsInitialized = true;
            });
    }

    /**
     * Buid the matrix of the possible duels of cats.
     * May throws an exception error if catList is initialized
     * */
    private BuildDuelsMatrix(): void {

        if (!this.catList) {
            throw new Error("The catList is not defined. File CatsManager.ts");
        }

        for (var i = 0; i < this.catList.length - 1; i++) {

            for (var j = i + 1; j < this.catList.length; j++) {

                this.possibleDuels.push(new CatDuel(this.catList[i], this.catList[j]));
            }
        }
    }

    /**
     * @inheritdoc
     * May throws an exception error if no more possible duel is available.
     */
    GetNewDuel(): IDuel {

        if (!this.possibleDuels) {
            throw new Error("The possibleDuels is not defined. File CatsManager.ts");
        }

        /**
         * Get a random cat duel from the available list
         * */
        let nextDuelIndex = Math.floor(Math.random() * Math.floor(this.possibleDuels.length));

        let nextDuel = this.possibleDuels[nextDuelIndex];

        /**
         * Delete the selected duel from the duel list
         * */
        this.possibleDuels.splice(nextDuelIndex, 1);

        if (!nextDuel) {

            throw new Error("All cat duels are scored !");
        }

        return nextDuel;

    }

    /**
     * @inheritdoc
     */
    UpdateCatScore(catId: string, newScore: number): void {
        if (!catId) {
            throw new Error("The catId parameter of type string is not defined. File CatsManager.ts");
        }

        if (this.catList) {

            let selectedCat = this.catList.filter(cat => cat.Id === catId)[0];

            selectedCat.Score = newScore;

        }
    }

    /**
     * @inheritdoc
     */
    GetWinner(): IOpponent {

        let maxScore = Math.max.apply(this, this.catList.map(cat => cat.Score));

        let winners = this.catList.filter(cat => cat.Score === maxScore);

        if (winners.length != this.catList.length) {
            return winners[0];
        }

        return null;
    }

    GetCatList(): IOpponent[] {

        return this.catList.sort((c1, c2) => (c1.Score > c2.Score) ? 1 : -1);
    }
}
