'use strict'

const { Transform } = require('node:stream')
const split2 = require('split2') 

let counter = 0
const transform = new Transform({
  transform(buffer, encoding, next){
    this.push(`${(counter % 2  === 0 ? `${buffer.toString().toLowerCase()}` : `${buffer.toString().toUpperCase()}`)}\n`)
    counter++
    next()
  }
})

process.stdin.pipe(split2()).pipe(transform).pipe(process.stdout)
