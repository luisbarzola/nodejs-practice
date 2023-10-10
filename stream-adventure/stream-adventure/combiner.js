'use strict'
const through = require('through2').obj
const combine = require('stream-combiner')
const split2 = require('split2')
const zlib = require('zlib')


module.exports = function () {
  const group = through(writer, end)

  let current = {}
  function writer(line, _, next) {
    if (line.length === 0) return next()
    const row = JSON.parse(line)

    if (row['type'] === 'genre') {
      if (current) {
        this.push(JSON.stringify(current) + '\n')
      }

      current = {
        name: row['name'],
        books: []
      }
    }

    if (row['type'] === 'book') {
      current.books.push(row['name'])
    }

    next()
  }
  
  function end(done) {
    this.push(JSON.stringify(current) + '\n')
    done()
  }

  return combine(
    split2(),
    group,
    zlib.createGzip()
  )
}

