import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./ShowList.css";
import axios from "axios";
function ShowList() {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/showMedicineList")

      .then((res) => setShowList(res.data));
  }, []);

  return (
    <div className="container tblContainer">
      <div className="showListTbl">
        <Table striped bordered hover className="showList-table">
          <thead>
            <tr>
              <th>Medicine Code Number</th>
              <th>Medicine Name</th>
              <th>Type of Medicine</th>
              <th>Company Name</th>
              <th>Purchase Quantity</th>
              <th>MFG Date</th>
              <th>Exp Date</th>
              <th>Medicine Cost</th>
            </tr>
          </thead>
          <tbody>
            {showList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["medicineCode"]}</td>
                  <td>{item["medicineName"]}</td>
                  <td>{item["typeOfMedicine"]}</td>
                  <td>{item["CompanyName"]}</td>
                  <td>{item["purchaseQty"]}</td>
                  <td>{item["mfgDate"]}</td>
                  <td>{item["expDate"]}</td>
                  <td>{item["medicinePrice"]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ShowList;
