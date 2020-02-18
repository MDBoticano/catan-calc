export default class Dice {
  faces: number[];
  numOutcomes: number;

  constructor (diceFaces?: number[]) {
    const faces = diceFaces ? diceFaces : [1, 2, 3, 4, 5, 6];
    this.faces = faces;
    this.numOutcomes = faces.length;
  };

  roll (modifier?: string) {
    let outcome: number;

    switch (modifier) {
      case "max":
        const maxOutcome = this.faces.length;
        outcome =  this.faces[maxOutcome - 1];
        break;
      case "min":
        const minOutcome = this.faces[0];
        outcome = minOutcome;
        break;
      default: 
        const numOutcomes = this.faces.length;
        const rollNum = Math.floor(Math.random() * numOutcomes);
        outcome = this.faces[rollNum];
    }
    return outcome;
  };
}