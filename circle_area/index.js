var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;

const ca = pi * (lines[0] * lines[0])

console.log(`A=${ca.toFixed(4)}\n`);
