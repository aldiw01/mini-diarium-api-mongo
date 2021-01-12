const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  user_id: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: "test.jpg"
  },
  name: {
    type: String,
    required: true
  },
  directorate: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  reactions: {
    type: Number,
    default: 0
  },
  header: {
    type: String,
    default: "1"
  }
}, {
  timestamps: true
});

const Posts = mongoose.model('Post', postSchema);

module.exports = {
  PostsMod: Posts,

  /////////////////////////////////////////////////////////////////////////////////////////////
  // INFO PRESENCES

  getPostAll: function (req, res) {
    Posts.find({})
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json(data);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPost: function (req, res) {
    Posts.find({ id: req.id })
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json(data);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPostDirectorate: function (req, res) {
    Posts.find({ header: "1", directorate: req.id }).sort({ createdAt: -1 })
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          var all = [];
          data.forEach(function (post) {
            Posts.find({ header: post.id }).sort({ reactions: -1, createdAt: -1 })
              .then((comments) => {
                var bundle = { post, comments }
                all.push(bundle)

                if (all.length === data.length) {
                  all.sort((a, b) => {
                    if (a.post.createdAt > b.post.createdAt)
                      return -1;
                    else if (a.post.createdAt < b.post.createdAt) return 1;
                    return 0;
                  })
                  res.json(all)
                }
              }, (err) => {
                res.send({ message: err.message });
                console.log(err);
              })
              .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
              });
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPostOrdered: function (req, res) {
    Posts.find({ header: "1" }).sort({ createdAt: -1 })
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          var all = [];
          data.forEach(function (post) {
            Posts.find({ header: post.id }).sort({ reactions: -1, createdAt: -1 })
              .then((comments) => {
                var bundle = { post, comments }
                all.push(bundle)

                if (all.length === data.length) {
                  all.sort((a, b) => {
                    if (a.post.createdAt > b.post.createdAt)
                      return -1;
                    else if (a.post.createdAt < b.post.createdAt) return 1;
                    return 0;
                  })
                  res.json(all)
                }
              }, (err) => {
                res.send({ message: err.message });
                console.log(err);
              })
              .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
              });
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPostTop: function (req, res) {
    Posts.find({ header: "1" }).sort({ reactions: -1, createdAt: -1 })
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          var all = [];
          data.forEach(function (post) {
            Posts.find({ header: post.id }).sort({ reactions: -1, createdAt: -1 })
              .then((comments) => {
                var bundle = { post, comments }
                all.push(bundle)

                if (all.length === data.length) {
                  all.sort((a, b) => {
                    if (a.post.reactions > b.post.reactions)
                      return -1;
                    else if (a.post.reactions < b.post.reactions) return 1;
                    return 0;
                  })
                  res.json(all)
                }
              }, (err) => {
                res.send({ message: err.message });
                console.log(err);
              })
              .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
              });
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPostComment: function (req, res) {
    Posts.find({ header: req.id }).sort({ reactions: -1, createdAt: 1 })
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json(data);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  getPostHeadline: function (req, res) {
    const request = {
      directorate: req.directorate
    };

    if (Object.values(request).includes(undefined) || Object.values(request).includes("")) {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    var headlines = {
      top: [],
      directorate: [],
      latest: []
    }
    var post = []
    Posts.find({ header: "1" }).sort({ reactions: -1 }).limit(1)
      .then((data) => {
        headlines.top = post = data
        Posts.find({ header: data[0].id }).sort({ reactions: -1, createdAt: -1 })
          .then((comments) => {
            headlines.top = { post, comments }
            post = []

            Posts.find({ header: "1", directorate: req.directorate }).sort({ reactions: -1 }).limit(1)
              .then((data) => {
                headlines.directorate = post = data
                Posts.find({ header: data[0].id }).sort({ reactions: -1, createdAt: -1 })
                  .then((comments) => {
                    headlines.directorate = { post, comments }
                    post = []

                    Posts.find({ header: "1" }).sort({ createdAt: -1 }).limit(1)
                      .then((data) => {
                        headlines.latest = post = data
                        Posts.find({ header: data[0].id }).sort({ reactions: -1, createdAt: -1 })
                          .then((comments) => {
                            headlines.latest = { post, comments }
                            post = []
                            res.json(headlines)
                          }, (err) => {
                            res.send({ message: err.message });
                            console.log(err);
                          })
                          .catch((err) => {
                            res.send({ message: err.message });
                            console.log(err);
                          });
                      }, (err) => {
                        res.send({ message: err.message });
                        console.log(err);
                      })
                      .catch((err) => {
                        res.send({ message: err.message });
                        console.log(err);
                      });

                  }, (err) => {
                    res.send({ message: err.message });
                    console.log(err);
                  })
                  .catch((err) => {
                    res.send({ message: err.message });
                    console.log(err);
                  });

              }, (err) => {
                res.send({ message: err.message });
                console.log(err);
              })
              .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
              });

          }, (err) => {
            res.send({ message: err.message });
            console.log(err);
          })
          .catch((err) => {
            res.send({ message: err.message });
            console.log(err);
          });

      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  newPost: function (req, res) {
    const waktu = new Date().toISOString();
    var request = {
      id: 'C' + new Date(waktu).valueOf().toString(32).toUpperCase(),
      user_id: req.user_id,
      photo: req.photo,
      name: req.name,
      directorate: req.directorate,
      message: req.message,
      reactions: "0",
      header: "1"
    };

    Posts.create(request)
      .then(() => {
        res.json({
          err: null,
          message: "Post has been registered successfully.",
          success: true
        });
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  newPostComment: function (req, res) {
    const waktu = new Date().toISOString();
    var request = {
      id: 'R' + new Date(waktu).valueOf().toString(32).toUpperCase(),
      user_id: req.user_id,
      photo: req.photo,
      name: req.name,
      directorate: req.directorate,
      message: req.message,
      reactions: "0",
      header: req.header
    };

    Posts.create(request)
      .then(() => {
        res.json({
          err: null,
          message: "Post has been registered successfully.",
          success: true
        });
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updatePost: function (req, res) {
    const request = {
      message: req.body.message
    };

    if (Object.values(request).includes(undefined) || Object.values(request).includes("")) {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    Posts.findOneAndUpdate({ id: req.params.id }, { message: req.body.message })
      .then(() => {
        res.json({
          err: null,
          message: "Post has been updated successfully",
          success: true
        });
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updatePostReactionAdd: function (req, res) {
    Posts.find({ id: req.params.id })
      .then((data) => {

        Posts.findOneAndUpdate({ id: req.params.id }, { reactions: data[0].reactions + 1 })
          .then(() => {
            res.json({
              err: null,
              message: "Post has been updated successfully",
              success: true
            });
          }, (err) => {
            res.send({ message: err.message });
            console.log(err);
          })
          .catch((err) => {
            res.send({ message: err.message });
            console.log(err);
          });

      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updatePostReactionRemove: function (req, res) {
    Posts.find({ id: req.params.id })
      .then((data) => {

        Posts.findOneAndUpdate({ id: req.params.id }, { reactions: data[0].reactions - 1 })
          .then(() => {
            res.json({
              err: null,
              message: "Post has been updated successfully",
              success: true
            });
          }, (err) => {
            res.send({ message: err.message });
            console.log(err);
          })
          .catch((err) => {
            res.send({ message: err.message });
            console.log(err);
          });

      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  deletePost: function (req, res) {
    if (req.id == undefined || req.id == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    Posts.deleteOne({ id: req.id })
      .then((post) => {
        if (post.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json({
            err: null,
            message: "Post has been deleted successfully",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  deletePostAll: function (req, res) {
    Posts.deleteMany({})
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json({
            err: null,
            message: "All Post has been deleted successfully",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  }
}