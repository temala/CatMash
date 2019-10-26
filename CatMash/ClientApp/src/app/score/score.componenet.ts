import { Component } from "@angular/core";
import { CatManagerBase } from "../../models/CatManagerBase";
import { ICatsManager } from "../../models/interfaces/ICatsManager";

@Component({
    selector: 'app-score-component',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent {

    /**
    * The cats manager
    * Used to get the cat list and to update their scores.
    * */
    private catsManager: ICatsManager;

    /**
    * Create an instance of a vote componenet
    * @param catsManager The cat list manager
    * @param scoreService The service that provide the scoring algo
    */
    constructor(catsManager: CatManagerBase) {

        if (!catsManager) {
            throw new Error("The catsManager parameter of type CatsManager is not defined. File score.component.ts");
        }

        this.catsManager = catsManager;
    }


    /**
    * Indicates if the cats manager is initialized.
    * */
    public get IsInitialized() {

        return this.catsManager.IsInitialized;
    }

    public get Cats() {
        
        return this.catsManager.GetCatList();
    }
}
