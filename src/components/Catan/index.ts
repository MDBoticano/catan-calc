import Dice from '../Dice/';



export default class Catan {
  dice: Dice;
  sumCounts: object;

  constructor(gameDice = new Dice()) {
    this.dice = gameDice;
    this.sumCounts = Catan.calcSumCounts(gameDice);
  }

  // Helper function: used by Catan to calculate sumCounts
  private static calcSumCounts = (dice: Dice) => {
  const twoDicePermutations = dice.rollPermutations(2);
  const twoDicePermutationsSums = twoDicePermutations.map((roll) => {
    return Dice.sumRolls(roll);
  });

  const uniqueSums = [...new Set(twoDicePermutationsSums)];

  // Make an object where each key is a sum, and its value is the chance to roll
  const sumCounts = {};
  uniqueSums.forEach((x) => sumCounts[x] = 0);
  for (let i = 0; i < twoDicePermutationsSums.length; i++) {
    sumCounts[twoDicePermutationsSums[i]] += 1;
  }
  return sumCounts;
}

  calculateChances( adjacentTiles: number[]) {
    const tileCounts = adjacentTiles.map((key) => this.sumCounts[key]);
    const totalTileChances = tileCounts.reduce((total, chance) => {
      return total + chance;
    });
    return totalTileChances;
  }
}
