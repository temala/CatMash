import { Cat } from "../Cat";
import { IOpponent } from "./IOpponent";

/**
 * This is a representation of a duel of tow cats.
 * */
export interface IDuel {

    /**
     * This represents the opponenet that will be show at the left side of the screen.
     * */
    LeftOpponenet: IOpponent;

    /**
     * This represents the opponenet that will be shown at the right side of the screen.
     * */
    RightOpponenet: IOpponent;   
}
