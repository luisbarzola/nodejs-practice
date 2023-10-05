'use strict'
const fs = require('node:fs')
const path = require('node:path')

module.exports = function (pathFile, extname, callback) {
  fs.readdir(pathFile, (err, directories) => {
    if (err) return callback(err)
    const directoriesWithExtension = directories.filter(directory => path.extname(directory) === `.${extname}`)
    return callback(null, directoriesWithExtension)
  })
}

