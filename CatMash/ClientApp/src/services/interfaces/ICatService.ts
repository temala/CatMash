
/**
 * This is the cat service description
 * */
export interface ICatService {

    /**
     * This represents the base uri of the external http server.
     * */
    ApiBaseUri: string;

    /**
     * Get the cat list from an external http server
     * @returns a promise list of <url,id> that represent a cat image and the associated id.
     * Example:
     *
       {
        "images": [
                {
                  "url": "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
                  "id": "MTgwODA3MA"
                }
                ]
        }
     * */
    GetCatList();
}
