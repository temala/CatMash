import { Url } from "url";

export interface IOpponent {
    /**
     * The image of tye opponenet.
     * */
    Image: Url;

    /**
     * The id of the opponenet.
     * */
    Id: string;

    /**
     * The score of the opponenet.
     * */
    Score: number;
}
