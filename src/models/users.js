const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const escapeStringRegexp = require('escape-string-regexp');

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 2,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  registered: {
    type: Date,
    required: true
  },
  updated: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;

module.exports = {

  /////////////////////////////////////////////////////////////////////////////////////////////
  // USERS MODELS
  getUserAll: function (req, res) {
    Users.find({})
      .then((users) => {
        if (users == null) {
          res.status(404).send({ message: 'Data not found. (mongo)' });
        } else {
          // var data = [];
          // users.forEach(function (user) {
          //   data.push({
          //     id: user.id,
          //     name: user.name,
          //     // password: user.password,
          //     role: user.role,
          //     email: user.email,
          //     photo: user.photo,
          //     registered: user.registered,
          //     updated: user.updated
          //   });
          // });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },
  getUser: function (req, res) {
    Users.find({ id: req.id }).
      then((users) => {
        if (users == null) {
          res.status(404).send({ message: 'Data not found.' });
        } else {
          // var data = [];
          // users.forEach(function (user) {
          //   data.push({
          //     id: user.id,
          //     name: user.name,
          //     // password: user.password,
          //     role: user.role,
          //     email: user.email,
          //     photo: user.photo,
          //     registered: user.registered,
          //     updated: user.updated
          //   });
          // });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },
  //   getUserRole: function (req, res) {
  //     c.query("SELECT * FROM `users` WHERE `role`=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }

  //       var data = [];
  //       rows.forEach(function (items) {
  //         data.push({
  //           id: items[0],
  //           name: items[1],
  //           // password: items[2],
  //           role: items[3],
  //           email: items[4],
  //           photo: items[5],
  //           registered: items[6],
  //           updated: items[7]
  //         });
  //       });
  //       if (data.length < 1) {
  //         res.status(404).send('Data not found.');
  //       } else {
  //         res.json(data);
  //       }
  //     });
  //     c.end();
  //   },
  getUserSearch: function (req, res) {
    const $regex = escapeStringRegexp(req.id);
    Users.find(
      { $or: [{ id: { $regex } }, { name: { $regex } }] }
    )
      .then((users) => {
        if (users == null) {
          res.status(404).send({ message: 'Data not found. (mongo)' });
        } else {
          var data = [];
          users.forEach(function (user) {
            data.push({
              id: user.id,
              name: user.name,
              // password: user.password,
              role: user.role,
              email: user.email,
              photo: user.photo,
              registered: user.registered,
              updated: user.updated
            });
          });
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(data);
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  newUser: function (req, password, res) {
    const waktu = new Date().toISOString();
    var request = {
      id: req.id,
      name: req.name,
      password: password,
      role: '2',
      email: req.email,
      photo: '',
      registered: waktu,
      updated: waktu
    };

    Users.create(request)
      .then(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
          //affectedRows: rows.info.affectedRows,
          err: null,
          message: "User has been registered successfully.",
          success: true
        });
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updateUser: function (req, res) {
    if (req.body.name == undefined || req.body.name == "" || req.body.email == undefined || req.body.email == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    const waktu = new Date().toISOString();
    const request = {
      name: req.body.name,
      email: req.body.email,
      updated: waktu
    };
    Users.findOneAndUpdate({ id: req.params.id }, request/* , {new: true} */)
      .then((user) => {
        if (user == null) {
          res.status(404).send({ message: 'Data not found. (mongo)' });
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "User has updated successfully",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },

  updateUserPassword: function (req, res) {
    if (req.params.id == undefined || req.params.id == "" || req.body.password_old == undefined || req.body.password_old == "" || req.body.password == null || req.body.password == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    const request1 = {
      id: req.params.id,
      password: req.body.password_old
    };

    const waktu = new Date().toISOString();

    const request2 = {
      password: req.body.password,
      updated: waktu
    };

    Users.findOneAndUpdate(request1, request2)
      .then((user) => {
        if (user == null) {
          res.send({ message: "Password is incorrect, please try again." });
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "Password has been updated successfully",
            success: true
          });
        }
      },(err) => {
        res.send({ message: err.message });
        console.log(err);
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });


    // if (request1.includes(undefined) || request2.includes(undefined)) {
    //   res.send({ message: 'Bad Request: Parameters cannot empty.' });
    //   return
    // }

  },
  //   updateUserRole: function (req, res) {
  //     const waktu = new Date().toISOString();
  //     var request = [
  //       req.body.role,
  //       waktu,
  //       req.params.id
  //     ];
  //     if (request.includes(undefined)) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("UPDATE `users` SET `role`=?, `updated`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }

  //       res.json({
  //         affectedRows: rows.info.affectedRows,
  //         err: null,
  //         message: "User Role has updated successfully",
  //         success: true
  //       });
  //     });
  //     c.end();
  //   },
  updateUserPhoto: function (req, res) {
    if (req.body.photo == undefined || req.body.photo == "" || req.params.id == undefined || req.params.id == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }

    const waktu = new Date().toISOString();
    var request = {
      photo: req.body.photo,
      updated: waktu
    };

    Users.findOneAndUpdate({ id: req.params.id }, request)
      .then((user) => {
        if (user == null) {
          res.send({ message: 'Data not found.' });
        } else {
          res.json({
            affectedRows: rows.info.affectedRows,
            err: null,
            message: "Profile photo has updated successfully",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },
  //   deactivateUser: function (req, res) {
  //     const waktu = new Date().toISOString();
  //     var request = [
  //       waktu,
  //       req.id
  //     ];
  //     if (request.includes(undefined) || request.includes("")) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("UPDATE `users` SET `status`='9', `updated`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }

  //       if (rows.info.affectedRows < 1) {
  //         res.status(404).send({ message: 'Data not found.' });
  //       } else {
  //         res.json({
  //           affectedRows: rows.info.affectedRows,
  //           err: null,
  //           message: "User has deactivate successfully",
  //           success: true
  //         });
  //       }
  //     });
  //     c.end();
  //   },
  deleteUser: function (req, res) {
    if (req.id == undefined || req.id == "") {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }
    Users.deleteOne({ id: req.id })
      .then((user) => {
        if (user == null) {
          res.send({ message: 'Data not found.' });
        } else {
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "User has been deleted successfully.",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  },
  deleteUserAll: function (req, res) {
    Users.deleteMany({})
      .then((users) => {
        if (users == null) {
          res.send({ message: 'Data not found.' });
        } else {
          res.json({
            // affectedRows: rows.info.affectedRows,
            err: null,
            message: "All User has been deleted successfully.",
            success: true
          });
        }
      }, (err) => {
        res.send({ message: err.message });
        console.log(err)
      })
      .catch((err) => {
        res.send({ message: err.message });
        console.log(err);
      });
  }
}