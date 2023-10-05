const z = require('zod')

const movieSchema = z.object({
  title: z.string(),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().positive(),
  poster: z.string().url(),
  genre: z.array(z.enum(['Adventure', 'Drama', 'Sci-Fi', 'Action', 'Drama', 'Romance', 'Biography', 'Fantasy'])),
  rate: z.number()
})

const validateMovie = (body) => movieSchema.safeParse(body)
const validatePartialMovie = (body) => movieSchema.partial().safeParse(body)

module.exports = {
  validateMovie,
  validatePartialMovie
}