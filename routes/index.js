const experss = require('express')
const router = experss.Router()

const home = require('./modules/home')
router.use('/', home)

module.exports = router