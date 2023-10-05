'use strict'
const http = require('node:http')
const map = require('through2-map')  
const port = process.argv[2]

http.createServer((req, res) => {
  if (req.method !== 'POST') {
    return res.end('only posts')
  }

  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).listen(port | 0)