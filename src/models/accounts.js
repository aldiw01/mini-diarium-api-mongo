const Users = require('./users');

module.exports = {

    /////////////////////////////////////////////////////////////////////////////////////////////
    // ACCOUNT MODELS

    cekLogin: function (id, pass, callback) {
        Users.find({ id: id, password: pass })
            .then((users) => {
                var data = [];
                if (users !== null) {
                    users.forEach(function (user) {
                        data.push({
                            id: user.id,
                            name: user.name,
                            role: user.role,
                            email: user.email,
                            photo: user.photo,
                            registered: user.registered,
                            updated: user.updated
                        });
                    });
                }
                callback(err, data);
            }, (err) => {
                res.send({ message: err.message });
                console.log(err);
            })
            .catch((err) => {
                res.send({ message: err.message });
                console.log(err);
            });
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    // FORGOT PASSWORD

    // forgotPassword(req, res, token) {
    //     const expired = new Date().valueOf() + 3 * 60 * 60 * 1000;
    //     const waktu = new Date().toISOString()
    //     var request = [req.email, token, expired, waktu, waktu];
    //     if (request.includes(undefined) || request.includes("")) {
    //         res.send({ message: 'Bad Request: Parameters cannot empty.' });
    //         return
    //     }
    //     c.query("SELECT `name` FROM `users` WHERE `email`=? AND `id` LIKE 'U%'", [req.email], { metadata: true, useArray: true }, function (err, rows) {
    //         if (err) {
    //             res.send({ message: err.message });
    //             console.log(err);
    //             return
    //         }

    //         var data = [];
    //         rows.forEach(function (items) {
    //             data.push({
    //                 name: items[0]
    //             });
    //         });
    //         if (data.length < 1) {
    //             res.send({
    //                 message: "User is not registered",
    //                 success: false
    //             });
    //         } else {
    //             c.query("INSERT INTO `reset_password` (`email`, `token`, `expired`, `status`, `created`, `updated`) VALUES (?, ?, ?, 0, ?, ?)", request, { metadata: true, useArray: true }, function (err, rows) {
    //                 if (err) {
    //                     res.status(500).send({ message: "Error 500: Internal Server Error" });
    //                     console.log(err);
    //                     return
    //                 }

    //                 mailService.sendResetPassword(req.email, data[0].name, token, res);
    //             });
    //         }
    //     });
    //     c.end();
    // },
    // forgotPassword_getToken(req, res) {
    //     c.query("SELECT `email`, `expired`, `status` FROM `reset_password` WHERE `token`=? AND (`status`=0 OR `status`=2)", [req.token], { metadata: true, useArray: true }, function (err, rows) {
    //         if (err) {
    //             res.send({ message: err.message });
    //             console.log(err);
    //             return
    //         }

    //         var data = [];
    //         rows.forEach(function (items) {
    //             data.push({
    //                 email: items[0],
    //                 expired: items[1],
    //                 status: items[2]
    //             });
    //         });
    //         if (data.length < 1) {
    //             res.json({
    //                 message: "Token not found",
    //                 success: false,
    //                 err: null,
    //                 affectedRows: rows.info.affectedRows
    //             });
    //         } else {
    //             res.json(data);
    //         }
    //     });
    //     c.end();
    // },
    // forgotPassword_editPassword: function (req, password, res) {
    //     const waktu = new Date().toISOString();
    //     c.query("UPDATE `users` SET `password`=?, `updated`=? WHERE `email`=? AND `id` LIKE 'U%'", [password, waktu, req.email], { metadata: true, useArray: true }, function (err, rows) {
    //         if (err) {
    //             res.send({ message: err.message });
    //             console.log(err);
    //             return
    //         }
    //         res.json({
    //             message: "Your password has changed successfully",
    //             success: true,
    //             affectedRows: rows.info.affectedRows
    //         });
    //     });
    //     c.query("UPDATE `reset_password` SET `status`=1, `updated`=? WHERE `token`=?", [waktu, req.token], { metadata: true, useArray: true }, function (err, rows) {
    //         if (err) {
    //             res.send({ message: err.message });
    //             console.log(err);
    //             return
    //         }
    //     });

    //     c.end();
    // },

    /////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK REGISTERED

    checkUserRegistered: function (req, res) {
        Users.find({ id: req.id })
            .then((user) => {
                if (user != null) {
                    res.json({
                        success: true,
                        err: null,
                        message: "user already registered"
                    });
                } else {
                    res.json({
                        success: false,
                        err: null,
                        message: "user not registered"
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
}