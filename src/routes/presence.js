
const express = require('express')
var router = express.Router()
var db = require('../models/presences')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Presences => /api/presences/

router.get('/', jwtMW, (req, res) => {
  db.getPresenceAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getPresence(req.params, res)
})

router.get('/user/:id/:date', jwtMW, (req, res) => {
  db.getPresenceUser(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newPresence(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updatePresence(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deletePresence(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deletePresenceAll(req.params, res)
})

module.exports = router