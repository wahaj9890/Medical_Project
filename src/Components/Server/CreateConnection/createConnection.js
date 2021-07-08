const mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 8111,
  password: "",
  database: "medicaldb",
});
con.connect((error) => {
  if (!error) {
    console.log("Connection Successful");
  }
});

module.exports = con;
