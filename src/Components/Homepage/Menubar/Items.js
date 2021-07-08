import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";

function Items() {
  return (
    <ul className="menuItem">
      <div className="dba">
        <li>
          <p className="dbaClass">DBA Operation</p>
          <div className="dba_dropDown">
            <Link to="/Add" className="dropDownLink">
              Add Medicine
            </Link>
            <Link to="/Remove" className="dropDownLink">
              Remove Medicine
            </Link>
            {/* <Link to="/ShowList">Show List</Link> */}
            <Link to="/UpdateMedicine" className="dropDownLink">
              Update Medicine
            </Link>
          </div>
        </li>
      </div>
      <li>
        <Link to="/Voucher">Voucher</Link>
      </li>
      <li>
        <Link to="/ShowList">Medicine List</Link>
      </li>
      <li>
        <Link to="/Logout">Logout/Exit</Link>
      </li>
    </ul>
  );
}

export default Items;
