'use strict '
const net = require('node:net')

const server = net.createServer((socket) => {
  const date = new Date()
  socket.end(`${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, '0')}-${String(date.getDay()+1).padStart(2, '0')} ${date.getHours()}:${date.getMinutes()}` + '\n')
})

server.listen(process.argv[2], () => {
  console.log('opened server on', server.address());
})