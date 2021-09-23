const express = require('express')
var birds = require('./birds')
const app = express()
const port = 3000

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/req', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})




app.use('/birds', birds)

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})
app.get('/about', function (req, res) {
    res.send('about')
  })

  app.get('/random.txt', function (req, res) {
    res.send('./random.txt')
  })

  app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params)
  })

  app.get('/user/:userId(\\d+)', function (req, res) {
    res.send(req.params)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})