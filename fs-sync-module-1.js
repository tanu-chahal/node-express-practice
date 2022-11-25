//file module synch

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./sampleFolder/first.txt','utf8');
const second = readFileSync('./sampleFolder/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./sampleFolder/resultSync.txt', `Here is the result: ${first} & ${second}`, {flag:'a'}) //{flag:'a'} is for appending
//If resultSync doesn't exist it will be created automatically.