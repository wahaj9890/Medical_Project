import React from "react";
import "./Menubar.css";
import Items from "./Items";

function Menubar() {
  return (
    <div className="header">
      <div>
        <h2>Medicare</h2>
      </div>
      <Items />
    </div>
  );
}
export default Menubar;
