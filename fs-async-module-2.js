//file module asynch :- in it call back functions are used

const {readFile,writeFile} = require('fs')
console.log('start');
readFile('./sampleFolder/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./sampleFolder/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./sampleFolder/resultAsync.txt',`Here is the result: ${first} & ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);  
            console.log('done with this task');
        })
    })
})
console.log('starting with new task');