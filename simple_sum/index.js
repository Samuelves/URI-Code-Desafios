var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const cal = parseFloat(lines[0]) + parseFloat(lines[1])

console.log(`SOMA = ${cal}`);