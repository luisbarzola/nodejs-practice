'use strict'
const duplexer = require('duplexer2')
const through = require('through2').obj

module.exports = function (counter) {
  const count = {}
  const input = through(writer, end)

  return duplexer({objectMode: true}, input, counter)

  function writer(row, _, next) {
    count[row.country] = (count[row.country] || 0) + 1
    next()
  }

  function end(done) {
    counter.setCounts(count)
    done()
  }
}