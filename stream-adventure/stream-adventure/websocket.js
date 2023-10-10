'use strict'
const WebSocket = require('ws')
const ws = new WebSocket('ws:localhost:8099')
const stream = WebSocket.createWebSocketStream(ws, { encoding:'utf-8' })
stream.write('hello\n')
stream.on('error', console.error)
stream.pipe(process.stdout)