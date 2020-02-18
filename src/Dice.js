"use strict";
exports.__esModule = true;
var Dice = /** @class */ (function () {
    function Dice(diceFaces) {
        var faces = diceFaces ? diceFaces : [1, 2, 3, 4, 5, 6];
        this.faces = faces;
        this.numOutcomes = faces.length;
    }
    ;
    Dice.prototype.roll = function (modifier) {
        var outcome;
        switch (modifier) {
            case "max":
                var maxOutcome = this.faces.length;
                outcome = this.faces[maxOutcome - 1];
                break;
            case "min":
                var minOutcome = this.faces[0];
                outcome = minOutcome;
                break;
            default:
                var numOutcomes = this.faces.length;
                var rollNum = Math.floor(Math.random() * numOutcomes);
                outcome = this.faces[rollNum];
        }
        return outcome;
    };
    ;
    return Dice;
}());
exports["default"] = Dice;
