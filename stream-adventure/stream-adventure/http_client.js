'use strict'
const http = require('node:http')

const res = http.request('http://localhost:8099', { method: 'POST' }, res => {
  res.pipe(process.stdout)
})

process.stdin.pipe(res)
