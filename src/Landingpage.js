import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import { Switch, Route } from "react-router-dom";
import AddMedicine from "./Components/AddMedicne/AddMedicine";
import RemoveMedicine from "./Components/RemoveMedicine./RemoveMedicine";
import ShowList from "./Components/ShowList/ShowList";
import Report from "./Components/Report";
import Voucher from "./Components/Voucher/Voucher";
import Middlesection from "./Components/Homepage/Middlesection";
import Menubar from "./Components/Homepage/Menubar/Menubar";
import UpdateMedicine from "./Components/UpdateMedicine/UpdateMedicine";
function Landingpage() {
  return (
    <>
      <div className="middle_section">
        <Menubar />

        <Switch>
          <Route exact path="/" component={Middlesection} />
          <Route exact path="/Add" component={AddMedicine} />
          <Route exact path="/Remove" component={RemoveMedicine} />
          <Route exact path="/UpdateMedicine" component={UpdateMedicine} />
          <Route exact path="/ShowList" component={ShowList} />
          <Route exact path="/Report" component={Report} />
          <Route exact path="/Voucher" component={Voucher} />
        </Switch>
        <Homepage />
      </div>
    </>
  );
}

export default Landingpage;
