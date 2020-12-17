const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Roles = mongoose.model('Role', roleSchema);

module.exports = Roles;

module.exports = {

    /////////////////////////////////////////////////////////////////////////////////////////////
    // ROLE MODELS

    getRoleAll: function (req, res) {
        Roles.find({})
            .then((roles) => {
                if (Object.entries(roles).length < 1) {
                    res.status(404).send({ message: 'Data not found. (mongo)' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(roles);
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
    //   getRole: function (req, res) {
    //     c.query("SELECT * FROM `roles` WHERE id=?", [req.id], { metadata: true, useArray: true }, function (err, rows) {
    //       if (err) {
    //         res.send({ message: err.message });
    //         console.log(err);
    //         return
    //       }

    //       const col = Object.keys(rows.info.metadata)
    //       var data = [];
    //       rows.forEach(function (items) {
    //         data.push({
    //           [col[0]]: items[0],
    //           [col[1]]: items[1]
    //         })
    //       });
    //       if (data.length < 1) {
    //         res.status(404).send({ message: 'Data not found.' });
    //       } else {
    //         res.json(data);
    //       }
    //     });
    //     c.end();
    //   },
    newRole: function (req, res) {
        Roles.insertMany({ id: req.id, name: req.name })
            .then(
                res.json({
                    // affectedRows: rows.info.affectedRows,
                    err: null,
                    message: "Role has been registered successfully",
                    success: true
                })
            )
            .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
            });
    },
    //   updateRole: function (req, res) {
    //     var request = [
    //       req.body.name,
    //       req.params.id
    //     ];
    //     if (request.includes(undefined) || request.includes("")) {
    //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
    //       return
    //     }
    //     c.query("UPDATE `roles` SET `name`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
    //       if (err) {
    //         res.send({ message: err.message });
    //         console.log(err);
    //         return
    //       }

    //       res.json({
    //         affectedRows: rows.info.affectedRows,
    //         err: null,
    //         message: "Role has updated successfully",
    //         success: true
    //       });
    //     });
    //     c.end();
    //   },
    //   deleteRole: function (req, res) {
    //     var request = [req.id];
    //     if (request.includes(undefined) || request.includes("")) {
    //       res.send({ message: 'Bad Request: Parameters cannot empty.' });
    //       return
    //     }
    //     c.query("DELETE FROM `roles` WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
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
    //           message: "Role has deleted successfully",
    //           success: true
    //         });
    //       }
    //     });
    //     c.end();
    //   },
    //   deleteRoleAll: function (req, res) {
    //     c.query("DELETE FROM `roles`", null, { metadata: true, useArray: true }, function (err, rows) {
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
    //           message: "All Role has deleted successfully :[",
    //           success: true
    //         });
    //       }
    //     });
    //     c.end();
    //   }
}