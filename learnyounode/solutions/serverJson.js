'use strict'
const http = require('node:http')
const port = process.argv[2]

http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.end('only use GET')
  }

  const {pathname, searchParams } = new URL(req.url, 'http://example.com')
  const date =  new Date(searchParams.get('iso'))

  if (pathname === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify({
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    }))
  }

  if (pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify({
      unixtime: date.getTime()
    }))
  }

  res.writeHead(404)
  res.end('')
}).listen(port)