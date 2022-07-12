const express = require('express')
const app = express()
const port = 4001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/2222222', (req, res) => {
  res.send('Hello World!')
})

app.get('/11111', (req, res) => {
  res.send('Hello World!')
})

app.get('/3333333', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
