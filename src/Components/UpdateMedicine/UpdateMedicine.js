import React, { useState, useEffect } from "react";
import "../RemoveMedicine./RemoveMedicine.css";
import axios from "axios";

const initialValues = [
  {
    medicineCode: "",
    medicineName: "",
    typeOfMedicine: "",
    companyName: "",
    purchaseQty: "",
  },
];

function UpdateMedicine() {
  const [codeNumber, setCodeNumber] = useState("");
  const [getDetail, setGetDetail] = useState(initialValues);
  const [getQuantity, setGetQuantity] = useState("");

  const getData = async () => {
    await axios.get("http://localhost:8080/getMedicineDetails").then((res) => {
      setGetDetail(res.data);
    });
  };
  const fetchData = async () => {
    const data = { codeNumber: codeNumber };
    await axios
      .post("http://localhost:8080/getMedicineDetails", data)
      .then((res) => {
        setGetDetail(res.data);
      });
  };

  const updateMedicine = async (e) => {
    e.preventDefault();
    const tempUpdateQty = parseInt(getDetail[0].purchaseQty);
    if (parseInt(getQuantity) > 0) {
      const updateQty = tempUpdateQty + parseInt(getQuantity);
      const data = {
        quantity: updateQty,
        medicineCode: getDetail[0].medicineCode,
      };
      await axios.post("http://localhost:8080/updateMedicine", data);
      alert("Quantity Updated");
      setGetDetail(initialValues);
      setCodeNumber("");
      setGetQuantity("");
    } else {
      alert("Please Enter Quantity");
    }
  };
  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          updateMedicine(e);
        }}
        method="post"
        className="removeMedicine-form"
      >
        <label htmlFor="medicineCode" className="removeMedicine-label">
          MEDICINE CODE NUMBER
        </label>
        <input
          type="text"
          value={codeNumber}
          className="removeMedicine-input"
          onChange={(e) => {
            setCodeNumber(e.target.value);
          }}
        />
        <label htmlFor="medicineName" className="removeMedicine-label">
          MEDICINE NAME
        </label>
        <input
          type="text"
          className="removeMedicine-input"
          value={getDetail[0].medicineName}
          readOnly
        />
        <label htmlFor="medicineCode" className="removeMedicine-label">
          TYPE OF MEDICINE
        </label>
        <select
          value={getDetail[0].typeOfMedicine}
          className="removeMedicine-input"
          readOnly
        >
          <option value="tablet">TABLET</option>
          <option value="syrup">SYRUP</option>
          <option value="xyz">XYZ</option>
        </select>
        <label htmlFor="medicineComp" className="removeMedicine-label">
          COMPANY / MFG NAME
        </label>
        <input
          type="text"
          value={getDetail[0].companyName}
          className="removeMedicine-input"
          readOnly
        />
        <label htmlFor="medicineQty" className="removeMedicine-label">
          Enter Quantity
        </label>
        <input
          type="text"
          value={getQuantity}
          onChange={(e) => {
            setGetQuantity(e.target.value);
          }}
          className="removeMedicine-input"
        />

        <div className="removeMedicine-buttons">
          {getDetail[0].medicineName != "" && (
            <button type="submit" className="removeMedicine-btn">
              UPDATE
            </button>
          )}
          <button
            type="button"
            className="removeMedicine-btn"
            onClick={fetchData}
            readOnly
          >
            GET
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateMedicine;
