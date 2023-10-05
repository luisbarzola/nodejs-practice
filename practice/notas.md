# commonjs
const element = require('module')
module.exports = {...}


# módulo http/net  usa
- server = createServer((req, res) => {})
  - req.url
  - req.on('data', chunk => {... datos que se envió al servidor, se puede transformar a string...})

  - res.statusCode
  - res.setHeader('Content-type', 'text/plain, charset=utf-8')
  - res.end('hello word')

- server.address()
- server.close()
- server.listen(port, ()=>{})
- server.on('error', (err) => {})

# modulo fs 
  -readFile()

# JSON
- en commonJS se puede importar un archivo JSON directamente require('name.json')
- .stringify(data) ->  de json a string
- .parse(data) -> de string a json


# Para escuchar los cambios puedes usar 
- --watch
- nodemon

# Express
  app = express()
  app.method('path', (req, res) => {})
  app.disable('x-powered-by')
  app.use(express.json())
  para validar usamos zod
    movieSchema.safeParse
    movieSchema.partial().safeParse

## reglas
- al usar app.use como middleware siempre al termina se tiene que ejecutar next() 
