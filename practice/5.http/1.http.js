const http = require('node:http')
const { findEnablePort } = require('./2.free.port.js')

const server = http.createServer((_, res) => {
  console.log('request received')
  res.end('hello word')
});

(async () => {
  const desiredPort = await findEnablePort(3000)
  const port = process.env.PORT ?? desiredPort

  server.listen(port, () => {
    console.log(`server listing on port: http://localhost:${server.address().port}`)
  })
})()
