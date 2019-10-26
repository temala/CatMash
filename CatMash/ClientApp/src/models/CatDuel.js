"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represqent an implementation of IDuel
 * */
var CatDuel = /** @class */ (function () {
    /**
     * Create a new instance of the CatDuel object.
     * @param leftCat The left side cat
     * @param rightCat The right side cat
     */
    function CatDuel(leftCat, rightCat) {
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
    Object.defineProperty(CatDuel.prototype, "LeftOpponenet", {
        /**
         * @inheritdoc
         */
        get: function () {
            if (!this.leftCat) {
                throw new Error("The leftCat is not defined. File CatDuel.ts");
            }
            return this.leftCat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CatDuel.prototype, "RightOpponenet", {
        /**
         * @inheritdoc
         */
        get: function () {
            if (!this.rightCat) {
                throw new Error("The rightCat is not defined. File CatDuel.ts");
            }
            return this.rightCat;
        },
        enumerable: true,
        configurable: true
    });
    return CatDuel;
}());
exports.CatDuel = CatDuel;
//# sourceMappingURL=CatDuel.js.map