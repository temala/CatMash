import { IDuel } from "./interfaces/IDuel";
import { Cat } from "./Cat";
import { IOpponent } from "./interfaces/IOpponent";

/**
 * Represqent an implementation of IDuel
 * */
export class CatDuel implements IDuel {

    /** The cat that will be shown on the left side of the screen */
    private leftCat: Cat;

    /** The cat that will be shown on the right side of the screen */
    private rightCat: Cat;

    /**
     * Create a new instance of the CatDuel object.
     * @param leftCat The left side cat
     * @param rightCat The right side cat
     */
    constructor(leftCat: Cat, rightCat: Cat) {

        if (!leftCat) {
            throw new Error("The leftCat parameter of type Cat is not defined. File CatDuel.ts");
        }
        if (!rightCat) {
            throw new Error("The rightCat parameter of type Cat is not defined. File CatDuel.ts");
        }
        if (leftCat.Id === rightCat.Id) {
            throw new Error("The duel can't have the same item in both sides");
        }

        this.leftCat = leftCat;
        this.rightCat = rightCat;
    }

    /**
     * @inheritdoc
     */
    public get LeftOpponenet(): Cat {

        if (!this.leftCat) {
            throw new Error("The leftCat is not defined. File CatDuel.ts");
        }

        return this.leftCat;
    }

    /**
     * @inheritdoc
     */
    public get RightOpponenet(): Cat {

        if (!this.rightCat) {
            throw new Error("The rightCat is not defined. File CatDuel.ts");
        }

        return this.rightCat;
    }

}
