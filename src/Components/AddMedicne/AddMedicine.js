import React, { useState, useEffect, useReducer } from "react";
import "./AddMedicine.css";
import axios from "axios";

const initialState = {
  medicineCodeNum: "",
  medicineName: "",
  typeOfMedicine: "",
  nameOfCompany: "",
  purchaseQty: "",
  mfgDate: "",
  expDate: "",
  medicinePrice: "",
};
function AddMedicine() {
  const [addMedicine, setAddMedicine] = useState(initialState);

  const onInputChange = (e) => {
    setAddMedicine({ ...addMedicine, [e.target.name]: e.target.value });
  };

  const submitMedicineDate = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:8080/addMedicine", addMedicine);
    setAddMedicine(initialState);
    alert("Success");
  };
  //randomNumber
  let val;
  const func = () => {
    val = Math.floor(1000 + Math.random() * 9000);
  };

  return (
    <div className="addImg">
      <form
        action=""
        method="post"
        onSubmit={(e) => submitMedicineDate(e)}
        className="addMedicine-form"
      >
        <label htmlFor="medicineCodeNum" className="addMedicine-label">
          MEDICINE CODE NUMBER
        </label>
        <input
          type="text"
          className="addMedicine-input"
          name="medicineCodeNum"
          // value={addMedicine.medicineCodeNum}
          value={val}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="medicineName" className="addMedicine-label">
          MEDICINE NAME
        </label>
        <input
          type="text"
          className="addMedicine-input"
          name="medicineName"
          value={addMedicine.medicineName}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="typeOfMedicine" className="addMedicine-label">
          TYPE OF MEDICINE
        </label>
        <select
          className="addMedicine-input"
          value={addMedicine.typeOfMedicine}
          name="typeOfMedicine"
          onChange={(e) => onInputChange(e)}
        >
          <option value="tablet">TABLET</option>
          <option value="syrup">SYRUP</option>
          <option value="xyz">XYZ</option>
        </select>
        <label htmlFor="nameOfCompany" className="addMedicine-label">
          COMPANY / MFG NAME
        </label>
        <input
          type="text"
          className="addMedicine-input"
          name="nameOfCompany"
          value={addMedicine.nameOfCompany}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="purchaseQty" className="addMedicine-label">
          PURCHASE QUANTITY
        </label>
        <input
          type="text"
          className="addMedicine-input"
          name="purchaseQty"
          value={addMedicine.purchaseQty}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="mfgDate" className="addMedicine-label">
          ENTER MFG DATE
        </label>
        <input
          type="date"
          className="addMedicine-input"
          name="mfgDate"
          value={addMedicine.mfgDate}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="expDate" className="addMedicine-label">
          ENTER EXPIRY DATE
        </label>
        <input
          type="date"
          className="addMedicine-input"
          name="expDate"
          value={addMedicine.expDate}
          onChange={(e) => onInputChange(e)}
        />
        <label htmlFor="medicinePrice" className="addMedicine-label">
          MEDICINE PRICE or RATE
        </label>
        <input
          type="text"
          className="addMedicine-input"
          name="medicinePrice"
          value={addMedicine.medicinePrice}
          onChange={(e) => onInputChange(e)}
        />
        <div className="addMedicine-buttons">
          <button type="submit" className="addMedicine-btn" onClick={func}>
            ADD
          </button>
          <button type="button" className="addMedicine-btn">
            EXIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMedicine;
