'use strict'
const { Transform } = require('node:stream') 
const trumpet = require('trumpet')
const tr = trumpet()

const loud =  tr.select('.loud').createStream()

loud.pipe(new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
})).pipe(loud)

process.stdin.pipe(tr).pipe(process.stdout)
