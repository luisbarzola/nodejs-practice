'use strict'
const Parse = require('tar').Parse
const concat = require('concat-stream')
const crypto = require('node:crypto')
const [_, __, algo, key, vector] = process.argv

const parser = new Parse()
parser.on('entry', e => {
  if (e.type !== 'File') return e.resume()
  const crytoHash = crypto.createHash('md5', { encoding:'hex' })
  e.pipe(crytoHash).pipe(concat(hash => console.log(`${hash} ${e.path}`)))
})

process.stdin
  .pipe(crypto.createDecipheriv(algo, key, vector))
  .pipe(parser)
