// console.log(require);

const names = require('./4-firstmodule')
const sayHI = require('./5-utils')
const data = require('./6-alternative')
const hg = require('./7-mind-greande')
// console.log(data);
// console.log(names)

sayHI('susan')
sayHI(names.john)
sayHI(names.peter)