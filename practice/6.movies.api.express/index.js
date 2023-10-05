const express = require('express')
const crypto = require('node:crypto')
const cors = require('cors')
const { validateMovie, validatePartialMovie } = require('./validators/movie')

const movies = require('./movies.json')

const server = express()
server.disable('x-powered-by')
server.use(express.json())
server.use(cors())

server.get('/movies', (req, res) => {
  const { genre } = req.query

  if (genre) {
    const moviesFiltered = movies.filter( 
      movie => movie.genre.some( g => g.toLowerCase() == genre.toLowerCase())
    ) 
    return res.send(moviesFiltered)
  }
  
  res.send(movies)
})

server.get('/movies/:id', (req, res) => {
  const {id} = req.params
  res.send(
    movies.find( movie => movie.id == id)
  )
})

server.post('/movies', (req, res) => {
  const result = validateMovie(req.body)
  
  if (!result.success) {
    return res.status(400).send(result.error.issues)
  }

  const data = {
    id: crypto.randomUUID(),
    ...result.data
  }

  movies.push(data)

  res.status(201).send(data)
})

server.patch('/movies/:id', (req, res) => {
  const { id } = req.params
  const moviePosition = movies.findIndex(movie => movie.id == id)

  if (moviePosition == -1) {
    return res.status(404).send({message: 'Movie not found.'})
  }

  const result  = validatePartialMovie(req.body)

  if (!result.success) {
    return res.status(404).send(result.error.issues)
  }

  const movie = {
    ...movies[moviePosition],
    ...result.data
  }

  movies[moviePosition] = movie

  res.json(movie)
})

server.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const moviePosition = movies.findIndex(movie => movie.id == id)

  if (moviePosition == -1) {
    return res.status(404).send({message: 'Movie not found.'})
  }

  movies.splice(moviePosition, 1)
  return res.status(204).send("Success!")
})

server.listen(3000, () => {
  console.log('running server on http://localhost:3000')
})