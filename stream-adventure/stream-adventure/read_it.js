'use strict'
const { Readable } = require('node:stream')
const input = process.argv[2]

class MyReader extends Readable {
  _read() {
    const buffer = Buffer.from(input, 'utf-8')
    this.push(buffer)
    this.push(null)
  }
}

const reader = new MyReader()
reader.pipe(process.stdout)