const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  const medicineName = req.body.medicineName;
  con.query(
    "select * from addmedicinetbl where medicineName=?",
    [medicineName],
    (err, result) => {
      res.send(result);
    }
  );
});

module.exports = router;
