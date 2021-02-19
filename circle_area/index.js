var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;

const calc = pi * (lines[0] * lines[0])

console.log(`A=${calc.toFixed(4)}\n`);