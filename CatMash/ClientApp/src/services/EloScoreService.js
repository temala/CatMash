"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreServiceBase_1 = require("./ScoreServiceBase");
var EloScoreService = /** @class */ (function (_super) {
    __extends(EloScoreService, _super);
    function EloScoreService() {
        var _this = _super.call(this) || this;
        _this.k = 10;
        return _this;
    }
    EloScoreService.prototype.getExpectedScores = function (leftCatRank, rightCatRank) {
        var expectedLeftScore = 1 / (1 + (Math.pow(10, (rightCatRank - leftCatRank) / 400)));
        var expectedRightScore = 1 / (1 + (Math.pow(10, (leftCatRank - rightCatRank) / 400)));
        return [expectedLeftScore, expectedRightScore];
    };
    EloScoreService.prototype.getNewScores = function (leftRank, rightRank, leftExpected, rightExpected, leftScore, rightScore) {
        var newLeftRank = leftRank + (this.k * (leftScore - leftExpected));
        var newRightRank = rightRank + (this.k * (rightScore - rightExpected));
        return [newLeftRank, newRightRank];
    };
    EloScoreService.prototype.CalculateScores = function (leftCatActualScore, rightCatActualScore, leftCatScore, rightCatScore) {
        this.leftActualScore = leftCatActualScore;
        this.rightActualScore = rightCatActualScore;
        this.leftGameScore = leftCatScore;
        this.rightGameScore = rightCatScore;
        var expectedScores = this.getExpectedScores(this.leftActualScore, this.rightActualScore);
        this.expectedLeftScore = expectedScores[0];
        this.expectedRightScore = expectedScores[1];
        return this.getNewScores(this.leftActualScore, this.rightActualScore, this.expectedLeftScore, this.expectedRightScore, this.leftGameScore, this.rightGameScore);
    };
    return EloScoreService;
}(ScoreServiceBase_1.ScoreServiceBase));
exports.EloScoreService = EloScoreService;
//# sourceMappingURL=EloScoreService.js.map