import React from "react";
import "./Homepage.css";
import Card from "./Menubar/Card";
import Slider from "../Slider/Slider";

const firstObject = {
  phone: "+918421686540",
  desc: "Here is the description",
  btn: "See More",
};
const secontObject = {
  appointment: "Do you wanna take appointment?",
  desc: "Here is the description",
  btn: "See More",
};
const thirdObject = {
  openingHours: "24 Hours",
  Week: "All Days",
  btn: "See More",
};
function Homepage() {
  return (
    <div className="mainContainer">
      <div className="container">
        <Card>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{firstObject.phone}</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{firstObject.desc}</small>
              </p>
              <button type="button" className="btn btn-primary">
                {firstObject.btn}
              </button>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{secontObject.appointment}</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{secontObject.desc}</small>
              </p>
              <button type="button" className="btn btn-primary">
                {secontObject.btn}
              </button>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{thirdObject.openingHours}</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">{thirdObject.Week}</small>
              </p>
              <button type="button" className="btn btn-primary">
                {thirdObject.btn}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Homepage;
