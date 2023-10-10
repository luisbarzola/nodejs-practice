'use strict'

const http = require('node:http')
const { Transform } = require('node:stream')
const port = process.argv[2]

class ToUpperCase extends Transform {
  _transform(chunk, encode, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
}

http.createServer((req, res) => {
  req.pipe(new ToUpperCase()).pipe(res)
}).listen(port | 0)