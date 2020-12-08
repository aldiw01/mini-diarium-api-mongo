
const express = require('express')
var router = express.Router()
const multer = require('multer')
var db = require('../models/archives')
const exjwt = require('express-jwt')
var path = require('path')

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: process.env.APP_TOKEN_SECRET
});

const storageArchives = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads/archives/');
  },
  filename: function (req, file, cb) {
    cb(null, req.body.id.replace(new RegExp("/", 'g'), "") + '_' + req.body.year + '_' + req.body.name + path.extname(file.originalname));
  }
})

function fileFilter(req, file, cb) {
  cb(null, true)
};

/////////////////////////////////////////////////////////////////////////////////////////////
// API Archive => /api/archives/

router.get('/', jwtMW, (req, res) => {
  db.getArchiveAll(req.body, res)
})

router.get('/:id', (req, res) => {
  db.getArchive(req.params, res)
})

router.get('/type/:id', jwtMW, (req, res) => {
  db.getArchiveType(req.params, res)
})

router.get('/search/:id', jwtMW, (req, res) => {
  db.getArchiveSearch(req.params, res)
})

router.get('/search/:id/:id2', jwtMW, (req, res) => {
  db.getArchiveSearch2(req.params, res)
})

router.get('/all-table/search/:id', jwtMW, (req, res) => {
  db.getAllArchiveSearch(req.params, res)
})

router.post('/', jwtMW, (req, res) => {
  var upload = multer({
    storage: storageArchives,
    limits: {
      fileSize: 200 * 1024 * 1024
    },
    fileFilter: fileFilter
  }).single('file')
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.send(err)
      return
    } else if (err) {
      // An unknown error occurred when uploading.
      res.send(err)
      return
    } else if (req.file == undefined && req.body.file === undefined) {
      res.send({ message: 'No file selected!' })
      return
    }
    // Everything went fine.
    console.log('Upload success.')

    // File name key used while in production and filename in development
    req.body.file = req.file ? req.file.filename : req.body.file

    db.newArchive(req.body, res)
  })
})

router.put('/:id', jwtMW, (req, res) => {
  var upload = multer({
    storage: storageArchives,
    limits: {
      fileSize: 200 * 1024 * 1024
    },
    fileFilter: fileFilter
  }).single('file')
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.send(err)
      return
    } else if (err) {
      // An unknown error occurred when uploading.
      res.send(err)
      return
    } else if (req.file == undefined && req.body.file === undefined) {
      res.send('index', { message: 'No file selected!' })
      return
    }
    // Everything went fine.
    console.log('Upload success.')

    // File name key used while in production and filename in development
    req.body.file = req.file ? req.file.filename : req.body.file

    db.updateArchive(req, res)
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////
// EXTREAMLY DANGEROUS, USE THIS WISELY

router.delete('/ever/:id', jwtMW, (req, res) => {
  db.deleteArchive(req.params, res)
})

router.delete('/all/ever', jwtMW, (req, res) => {
  db.deleteArchiveAll(req.params, res)
})

module.exports = router