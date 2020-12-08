
const express = require('express')
var router = express.Router()
var db = require('../models/standard_levels')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Standard Levels => /api/standard_levels/

router.get('/', jwtMW, (req, res) => {
  db.getStandardLevelAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getStandardLevel(req.params, res)
})

router.get('/search/:id', jwtMW, (req, res) => {
  db.getStandardLevelSearch(req.params, res)
})

router.get('/search/:id/:id2', jwtMW, (req, res) => {
  db.getStandardLevelSearch2(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newStandardLevel(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updateStandardLevel(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deleteStandardLevel(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteStandardLevelAll(req.params, res)
})

module.exports = router