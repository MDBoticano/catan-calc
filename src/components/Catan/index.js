"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dice_1 = require("../Dice/");
class Catan {
    constructor(gameDice = new Dice_1.default()) {
        this.dice = gameDice;
        this.sumCounts = Catan.calcSumCounts(gameDice);
    }
    calculateChances(adjacentTiles) {
        const tileCounts = adjacentTiles.map((key) => this.sumCounts[key]);
        const totalTileChances = tileCounts.reduce((total, chance) => {
            return total + chance;
        });
        return totalTileChances;
    }
}
exports.default = Catan;
// Helper function: used by Catan to calculate sumCounts
Catan.calcSumCounts = (dice) => {
    const twoDicePermutations = dice.rollPermutations(2);
    const twoDicePermutationsSums = twoDicePermutations.map((roll) => {
        return Dice_1.default.sumRolls(roll);
    });
    const uniqueSums = [...new Set(twoDicePermutationsSums)];
    // Make an object where each key is a sum, and its value is the chance to roll
    const sumCounts = {};
    uniqueSums.forEach((x) => sumCounts[x] = 0);
    for (let i = 0; i < twoDicePermutationsSums.length; i++) {
        sumCounts[twoDicePermutationsSums[i]] += 1;
    }
    return sumCounts;
};
//# sourceMappingURL=index.js.map