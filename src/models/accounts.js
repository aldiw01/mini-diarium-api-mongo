const db = require('./users');
const Users = db.UsersMod;

module.exports = {

    /////////////////////////////////////////////////////////////////////////////////////////////
    // ACCOUNT MODELS

    cekLogin: function (id, pass, callback) {
        Users.find({ id: id, password: pass }, (err, user) => {
            if (err) {
                res.send({ message: err.message });
                console.log(err);
                return
            }
            callback(err, user);
        });
    },

    /////////////////////////////////////////////////////////////////////////////////////////////
    // CHECK REGISTERED

    checkUserRegistered: function (req, res) {
        Users.find({ id: req.id })
            .then((user) => {
                // console.log(user);
                if (user.length === 1) {
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