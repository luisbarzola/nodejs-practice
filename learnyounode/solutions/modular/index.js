'use strict'
const listFiles = require('./listFiles.js') 

const [_, __, path, ext] = process.argv

listFiles(path, ext, (err, directories) => {
  if (err) return console.error(err.message) 
  
  directories.forEach(directory => console.log(directory));
})