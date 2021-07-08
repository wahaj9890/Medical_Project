const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  const purchaseQty = req.body.quantity;
  const medicineCode = req.body.medicineCode;
  con.query(
    "update addmedicinetbl set purchaseQty=? where medicineCode =?",
    [purchaseQty, medicineCode],
    (err, rows, fields) => {
      res.end();
    }
  );
});

module.exports = router;
