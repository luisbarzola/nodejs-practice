'use strict'
const http = require('node:http')
const [_, __, url1, url2, url3] = process.argv

function getData(url, callback) {
  let output = ''
  http.get(url, resp => {
    resp.setEncoding('utf-8')
    resp.on('data', chunk => output += chunk)
    resp.on('end', () => {
      callback(output)
    })
  })
}

getData(url1, (data) => {
  getData(url2, (data2) => {
    getData(url3, (data3) => {
      console.log(data)
      console.log(data2)
      console.log(data3)
    })
  })
})