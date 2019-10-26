"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = /** @class */ (function () {
    function Cat(id, image) {
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
    Object.defineProperty(Cat.prototype, "Image", {
        /**
        * Gets the image of the cat
        */
        get: function () {
            if (!this.image) {
                throw new Error("The image is not defined. File Cats.ts");
            }
            return this.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "Id", {
        /**
        * Gets the id of the cat
        */
        get: function () {
            if (!this.id) {
                throw new Error("The id is not defined. File Cats.ts");
            }
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}());
exports.Cat = Cat;
//# sourceMappingURL=Cat.js.map