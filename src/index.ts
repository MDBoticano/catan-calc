import Dice from './Dice';

const defaultDie = new Dice();

const myRoll = defaultDie.rollOnce();
const maxRoll = defaultDie.max;
const minRoll = defaultDie.min;

console.log(defaultDie);
console.log(myRoll);
console.log(minRoll);
console.log(maxRoll);

const d20 = new Dice(20);
console.log(d20);
console.log(d20.rollOnce());
console.log(d20.min);
console.log(d20.max);

const dCustom = new Dice([4, 3, 2, 1]);
console.log(dCustom);
console.log(dCustom.rollOnce());
console.log(dCustom.min);
console.log(dCustom.max);