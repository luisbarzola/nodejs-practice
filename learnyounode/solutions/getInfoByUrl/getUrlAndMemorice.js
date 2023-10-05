'use strict'

const http = require('node:http')
const bl = require('bl')

http.get(process.argv[2], response => {
  response.pipe(
    bl((err, data) => {
      console.log(data.length)
      console.log(data.toString())
    })
  )
})