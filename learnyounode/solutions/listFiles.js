'use strict'

const fs = require('node:fs')
const path = require('node:path')

const [_, __, pathDir, extension] = process.argv

fs.readdir(pathDir, (err, files) => {
  if (err) throw err
  
  files
    .filter(file => path.extname(file) === `.${extension}`)
    .forEach(file => console.log(file))
})