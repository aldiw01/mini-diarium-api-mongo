const express = require('express')
var router = express.Router()
var db = require('../models/votes')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Votes => /api/votes/

router.get('/', jwtMW, (req, res) => {
  db.getVoteAll(req.body, res)
})

router.get('/user/:id', (req, res) => {
  db.getVoteUser(req.params, res)
})

router.post('/add/:user_id/:post_id', jwtMW, (req, res) => {
  db.updateVoteAdd(req, res)
})

router.post('/remove/:user_id/:post_id', jwtMW, (req, res) => {
  db.updateVoteRemove(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:userid/:postid', jwtMW, (req, res) => {
  db.deleteVote(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteVoteAll(req.params, res)
})

module.exports = router