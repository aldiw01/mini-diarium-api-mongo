
const express = require('express')
var router = express.Router()
var db = require('../models/steps')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Steps => /api/steps/

router.get('/', jwtMW, (req, res) => {
  db.getStepAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getStep(req.params, res)
})

router.get('/reference/:id', (req, res) => {
  db.getStepReference(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newStep(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updateStep(req.body, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deleteStep(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteStepAll(req.params, res)
})

module.exports = router