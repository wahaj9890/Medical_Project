const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;

  con.query("insert into purchasetbl set? ", data, (err, result, fields) => {
    res.send(result);
  });
});

module.exports = router;
