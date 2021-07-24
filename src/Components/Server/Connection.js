const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
const addMedicine = require("./Modules/addMedicine.js");
const showMedicineList = require("./Modules/showMedicineList");
const getMedicineDetails = require("./Modules/getMedicineDetails");
const getMedicineQuanitity = require("./Modules/getMedicineQuanitity");
const searchName = require("./Modules/searchName");
const fetchPopupDetails = require("./Modules/fetchPopupDetails");
const sellMedicine = require("./Modules/sellMedicine");
const updateMedicine = require("./Modules/updateMedicine");
const addToDb = require("./Modules/addToDb");
const getReport = require("./Modules/getReport");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/addMedicine", addMedicine);
app.use("/showMedicineList", showMedicineList);
app.use("/getMedicineDetails", getMedicineDetails);
app.use("/getMedicineQuantity", getMedicineQuanitity);
app.use("/searchName", searchName);
app.use("/fetchPopupDetails", fetchPopupDetails);
app.use("/sellMedicine", sellMedicine);
app.use("/updateMedicine", updateMedicine);
app.use("/addToDb", addToDb);
app.use("/getReport", getReport);

app.listen(8080, () => {
  console.log("Server listening on 8080");
});
