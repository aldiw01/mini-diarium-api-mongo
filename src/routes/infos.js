
const express = require('express')
var router = express.Router()
var db = require('../models/infos')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Infos => /api/infos/

router.get('/', jwtMW, (req, res) => {
  db.getInfoAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getInfo(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newInfo(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updateInfo(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deleteInfo(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteInfoAll(req.params, res)
})

module.exports = router