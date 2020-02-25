import Catan from './components/Catan';

const myCatan = new Catan();
const adjacent345 = myCatan.calculateChances([3, 4, 5]);

console.log(myCatan.sumCounts);
console.log(adjacent345);