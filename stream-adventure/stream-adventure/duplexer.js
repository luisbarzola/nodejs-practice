'use strict'
const {spawn} = require('child_process')
const duplexer2 = require('duplexer2')

module.exports = function (cmd, args) {
  const command = spawn(cmd, args)
  return duplexer2(command.stdin, command.stdout)
}