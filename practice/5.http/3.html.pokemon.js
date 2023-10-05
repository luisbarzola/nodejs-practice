const html = require('node:http')

const pikachu = require('./pikachu.json')

const requestResponse = (req, res) => {
  const { url } = req

  switch (url) {
    case '/pokemons/pikachu':
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      return res.end(JSON.stringify(pikachu))
    default:
      res.statusCode = 404
      res.setHeader('Content-type', 'text/plain; charset=utf-8')
      res.end('404 | Not Found')
  }
}

const server = html.createServer(requestResponse)

server.listen(3000, () => {
  console.log('server listening on port: http://localhost:3000')
})
