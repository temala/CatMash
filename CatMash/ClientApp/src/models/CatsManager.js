"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./Cat");
var CatsManager = /** @class */ (function () {
    /**
     * Create a new instance of a vote component.
     * @param service The service used to request cat list
     */
    function CatsManager(service) {
        if (!service) {
            throw new Error("The service parameter of type CatService is not defined. File CatsManager.ts");
        }
        this.catService = service;
    }
    /**
    * Initialize the list of cats
    * */
    CatsManager.prototype.InitCatList = function () {
        var _this = this;
        this.catService.GetCatList()
            .subscribe(function (results) {
            _this.catList = results.images.map(function (cat) { return new Cat_1.Cat(cat.id, cat.url); });
        });
    };
    /**
     * @inheritdoc
     */
    CatsManager.prototype.GetNewDuel = function () {
        throw new Error("Method not implemented.");
    };
    /**
     * @inheritdoc
     */
    CatsManager.prototype.UpdateCatScore = function (catId, newScore) {
        if (!catId) {
            throw new Error("The catId parameter of type string is not defined. File CatsManager.ts");
        }
        if (!newScore) {
            throw new Error("The newScore parameter of type number is not defined. File CatsManager.ts");
        }
        if (this.catList) {
        }
    };
    CatsManager.prototype.ngOnInit = function () {
        this.InitCatList();
    };
    return CatsManager;
}());
exports.CatsManager = CatsManager;
//# sourceMappingURL=CatsManager.js.map