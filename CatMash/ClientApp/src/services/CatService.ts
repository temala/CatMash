import { ICatService } from "./interfaces/ICatService";
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from "@angular/core";
import { extend } from "webdriver-js-extender";
import { CatServiceBase } from "./CatServiceBase";

/**
 * This is an implementation of the ICatService
 * */
@Injectable()
export class CatService extends CatServiceBase {

    /**
     * The http client used to request the external http server.
     * */
    httpClient: HttpClient;

    /**
     * @inheritdoc
     */
    ApiBaseUri: string;

    constructor(http: HttpClient, @Inject('CAT_SERVER_URL') baseUrl: string) {
        super();

        if (!http) {
            throw new Error("The http parameter of type HttpClient is not defined. File cat.service.ts");
        }

        this.httpClient = http;
        this.ApiBaseUri = baseUrl;
    }

    /**
     * @inheritdoc
     */
    GetCatList() {
        return this.httpClient.get(this.ApiBaseUri +'?id=cats.json');
    }
}
