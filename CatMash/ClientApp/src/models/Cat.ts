import { Url } from "url";
import { IOpponent } from "./interfaces/IOpponent";

export class Cat implements IOpponent {

    /**
     * The image of tye cat.
     * */
    private image: Url;

    /**
     * The id of the cat.
     * */
    private id: string;

    constructor(id:string, image:Url) {
        if (!id) {
            throw new Error("The id parameter of type string is not defined. File Cats.ts");
        }
        if (!image) {
            throw new Error("The image parameter of type Url is not defined. File Cats.ts");
        }

        this.id = id;
        this.image = image;
        this.Score = 0;
    }

    /**
    * Gets the image of the cat
    */
    public get Image(): Url {

        if (!this.image) {
            throw new Error("The image is not defined. File Cats.ts");
        }

        return this.image;
    }

    /**
    * Gets the id of the cat
    */
    public get Id(): string {

        if (!this.id) {
            throw new Error("The id is not defined. File Cats.ts");
        }

        return this.id;
    }

    /**
     * The score of the cat.
     * */
    Score: number;
}
