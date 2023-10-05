const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')
console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)

const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

fs.readFile('./archivo.txt', 'utf-8', (_, text) => {
  console.log(text)
})
