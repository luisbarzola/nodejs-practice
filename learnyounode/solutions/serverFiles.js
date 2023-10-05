'use strict'
const http = require('node:http')
const fs = require('node:fs')

const [_, __, port, filePath] = process.argv


const server = http.createServer((_, res) => {
  fs.createReadStream(filePath,'utf-8').pipe(res)
})

server.listen(port, () => {
  console.log(`server running in ${server.address().port}`)
})