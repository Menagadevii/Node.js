const math = require ("./localmodule");
console.log("Local Module");
const total = math.mul(10, 27);
console.log("Total:" + total);
const division = math.div(20,40);
console.log("division:" + division);