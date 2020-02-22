"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dice_1 = require("../Dice/");
exports.Catan = () => {
    const defaultDice = new Dice_1.default();
    const twoDicePermutations = defaultDice.rollPermutations(2);
    const twoDicePermutationsSums = twoDicePermutations.map((roll) => {
        return Dice_1.default.sumRolls(roll);
    });
    // console.log(twoDicePermutationSums);
    const uniqueSums = [...new Set(twoDicePermutationsSums)];
    // console.log(uniqueSums);  
    // Method 1: Array of objects [{ sum: number, count: number}, ...]
    // const uniqueSumsCount = uniqueSums.map((x) => ({ "sum": x, "count": 0 }));
    // each time a result appears, update the count in unique sums
    // for (let i = 0; i < twoDicePermutationsSums.length; i++) {
    //   // get the index in unique sums
    //   const indexOfSum = uniqueSumsCount.findIndex(x => {
    //     return x.sum === twoDicePermutationsSums[i];
    //   });
    //   // update its count by one
    //   uniqueSumsCount[indexOfSum].count += 1;
    // }
    // console.log(uniqueSumsCount);
    // Method 2: One object with each sum as a key
    const sumCounts = {};
    uniqueSums.forEach((x) => sumCounts[x] = 0);
    for (let i = 0; i < twoDicePermutationsSums.length; i++) {
        sumCounts[twoDicePermutationsSums[i]] += 1;
    }
    // console.log(sumCounts);
    // Calculate the odds a roll will appear based on adjacent tiles
    function calcChances(adjacentTiles) {
        const chancesOutOf36 = adjacentTiles.reduce((a, b) => {
            return a + sumCounts[b];
        });
        return chancesOutOf36;
    }
    const chances = calcChances([2, 2, 3]);
};
//# sourceMappingURL=index.js.map