var express = require('express')
var router = express.Router()
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

const accounts = require('./accounts')
const activity = require('./activity')
const posts = require('./posts')
const presence = require('./presence')
const uploads = require('./uploads')
const users = require('./users')
const votes = require('./votes')

/////////////////////////////////////////////////////////////////////////////////////////////
// API Routes

router.use('/accounts', accounts)
router.use('/activity', activity)
router.use('/posts', posts)
router.use('/presence', presence)
router.use('/uploads', uploads)
router.use('/users', users)
router.use('/votes', votes)

router.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  res.send({ message: 'You are authenticated' }); //Sending some response when authenticated
});

module.exports = router