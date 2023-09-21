const express = require('express')
const pikachu = require('./pikachu.json')

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/pokemons/pikachu', (req, res) => {
  res.json(pikachu)
})

app.post('/pokemons', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res, next) => {
  res.status(404).send('Sorry, cant find that')
})

app.listen(3000, () => {
  console.log('running server on http://localhost:3000')
})
