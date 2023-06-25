const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
const routes = require('./routes')

require('./config/mongoose')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`)
})