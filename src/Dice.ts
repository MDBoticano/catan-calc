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

  rollOnce(): number {
    const rollNum = Math.floor(Math.random() * this.numOutcomes);
    const outcome = this.outcomes[rollNum];
    return outcome;
  }

  rollMultiple(numRolls: number): number[] {
    const rolls = [];
    for (let i = 0; i < numRolls; i++) {
      rolls.push(this.rollOnce());
    }
    return rolls;
  }
}
