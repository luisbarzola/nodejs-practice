'use strict'
/*
const through = require('through2')
const stream = through(write, end)

function write(buffer, encode, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

function end(done) {
  done()
}

process.stdin.pipe(stream).pipe(process.stdout)
*/

const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);