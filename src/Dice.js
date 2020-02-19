"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dice {
    constructor(outcomes) {
        let sortedOutcomes = [];
        if (outcomes === undefined) {
            outcomes = 6;
        }
        if (typeof outcomes === "number") {
            sortedOutcomes = [...Array(outcomes).keys()].map(n => n + 1);
        }
        else {
            sortedOutcomes = outcomes.sort();
        }
        this.outcomes = sortedOutcomes;
    }
    get numOutcomes() { return this.outcomes.length; }
    get min() { return this.outcomes[0]; }
    get max() { return this.outcomes[this.numOutcomes - 1]; }
    /**
     * Return an n-number of random outcomes from the array
     * @param rolls - number of rolls to make (default 1)
     * @returns roll results in an array
     */
    roll(rolls = 1) {
        const rollDie = () => {
            const randomIndex = Math.floor(Math.random() * this.numOutcomes);
            return this.outcomes[randomIndex];
        };
        const results = [];
        for (let i = 0; i < rolls; i++) {
            results.push(rollDie());
        }
        return results;
    }
}
exports.default = Dice;
//# sourceMappingURL=Dice.js.map