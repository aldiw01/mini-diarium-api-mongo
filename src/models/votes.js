const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('./posts');
const Posts = db.PostsMod;

const voteSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  post_id: {
    type: String,
    required: true
  },
  reactions: {
    type: Number,
    default: 0
  },
}, {
  timestamps: true
});

const Votes = mongoose.model('Vote', voteSchema);

module.exports = {

  /////////////////////////////////////////////////////////////////////////////////////////////
  // INFO VOTES

  getVoteAll: function (req, res) {
    Votes.find({})
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

  getVoteUser: function (req, res) {
    Votes.find({ user_id: req.id })
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

  updateVoteAdd: function (req, res) {
    var request = {
      user_id: req.params.user_id,
      post_id: req.params.post_id,
      reactions: 1,
    };

    Votes.create(request)
      .then(() => {

        Posts.find({ id: req.params.post_id })
          .then((data) => {

            Posts.findOneAndUpdate({ id: req.params.post_id }, { reactions: data[0].reactions + 1 })
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

      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updateVoteRemove: function (req, res) {
    var request = {
      user_id: req.params.user_id,
      post_id: req.params.post_id,
      reactions: -1,
    };

    Votes.create(request)
      .then(() => {

        Posts.find({ id: req.params.post_id })
          .then((data) => {

            Posts.findOneAndUpdate({ id: req.params.post_id }, { reactions: data[0].reactions - 1 })
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

      }, (err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  deleteVote: function (req, res) {
    if (req.userid == undefined || req.userid == "" || req.postid == undefined || req.postid == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }
    Votes.deleteOne({ user_id: req.userid, post_id: req.postid })
      .then((Vote) => {
        if (Vote.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json({
            err: null,
            message: "Vote has been deleted successfully",
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

  deleteVoteAll: function (req, res) {
    Votes.deleteMany({})
      .then((data) => {
        if (data.length === 0) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.json({
            err: null,
            message: "All Vote has been deleted successfully",
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