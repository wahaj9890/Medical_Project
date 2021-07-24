const express = require("express");
const con = require("../CreateConnection/createConnection");
const router = express.Router();

router.post("/", (req, res) => {
  let query;
  const { filter } = req.body;

  if (filter === "lastMonth") {
    query =
      "select * from purchasetbl where month(customerDate)=month(now())-1";
  } else if (filter === "today") {
    let currentDate = new Date();
    const todayDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();

    query = `select * from purchasetbl where customerDate = '${todayDate}'`;
  } else if (filter === "All") {
    query = `Select * from purchasetbl`;
  }
  con.query(query, (err, rows, fields) => {
    res.send(rows);
  });
});

module.exports = router;
