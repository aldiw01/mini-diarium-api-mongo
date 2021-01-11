const express = require('express')
var router = express.Router()
var db = require('../models/votes')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Posts => /api/votes/

router.get('/', jwtMW, (req, res) => {
  db.getVoteAll(req.body, res)
})

router.get('/:userid/:postid', (req, res) => {
  db.getVote(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newVote(req.body, res)
})

router.put('/reactions/add/:userid/:postid', jwtMW, (req, res) => {
  db.updateVoteReactionAdd(req, res)
})

router.put('/reactions/remove/:userid/:postid', jwtMW, (req, res) => {
  db.updateVoteReactionRemove(req, res)
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