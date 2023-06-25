const experss = require('express')
const router = experss.Router()
const USERS = require('../../models/USERS')

router.get('/', (req, res) => {
  res.render('home')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  const error = 'Your email or password is fail.'

  USERS.findOne({ email, password })
    .then(result => {
      if (result) {
        res.render('welcome', { firstName: result.firstName });
      } else {
        res.render('home', { error, email });
      }
    })
})

module.exports = router