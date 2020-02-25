"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Catan_1 = require("./components/Catan");
const myCatan = new Catan_1.default();
const adjacent345 = myCatan.calculateChances([3, 4, 5]);
console.log(myCatan.sumCounts);
console.log(adjacent345);
//# sourceMappingURL=index.js.map