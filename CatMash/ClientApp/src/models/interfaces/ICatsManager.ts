import { IDuel } from "./IDuel";
import { IOpponent } from "./IOpponent";

/**
 * This manager allow to serve cat duels and allow to update cats scores
 * */
export interface ICatsManager {

    /**
     * Indicates if the manager is initialized and all cats info are loaded.
     * */
    IsInitialized: boolean;

    /**
      * Gets a new cat duel from the catList
      * @returns @type IDuel of cats
      */
    GetNewDuel(): IDuel;

    /**
     * Update the score of the cat that correspond to the catId
     * @param catId The id of the cat to update
     * @param newScore The new score of the corresponding cat
     */
    UpdateCatScore(catId: string, newScore: number): void;

    /**
     * Get the best ranking opponenet.
     * */
    GetWinner(): IOpponent;

    /**
    * Get sorted list of opponenet based on theire score
    */
    GetCatList(): IOpponent[];
}
