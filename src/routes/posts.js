const express = require('express')
var router = express.Router()
var db = require('../models/posts')
const exjwt = require('express-jwt')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

/////////////////////////////////////////////////////////////////////////////////////////////
// API Posts => /api/posts/

router.get('/', jwtMW, (req, res) => {
  db.getPostAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getPost(req.params, res)
})

router.get('/directorate/:id', (req, res) => {
  db.getPostDirectorate(req.params, res)
})

router.get('/latest/all', (req, res) => {
  db.getPostOrdered(req.body, res)
})

router.get('/top/all', (req, res) => {
  db.getPostTop(req.body, res)
})

router.get('/comments/:id', jwtMW, (req, res) => {
  db.getPostComment(req.params, res)
})

router.get('/headlines/:directorate', jwtMW, (req, res) => {
  db.getPostHeadline(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  db.newPost(req.body, res)
})

router.post('/comments/', jwtMW, (req, res) => {
  db.newPostComment(req.body, res)
})

router.put('/:id', jwtMW, (req, res) => {
  db.updatePost(req, res)
})

router.put('/reactions/add/:id', jwtMW, (req, res) => {
  db.updatePostReactionAdd(req, res)
})

router.put('/reactions/remove/:id', jwtMW, (req, res) => {
  db.updatePostReactionRemove(req, res)
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deletePost(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deletePostAll(req.params, res)
})

module.exports = router