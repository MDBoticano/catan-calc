import Dice from '../Dice/';

interface SumCounts {
  [key: string]: number;
}

export default class Catan {
  dice: Dice;
  sumCounts: SumCounts;

  constructor(gameDice = new Dice()) {
    this.dice = gameDice;
    this.sumCounts = Catan.calcSumCounts(gameDice);
  }

  /**
   * Calculate the occurences of a sum for all permutations for rolled dice
   * @param {Dice} dice for the game
   */
  private static calcSumCounts = (dice: Dice) => {
    const numDiceRolled = 2;

    const dicePermutations = dice.rollPermutations(numDiceRolled);
    const dicePermutationsSums = dicePermutations.map((roll) => {
      return Dice.sumRolls(roll);
    });
    const uniqueSums = [...new Set(dicePermutationsSums)];

    // Make an object where each key is a sum, its value is the chance to roll
    const sumCounts: SumCounts = { total: dicePermutationsSums.length };
    uniqueSums.forEach((sum) => sumCounts[sum] = 0);
    for (let i = 0; i < dicePermutationsSums.length; i++) {
      sumCounts[dicePermutationsSums[i]] += 1;
    }
    return sumCounts;
  }

  calculateChances(adjacentTiles: number[]) {
    const tileCounts = adjacentTiles.map((key) => this.sumCounts[key]);
    const totalTileChances = tileCounts.reduce((total, chance) => {
      return total + chance;
    });
    return totalTileChances;
  }
}
