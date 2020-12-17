const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Roles = require('./roles~');

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
  role_id: { //tambahan referensi ke model Roles
    type: { type: Schema.Types.ObjectId, ref: "Roles"}
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
    Users.find({}).populate('role_id')
      .then((users) => {
        if (Object.entries(users).length < 1) {
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
  getUser: function (req, res) {
    var aUser = {};
    Users.find({ id: req.id }).
      then((user) => {
        if (Object.entries(user).length < 1) {
          res.status(404).send({ message: 'Data not found. (mongo)' });
        } else {
          aUser = {
            id: user.id,
            name: user.id,
            role_id: user.role,
            email: user.email,
            photo: user.photo,
            registered: user.registered,
            updated: user.updated
          };
        }
      })
      .then(() => {
        Roles.find({ id: aUser.role_id })
          .then((role) => {
            aUser.role = role.name;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(aUser);
          })
          .catch((err) => {
            res.send({ message: err.message });
            console.log(err);
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
  //   getUserSearch: function (req, res) {
  //     var request = ["%" + req.id + "%", "%" + req.id + "%"];
  //     c.query("SELECT * FROM `users` WHERE `id` LIKE ? OR `name` LIKE ? ORDER BY `role`", request, { metadata: true, useArray: true }, function (err, rows) {
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
  newUser: function (req, password, res) {
    // if (req.id === undefined || req.name === undefined || req.password === undefined || req.email === undefined) {
    //   res.send({ message: 'Bad Request: Parameters cannot empty.' });
    //   return
    // }

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

    Users.insertMany([request])
      .then(() => {
        res.json({
          //affectedRows: rows.info.affectedRows,
          err: null,
          message: "User has been registered successfully! (mongo)",
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
  }
  //   ,
  //   updateUser: function (req, res) {
  //     const waktu = new Date().toISOString();
  //     var request = [
  //       req.body.name,
  //       req.body.email,
  //       waktu,
  //       req.params.id
  //     ];
  //     if (request.includes(undefined)) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("UPDATE `users` SET `name`=?, `email`=?, `updated`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }

  //       res.json({
  //         affectedRows: rows.info.affectedRows,
  //         err: null,
  //         message: "User has updated successfully",
  //         success: true
  //       });
  //     });
  //     c.end();
  //   },
  //   updateUserPassword: function (req, res) {
  //     const waktu = new Date().toISOString();
  //     var request1 = [
  //       req.params.id,
  //       req.body.password_old
  //     ];
  //     var request2 = [
  //       req.body.password,
  //       waktu,
  //       req.params.id
  //     ];
  //     if (request1.includes(undefined) || request2.includes(undefined)) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("SELECT * FROM `users` WHERE `id`=? AND `password`=?", request1, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }
  //       if (rows.length < 1) {
  //         res.send({ message: "Password is incorrect, please try again." });
  //       } else {
  //         c.query("UPDATE `users` SET `password`=?, `updated`=? WHERE `id`=?", request2, { metadata: true, useArray: true }, function (err, rows) {
  //           if (err) {
  //             res.send({ message: err.message });
  //             console.log(err);
  //             return
  //           }

  //           res.json({
  //             affectedRows: rows.info.affectedRows,
  //             err: null,
  //             message: "User Password has updated successfully",
  //             success: true
  //           });
  //         });
  //       }
  //     });
  //     c.end();
  //   },
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
  //   updateUserPhoto: function (req, res) {
  //     const waktu = new Date().toISOString();
  //     var request = [
  //       req.body.photo,
  //       waktu,
  //       req.params.id
  //     ];
  //     if (request.includes(undefined) || request.includes("")) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("UPDATE `users` SET `photo`=?, `updated`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }

  //       res.json({
  //         affectedRows: rows.info.affectedRows,
  //         err: null,
  //         message: "Profile photo has updated successfully",
  //         success: true
  //       });
  //     });
  //     c.end();
  //   },
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
  //   deleteUser: function (req, res) {
  //     var request = [req.id];
  //     if (request.includes(undefined) || request.includes("")) {
  //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
  //       return
  //     }
  //     c.query("DELETE FROM `users` WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
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
  //           message: "User has deleted successfully",
  //           success: true
  //         });
  //       }
  //     });
  //     c.end();
  //   },
  //   deleteUserAll: function (req, res) {
  //     c.query("DELETE FROM `users`", null, { metadata: true, useArray: true }, function (err, rows) {
  //       if (err) {
  //         res.send({ message: err.message });
  //         console.log(err);
  //         return
  //       }
  //       console.log(rows.info)
  //       if (rows.info.affectedRows < 1) {
  //         res.status(404).send({ message: 'Data not found.' });
  //       } else {
  //         res.json({
  //           affectedRows: rows.info.affectedRows,
  //           message: "All User has deleted successfully :[",
  //           success: true
  //         });
  //       }
  //     });
  //     c.end();
  //   }
}