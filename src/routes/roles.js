
const express = require('express')
var router = express.Router()
var db = require('../models/roles')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Roles => /api/roles/

router.get('/', jwtMW, (req, res) => {
  db.getRoleAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getRole(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newRole(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updateRole(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deleteRole(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteRoleAll(req.params, res)
})

module.exports = router