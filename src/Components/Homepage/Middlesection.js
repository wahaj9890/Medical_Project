import React from "react";
import Homepage from "../Homepage/Homepage";
import { Switch, Route, Link } from "react-router-dom";
import AddMedicine from "../AddMedicne/AddMedicine";
import RemoveMedicine from "../RemoveMedicine./RemoveMedicine";
import ShowList from "../ShowList/ShowList";
import Logout from "../Logout/Logout";
import Voucher from "../Voucher/Voucher";
import "./Middlesection.css";
import Menubar from "./Menubar/Menubar";
import Slider from "../../Components/Slider/Slider";

function Middlesection() {
  return (
    <div className="tblContainer">
      <Slider />
    </div>
  );
}

export default Middlesection;
