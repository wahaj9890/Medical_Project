const tempFunction = function (con, req) {
  const addMedicine = {
    medicineCode: req.body.medicineCodeNum,
    medicineName: req.body.medicineName,
    typeOfMedicine: req.body.typeOfMedicine,
    companyName: req.body.nameOfCompany,
    purchaseQty: req.body.purchaseQty,
    mfgDate: req.body.mfgDate,
    expDate: req.body.expDate,
    medicinePrice: req.body.medicinePrice,
  };
  con.query(
    "insert into addmedicinetbl set? ",
    addMedicine,
    (err, rows, fields) => {
      console.log(rows);
    }
  );
};

module.exports = { tempFunction };
