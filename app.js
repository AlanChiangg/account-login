const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

require('./config/mongoose')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`)
})