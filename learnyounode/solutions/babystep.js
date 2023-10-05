'use strict'

const parameters = process.argv.slice(2)
const sum = parameters.reduce((acum, param) => acum + parseInt(param) , 0)
console.log(sum)