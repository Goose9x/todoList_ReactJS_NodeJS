const db = require("../models/db");
const bcrypt = require("bcrypt");
const { copyFileSync } = require("fs");

module.exports.renderAll = (req, res) => {
  db.execute("SELECT * FROM listtodo")
    .then((data) => {
      res.status(200).json({
        message: data[0],
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      });
    });
};

module.exports.renderOneList = (req, res) => {
  let id = req.params.id;
  db.execute("SELECT * FROM listtodo WHERE id = ?", [id]).then((data) => {
    res
      .status(200)
      .json({
        message: data[0],
      })
      .catch((err) => {
        res.status(400).json({
          message: err,
        });
      });
  });
};
module.exports.createOneList = (req, res) => {
  let { id, title, completed, userId } = req.body;
  db.execute("SELECT * FROM listtodo WHERE title = ?", [title]).then((data) => {
    if (data[0].length !== 0) {
      res.status(200).json({
        message: "Todo already existed",
      });
    } else {
      db.execute("INSERT INTO listtodo VALUE (?,?,?,?)", [
        id,
        title,
        completed,
        userId,
      ])
        .then((data) => {
          res.status(200).json({
            message: "Create sucessfully",
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    }
  });
};
module.exports.updateOneListById = (req, res) => {
  let id = req.params.id;
  let { title, completed, userId } = req.body;
  db.execute("SELECT * FROM listtodo WHERE id = ?", [id]).then((data) => {
    console.log(data[0]);
    if (data[0].length === 0) {
      res.status(200).json({
        message: "Todo not found",
      });
    } else {
      db.execute(
        "UPDATE listtodo SET title = ?, completed = ?, userId = ? WHERE id = ?",
        [title, completed, userId, id]
      )
        .then((data) => {
          res.status(200).json({
            message: "Update oke",
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    }
  });
};
module.exports.deleteOneListById = (req, res) => {
  let id = req.params.id;
  db.execute("SELECT * FROM listtodo WHERE id = ?", [id]).then((data) => {
    if (data[0].length === 0) {
      res.status(200).json({
        message: "Todo not found",
      });
    } else {
      db.execute("DELETE FROM listtodo WHERE id = ?", [id])
        .then((data) => {
          res.status(200).json({
            message: "Delete oke",
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: err,
          });
        });
    }
  });
};
