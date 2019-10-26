import { ICatsManager } from "./interfaces/ICatsManager";
import { IDuel } from "./interfaces/IDuel";
import { IOpponent } from "./interfaces/IOpponent";

/**
 * This is an abstract implementation of the ICatsManager.
 * This class is used only for the Data injection.
 * */
export abstract class CatManagerBase implements ICatsManager {
    /**
    * @inheritdoc
    */
    public IsInitialized: boolean;

    /**
     * @inheritdoc
     */
    abstract GetNewDuel(): IDuel;

    /**
     * @inheritdoc
     */
    abstract UpdateCatScore(catId: string, newScore: number): void;

    /**
     * @inheritdoc
     */
    abstract GetWinner(): IOpponent;

    /**
     * @inheritdoc
     */
    abstract GetCatList(): IOpponent[];
}
