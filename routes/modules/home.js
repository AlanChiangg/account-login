const experss = require('express')
const router = experss.Router()
const USERS = require('../../models/USERS')

router.get('/', (req, res) => {
  res.render('home')
})

module.exports = router