import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./ShowList/ShowList";
import axios from "axios";
function ShowList() {
  const [report, setReport] = useState([]);
  const [filter, setFilter] = useState("All");
  const getReport = async (filter) => {
    const response = await axios.post("http://localhost:8080/getReport", {
      filter,
    });

    setReport(response.data);
  };
  useEffect(() => {
    getReport(filter);
  }, []);

  //filter
  const filterChangerHandler = (e) => {
    setFilter(e.target.value);
    getReport(e.target.value);
  };

  return (
    <div className="container tblContainer">
      <div>
        <label>Filter</label>
        <select
          value={filter}
          onChange={(e) => {
            filterChangerHandler(e);
          }}
        >
          <option value="All">All</option>
          <option value="lastMonth">Last Month</option>
          <option value="today">Today</option>
        </select>
      </div>
      <div className="showListTbl">
        <Table striped bordered hover className="showList-table">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Customer Name</th>
              <th>Customer Age</th>
              <th>Customer Gender</th>
              <th>Customer Address</th>
              <th>Customer Phone</th>
              <th>Precise Doctor</th>
              <th>Customer Date</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {report.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["invoiceNumber"]}</td>
                  <td>{item["customerName"]}</td>
                  <td>{item["customerAge"]}</td>
                  <td>{item["customerGender"]}</td>
                  <td>{item["customerAddress"]}</td>
                  <td>{item["customerDr"]}</td>
                  <td>{item["customerPhone"]}</td>
                  <td>{item["customerDate"]}</td>
                  <td>{item["totalBill"]}</td>
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
