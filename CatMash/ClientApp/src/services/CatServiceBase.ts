import { ICatService } from "./interfaces/ICatService";

export abstract class CatServiceBase implements ICatService {

    /**
     * @inheritdoc
     */
    abstract  ApiBaseUri: string;

    /**
     * @inheritdoc
     */
    abstract GetCatList();
}
