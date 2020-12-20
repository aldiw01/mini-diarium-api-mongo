const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presenceSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  user_id: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 2,
    required: true
  },
  created: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Presences = mongoose.model('Presence', presenceSchema);

module.exports = {

  /////////////////////////////////////////////////////////////////////////////////////////////
  // INFO PRESENCES

  getPresenceAll: function (req, res) {
    Presences.find({})
      .then((presences) => {
        if (presences == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          // var data = [];
          // presences.forEach(function (presence) {
          //   data.push({
          //     id: presence.id,
          //     user_id: presence.user_id,
          //     status: presence.status,
          //     created: presence.created
          //   })
          // });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(presences);
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

  getPresence: function (req, res) {
    Presences.find({ id: req.id })
      .then((presences) => {
        if (presences == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          // var data = [];
          // presences.forEach(function (presence) {
          //   data.push({
          //     id: presence.id,
          //     user_id: presence.user_id,
          //     status: presence.status,
          //     created: presence.created
          //   })
          // });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(presences);
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

  getPresenceUser: function (req, res) {
    const transform = new Date(req.date).toISOString();
    const date = transform.split('T');
    const $regex = escapeStringRegexp(date[0]);
    var request = {
      user_id: req.id,
      created: { $regex }
    };

    Presences.find(request).sort({ created: 'desc' })
      .then((presences) => {
        if (presences == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          // var data = [];
          // presences.forEach(function (items) {
          //   data.push({
          //     [col[0]]: items[0],
          //     [col[1]]: items[1],
          //     [col[2]]: items[2],
          //     [col[3]]: items[3]
          //   })
          // });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(presences);
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

  newPresence: function (req, res) {
    const waktu = new Date().toISOString();
    var request = {
      id: 'P' + new Date(waktu).valueOf().toString(32).toUpperCase(),
      user_id: req.user_id,
      status: req.status,
      created: waktu
    };

    Presences.create(request)
      .then((request) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          // affectedRows: rows.info.affectedRows,
          err: null,
          message: "Presence has been registered successfully.",
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

  updatePresence: function (req, res) {
    if (req.body.status == undefined || req.body.status == "" || req.params.id == undefined || req.params.id == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    Presences.findOneAndUpdate({ id: req.params.id }, {status: req.body.status} )
      .then((presence) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          affectedRows: rows.info.affectedRows,
          err: null,
          message: "Presence has been updated successfully",
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

  deletePresence: function (req, res) {
    if (req.id == undefined || req.id == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    Presences.deleteOne({ id: req.id })
      .then((presence) => {
        if (presence == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "Presence has been deleted successfully",
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

  deletePresenceAll: function (req, res) {
    Presences.deleteMany({})
      .then((presences) => {
        if (presences == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "All Presence has been deleted successfully",
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