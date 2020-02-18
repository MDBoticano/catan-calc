import Dice from './Dice';

const defaultDie = new Dice();

console.log(defaultDie);
const myRoll = defaultDie.roll();
console.log(myRoll);

const maxRoll = defaultDie.roll("max");
const minRoll = defaultDie.roll("min");

console.log(maxRoll);
console.log(minRoll);
