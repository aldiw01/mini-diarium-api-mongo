var express = require('express')
var router = express.Router()
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

const accounts = require('./accounts')
const archives = require('./archives')
const history = require('./history')
const infos = require('./infos')
const roles = require('./roles')
const standard_levels = require('./standard_levels')
const steps = require('./steps')
const uploads = require('./uploads')
const users = require('./users')

/////////////////////////////////////////////////////////////////////////////////////////////
// API Routes

router.use('/accounts', accounts)
router.use('/archives', archives)
router.use('/history', history)
router.use('/infos', infos)
router.use('/roles', roles)
router.use('/standard_levels', standard_levels)
router.use('/steps', steps)
router.use('/uploads', uploads)
router.use('/users', users)

router.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  res.send({ message: 'You are authenticated' }); //Sending some response when authenticated
});

module.exports = router