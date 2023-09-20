const fs = require("node:fs")

const stats = fs.statSync("./archivo.txt")
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size
)

const text = fs.readFileSync("./archivo.txt", "utf-8")
console.log(text)

const textAsync = fs.readFile("./archivo.txt", "utf-8", (err, text) => {
    console.log(text)
})
