'use strict'

const { Writable} = require('node:stream')


class MyWriter extends Writable {
  _write(chunk, encode, callback) {
    console.log(`writing: ${chunk.toString()}`)
    callback()
  }
}


process.stdin.pipe(new MyWriter)