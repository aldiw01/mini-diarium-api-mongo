const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1,
        required: true
    },
    created: {
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

const Activities = mongoose.model('Activity', activitySchema);

module.exports = {

    /////////////////////////////////////////////////////////////////////////////////////////////
    // ACTIVITY MODELS

    getActivityAll: function (req, res) {
        Activities.find({}).sort({ created: 'desc' })
            .then((activities) => {
                if (activities == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(activities);
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

    getActivity: function (req, res) {
        Activities.find({ id: req.id })
            .then((activity) => {
                if (activity == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(activity);
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

    getActivityUser: function (req, res) {
        Activities.find({ user_id: req.id }).sort({ created: 'desc' })
            .then((activities) => {
                if (activities == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(activities);
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

    getActivityType: function (req, res) {
        Activities.find({ user_id: req.id, status: req.status }).sort({ created: 'desc' })
            .then((activities) => {
                if (activities == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(activities);
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

    getActivityTypeExcept: function (req, res) {

        Activities.find({ user_id: req.id, status: { $ne: req.status } }).sort({ created: 'desc' })
            .then((activities) => {
                if (activities == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(activities);
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

    newActivity: function (req, res) {
        const waktu = new Date().toISOString();
        const request = {
            id: 'A' + new Date(waktu).valueOf().toString(32).toUpperCase(),
            user_id: req.user_id,
            name: req.name,
            status: req.status,
            created: waktu,
            updated: waktu
        };

        Activities.create(request)
            .then(() => {
                res.json({
                    // affectedRows: rows.info.affectedRows,
                    err: null,
                    message: "Activity has been registered successfully.",
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
    updateActivity: function (req, res) {
        if (req.body.name == undefined || req.body.name == "" || req.body.status == undefined || req.body.status == "" || req.params.id == undefined || req.params.id == "") {
            res.send({ message: 'Bad Request: Parameters cannot empty.' });
            return
        }
        const waktu = new Date().toISOString();
        const request = {
            name: req.body.name,
            status: req.body.status,
            updated: waktu
        };

        Activities.updateOne({ id: req.params.id }, request)
            .then(() => {
                res.json({
                    // affectedRows: rows.info.affectedRows,
                    err: null,
                    message: "Activity has been updated successfully.",
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
    deleteActivity: function (req, res) {
        if (req.id === undefined || req.id === "") {
            res.send({ message: 'Bad Request: Parameters cannot empty.' });
            return
        }
        Activities.deleteOne({ id: req.id })
            .then((activity) => {
                if (activity == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.json({
                        // affectedRows: rows.info.affectedRows,
                        err: null,
                        message: "Activity has been deleted successfully.",
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
    deleteActivityAll: function (req, res) {
        Activities.deleteMany({})
            .then(() => {
                if (activity == null) {
                    res.status(404).send({ message: 'Data not found.' });
                } else {
                    res.json({
                        //affectedRows: rows.info.affectedRows,
                        message: "All Activity has been deleted successfully.",
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