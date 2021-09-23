const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})