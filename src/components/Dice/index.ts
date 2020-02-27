export default class Dice {
  outcomes: number[];

  constructor(outcomes?: number | number[]) {
    let sortedOutcomes = [];

    if (outcomes === undefined) { outcomes = 6; }

    if (typeof outcomes === "number") {
      sortedOutcomes = [...Array(outcomes).keys()].map(n => n + 1);
    } else {
      sortedOutcomes = outcomes.sort();
    }
    this.outcomes = sortedOutcomes;
  }

  get numOutcomes () { return this.outcomes.length; }

  get min () { return this.outcomes[0]; } 

  get max () { return this.outcomes[this.numOutcomes - 1]; }

  /**
   * Return an n-number of random outcomes from the array
   * @param rolls - number of rolls to make (default 1)
   * @returns roll results in an array
   */
  roll(rolls = 1) {
    const rollDie = () => { 
      const randomIndex = Math.floor(Math.random() * this.numOutcomes);
      return this.outcomes[randomIndex]; 
    }

    const results = [];
    for (let i = 0; i < rolls; i++) { results.push(rollDie()); }

    return results;
  }

  rollPermutations(numRolls: number) {
    const permutations: number[][] = [];
    const currentPermutation: number[] = [];
    const potentialOutcomes = this.outcomes;
    const numOutcomes = this.numOutcomes;
    
    function generatePermutation (numRolls: number, currentPermutation: number[]) {
      if (numRolls === 0) {
        permutations.push([...currentPermutation]);
      } else {
        for (let i = 0; i < numOutcomes; i++) {
          currentPermutation.push(potentialOutcomes[i]);
          generatePermutation(numRolls - 1, currentPermutation);
          currentPermutation.pop();
        }
      }
    }
    generatePermutation(numRolls, currentPermutation);

    return permutations;
  }

  static sumRolls (rolls: number[]) {
    const sum = rolls.reduce((a, b) => a + b);
    return sum;
  }

  static orderRolls (rolls: number[], direction = "descending") {
    if (direction === "descending") {
      return rolls.sort((a, b) => b - a);
    } else if (direction === "ascending") {
      return rolls.sort();
    } else {
      return rolls;
    }
  }
}
