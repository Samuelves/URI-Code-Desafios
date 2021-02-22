var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');


const calc = lines[1] * lines[2]

console.log(`NUMBER = ${lines[0]}`)
console.log(`SALARY = U$ ${calc.toFixed(2)}`);