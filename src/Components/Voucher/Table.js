import React from "react";

function Table() {
  return (
    <div>
      <table className="voucherTbl">
        <thead>
          <tr>
            <th className="tblHeading">Medicine Code</th>
            <th className="tblHeading">Medicine Name</th>
            <th className="tblHeading">Type of Medicine </th>
            <th className="tblHeading">Expiry Date</th>
            <th className="tblHeading">Price </th>
            <th className="tblHeading">Insert Quantity</th>
          </tr>
        </thead>

        <tr>
          <td className="tblData sepreteTd">101</td>
          <td className="tblData">Crocine</td>
          <td className="tblData">Tablet</td>
          <td className="tblData">02-12-2022</td>
          <td className="tblData">120</td>
          <td className="tblData">100</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
