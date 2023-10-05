'use strict'

const fs = require('node:fs')

const pathFile = process.argv[2]
const buffer = fs.readFileSync(pathFile)
const str = buffer.toString()
console.log(str.split('\n').length - 1)

/*
fs.readFile(pathFile, 'utf-8',(err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
})
*/