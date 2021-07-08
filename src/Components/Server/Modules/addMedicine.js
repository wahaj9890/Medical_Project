const express = require("express");
const router = express.Router();
const { tempFunction } = require("../addModule");
const con = require("../CreateConnection/createConnection");

router.post("/", (req, res) => {
  tempFunction(con, req);
  res.end();
});

module.exports = router;
