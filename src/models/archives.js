const Client = require('mariasql');
const c = new Client({
  host: process.env.APP_DATABASE_HOST,
  user: process.env.APP_DATABASE_USER,
  password: process.env.APP_DATABASE_PASSWORD,
  db: process.env.APP_DATABASE_DB
});

module.exports = {

  /////////////////////////////////////////////////////////////////////////////////////////////
  // ARCHIVE MODELS

  getArchiveAll: function (req, res) {
    c.query("SELECT * FROM `archives` ORDER BY `year` DESC", null, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      const col = Object.keys(rows.info.metadata)
      var data = [];
      rows.forEach(function (items) {
        data.push({
          [col[0]]: items[0],
          [col[1]]: items[1],
          [col[2]]: items[2],
          [col[3]]: items[3],
          [col[4]]: items[4],
          [col[5]]: items[5]
        })
      });
      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  getArchive: function (req, res) {
    c.query("SELECT * FROM `archives` WHERE `id`=? ORDER BY `year` DESC", [req.id], { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      const col = Object.keys(rows.info.metadata)
      var data = [];
      rows.forEach(function (items) {
        data.push({
          [col[0]]: items[0],
          [col[1]]: items[1],
          [col[2]]: items[2],
          [col[3]]: items[3],
          [col[4]]: items[4],
          [col[5]]: items[5]
        })
      });
      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  getArchiveType: function (req, res) {
    const request = [req.id.toUpperCase()]
    c.query("SELECT * FROM `archives` WHERE `standard_level_id`=? ORDER BY `year` DESC", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      const col = Object.keys(rows.info.metadata)
      var data = [];
      rows.forEach(function (items) {
        data.push({
          [col[0]]: items[0],
          [col[1]]: items[1],
          [col[2]]: items[2],
          [col[3]]: items[3],
          [col[4]]: items[4],
          [col[5]]: items[5]
        })
      });
      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  getArchiveSearch: function (req, res) {
    const request = ["%" + req.id.toUpperCase() + "%"]
    c.query("SELECT * FROM `archives` WHERE `standard_level_id` LIKE ? ORDER BY `year` DESC", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      const col = Object.keys(rows.info.metadata)
      var data = [];
      rows.forEach(function (items) {
        data.push({
          [col[0]]: items[0],
          [col[1]]: items[1],
          [col[2]]: items[2],
          [col[3]]: items[3],
          [col[4]]: items[4],
          [col[5]]: items[5]
        })
      });
      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  getArchiveSearch2: function (req, res) {
    const request = ["%" + req.id.toUpperCase() + "%", "%" + req.id2.toUpperCase() + "%"]
    c.query("SELECT * FROM `archives` WHERE `standard_level_id` LIKE ? OR `standard_level_id` LIKE ? ORDER BY `year` DESC", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      const col = Object.keys(rows.info.metadata)
      var data = [];
      rows.forEach(function (items) {
        data.push({
          [col[0]]: items[0],
          [col[1]]: items[1],
          [col[2]]: items[2],
          [col[3]]: items[3],
          [col[4]]: items[4],
          [col[5]]: items[5]
        })
      });
      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  getAllArchiveSearch: function (req, res) {
    const request = ["%" + req.id.toUpperCase() + "%", "%" + req.id.toUpperCase() + "%", "%" + req.id.toUpperCase() + "%", "%" + req.id.toUpperCase() + "%", "%" + req.id.toUpperCase() + "%"]
    var data = [];
    c.query("SELECT `id`, `name`, `info` FROM `archives` WHERE `id` LIKE ? OR `name` LIKE ? OR `year` LIKE ? OR `info` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'archives'
        })
      });
    });

    c.query("SELECT c.`id`, c.`test_report_id`, t.`company_name` FROM `certificates` c LEFT JOIN `test_reports` t ON c.`test_report_id`=t.`id` WHERE c.`id` LIKE ? OR c.`test_report_id` LIKE ? OR t.`company_name` LIKE ? OR t.`device_name` LIKE ? OR t.`brand` LIKE ? OR t.`model` LIKE ? OR c.`effective_date` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'certificates'
        })
      });
    });

    c.query("SELECT `id`, `name`, `publisher` FROM `dide` WHERE `id` LIKE ? OR `name` LIKE ? OR `publisher` LIKE ? OR `edition` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'dide'
        })
      });
    });

    c.query("SELECT `document_id`, `name`, `effective_date` FROM `quality_documents` WHERE `id` LIKE ? OR `name` LIKE ? OR `effective_date` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'quality_documents'
        })
      });
    });

    c.query("SELECT `id`, `name`, `form_id` FROM `quality_records` WHERE `id` LIKE ? OR `name` LIKE ? OR `form_id` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'quality_records'
        })
      });
    });

    c.query("SELECT `document_id`, `name`, `version` FROM `test_references` WHERE `id` LIKE ? OR `name` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'test_references'
        })
      });
    });

    c.query("SELECT `id`, `company_name`, `device_name` FROM `test_reports` WHERE `id` LIKE ? OR `company_name` LIKE ? OR `device_name` LIKE ? OR `brand` LIKE ? OR `model` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'test_reports'
        })
      });
    });

    c.query("SELECT `id`, `name`, `trial_date` FROM `trial_reports` WHERE `id` LIKE ? OR `name` LIKE ? OR `trial_date` LIKE ? OR `num_device` LIKE ? OR `num_pass` LIKE ?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      rows.forEach(function (items) {
        data.push({
          id: items[0],
          name: items[1],
          info: items[2],
          table: 'trial_reports'
        })
      });

      if (data.length < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json(data);
      }
    });
    c.end();
  },
  newArchive: function (req, res) {
    var request = [
      req.id,
      req.name,
      req.year,
      req.info,
      req.standard_level_id,
      req.file
    ];
    if (request.includes(undefined) || request.includes("")) {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }
    c.query("INSERT INTO `archives`(`id`, `name`, `year`, `info`, `standard_level_id`, `file`) VALUES (?, ?, ?, ?, ?, ?)", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      res.json({
        affectedRows: rows.info.affectedRows,
        err: null,
        message: "Archive has registered successfully",
        success: true
      });
    });
    c.end();
  },
  updateArchive: function (req, res) {
    var request = [
      req.body.name,
      req.body.year,
      req.body.info,
      req.body.standard_level_id,
      req.body.file,
      req.params.id
    ];
    if (request.includes(undefined) || request.includes("")) {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }
    c.query("UPDATE `archives` SET `name`=?, `year`=?, `info`=?, `standard_level_id`=?, `file`=? WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      res.json({
        affectedRows: rows.info.affectedRows,
        err: null,
        message: "Archive has updated successfully",
        success: true
      });
    });
    c.end();
  },
  deleteArchive: function (req, res) {
    var request = [req.id];
    if (request.includes(undefined) || request.includes("")) {
      res.send({ message: 'Bad Request: Parameters cannot empty.' });
      return
    }
    c.query("DELETE FROM `archives` WHERE `id`=?", request, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }

      if (rows.info.affectedRows < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json({
          affectedRows: rows.info.affectedRows,
          err: null,
          message: "Archive has deleted successfully",
          success: true
        });
      }
    });
    c.end();
  },
  deleteArchiveAll: function (req, res) {
    c.query("DELETE FROM `archives`", null, { metadata: true, useArray: true }, function (err, rows) {
      if (err) {
        res.send({ message: err.message });
        console.log(err);
        return
      }
      console.log(rows.info)
      if (rows.info.affectedRows < 1) {
        res.status(404).send({ message: 'Data not found.' });
      } else {
        res.json({
          affectedRows: rows.info.affectedRows,
          message: "All Archive has deleted successfully :[",
          success: true
        });
      }
    });
    c.end();
  }
}