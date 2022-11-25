const path = require('path')

console.log(path.sep); //path separator in your local machine

const filePath = path.join('/sampleFolder/','sampleSubFolder','sampleText.txt');
console.log(filePath);

const base = path.basename(filePath) //gives base name of the file for the path entered
console.log(base);

const absolute = path.resolve(__dirname, 'sampleFolder', 'sampleSubFolder', 'sampleText.txt') //gives absolute path
console.log(absolute);
