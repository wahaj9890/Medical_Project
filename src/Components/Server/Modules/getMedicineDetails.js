const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  const codeNumber = req.body.codeNumber;
  con.query(
    "select medicineCode,medicineName,typeOfMedicine,purchaseQty,companyName from addmedicinetbl where medicineCode=?",
    [codeNumber],
    (err, rows, fields) => {
      if (err) {
      } else {
        res.send(rows);
      }
    }
  );
});

module.exports = router;
