'use strict'

const fs = require('node:fs')
const filePath = process.argv[2]

fs.createReadStream(filePath).pipe(process.stdout)