const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.get("/", (req, res) => {
  con.query("select medicineName from addmedicinetbl", (err, result) => {
    res.send(result);
  });
});

module.exports = router;
