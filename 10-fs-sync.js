const { readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

// console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');
// output is that the writefilesync creates a new file named result sync if it's not already there! therfore the result sync txt file is created by this function. 

// flag : a means append , it appends the existing text with the given text.