const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  const medicineCode = req.body.medicineCode;
  con.query(
    "delete from  addmedicinetbl  where medicineCode =?",
    [medicineCode],
    (err, rows, fields) => {
      res.end();
    }
  );
});

module.exports = router;
