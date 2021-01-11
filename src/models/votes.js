const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
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

  getVote: function (req, res) {
    Votes.find({ user_id: req.userid, post_id: req.postid })
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

  newVote: function (req, res) {
    var request = {
      user_id: req.user_id,
      post_id: req.post_id,
      reactions: "0",
    };

    Votes.create(request)
      .then(() => {
        res.json({
          err: null,
          message: "Vote has been registered successfully.",
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

  updateVoteReactionAdd: function (req, res) {
    Votes.find({ user_id: req.params.userid, post_id: req.params.postid })
      .then((data) => {
        Votes.findOneAndUpdate({ user_id: req.params.userid, post_id: req.params.postid }, { reactions: data[0].reactions + 1 })
          .then(() => {
            res.json({
              err: null,
              message: "Vote has been updated successfully",
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

  updateVoteReactionRemove: function (req, res) {
    Votes.find({ user_id: req.params.userid, post_id: req.params.postid })
      .then((data) => {
        Votes.findOneAndUpdate({ user_id: req.params.userid, post_id: req.params.postid }, { reactions: data[0].reactions - 1 })
          .then(() => {
            res.json({
              err: null,
              message: "Vote has been updated successfully",
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