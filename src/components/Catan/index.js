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
/**
 * Calculate the occurences of a sum for all permutations for rolled dice
 * @param {Dice} dice for the game
 */
Catan.calcSumCounts = (dice) => {
    const numDiceRolled = 2;
    const dicePermutations = dice.rollPermutations(numDiceRolled);
    const dicePermutationsSums = dicePermutations.map((roll) => {
        return Dice_1.default.sumRolls(roll);
    });
    const uniqueSums = [...new Set(dicePermutationsSums)];
    // Make an object where each key is a sum, its value is the chance to roll
    const sumCounts = { total: dicePermutationsSums.length };
    uniqueSums.forEach((sum) => sumCounts[sum] = 0);
    for (let i = 0; i < dicePermutationsSums.length; i++) {
        sumCounts[dicePermutationsSums[i]] += 1;
    }
    return sumCounts;
};
//# sourceMappingURL=index.js.map