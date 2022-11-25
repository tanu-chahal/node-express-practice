//Understand npm :)

//for installing local dependencies (only for the current project)
//npm i <packagename> //i or install

//for installing global dependencies (to use in any project)
// npm install -g <packagename>
//sudo npm install -g <packagename> //for mac

//package.json - manifest file (stores important information about the project/package)
//manual approach create package.json in the root, create properties etc.
//npm init (everything step by step, presss enter to skip)
//npm init -y (everything default)

//using lodash a local dependency which we installed
const _ = require('lodash')

const items = [1,[2,[3,[4,[5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello People")

//install nodemon (dev dependency)
//npm i nodemon -D //or
//npm i nodemon --save-d